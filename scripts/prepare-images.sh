#!/bin/bash
# Prepare project images for the website
# Copies, converts, normalizes and optimizes images from reference folder

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
SOURCE_DIR="$PROJECT_ROOT/new-site-reference/IMAGENS"
TARGET_DIR="$PROJECT_ROOT/public/images/projects"

# Map source folder names to slugs
declare -A FOLDER_MAP=(
  ["CASA 3M"]="casa-3m"
  ["CASA BRM"]="casa-brm"
  ["CASA DBC"]="casa-dbc"
  ["CASA ITÁLIA"]="casa-italia"
  ["CASA LIVING"]="casa-living"
  ["CASA PACAEMBU"]="casa-pacaembu"
  ["CASA VARANDA"]="casa-varanda"
  ["RDJ HOME"]="rdj-house"
  ["CASA REN"]="casa-ren"
)

# Files to skip (videos, duplicates, non-project files)
SKIP_PATTERNS=(
  "*.mp4"
  "*.MP4"
  "IMG_1485 (1).HEIC"  # duplicate of IMG_1485.HEIC
  "Casa OLP*"          # different project mixed into CASA ITALIA folder
)

should_skip() {
  local filename="$1"
  for pattern in "${SKIP_PATTERNS[@]}"; do
    if [[ "$filename" == $pattern ]]; then
      return 0
    fi
  done
  return 1
}

process_image() {
  local src="$1"
  local dst="$2"
  local ext="${src##*.}"
  ext="${ext,,}"  # lowercase

  if [[ "$ext" == "heic" ]]; then
    echo "  Converting HEIC: $(basename "$src")"
    magick "$src" -resize "2400x2400>" -quality 85 "$dst"
  elif [[ "$ext" == "png" ]]; then
    echo "  Converting PNG→JPG: $(basename "$src")"
    magick "$src" -resize "2400x2400>" -quality 85 "$dst"
  elif [[ "$ext" == "webp" ]]; then
    echo "  Converting WebP→JPG: $(basename "$src")"
    magick "$src" -resize "2400x2400>" -quality 85 "$dst"
  else
    echo "  Optimizing: $(basename "$src")"
    magick "$src" -resize "2400x2400>" -quality 85 "$dst"
  fi
}

echo "=== Preparing project images ==="
echo "Source: $SOURCE_DIR"
echo "Target: $TARGET_DIR"
echo ""

# Clean existing project subdirs (but keep the directory itself)
for slug in "${FOLDER_MAP[@]}"; do
  rm -rf "$TARGET_DIR/$slug"
  mkdir -p "$TARGET_DIR/$slug"
done

# Also clean old top-level RDJ images
rm -f "$TARGET_DIR/rdj-1.jpg" "$TARGET_DIR/rdj-2.jpg" "$TARGET_DIR/rdj-6.jpg" "$TARGET_DIR/rdj-7.jpg"

for folder in "${!FOLDER_MAP[@]}"; do
  slug="${FOLDER_MAP[$folder]}"
  src_dir="$SOURCE_DIR/$folder"
  dst_dir="$TARGET_DIR/$slug"

  if [[ ! -d "$src_dir" ]]; then
    echo "WARNING: Source directory not found: $src_dir"
    continue
  fi

  echo "Processing: $folder → $slug"

  counter=1
  # Sort files for deterministic ordering
  while IFS= read -r -d '' file; do
    filename="$(basename "$file")"

    if should_skip "$filename"; then
      echo "  Skipping: $filename"
      continue
    fi

    # Generate sequential filename
    dst_file="$dst_dir/$(printf '%02d' $counter).jpg"

    process_image "$file" "$dst_file"
    ((counter++))
  done < <(find "$src_dir" -maxdepth 1 -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.webp" -o -iname "*.heic" \) -print0 | sort -z)

  echo "  → $((counter - 1)) images processed"
  echo ""
done

echo "=== Done! ==="
echo "Total images per project:"
for slug in $(echo "${FOLDER_MAP[@]}" | tr ' ' '\n' | sort); do
  count=$(ls -1 "$TARGET_DIR/$slug/"*.jpg 2>/dev/null | wc -l)
  echo "  $slug: $count"
done

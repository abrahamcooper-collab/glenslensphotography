#!/bin/bash
# Compress oversized images to fit under Cloudinary's 10MB limit
# Uses ImageMagick: resize to max 4000px wide, quality 85, strip metadata

OVERSIZED_FILES=(
  "public/images/services/family/DSC00245.jpg"
  "public/images/services/family/DSC00365.jpg"
  "public/images/services/family/DSC00371.jpg"
  "public/images/services/family/DSC01490.jpg"
  "public/images/services/pet_photography/DSC00027.jpg"
  "public/images/services/pet_photography/DSC00043.jpg"
)

echo ""
echo "🗜️  Compressing oversized images..."
echo ""

for file in "${OVERSIZED_FILES[@]}"; do
  if [ -f "$file" ]; then
    original_size=$(du -h "$file" | cut -f1)
    # Compress in-place: resize if wider than 4000px, quality 85, strip EXIF
    convert "$file" -resize '4000x4000>' -quality 85 -strip "$file"
    new_size=$(du -h "$file" | cut -f1)
    echo "  ✅  $file: $original_size → $new_size"
  else
    echo "  ❌  Not found: $file"
  fi
done

echo ""
echo "Done! All images should now be under 10MB."

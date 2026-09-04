import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import path from "path";

// ── Cloudinary config ──
cloudinary.config({
  cloud_name: "dcylaqbxa",
  api_key: "658832386652423",
  api_secret: "vUhrfwHfgJepbH6C4A1F8N0pLvQ",
  secure: true,
});

const IMAGES_ROOT = path.resolve("public/images/services");
const CLOUD_BASE_FOLDER = "glenslensphotography/services";
const SUPPORTED_EXT = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif", ".svg", ".avif"]);

// Recursively find all image files
function walkDir(dir) {
  const results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...walkDir(full));
    } else if (SUPPORTED_EXT.has(path.extname(entry.name).toLowerCase())) {
      results.push(full);
    }
  }
  return results;
}

async function uploadAll() {
  const files = walkDir(IMAGES_ROOT);
  console.log(`\n📸  Found ${files.length} images to upload\n`);

  let success = 0;
  let failed = 0;

  for (const filePath of files) {
    // Build the Cloudinary folder + public_id from the local relative path
    const rel = path.relative(IMAGES_ROOT, filePath);
    const parsed = path.parse(rel);
    // Folder = base cloud folder + subdirs  (spaces → underscores for safety)
    const folder = path.join(CLOUD_BASE_FOLDER, parsed.dir).replace(/\s+/g, "_");
    // Public ID = filename without extension (spaces → underscores)
    const publicId = parsed.name.replace(/\s+/g, "_");

    try {
      const result = await cloudinary.uploader.upload(filePath, {
        folder,
        public_id: publicId,
        overwrite: true,
        resource_type: "image",
        quality: "auto",
        fetch_format: "auto",
      });
      console.log(`  ✅  ${rel}  →  ${result.secure_url}`);
      success++;
    } catch (err) {
      console.error(`  ❌  ${rel}  →  ${err.message}`);
      failed++;
    }
  }

  console.log(`\n────────────────────────────────────`);
  console.log(`✅ Uploaded: ${success}   ❌ Failed: ${failed}   📁 Total: ${files.length}`);
  console.log(`────────────────────────────────────\n`);
}

uploadAll();

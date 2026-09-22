import ImageKit from "imagekit";
import fs from "fs";
import path from "path";

const imagekit = new ImageKit({
  publicKey: "public_0f1izsGk9qQD8D8PPDWZOjTQRtQ=",
  privateKey: "private_K+GCcJJOl0o1dRmpgN7XRCLUm1Q=",
  urlEndpoint: "https://ik.imagekit.io/j6u2tyqiv",
});

const IMAGES_ROOT = path.resolve("public/images/services");
const ROOT_FOLDER = "/glens-lens";
const SUPPORTED_EXT = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif", ".svg", ".avif"]);

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
  console.log(`\n📸  Found ${files.length} images to upload to ImageKit\n`);

  let success = 0;
  let failed = 0;

  for (const filePath of files) {
    const rel = path.relative(IMAGES_ROOT, filePath);
    const parsed = path.parse(rel);

    // Target folder in ImageKit: e.g. /glens-lens/family, /glens-lens/engagement_photography
    const cleanSubDir = parsed.dir.replace(/\s+/g, "_");
    const targetFolder = cleanSubDir ? `${ROOT_FOLDER}/${cleanSubDir}` : ROOT_FOLDER;
    const cleanFileName = parsed.base.replace(/\s+/g, "_");

    try {
      const fileBuffer = fs.readFileSync(filePath);
      const result = await imagekit.upload({
        file: fileBuffer,
        fileName: cleanFileName,
        folder: targetFolder,
        useUniqueFileName: false,
        overwriteFile: true,
      });
      console.log(`  ✅  ${rel}  →  ${result.url}`);
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

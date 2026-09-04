import { v2 as cloudinary } from "cloudinary";
import path from "path";

cloudinary.config({
  cloud_name: "dcylaqbxa",
  api_key: "658832386652423",
  api_secret: "vUhrfwHfgJepbH6C4A1F8N0pLvQ",
  secure: true,
});

const CLOUD_BASE = "glenslensphotography/services";

const FILES = [
  { local: "public/images/services/family/DSC00245.jpg", folder: `${CLOUD_BASE}/family`, id: "DSC00245" },
  { local: "public/images/services/family/DSC00365.jpg", folder: `${CLOUD_BASE}/family`, id: "DSC00365" },
  { local: "public/images/services/family/DSC00371.jpg", folder: `${CLOUD_BASE}/family`, id: "DSC00371" },
  { local: "public/images/services/family/DSC01490.jpg", folder: `${CLOUD_BASE}/family`, id: "DSC01490" },
  { local: "public/images/services/pet_photography/DSC00027.jpg", folder: `${CLOUD_BASE}/pet_photography`, id: "DSC00027" },
  { local: "public/images/services/pet_photography/DSC00043.jpg", folder: `${CLOUD_BASE}/pet_photography`, id: "DSC00043" },
];

async function reupload() {
  console.log(`\n📸  Re-uploading ${FILES.length} compressed images...\n`);
  for (const f of FILES) {
    try {
      const result = await cloudinary.uploader.upload(f.local, {
        folder: f.folder,
        public_id: f.id,
        overwrite: true,
        resource_type: "image",
        quality: "auto",
        fetch_format: "auto",
      });
      console.log(`  ✅  ${f.local}  →  ${result.secure_url}`);
    } catch (err) {
      console.error(`  ❌  ${f.local}  →  ${err.message}`);
    }
  }
  console.log(`\n✅ Done!\n`);
}

reupload();

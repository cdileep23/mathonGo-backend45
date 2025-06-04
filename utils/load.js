import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import { chapterModel } from "../models/chapter.model.js";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const filePath = path.join(__dirname, "../all_subjects_chapter_data.json");


const fileContent = fs.readFileSync(filePath, "utf-8");
const parsed = JSON.parse(fileContent);
const chapters = parsed.flat();


export const loadData = async () => {
  try {
    await chapterModel.insertMany(chapters); 
    console.log("✅ Data loaded successfully.");
  } catch (error) {
    console.error("❌ Error loading data:", error);
  }
};

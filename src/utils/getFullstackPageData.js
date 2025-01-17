import fs from "fs/promises";
import path from "path";

const encodeId = (id) => id.replace(/\//g, "_");
const decodeId = (id) => id.replace(/_/g, "/");

export async function generateStaticParams() {
  const dirPath = path.resolve(process.cwd(), "src", "pageData", "fullstack");

  try {
    const files = await fs.readdir(dirPath);
    const paths = files.map((file) => ({
      id: encodeId(path.parse(file).name).split("_"),
    }));
    return paths;
  } catch (error) {
    console.error("Error reading directory:", error);
    return [];
  }
}

export async function getPageData(id) {
  const normalizedId = Array.isArray(id) ? id.join("/") : id;
  const encodedId = encodeId(normalizedId);

  const filePath = path.resolve(
    process.cwd(),
    "src",
    "pageData",
    "fullstack",
    `${encodedId}.json`
  );

  try {
    await fs.access(filePath);
    const fileContents = await fs.readFile(filePath, "utf8");
    return JSON.parse(fileContents);
  } catch (error) {
    console.error("Error loading page data:", error);
    return { error: "Page data not found." };
  }
}
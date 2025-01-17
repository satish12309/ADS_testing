import fs from "fs/promises";
import path from "path";

/**
 * Fetch the static parameters for the new page.
 * Returns an object for static paths generation if needed in the future.
 */
export async function generateStaticParams() {
  const fileName = "s2-executive-cyber-security-ethical-hacking-course-training-by-iit-roorkee.json";
  const filePath = path.resolve(process.cwd(), "src", "pageData", fileName);

  try {
    // Verify the file exists
    await fs.access(filePath);

    // Return the static path parameter for the new page
    return [{ id: fileName.replace(".json", "") }];
  } catch (error) {
    console.error("Error reading file for static params:", error);
    return [];
  }
}

/**
 * Fetches the data for the specific page.
 * The file must exist in the src/pagedata directory.
 * 
 * @returns {Object} Parsed JSON data or error object if the file is missing.
 */
export async function getPageData() {
  const fileName = "s2-executive-cyber-security-ethical-hacking-course-training-by-iit-roorkee.json";
  const filePath = path.resolve(process.cwd(), "src", "pageData", fileName);

  try {
    // Check if the file exists
    await fs.access(filePath);

    // Read and parse the file contents
    const fileContents = await fs.readFile(filePath, "utf8");
    return JSON.parse(fileContents);
  } catch (error) {
    console.error("Error loading page data:", error);
    return { error: "Page data not found." };
  }
}

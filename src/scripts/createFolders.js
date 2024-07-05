const fs = require("fs");
const path = require("path");

function createFolderStructure() {
  //Parent folder name
  const parentFolder = "Project";

  //Subfolders to be created inside the parent folder
  const subfolders = ["src", "docs", "tests"];

  // This is dummy content for text files
  const dummyContent =
    "Benefits of Automation\nSaves time and effort compared to manually creating each folder and file.\n Minimizes human errors such as typos or missed files that can occur during manual setup.";

  try {
    //if parent folder already exists
    if (!fs.existsSync(parentFolder)) {

      // Create parent folder if it doesn't exist
      fs.mkdirSync(parentFolder);

      // Iterate through each subfolder
      subfolders.forEach((subfolder) => {
        
        // Create path for each subfolder inside the parent folder
        const subfolderPath = path.join(parentFolder, subfolder);

        // Create subfolder
        fs.mkdirSync(subfolderPath);

        // Create text files inside each subfolder
        for (let i = 1; i <= 3; i++) {
          const filename = `file${i}.txt`;
          const filepath = path.join(subfolderPath, filename);

          // dummy content to each text file
          fs.writeFileSync(filepath, dummyContent, "utf8");
        }
      });

      console.log("Folder structure and dummy data creation completed.");
    } else {
      //This console is for to show message if parent folder already exists
      console.log("Parent folder already exists. Aborting creation.");
    }
  } catch (err) {
    // This console is for handling any errors that occur during folder creation or file writing
    console.error("Error creating folders and files:", err);
  }
}

// Execute the function to create the folder structure
createFolderStructure();

module.exports = createFolderStructure;
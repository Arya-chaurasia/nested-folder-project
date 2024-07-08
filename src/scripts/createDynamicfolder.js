const fs = require('fs');
const path = require('path');

// Load folder structure from JSON file in the same directory
const folderStructurePath = path.join(__dirname, 'folderStructure.json');
const folderStructure = JSON.parse(fs.readFileSync(folderStructurePath, 'utf8'));

// Function to create folders and files recursively
const createFolderStructure = (basePath, structure) => {
  const folderPath = path.join(basePath, structure.name);

  // if folder already exists, if not create it
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
    console.log(`Created folder: ${folderPath}`);
  } else {
    console.log(`Folder already exists: ${folderPath}`);
  }

  // Create files in the current folder
  if (structure.files) {
    structure.files.forEach((file) => {
      const filePath = path.join(folderPath, file.name);
      if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, file.content);
        console.log(`Created file: ${filePath}`);
      } else {
        console.log(`File already exists: ${filePath}`);
      }
    });
  }

  // Recursively create subfolders
  if (structure.folders) {
    structure.folders.forEach((subFolder) => {
      createFolderStructure(folderPath, subFolder);
    });
  }
};

// Base path where the structure will be created
const basePath = './';

// folder structure
createFolderStructure(basePath, folderStructure);

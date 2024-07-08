# Folder Creation Script

## Overview

This Node.js script automates the creation of a nested folder structure and populates them with files and dummy data based on a JSON configuration file (`folderStructure.json`).

## Script Functionality

The `createDynamicfolder.js` script performs the following tasks:

- Reads the folder structure configuration from `folderStructure.json` located in the same directory.
  
- Creates a parent folder as specified in `folderStructure.json` in the current working directory (if it doesn't exist).
  
- Dynamically creates subfolders and files inside the parent folder according to the structure defined in `folderStructure.json`.
  
- Outputs messages to the console indicating folder and file creation statuses.

## Benefits

- **Efficiency**: Automates manual tasks, saving time and effort in setting up project folder structures.
  
- **Consistency**: Ensures uniformity in folder structure and dummy data across different project setups.
  
- **Scalability**: Designed to handle a growing number of folders and files as project requirements expand.


### Prerequisites

Ensure you have Node.js installed on your machine.

### Running the Script

1. Clone this repository or download the folder.

2. Open your terminal or command prompt and navigate to the directory containing folder project.

3. Run the following command to execute the script: `node src/scripts/createDynamicfolder.js`


### Error Handling

- The script checks if the parent folder specified in `folderStructure.json` already exists before attempting to create it. If the folder exists, it aborts further execution to prevent overwriting existing data.


# Folder Creation Script

## Overview

This script automates the creation of a nested folder structure and populates them with dummy data.

## Script Functionality

The `createFolders.js` script performs the following tasks:

- Checks if the parent folder named "Project" exists. If not, it creates this folder.
- Creates subfolders named "src", "docs", and "tests" inside the "Project" folder.
- Generates text files (`file1.txt`, `file2.txt`, `file3.txt`) inside each subfolder, containing sample content.

## Benefits

- **Efficiency**: Automates manual tasks, saving time and effort in setting up project folder structures.
  
- **Consistency**: Ensures uniformity in folder structure and dummy data across different project setups.
  
- **Scalability**: Designed to handle a growing number of folders and files as project requirements expand.


### Prerequisites

Ensure you have Node.js installed on your machine.

### Running the Script

1. Clone this repository or download the folder.

2. Open your terminal or command prompt and navigate to the directory containing folder project.

3. Run the following command to execute the script: `node src/scripts/createFolders.js`


### Error Handling

- The script checks if the "Project" folder already exists before attempting to create it. If the folder exists, it aborts further execution to prevent overwriting existing data.

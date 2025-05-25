#!/bin/bash

# Check if 'unzip' command exists
if ! command -v unzip &> /dev/null; then
    echo "Error: 'unzip' command not found. Please install it (e.g., 'sudo apt install unzip' or 'sudo dnf install unzip')."
    exit 1
fi

echo "Starting unzip process..."

# Iterate through all .zip files in the current directory
for zip_file in *.zip; do
    # Check if the file actually exists (in case no .zip files are found)
    if [ -f "$zip_file" ]; then
        # Extract the base name of the zip file (without the .zip extension)
        dir_name="${zip_file%.zip}"

        echo "Processing: $zip_file"
        echo "Creating directory: $dir_name"

        # Create the new directory
        mkdir -p "$dir_name"

        # Unzip the file into the new directory
        # The -q flag makes it quiet (less verbose output)
        # The -d flag specifies the destination directory
        unzip -q "$zip_file" -d "$dir_name"

        if [ $? -eq 0 ]; then
            echo "Successfully unzipped '$zip_file' into '$dir_name/'"
        else
            echo "Error unzipping '$zip_file'. Check its integrity or permissions."
        fi
    fi
done

echo "Unzip process complete."

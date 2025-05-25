#!/bin/bash

# Script to rename misnamed eForm files based on the download log

# Parse command line arguments
DRY_RUN=false
if [ "$1" = "--dry-run" ] || [ "$1" = "-n" ]; then
    DRY_RUN=true
fi

# Check if paste.txt exists
if [ ! -f "paste.txt" ]; then
    echo "Error: paste.txt not found in current directory"
    exit 1
fi

# Create a temporary file for the rename commands
RENAME_SCRIPT=$(mktemp rename_commands_XXXXXX.sh)

echo "#!/bin/bash" > "$RENAME_SCRIPT"
echo "# Auto-generated script to rename eForm files" >> "$RENAME_SCRIPT"
echo "# Generated on: $(date)" >> "$RENAME_SCRIPT"
echo "" >> "$RENAME_SCRIPT"

# Add dry-run support to the generated script
echo "DRY_RUN=false" >> "$RENAME_SCRIPT"
echo 'if [ "$1" = "--dry-run" ] || [ "$1" = "-n" ]; then' >> "$RENAME_SCRIPT"
echo '    DRY_RUN=true' >> "$RENAME_SCRIPT"
echo '    echo "DRY RUN MODE - No files will be renamed"' >> "$RENAME_SCRIPT"
echo '    echo ""' >> "$RENAME_SCRIPT"
echo 'fi' >> "$RENAME_SCRIPT"
echo "" >> "$RENAME_SCRIPT"
echo "RENAMED_COUNT=0" >> "$RENAME_SCRIPT"
echo "NOT_FOUND_COUNT=0" >> "$RENAME_SCRIPT"
echo "" >> "$RENAME_SCRIPT"

# Parse the paste.txt file
# Look for pairs of lines where first line starts with "[↓] Downloading"
# and second line starts with "index.html?wpdmdl="

awk '
/^\[↓\] Downloading/ {
    # Extract the intended filename from the Downloading line
    # Remove the "[↓] Downloading " prefix
    intended = $0
    sub(/^\[↓\] Downloading /, "", intended)
    # Remove any trailing whitespace
    sub(/[[:space:]]+$/, "", intended)
    
    # Get the next line
    getline
    
    # Check if it contains the index.html pattern
    if ($0 ~ /index\.html\?wpdmdl=/) {
        # Extract the URL pattern (first field)
        url_pattern = $1
        
        # The actual files have timestamps appended, so we need to use glob pattern
        # Generate the rename command with wildcard matching
        printf "# Looking for files matching pattern: %s*\n", url_pattern
        printf "FOUND=false\n"
        printf "for file in %s*; do\n", url_pattern
        printf "    if [ -f \"$file\" ]; then\n"
        printf "        FOUND=true\n"
        printf "        if [ \"$DRY_RUN\" = true ]; then\n"
        printf "            echo \"Would rename: $file -> %s.html\"\n", intended
        printf "        else\n"
        printf "            echo \"Renaming: $file -> %s.html\"\n", intended
        printf "            mv \"$file\" \"%s.html\"\n", intended
        printf "        fi\n"
        printf "        ((RENAMED_COUNT++))\n"
        printf "        break  # Only rename the first match\n"
        printf "    fi\n"
        printf "done\n"
        printf "if [ \"$FOUND\" = false ]; then\n"
        printf "    echo \"Warning: No file found matching pattern: %s*\"\n", url_pattern
        printf "    ((NOT_FOUND_COUNT++))\n"
        printf "fi\n\n"
    }
}
' paste.txt >> "$RENAME_SCRIPT"

# Add summary at the end of the generated script
echo "" >> "$RENAME_SCRIPT"
echo 'echo ""' >> "$RENAME_SCRIPT"
echo 'echo "Summary:"' >> "$RENAME_SCRIPT"
echo 'echo "  Files renamed: $RENAMED_COUNT"' >> "$RENAME_SCRIPT"
echo 'echo "  Files not found: $NOT_FOUND_COUNT"' >> "$RENAME_SCRIPT"
echo 'if [ "$DRY_RUN" = true ]; then' >> "$RENAME_SCRIPT"
echo '    echo ""' >> "$RENAME_SCRIPT"
echo '    echo "This was a dry run. To actually rename files, run without --dry-run"' >> "$RENAME_SCRIPT"
echo 'fi' >> "$RENAME_SCRIPT"

# Make the rename script executable
chmod +x "$RENAME_SCRIPT"

echo "Rename script generated: $RENAME_SCRIPT"
echo ""
echo "Usage:"
echo "  ./$RENAME_SCRIPT --dry-run  # Preview what will be renamed"
echo "  ./$RENAME_SCRIPT           # Actually rename the files"
echo ""
echo "To see the first few rename commands:"
echo "  head -50 $RENAME_SCRIPT | grep -E '(Would rename:|Renaming:)' | head -10"
echo ""
echo "To count total number of files to process:"
echo "  grep -c '^# Looking for files' $RENAME_SCRIPT"

# If running this script in dry-run mode, also run the rename script in dry-run
if [ "$DRY_RUN" = true ]; then
    echo ""
    echo "Running generated script in dry-run mode..."
    echo "=========================================="
    ./"$RENAME_SCRIPT" --dry-run
fi

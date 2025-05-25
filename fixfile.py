#!/usr/bin/env python3
"""
Script to rename misnamed eForm files based on the download log
"""

import os
import sys
import re
import glob

def main():
    # Check for dry-run mode
    dry_run = False
    if len(sys.argv) > 1 and sys.argv[1] in ['--dry-run', '-n']:
        dry_run = True
        print("DRY RUN MODE - No files will be renamed")
        print()
    
    # Check if paste.txt exists
    if not os.path.exists('paste.txt'):
        print("Error: paste.txt not found in current directory")
        sys.exit(1)
    
    # Counters
    renamed_count = 0
    not_found_count = 0
    already_exists_count = 0
    
    # Read and process paste.txt
    with open('paste.txt', 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    current_name = None
    i = 0
    
    while i < len(lines):
        line = lines[i].strip()
        
        # Check if this is a download line
        if line.startswith('[↓] Downloading '):
            # Extract the intended filename
            current_name = line[16:].strip()  # Remove '[↓] Downloading '
            
            # Look at the next line
            if i + 1 < len(lines):
                next_line = lines[i + 1].strip()
                
                # Check if it contains the index.html pattern
                match = re.match(r'^(index\.html\?wpdmdl=\d+&refresh=[a-f0-9]+)', next_line)
                if match and current_name:
                    url_pattern = match.group(1)
                    
                    # Find matching files
                    # Use glob to handle the pattern matching
                    pattern = url_pattern + '*'
                    matching_files = glob.glob(pattern)
                    
                    if matching_files:
                        # Take the first match
                        old_file = matching_files[0]
                        new_name = current_name + '.html'
                        
                        # Check if target already exists
                        if os.path.exists(new_name):
                            print(f"Warning: Target already exists: {new_name} (skipping)")
                            already_exists_count += 1
                        elif dry_run:
                            print(f"Would rename: {old_file} -> {new_name}")
                            renamed_count += 1
                        else:
                            print(f"Renaming: {old_file} -> {new_name}")
                            os.rename(old_file, new_name)
                            renamed_count += 1
                    else:
                        print(f"Warning: No file found matching: {pattern}")
                        not_found_count += 1
                    
                    current_name = None
        
        i += 1
    
    # Print summary
    print()
    print("Summary:")
    print(f"  Files renamed: {renamed_count}")
    print(f"  Files not found: {not_found_count}")
    print(f"  Already exists: {already_exists_count}")
    
    if dry_run:
        print()
        print("This was a dry run. To actually rename files, run without --dry-run")

if __name__ == "__main__":
    main()

import os
import re
import sys

# Extract text from every file named like ([0-9]+).pdf present in the source folder
# Save every file to the respective .txt in the target folder
def extractText(source: str, target: str) -> None :
    # Get a list of all files present in the source folder
    allFiles = os.listdir(source)
    # Filter the list to obtain only files with a name in the format "[0-9]+.pdf"
    wellNamedFilesIterator = filter(lambda fileName: re.search("^[0-9]+.pdf$", fileName), allFiles)
    wellNamedFiles = list(wellNamedFilesIterator)
    # For each file, do the extraction operation

extractText(sys.argv[1], sys.argv[2])

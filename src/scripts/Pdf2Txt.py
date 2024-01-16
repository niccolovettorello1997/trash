import os
import sys

# Extract text from every file named like ([0-9]+).pdf present in the source folder
# Save every file to the respective .txt in the target folder
def extract(source: str, target: str):
    files = os.listdir(source)
    print(files)

extract(sys.argv[1], sys.argv[2])

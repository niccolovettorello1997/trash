import os
import sys

SOURCE_FOLDER = "raw"
TARGET_FILE = "src/resources/data.js"

# Return provider header.
# @returns str
def header() -> str:
    return """/**
 * Returns data.
 * Data must be provided this way because is not possible to read a local file without an underlying webserver.
 * 
 * @returns Array
 */
function provider()
{
    return ["""

# Return provider footer
# @returns str
def footer() -> str:
    return """    ];
}
"""

# Write javascript provider.
# @param   str fileName
# @returns None
def writeProvider(source: str) -> None:
    print("default behaviour")

writeProvider(sys.argv[1])

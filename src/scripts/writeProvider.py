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
# @param   str sourceFileName
# @returns None
def writeProvider(sourceFileName: str) -> None:
    # Open input and output files
    source = open(SOURCE_FOLDER + "/" + sourceFileName, "r")
    target = open(TARGET_FILE, "w")
    # Write header to target file
    target.write(header() + "\n") 
    # Write line by line from input file to the provider paying attention to string format
    for line in source.readlines():
        target.write("        \"" + line.rstrip("\n") + "\",\n")
    # Write footer to target file
    target.write(footer())
    # Close input and output files
    source.close()
    target.close()

writeProvider(sys.argv[1])

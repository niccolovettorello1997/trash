/**
 * Returns array of trash.
 * 
 * @returns Array
 */
function trash()
{
    return [
        "UMIDO",
        "CARTA",
        "VETRO",
        "SECCO",
        "PLASTICA",
        "VERDE"
    ];
}

/**
 * Returns Object that relates keys to months.
 * 
 * @returns Object
 */
function months()
{
    return {
        1: "GENNAIO",
        2: "FEBBRAIO",
        3: "MARZO",
        4: "APRILE",
        5: "MAGGIO",
        6: "GIUGNO",
        7: "LUGLIO",
        8: "AGOSTO",
        9: "SETTEMBRE",
        10: "OTTOBRE",
        11: "NOVEMBRE",
        12: "DICEMBRE"
    };
}

/**
 * Returns an array containing an error message.
 * 
 * @param   string message
 * @param   number year
 * @param   number month
 * @param   number day
 * @returns Array
 */
function errorMessage(message, year, month, day)
{
    return [
        message,
        "year: " + year,
        "month: " + month,
        "day: " + day
    ];
}

/**
 * Given data and a date, returns an array of trash.
 * 
 * @param   string data
 * @param   number year
 * @param   number month
 * @param   number day
 * @returns Array
 */
function parse(data, year, month, day)
{
    // Return directly empty array if it is the case
    if (!preprocessDate(year, month, day)) {
        return [];
    }

    // Compute trash for tomorrow
    return execute(data,
        year,
        month,
        day
    );
}

/**
 * Returns false if there are no trashes for this date.
 * 
 * @param   number year
 * @param   number month
 * @param   number day
 * @returns Boolean
 */
function preprocessDate(year, month, day)
{
    var dateString = year + "-" + month + "-" + day;
    var date = new Date(dateString);

    // True iff it is not Sunday and the date is valid
    return (!isNaN(date)) && (date.getDay() !== 0);
}

/**
 * Execute parsing operations.
 * 
 * @param   string data
 * @param   number year
 * @param   number month
 * @param   number day
 * @returns Array
 */
function execute(data, year, month, day)
{
    /* Find the index of the first string in the array that contains both the year and month
     * passed as arguments. If the selection fails, return array with error message */
    var yMIndex = data.findIndex(
        (token) => token.includes("~") && token.includes(year) && token.includes(months()[month])
    );
    if (yMIndex === undefined) {
        return errorMessage(
            "Could not find a matching token for specified year and month",
            year,
            month,
            day
        );
    }

    // Find the index of the next "=" symbol. If the selection fails, return array with error message
    var yMEnd = 0;
    for (let i = yMIndex; (i < data.length) && (yMEnd === 0); i++) {
        if (data[i].includes("=")) {
            yMEnd = i;
        }
    }
    if (yMEnd === 0) {
        return errorMessage(
            "Could not find subsequent '=' symbol for the specified year and month",
            year,
            month,
            day
        );
    }

    /* Select the subset of strings representing data for the specified year and month
     * Note that slice last index is non inclusive */
    var yMSubset = data.slice(yMIndex, yMEnd + 1);

    /* Find the index for the first string in the array that contains the specified day. If
     * the selection fails, return array with error message */
    var dIndex = yMSubset.findIndex((token) => token.includes(day));
    if (dIndex === undefined) {
        return errorMessage(
            "Could not find matching token for specified day",
            year,
            month,
            day
        );
    }

    // Try to match trash on the strings constituting the day data and return the matches
    var result = [];
    trash().forEach((trash) => {
        if (yMSubset[dIndex].includes(trash)) {
            result.push(trash);
        }
    });

    return result;
}

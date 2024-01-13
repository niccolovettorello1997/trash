/**
 * Returns an associative array for week days.
 * 
 * @returns Object
 */
function weekDays()
{
    return {
        0: "DOMENICA",
        1: "LUNEDI'",
        2: "MARTEDI'",
        3: "MERCOLEDI'",
        4: "GIOVEDI'",
        5: "VENERDI'",
        6: "SABATO"
    };
}

/**
 * Returns the date for tomorrow.
 * 
 * @returns Date
 */
function tomorrow()
{
    var today = new Date();
    return new Date(today.setDate(today.getDate() + 1));
}

/**
 * Format a date, returning an array for Y-m-d.
 * 
 * @param   Date date
 * @returns Array
 */
function format(date)
{
    return [
        date.getUTCFullYear(),
        date.getUTCMonth(),
        date.getUTCDate()
    ];
}

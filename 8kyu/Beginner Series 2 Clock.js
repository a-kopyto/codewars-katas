// Clock shows 'h' hours, 'm' minutes and 's' seconds after midnight.

// Your task is to make 'Past' function which returns time converted to milliseconds.

// Example:
// past(0, 1, 1) == 61000
// Input constraints: 0 <= h <= 23, 0 <= m <= 59, 0 <= s <= 59


function past(h, m, s) {
    ret = 0;
    if (0 <= h  && h <= 23 && 0 <= m && m <= 59 && 0 <= m && m <= 59) {
        ret = ((h * 60 * 60 * 1000) + (m * 60 * 1000) + (s * 1000));
    } else {
        ret = "incorrect data input";
    }
    return ret;
}
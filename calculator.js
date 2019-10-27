exports.suma = function (n) {
    /** validar a expec  retunr 0 */
    if (!Number.isInteger(n) || n <= 0)
        return 0;

    var total = 0;

    while (n != 0) {
        total += n;
        n--;
    }

    return total;
};
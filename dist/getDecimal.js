(function () {
    if (!window.hasOwnProperty('getDecimal')) window.getDecimal = getDecimal;

    /**
     * Javascript converter of the specified string in a decimal number with a given precision
     *
     * @param {real|number|string} value     Value
     * @param {int}                precision Precision of the result (default: 2)
     *
     * @return {real}
     *
     * @version 2019-06-14
     * @author  DimNS <dimns@dimns.ru>
     */
    function getDecimal(value, precision) {
        if (value === undefined) {
            return 0;
        }

        if (precision === undefined || typeof precision !== 'number') {
            precision = 2;
        }

        if (typeof value === 'number') {
            return parseFloat(value.toFixed(precision));
        } else {
            value = value.replace(/ /g, '');
            value = value.replace(/,/g, '.');

            value = parseFloat(value);

            if (isNaN(value)) {
                return 0;
            }

            return parseFloat(value.toFixed(precision));
        }
    }
})();
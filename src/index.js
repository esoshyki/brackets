module.exports = function check(str, bracketsConfig) {

    var opensym = [];
    var closesym = [];

    const openclose = (a,b) => {
        return b === opensym[closesym.indexOf(a)]
    }

    const close = (a) => closesym.includes(a)

    bracketsConfig.forEach(el => {
        opensym.push(el[0]);
        closesym.push(el[1])
    });

    return str.split('').reduce((a,b) => {
        if (!a[0]) {
            a.push(b)
            return a
            };

        const len = a.length;

        if (close(b)) {
            if (openclose(b, a[len-1])) {
                a.pop()
            }
            else {
                a.push(b)
            }
        }
        else {
            a.push(b)
        }
        return a
    }, []).length === 0
}

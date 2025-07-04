function solution(n, m) {

    let f = Math.floor(Math.sqrt((n < m) ? n + n : m + m)) + 1;
    if (n == 1 && m == 0) {
        return 1
    }
    if (n == 0 && m == 1) {
        return 1
    }

    while (f > 0) {
        let tt = n <= m ? false : true;
        let nn = n;
        let mm = m;
        let d = true;
        for (let i = 1; i <= f; i++) {
            if (!d) { break }
            //xoxox
            //oxoxo
            //xoxox
            //oxoxo
            //xoxox
            if (f % 2 !== 0) {
                if (tt) {
                    nn = nn - Math.ceil(f / 2);
                    mm = mm - Math.ceil(f / 2) + 1;
                } else {
                    nn = nn - Math.ceil(f / 2) + 1;
                    mm = mm - Math.ceil(f / 2);
                }
            } else {
                nn = nn - f / 2;
                mm = mm - f / 2
            }
            tt = !tt;
            if (nn < 0 || mm < 0) {
                f--
                d = false
                break;
            }
        }
        if (d) {
            break
        }
    }
    return f ? f : -1;
}

module.exports = solution;

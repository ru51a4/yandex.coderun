function solution(n, a) {
    if (a.length == 1) {
        return 0
    }
    let r = {};
    a.forEach((c) => {
        r[c] = true;
    })
    let asd = 0;
    a = a.sort((a, b) => a - b)
    let b = [];
    for (let i = 0; i <= a.length - 1 - 1; i++) {
        if (a[i + 1] - a[i] < a.length) {
            b.push(a[i])
            b.push(a[i + 1])

        }
    }

    let counter = Math.min(...b) - 1;
    let max = Math.max(...b);
    let deque = [];
    let min = Infinity
    while (counter !== max) {
        counter++
        if (r[counter]) {
            deque.push(true);
        } else {
            deque.push(false);
        }
        if (deque.length == a.length) {
            let _ = deque.filter((c) => !c).length;
            min = min > _ ? _ : min
            deque.shift();
        }
    }
    return (min) == Infinity ? 0 : min;
}
module.exports = solution;

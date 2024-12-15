let solution = () => {
    let input = [
        "5",
        "1 2 3 4 5",
        "6",
    ];
    input.shift();
    let k = input.pop();
    k = k.trim()

    let arr = input[0].split(" ")
    let f = false
    let rr = {};

    for (let i = 0; i <= arr.length - 1; i++) {
        if (arr[i] == k) {
            console.log(String(arr[i]));
            f = true
            break
        }
        let rq;
        if (arr[i] < 0 && k < 0) {
            rq = Math.abs(arr[i]) - Math.abs(k);
        }
        else if (arr[i] < 0 || k < 0) {
            rq = Math.abs(arr[i]) + Math.abs(k)
        }
        else {
            rq = Math.abs(arr[i]) - Math.abs(k);
        }
        rr[String(arr[i])] = Math.abs(rq)
    }
    if (!f) {
        let t = Math.min(...Object.values(rr))
        for (let item of Object.keys(rr)) {
            if (rr[item] == t) {
                console.log(String(item))
                break
            }
        }
    }
}
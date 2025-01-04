const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
rl.on("line", line => input.push(line))
    .on("close", () => {
        let a = input[0].split("");
        function lex(str) {
            let res = [];
            let t = '';
            for (let i = 0; i <= str.length - 1; i++) {
                if (str[i] === ' ') {
                    continue
                }
                if (str[i] === '-' || str[i] === '+') {
                    if (t) {
                        res.push(t);
                    }
                    res.push(str[i]);
                    t = '';
                } else {
                    t += str[i];
                }
            }
            if (t) {
                res.push(t);
            }
            return res;
        }
        let arr = lex(a);

        let operators = [];
        operators["+"] = (a, b) => {
            return parseInt(a) + parseInt(b);
        }
        operators["-"] = (a, b) => {
            return parseInt(a) - parseInt(b);
        }

        for (let i = 0; i <= arr.length - 1; i++) {
            if (arr[i] === "+" || arr[i] === "-") {
                let t = operators[arr[i]](arr[i - 1], arr[i + 1]);
                arr.splice(i - 1, 3, t);
                i = i - 1;
            }
        }
        console.log(arr[0])
    });
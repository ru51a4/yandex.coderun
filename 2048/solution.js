module.exports = function solution(field, moves) {
    pole = field;
    let up = () => {
        let f = true
        while (f) {
            f = false
            for (let i = 0; i <= 2; i++) {
                for (let j = 0; j <= 3; j++) {
                    if (!pole[i][j] && pole[i + 1][j]) {
                        pole[i][j] = pole[i + 1][j]
                        pole[i + 1][j] = 0;
                        f = true
                    } else if (pole[i][j] === pole[i + 1][j]) {
                        pole[i][j] += pole[i + 1][j] ?? 0;
                        pole[i + 1][j] = 0;
                    }
                }
            }
        }
    }
    let down = () => {
        let f = true
        while (f) {
            f = false
            for (let i = 2; i >= 0; i--) {
                for (let j = 0; j <= 3; j++) {
                    if (!pole[i + 1][j] && pole[i][j]) {
                        pole[i + 1][j] = pole[i][j]
                        pole[i][j] = 0;
                        f = true
                    } else if (pole[i + 1][j] === pole[i][j]) {
                        pole[i + 1][j] += pole[i][j] ?? 0;
                        pole[i][j] = 0;
                    }
                }
            }
        }
    }
    let left = () => {
        let f = true
        while (f) {
            f = false
            for (let i = 0; i <= 3; i++) {
                for (let j = 0; j <= 2; j++) {
                    if (!pole[i][j] && pole[i][j + 1]) {
                        pole[i][j] = pole[i][j + 1]
                        pole[i][j + 1] = 0;
                        f = true
                    } else if (pole[i][j] === pole[i][j + 1]) {
                        pole[i][j] += pole[i][j + 1] ?? 0;
                        pole[i][j + 1] = 0;
                    }
                }
            }
        }
    }
    let right = () => {
        let f = true
        while (f) {
            f = false
            for (let i = 0; i <= 3; i++) {
                for (let j = 2; j >= 0; j--) {
                    if (!pole[i][j + 1] && pole[i][j]) {
                        pole[i][j + 1] = pole[i][j]
                        pole[i][j] = 0;
                        f = true
                    } else if (pole[i][j + 1] === pole[i][j]) {
                        pole[i][j + 1] += pole[i][j] ?? 0;
                        pole[i][j] = 0;
                    }
                }
            }
        }
    }
    moves.split(" ").forEach((key) => {
        switch (key) {
            case "D":
                down();
                break;
            case "U":
                up();
                break;
            case "L":
                left();
                break;
            case "R":
                right();
                break;
        }
    })
    return pole;
}
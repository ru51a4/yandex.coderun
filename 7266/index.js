function solution(n, a) {
    let root = { childs: [] };
    let stackk = [];
    let res = false;
    let deep = (v, j) => {
        if (j > a.length - 1) {
            if (!res) {
                res = stackk.map((c) => c.val);
            }
            return
        }
        for (let i = j; i <= j; i++) {
            if (stackk[stackk.length - 1] && stackk[stackk.length - 1].val === a[i]) {
                let a1 = { val: a[i], childs: [] };
                v.childs.push(a1);
                stackk.push(a1)
                deep(a1, i + 1)
                stackk.pop();

            } else {
                if (!stackk[stackk.length - 1] || stackk[stackk.length - 1].val <= -a[i]) {
                    let a2 = { val: -a[i], childs: [] };
                    v.childs.push(a2);
                    stackk.push(a2);
                    deep(a2, i + 1)
                    stackk.pop();
                }
                if (!stackk[stackk.length - 1] || stackk[stackk.length - 1].val <= a[i]) {
                    let a1 = { val: a[i], childs: [] };
                    v.childs.push(a1);
                    stackk.push(a1)
                    deep(a1, i + 1)
                    stackk.pop();
                }
            }
        }
    };
    deep(root, 0);

    if (res === false) {
        res = []
    }
    return [Number(Boolean(res.length)), ...res]
}

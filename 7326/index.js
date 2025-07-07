function solve(n, k, a) {
    a.push(n);
    a.unshift(0);
    a = a.sort((a, b) => a - b);
    let root = { val: a.shift() };
    let r = [];
    let curr = root;
    r.push(curr);
    while (a.length) {
        r.push({ val: a.shift() })
    }
    let next = (item) => {
        item.childs = [];
        for (let i = 0; i <= r.length - 1; i++) {
            if (item.val + 1 == r[i].val) {
                item.childs.push(r[i])
            }
            if (item.val + 2 == r[i].val) {
                item.childs.push(r[i])
            }
        }
    };
    for (let i = 0; i <= r.length - 1; i++) {
        next(r[i])
    }
    let res = [];
    let stack = [];
    let f = (item) => {
        stack.push(item.val)
        if (item.val === n) {
            res.push(stack.map((c) => c))
        }
        item.childs.forEach((node) => {
            f(node);
        })
        stack.pop();
    }
    f(root);
    res = res.filter((c) => c.length === Math.min(...res.map(c => c.length)))[0];
    if (!res) {
        return [-1]
    }
    let _res = [];
    for (let i = 0; i <= res.length - 1 - 1; i++) {
        _res.push(res[i + 1] - res[i])
    }
    return [res.length - 1, ..._res]
}

function solution(n, a) {
    let root = { childs: [] };
    let stackk = [];
    let deep = (v, j) => {
        if (j > a.length - 1) {
            return
        }
        stackk.push(v);
        for (let i = j; i <= j; i++) {
            let a2 = { val: -a[i], childs: [] };
            if (!stackk[stackk.length - 1].val || stackk[stackk.length - 1].val <= -a[i]) {
                v.childs.push(a2);
                deep(a2, i + 1)
            }
            if (!stackk[stackk.length - 1].val || stackk[stackk.length - 1].val <= a[i]) {
                let a1 = { val: a[i], childs: [] };
                v.childs.push(a1);
                deep(a1, i + 1)
            }
        }
        stackk.pop();
    };
    deep(root, 0)
    let stack = [];
    let res = false;
    let sss = [];
    let dfs = (node) => {
        if (res) {
            return
        }
        if (res) {
            return;
        }
        stack.push(node)
        if (stack.length == a.length + 1) {
            let o = true
            for (let k = 1; k <= stack.length - 1 - 1; k++) {
                if (stack[k].val > stack[k + 1].val) {
                    o = false;
                    break;
                }
            }
            if (o) {
                sss = JSON.parse(JSON.stringify(stack.filter((c) => c.val !== undefined).map((c) => c.val)))
                res = true
                return
            }
        }
        node.childs.forEach((_node) => {
            dfs(_node)
        });
        stack.pop();
    };
    dfs(root);
    return [Number(res), ...sss]
}

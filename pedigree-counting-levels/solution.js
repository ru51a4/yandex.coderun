let solution = () => {
    let input = [
        "9",
        "Alexei Peter_I",
        "Anna Peter_I",
        "Elizabeth Peter_I",
        "Peter_II Alexei",
        "Peter_III Anna",
        "Paul_I Peter_III",
        "Alexander_I Paul_I",
        "Nicholaus_I Paul_I",
    ]
    input.shift();
    let r = [];
    let tree = {};
    let t = JSON.parse(JSON.stringify(input))
    let r1 = [];
    let r2 = [];
    while (input.length) {
        let item = input.shift()
        item = item.split(" ")
        tree[item[0]] = { val: item[0], childs: [] }
        tree[item[1]] = { val: item[1], childs: [] }
        r1.push(item[0])
        r2.push(item[1])
    }
    input = t;
    while (input.length) {
        let item = input.shift()
        item = item.split(" ")
        if (tree[item[1]] && tree[item[0]]) {
            tree[item[1]].childs.push(tree[item[0]])
        }

    }
    let stack = [];
    let dfs = (node) => {
        stack.push(node)
        if (r && !r.map((c) => c.name).includes(node.val)) {
            r.push({ name: node.val, c: stack.length - 1 })
        }
        node.childs.forEach((ch) => {
            dfs(ch)
        })
        stack.pop();
    }
    let c = r2.filter((c) => !r1.includes(c))[0];
    dfs(tree[c]);

    r.sort(function (a, b) {
        if (a.name < b.name) {
            return -1;
        }
        if (a.name >= b.name) {
            return 1;
        }
        return 0;
    }).forEach((c) => {
        console.log(`${c.name} ${c.c ?? 0}`)
    })


}
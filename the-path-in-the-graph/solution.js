let solution = () => {
    let input = [
        "10",
        "0 1 0 0 0 0 0 0 0 0",
        "1 0 0 1 1 0 1 0 0 0",
        "0 0 0 0 1 0 0 0 1 0",
        "0 1 0 0 0 0 1 0 0 0",
        "0 1 1 0 0 0 0 0 0 1",
        "0 0 0 0 0 0 1 0 0 1",
        "0 1 0 1 0 1 0 0 0 0",
        "0 0 0 0 0 0 0 0 1 0",
        "0 0 1 0 0 0 0 1 0 0",
        "0 0 0 0 1 1 0 0 0 0",
        "5 4",
    ];
    input.shift();

    let [start, end] = input.pop().split(" ").map(Number)
    start--;
    end--;
    if (start === end) {
        console.log(0)
        return
    }
    //build
    let tree = {};
    for (let i = 0; i <= input.length - 1; i++) {
        tree[i] = {};
    }
    for (let i = 0; i <= input.length - 1; i++) {
        let c = input[i].split(" ").map(Number);
        for (let j = 0; j <= c.length - 1; j++) {
            tree[i][j] = c[j]
        }
    }

    let r = [];

    for (let i in tree) {
        if (!r[i]) {
            r[i] = { id: i, childs: [] }
        }
    }
    for (let i in tree) {
        for (let j in tree[i]) {
            if (!tree[i][j]) {
                continue
            }
            r[i].childs.push(r[j])
        }
    }
    //
    let queue = [r[start]];
    let marked = [];
    let res = []

    res.push({ _key: r[start].id, prev: {} })
    while (queue.length) {
        let node = queue.shift();
        if (node.id === end) {
            break;
        }
        if (marked[node.id]) {
            continue
        }
        marked[node.id] = true;
        for (let child of node.childs) {
            queue.push(child)
            res.push({ _key: child.id, prev: node })
        }
    }

    let kek = res.find((c) => c._key == end);
    if (!kek) {
        console.log(-1)
        return
    }
    let path = [];
    while (kek && kek._key != start) {
        path.push(kek?._key)
        kek = res.find((c) => c._key == kek?.prev?.id)
    }
    path.push(kek?._key)
    console.log(path.length - 1)
    console.log(path.reverse().map((c) => Number(c) + 1).join(" "))
}
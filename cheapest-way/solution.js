let solution = () => {
    let input = [
        "5 5",
        "1 1 1 1 1",
        "3 100 100 100 100",
        "1 1 1 1 1",
        "2 2 2 2 1",
        "1 1 1 1 1",
    ];
    let a = input.shift();

    let [m, n] = a.split(" ").map(Number)
    m--
    n--
    let costs = input.map((c) => c.split(" ").map(Number));
    let graph = {};

    let dist = [];

    for (let i = 0; i <= m; i++) {
        graph[i] = [];
        for (let j = 0; j <= n; j++) {
            dist[`${i}-${j}`] = Infinity;
            graph[i][j] = {
                child: [],
                cost: costs[i][j],
                id: `${i}-${j}`
            };
        }
    }
    graph[m][n] = { end: true, cost: costs[m][n], id: `${m}-${n}`, child: [] };

    for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= n; j++) {
            if (graph?.[i + 1]?.[j]) {
                graph[i][j].child.push(graph[i + 1][j]);
            }
            if (graph?.[i]?.[j + 1]) {
                graph[i][j].child.push(graph[i][j + 1]);
            }

        }
    }
    let queue = [graph[0][0]];
    dist[`0-0`] = 0;
    let marked = [];
    let res = [];
    while (queue.length) {
        let node = queue.shift();
        if (marked[node.id]) {
            continue
        }
        marked[node.id] = true;
        for (let child of node.child) {
            if (dist[child.id] > dist[node.id] + node.cost) {
                dist[child.id] = dist[node.id] + node.cost
                queue.push(child)
                res = res.filter((c) => c._key != child.id)
                res.push({ _key: child.id, prev: node })
            }
        }
    }

    let kek = res.find((c) => c._key == `${m}-${n}`);
    let path = [];
    while (kek && kek._key != `${0}-${0}`) {
        path.push(kek?._key)
        kek = res.find((c) => c._key == kek?.prev?.id)
    }
    path.push(`${0}-${0}`)

    console.log(path.reverse().filter((c) => c).reduce((acc, a) => acc += costs[a.split("-")[0]][a.split("-")[1]], 0))


}
solution()
class _node {
    left = null;
    right = null;
    val = null;
}
let solution = () => {
    let input = '7 3 2 1 9 5 4 6 8 0';

    const arr = input.split(' ').map(Number);
    arr.pop();

    let root = new _node();
    root.val = arr.shift();

    while (arr.length) {
        let t = arr.shift();
        let dfs = (node, t) => {
            if (node.val > t) {
                if (!node.left) {
                    node.left = new _node();
                    node.left.val = t;
                    return
                }
                dfs(node.left, t)
            }
            if (node.val < t) {
                if (!node.right) {
                    node.right = new _node();
                    node.right.val = t;
                    return
                }
                dfs(node.right, t)
            }
        }
        dfs(root, t)
    }


    let max = 0;
    let stack = [1];
    let dfs = (node) => {
        max = max < stack.length ? stack.length : max;
        if (node.left) {
            stack.push(1)
            dfs(node.left)
            stack.pop();
        }
        if (node.right) {
            stack.push(1)
            dfs(node.right)
            stack.pop()
        }
    }
    dfs(root)
    console.log(max)
}
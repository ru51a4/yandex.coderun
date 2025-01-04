<?php

class node
{
    public $val = "";
    public $childs = [];
    public $cnt_childs = 0;
}

error_reporting(E_ERROR | E_PARSE);
ini_set('memory_limit', '256M');
ini_set('max_execution_time', 300);

fopen('php://stdin', 'r');
$count = intval(trim(fgets(STDIN)));
$nums = [];
while ($string = trim(fgets(STDIN))) {
    $nums[] = $string;
}

$tree = [];
$fuck = [];
foreach ($nums as $item) {
    $c = explode(" ", $item);
    $tree[$c[0]] = new node();
    $tree[$c[0]]->val = $c[0];

    $tree[$c[1]] = new node();
    $tree[$c[1]]->val = $c[1];
    $fuck[$c[0]] = true;
}

$root = "";
foreach ($nums as $item) {
    $c = explode(" ", $item);
    $tree[$c[1]]->childs[] = $tree[$c[0]];
    if (empty($fuck[$c[1]])) {
        $root = $c[1];
    }
}
$stack = [];
$dfs = function ($node) use (&$stack, &$dfs, &$tree) {
    foreach ($stack as &$item) {
        $item->cnt_childs++;
    }
    array_push($stack, $node);
    foreach ($node->childs as $child) {
        $dfs($child);
    }
    array_pop($stack);
};
$dfs($tree[$root]);
$res = [];
foreach ($tree as $a => $node) {
    $res[] = $a . " " . $node->cnt_childs;
}
sort($res);
foreach ($res as $item) {
    echo $item . "\n";
}

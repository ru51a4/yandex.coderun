package main

import (
	"fmt"
)

type node struct {
	ch         string
	children   []*node
	value      bool
	_new       bool
	cnt_childs int
}
type res struct {
	res [][]*node
	kek int
}

func deepclone(lol []*node) []*node {
	r := []*node{}
	for _, a := range lol {
		cn := node{}
		cn.ch = a.ch
		cn.value = a.value
		cn.cnt_childs = len(a.children)
		if a.value && len(a.children) > 0 {
			cn.cnt_childs++
		}
		r = append(r, &cn)
	}
	return r
}
func main() {
	r := 0
	_string := []string{"hello", "hellow", "hellowe", "hello"}

	_start_node := node{}

	var check func(_node *node, ch string) *node
	check = func(_node *node, ch string) *node {
		for _, child := range _node.children {
			if string(child.ch) == string(ch) {
				return child
			}
		}
		return nil
	}

	var createTree func(str string)
	createTree = func(str string) {
		var _node = &_start_node
		for i := 0; i < len(str); i++ {
			c := check(_node, string(str[i]))
			if c == nil {
				var prevNode = _node
				__node := node{
					ch: string(str[i]),
				}
				prevNode.children = append(prevNode.children, &__node)
				_node = &__node
			} else {
				_node = c
			}
		}
		_node.value = true
	}

	var _get func(_start node, str string) res
	_get = func(_start node, str string) res {
		var _node = &_start
		stack := []*node{}
		var _res = [][]*node{}
		var dfs func(_start node, str string, _new bool)
		dfs = func(_start node, str string, _new bool) {
			stack = append(stack, &_start)
			if _start.value {
				p := deepclone(stack)
				_res = append(_res, p)
			}
			if len(str) == 0 {
				stack = stack[:len(stack)-1]

				return
			}

			i := 0
			c := check(&_start, string(str[i]))

			if c != nil {
				dfs(*c, str[i+1:], false)
			}
			if _start.value {
				for _, s := range _node.children {
					if s.ch == string(str[i]) {
						dfs(*_node, str, true)
					}
				}
			}
			stack = stack[:len(stack)-1]
		}
		dfs(*_node, str, true)
		return res{res: _res}
	}
	r = 0
	for _, _str := range _string {
		curr := _get(_start_node, _str)
		fmt.Println(_str)
		kek := 0
		kek2 := 0

		if len(curr.res) > 0 {
			c := 0
			for _, b := range curr.res[0] {
				if b.ch == "" {
					c++
				} else if b.cnt_childs > 1 {
					kek = kek + kek2
					kek++
					kek2 = 0
				} else {
					kek2++
				}

			}
			lalke := len(_str) - len(curr.res[0]) + c + kek
			kek = 0
			kek2 = 0

			for _, a := range curr.res[1:] {
				c := 0
				for _, b := range a {
					if b.ch == "" {
						c++
					} else if b.cnt_childs > 1 {
						kek = kek + kek2
						kek++
						kek2 = 0
					} else {
						kek2++
					}

				}

				if len(_str)-len(a)+c+kek < lalke {
					lalke = len(_str) - len(a) + c + kek
				}
			}
			r = r + lalke
			fmt.Println("_")
		} else {
			r = r + len(_str)
		}
		fmt.Println(r)
		fmt.Println("___")
		createTree(_str)

	}
	fmt.Println("output:")
	fmt.Print(r)

}

---
title: hook-useEffect
date: 2022-03-21 17:31:07
permalink: /pages/a6152f/
categories:
  - react
tags:
  - 
---
由于函数组件没有生命周期，可以使用useEffect来替代，他可以看做是componentDidMount、componentDidUpdate、componentWillUnmount这三个函数的组合。
```JavaScript
import React, { useState, useEffect } from 'react';
 
export default function Page2 () {
	const [count, setCount] = useState(0);

	useEffect(() => {
		getDatas ()
	})

	const getDatas = () => {
		let arr = [134,2345,355,46]
		console.log('arr', arr)
	}

	return(
		<div>
			<p>You clicked {count} times</p>
			<button onClick={() => setCount(count + 1)}>按钮</button>
			<div>This is Page2!</div>
		</div>
	);
}
```
这里，在页面初次加载完会执行getDatas方法，控制台会打印出数据，每次点击按钮更新count后，控制台会依次执行getDatas方法打印出数据，如果想通知React跳过对effect的调用，可以传一个空数组作为useEffect的第二个参数，这样就只会运行一次effect(仅在组件挂在和卸载时执行)。
```JavaScript
useEffect(() => {
	getDatas ()
}, [])
```
同样的，如果某些特定值在两次渲染之间没有发生变化，可以通知React跳过对effect的调用，比如只有count属性变化时才去调用effect，其他情况下不调用effect。
```JavaScript
useEffect(() => {
	getDatas ()
}, [count])
```
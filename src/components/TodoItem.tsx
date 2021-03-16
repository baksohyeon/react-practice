import { Button } from 'antd'
import React, { useState } from 'react'
import { Item } from '../Models/Item'
import 'antd/dist/antd.css'

interface TodoItemInterface {
	itemArray: Item[]
	spanHandler: (id:number) => void
	deleteHandler: (id:number) => void
}
const TodoItem = ({ itemArray, spanHandler, deleteHandler }: TodoItemInterface) => {
	const spanStyle = (done: boolean) => {
		return {
			textDecoration: done ? "line-through" : "unset",
			cursor:"pointer"
		}
	}
	return (
		<div className="todo-item-div">
			{
				itemArray.map((item) => (
					<div>
						<span onClick={() => spanHandler(item.id)} style={spanStyle(item.done)}>아이디:{ item.id }, 컨텐트: { item.content }</span>
						<Button type="link" onClick={() => deleteHandler(item.id)}>지우기</Button>
					</div>
				))
			}
		</div>
	)
}

export default TodoItem
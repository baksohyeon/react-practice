import React, { useState } from 'react'
import 'antd/dist/antd.css'
import '../styles/TodoList.css'
import { Button, Input } from 'antd'
import { Item } from '../Models/Item'
import TodoItem from './TodoItem'

const TodoList = () => {
	const [ inputText, setInputText ] = useState<string>("")
	const [ itemArray, setItemArray ] = useState<Item[]>([])
	const [ itemId, setItemId ] = useState<number>(1)

	const onChangeInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.currentTarget
		setInputText(value)
	}
	const onClickFormBtnHandler = () => {
		const newItem: Item = {
			id: itemId,
			content: inputText,
			done: false
		} as Item
		setItemId(itemId + 1)
		itemArray.push(newItem)
		setItemArray(itemArray)
		setInputText("")
	}
	const onClickDeleteHandler = (itemId: number) => {
		const filteredItemArray = itemArray.filter((item) => (
			!(item.id === itemId))
		)
		return filteredItemArray
	}
	const onClickSpanHandler = (itemId: number) => {
		const updatedItemArray = itemArray.map((item) => {
			if(item.id === itemId){
				return {
					id: item.id,
					content: item.content,
					done: !item.done
				} as Item
			} else {
				return item
			}
		})
		setItemArray(updatedItemArray)
	}

	return (
		<>
			<h1 style={{marginTop: "15px"}}>To do List 만들기</h1>
			<div style={{margin:"0 55px"}}>
				<form>		
					<div style={{display:"flex"}}>
						<Input onChange={(e) => onChangeInputHandler(e)} value={inputText} placeholder="할 일을 입력해주세요." />
						<Button type="primary" onClick={() => onClickFormBtnHandler()}>입력하기</Button>
					</div>
				</form>
				<TodoItem itemArray={itemArray} spanHandler={onClickSpanHandler} deleteHandler={onClickDeleteHandler}></TodoItem>
			</div>
		</>
	)
}

export default TodoList
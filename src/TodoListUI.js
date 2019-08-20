/* eslint-disable react/require-default-props */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';

const TodoListUI = (props) => {
	const {
		inputValue,
		changeInputValue,
		clickBtn,
		list,
		deleteItem,
	} = props;
	return (
		<div style={{ margin: '10px' }}>
			<div>
				<Input
					placeholder="Write Something"
					value={inputValue}
					style={{ width: '250px', marginRight: '10px' }}
					onChange={changeInputValue}
				/>
				<Button type="primary" onClick={clickBtn}>
					增加
				</Button>
			</div>
			<div style={{ margin: '10px', width: '300px' }}>
				<List
					bordered
					dataSource={list}
					renderItem={(item, index) => (
						<List.Item
							onClick={() => {
								deleteItem(index);
							}}
						>
							{item}
						</List.Item>
					)}
				/>
			</div>
		</div>
	);
};

TodoListUI.propTypes = {
	inputValue: PropTypes.string,
	changeInputValue: PropTypes.func,
	clickBtn: PropTypes.func,
	list: PropTypes.shape([]),
	deleteItem: PropTypes.func,
};

export default TodoListUI;

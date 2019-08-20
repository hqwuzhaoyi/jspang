import { CHANG_INPUT, ADD_ITEM, DELETE_ITEM } from './actionTypes'

export const changeInputAction = (value) => ({
    type: CHANG_INPUT,
    value
})

export const addItemAction = () => ({
    type: ADD_ITEM,
})

export const deleteItemAction = (index) => ({
    type: DELETE_ITEM,
    index
})
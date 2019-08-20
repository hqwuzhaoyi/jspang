import { CHANG_INPUT, ADD_ITEM, DELETE_ITEM } from './actionTypes'

const defaultState = {
    inputValue: "",
    list: [  "早8点开晨会，分配今天的代码任务",
    "早8点开晨会，分配今天的代码任务",
    "早8点开晨会，分配今天的代码任务"    ]
}

export default (state = defaultState, action) => {
    let newState = JSON.parse(JSON.stringify(state));
    switch(action.type) {
        case CHANG_INPUT :
            newState.inputValue = action.value;
            return newState;
        case ADD_ITEM :
            if(newState.inputValue ===''){
                return newState;
            }
            newState.list.push(newState.inputValue)
            newState.inputValue = ''
          return newState;
        case DELETE_ITEM :
            newState.list.splice(action.index,1)
            return newState;
        default: 
            return state; 
    }
    
}
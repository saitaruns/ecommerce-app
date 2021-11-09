
const initialState = [{id:Date.now(),name:"First Todo",finished:false}]

export const ACTIONS = {
    ADD_TODO : "add-todo",
    DELETE_TODO : "remove-todo",
    TOGGLE_TODO : "toggle-todo"
}

const TodoReducer = (state = initialState,action)=>{
    if(action.type === ACTIONS.ADD_TODO){
        return [
            ...state,
            {
                id : action.payload.id,
                name : action.payload.name,
                finished: action.payload.finished,
            }
        ]
    }
    if(action.type === ACTIONS.TOGGLE_TODO){
        return state.map((todo)=>{
            if(todo.id===action.payload.id){
                todo.finished = !todo.finished
            }
            return todo
        })
    }
    if(action.type === ACTIONS.DELETE_TODO){
        return state.filter(todo => todo.id !== action.payload.id )
    }
    return state
}

export default TodoReducer;
const CountReducer = (state={count:0},actions)=>{
    if(actions.type === "INCREMENT"){
        return {count : state.count += 1}
    }
    if(actions.type === 'DECREMENT'){
        return {count : state.count -= 1}
    }
    if(actions.type === 'RESET'){
        return {count : state.count = 0}
    }
    return state
}

export default CountReducer
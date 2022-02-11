import { createStore } from "redux";
const initialState = []
export default ()=>{
    const store = createStore((state = initialState, action) =>{
        switch(action.type){
            case "add":
                return initialState.push(action.book)
            default:
                return state
        }
    })

    return store
}


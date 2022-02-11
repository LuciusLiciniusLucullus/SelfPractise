const books = []

const rootReducer = (state = books, action) =>{
    switch(action.type){
        case "add":
            console.log(action.type)
            return state.push(action.book)
        default:
            return state;
    }
}

export default rootReducer;
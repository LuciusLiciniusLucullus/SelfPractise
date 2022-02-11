export const addNewBook = (book) =>{
    return (dispatch) =>{
        dispatch({
            type: "add",
            payload: book
        })
    }
}
const initialState ={
    books: [],
    ids:[]
}

export default (state=initialState, action) => {
    switch (action.type) {
        case 'SET_BOOK':
    return {
        // если просто загрузить
        books: action.payload
    }
        case 'ADD_BOOKS':
            return {
                ...state,
            //если добавляется много книг
            books: [
                ...state.books,
                // в конец вставим обьект который передали через экшен
                action.payload
            ]
    }
        default:
            return state;
    }
}
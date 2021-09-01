const initialState ={
   items:[]
}

export default (state=initialState, action) => {
    switch (action.type) {
        case 'SET_BOOKS':
    return {
        //первое вернуть прежнее состояние а после загрузить
        ...state,
        // если просто загрузить
        items: action.payload,
        isReady: true,
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
    case 'SET_IS_READY':
            return {
            ...state,
            isReady: action.payload
    }

        default:
            return state;
    }
}
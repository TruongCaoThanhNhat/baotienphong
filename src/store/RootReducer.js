const loadHistory = () => {
    let his = localStorage.getItem('history');
    if (his) {
        return JSON.parse(his);
    } else {
        return [];
    }
}
const loadComment = ()=> {
    let cmt = localStorage.getItem('comment');
    if(cmt){
        return JSON.parse(cmt);
    }else {
        return [];
    }
}

const initState = {
    categorys: [],
    history: loadHistory(),
}
export const root = (state = initState, action) => {
    switch (action.type) {
        case 'category.load':
            return {
                ...state,
                categorys: action.payload
            };

        case 'history.add':
            {
                let his = [...state.history, action.payload];
                localStorage.setItem('history', JSON.stringify(his));
                return {
                    ...state,
                    history: [
                        ...his
                    ]
                }
            }
        // case 'comment.add':
        // {
        //     let cmt = [...state.comment, action.payload];
        //     localStorage.setItem('comment', JSON.stringify(cmt));
        //     return {
        //         ...state,
        //         comment: [
        //             ...cmt
        //         ]
        //     }
        // }

        case 'history.delete': {
            let his = state.history.filter(item => item.id !== action.payload.id);
            localStorage.setItem('history', JSON.stringify(his));
            return {
                ...state,
                history: his
            }
        }
        default:
            return state;
    }
}

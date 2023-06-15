const loadHistory = () => {
    let his = localStorage.getItem('history');
    if (his) {
        return JSON.parse(his);
    } else {
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
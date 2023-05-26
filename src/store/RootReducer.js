const initState = {
    categorys: [],
}
export const root = (state = initState, action) => {
    switch (action.type) {
        case 'category.load':
            return {
                ...state,
                categorys: action.payload
            };

        default:
            return state;
    }
}
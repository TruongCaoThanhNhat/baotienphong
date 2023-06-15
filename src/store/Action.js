export const loadCategory = (data) => {
    return {
        type: 'category.load',
        payload: data
    }
}

export const addHistory = (data) => {
    return {
        type: 'history.add',
        payload: data
    }
}
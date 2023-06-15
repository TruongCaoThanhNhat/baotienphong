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
export const deleteHistory = (data) => {
    return {
        type: 'history.delete',
        payload: data
    }
}

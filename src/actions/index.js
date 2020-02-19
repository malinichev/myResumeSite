const fechInit = () => {
    return {
        type: 'FETCH_INIT',
    };
};
const fechSuccess = (newItem) => {
    return {
        type: 'FETCH_SUCCESS',
        payload: newItem
    };
};
const fechFailure = (newItem) => {
    return {
        type: 'FETCH_FAILURE'
    };
};

export {
    itemsLoaded,
    fechSuccess,
    fechFailure
};
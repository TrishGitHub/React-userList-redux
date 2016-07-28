export function addUser(startParams) {
    const action = {
        type: 'ADD_USER',
        showUsers:startParams.showUsers,
    };
    return action;
}

export function removeUser(showUsers) {
    const action = {
        type: 'REMOVE_USER',
        showUsers: showUsers.showUsers
    };
    return action;
}

export function userSearch(showUsers) {
    const action = {
        type: 'SEARCH_USER',
        search: showUsers.search,
        showUsers: showUsers
    };
    return action;
}

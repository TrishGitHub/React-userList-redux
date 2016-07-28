
const initialState = {
    showUsers: [{
        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01.jpg",
        name: "Vincent Porter",
        status: "Lorem ipsum dolor sit amet"
    }, {
        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_03.jpg",
        name: "Mike Thomas",
        status: "Lorem ipsum dolor sit amet"
    }, {
        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_04.jpg",
        name: "Erica Hughes",
        status: "Lorem ipsum dolor sit amet"
    }, {
        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_05.jpg",
        name: "Ginger Johnston",
        status: "Lorem ipsum dolor sit amet"
    }, {
        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_09.jpg",
        name: "Dean Henry",
        status: "Lorem ipsum dolor sit amet"
    }],
    search: ''
}
export default function patentDetailsReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_USER': {
            const { showUsers } = action
            return Object.assign({}, state, {
                showUsers
            })
        }
        case 'REMOVE_USER': {
            const { showUsers } = action
            return Object.assign({}, state, {
                showUsers

            })
        }
        case 'SEARCH_USER': {
            const { search  } = action
            return Object.assign({}, state, {
                search
            })
        }
        default: {
            return state;
        }
    }
}

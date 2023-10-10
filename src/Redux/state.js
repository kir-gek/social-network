let state = {
    dialogsPage: {
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'Hello? how are you?'},
            {id: 3, message: 'Hello? how are you?'},
            {id: 4, message: 'YO'},
            {id: 5, message: 'YO'},
            {id: 6, message: 'YO'}
        ],
        dialogs: [
            {id: 1, name: 'Pasha'},
            {id: 2, name: 'Masha'},
            {id: 3, name: 'Marina'},
            {id: 4, name: 'John'},
            {id: 5, name: 'Bob'}
        ]
    },
    profilePage: {
        posts: [
            {id: 1, message: 'Hey, how are you?', likeCount: 2},
            {id: 2, message: "It's my first post", likeCount: 13},
            {id: 2, message: "It's my first post", likeCount: 13},
            {id: 2, message: "It's my first post", likeCount: 13}
        ]
    }
}

export default state;
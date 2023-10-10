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
    },
    navBar: {
        friends: [
            {
                id: 1,
                imgURL: "https://bogatyr.club/uploads/posts/2023-02/thumbs/1677456604_bogatyr-club-p-avatarki-na-chernom-fone-foni-2.png",
                name: 'Pasha'
            },
            {
                id: 2,
                imgURL: "https://png.pngtree.com/png-clipart/20230625/original/pngtree-cute-profile-pictures-png-image_9220720.png",
                name: 'Masha'
            },
            {id: 3, imgURL: "https://cdn.freelance.ru/images/att/1324133_900_600.png", name: 'Marina'}
        ]
    }
}

export default state;
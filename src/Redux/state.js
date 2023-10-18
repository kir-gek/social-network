import {rerenderEntireTree} from "../render";

let state = {
    dialogsPage: {
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'Hello? how are you?'},
            {id: 3, message: 'Hello? how are you?'},
            {id: 4, message: 'YO'}
        ],
        dialogs: [
            {id: 1, name: 'Pasha'},
            {id: 2, name: 'Masha'},
            {id: 3, name: 'Marina'},
            {id: 4, name: 'John'},
            {id: 5, name: 'Bob'}
        ],
        newMessageTXT: 'mm'
    },
    profilePage: {
        posts: [
            {id: 1, message: 'Hey, how are you?', likeCount: 2},
            {id: 2, message: "It's my first post", likeCount: 13},
            {id: 3, message: "It's my first post", likeCount: 13},
            {id: 4, message: "It's my first post", likeCount: 13}
        ],
        newPostText: 'PP'
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

export let addPost = () => {
    state.profilePage.posts.push(
        {id: 5, message: state.profilePage.newPostText, likeCount: 0}
    );
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}
export let addNewPostTXT = (newPostTXT) => {
    state.profilePage.newPostText = newPostTXT;
    rerenderEntireTree(state);
}
export let addMessage = (newMessage) => {
    state.dialogsPage.messages.push(
        {id: 3, message: newMessage}
    )
    state.dialogsPage.newMessageTXT = '';
    rerenderEntireTree(state);
}
export let addNewMessageTXT = (newMessageTXT) => {
    state.dialogsPage.newMessageTXT = newMessageTXT;
    rerenderEntireTree(state);
}

export default state;
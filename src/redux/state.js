let rerenderEntireTree = () => {

}

let state = {
   profilePage: {
      posts: [
         { id: 1, massage: "Мой первый пост", likes: 150, },
      ],
      newPostText: '',
   },
   dialogsPage: {
      dialogs: [
         { id: 0, name: 'Чёрный властелин' },
         { id: 1, name: 'Даун' },
         { id: 2, name: 'Шкальник' },
         { id: 3, name: 'Ян' },
         { id: 4, name: 'Александр' },
         { id: 5, name: 'Россеянская болельщица' },
         { id: 6, name: 'Рогозин' },
         { id: 7, name: 'Белый властелин' },
         { id: 8, name: 'Иван' },
      ],
      massages: [
         { id: 1, massage: "Слава Польше!" },
         { id: 2, massage: "Слава Больцеровичу!" },
         { id: 3, massage: "Слава Польскому Народу!" },
      ],
      newMassageText: '',
   },
   siteBar: [
      { id: 1, name: "Andrey" },
      { id: 2, name: "Sasha" },
      { id: 3, name: "Sveta" },
   ],
}

export let store={
 addPost(){
   let newPost = {
      id: state.profilePage.posts.length + 1,
      massage: state.profilePage.newPostText,
      likes: 50,
   }
   state.profilePage.posts.push(newPost);
   rerenderEntireTree(state);
   state.profilePage.newPostText = '';
 },
 updateNewPostText(newText) {
   state.profilePage.newPostText = newText;
   rerenderEntireTree(state);
 },
addMassage() {
   let newMassage = {
      id: state.dialogsPage.massages.length + 1,
      massage: state.dialogsPage.newMassageText,
   }
   state.dialogsPage.massages.push(newMassage);
   rerenderEntireTree(state);
   state.dialogsPage.newMassageText = '';
 },
 updateNewMassageText(text) {
   state.dialogsPage.newMassageText = text;
   rerenderEntireTree(state);
},
}

export const subscribe = (observer) => {
   rerenderEntireTree = observer;
}
export default state;
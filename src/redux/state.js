let store = {
   _state: {
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
   },
   getState() {
      return this._state;
   },
   _callSubscriber() {
   },
   addPost() {
      let newPost = {
         id: this._state.profilePage.posts.length + 1,
         massage: this._state.profilePage.newPostText,
         likes: 50,
      }
      this._state.profilePage.posts.push(newPost);
      this._callSubscriber(this._state);
      this._state.profilePage.newPostText = '';
   },
   updateNewPostText(newText) {
      this._state.profilePage.newPostText = newText;
      this._callSubscriber(this._state);
   },
   addMassage() {
      let newMassage = {
         id: this._state.dialogsPage.massages.length + 1,
         massage: this._state.dialogsPage.newMassageText,
      }
      this._state.dialogsPage.massages.push(newMassage);
      this._callSubscriber(this._state);
      this._state.dialogsPage.newMassageText = '';
   },
   updateNewMassageText(text) {
      this._state.dialogsPage.newMassageText = text;
      this._callSubscriber(this._state);
   },
   subscribe(observer) {
      this._callSubscriber = observer;
   },
}

export default store;
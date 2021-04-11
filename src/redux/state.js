import { rerenderEntireTree } from '../render';

let state = {
   profilePage: {
      posts: [
         { id: 1, massage: "Мой первый пост", likes: 150, },
      ],
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
   },
   siteBar: [
      { id: 1, name: "Andrey" },
      { id: 2, name: "Sasha" },
      { id: 3, name: "Sveta" },
   ],
}
export let addPost = (postMassage) => {
   let newPost = {
      id: state.profilePage.posts.length + 1,
      massage: postMassage,
      likes: 50,
   }
   state.profilePage.posts.push(newPost);
   rerenderEntireTree(state);
   //console.log(state.profilePage.posts);

}
export default state;
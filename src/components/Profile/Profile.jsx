import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import Posts from './MyPosts/Post/Post';
import s from "./Profile.module.scss";
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = () => {
   let posts = [
      { name: 'Black reign', massage: "kiss my ass and foots", likes: "100500", ava: "http://risovach.ru/upload/2019/04/generator/chernyy-vlastelin_205750111_orig_.jpg" },
      { name: 'Даун', massage: "I agree with you! I want to do it!", likes: "15", ava: "https://omoro.ru/wp-content/uploads/2018/11/rozshi_parnei-1.jpg" },
      { name: 'Шкальник', massage: "It's cool!", likes: "5", ava: "https://www.meme-arsenal.com/memes/111830aa0dd58a937ba0ad0f787e5a97.jpg" },
      { name: 'Ян', massage: "Это твое?", likes: "50", ava: "https://sun9-6.userapi.com/impf/c851324/v851324358/175a63/SHzMVFdl13Y.jpg?size=1280x621&quality=96&sign=80ca3093c3e408533c30ab0d13c4802a&type=album" },
      { name: 'Александр', massage: "Ну как видишь", likes: "150", ava: "https://sun9-22.userapi.com/impf/c857428/v857428728/c1d38/YAhH1xwuFYI.jpg?size=1280x960&quality=96&sign=9dd73da1d10e6c080b827595a160c7be&type=album" },
      { name: 'Black reign', massage: "I want to fuck off russian girl", likes: "1000", ava: "http://risovach.ru/upload/2019/04/generator/chernyy-vlastelin_205750111_orig_.jpg" },
      { name: 'Россеянская болельщица', massage: "I can to do it cheap!", likes: "250", ava: "https://kaifolog.ru/uploads/posts/2018-06/1530153755_00_5.jpg" },
      { name: 'Рогозин', massage: "I have a trampoline! It's comfortable on it!", likes: "10", ava: "https://cdn.thealphacentauri.net/wp-content/uploads/usercontent/posts/25415_cover.jpg?x15573" },
   ]
   let postsElements = posts.map(p => (<Posts name={p.name} massage={p.massage} likes={p.likes} ava={p.ava} />))
   return (
      <div>
         <ProfileInfo />
         <MyPosts elements={postsElements} />
      </div>
   )
}
export default Profile;
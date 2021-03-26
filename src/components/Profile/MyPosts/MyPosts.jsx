import React from 'react';
import s from "./MyPosts.module.scss";
import Posts from './Post/Post';

let users = [
   { name: 'Black reign', massage: "kiss my ass and foots", massage1: "I want to fuck off russian girl", likes: "100500", ava: "http://risovach.ru/upload/2019/04/generator/chernyy-vlastelin_205750111_orig_.jpg" },
   { name: 'Даун', massage: "I agree with you! I want to do it!", likes: "15", ava: "https://omoro.ru/wp-content/uploads/2018/11/rozshi_parnei-1.jpg" },
   { name: 'Шкальник', massage: "It's cool!", likes: "5", ava: "https://www.meme-arsenal.com/memes/111830aa0dd58a937ba0ad0f787e5a97.jpg" },
   { name: 'Ян', massage: "Это твое?", likes: "50", ava: "https://sun9-6.userapi.com/impf/c851324/v851324358/175a63/SHzMVFdl13Y.jpg?size=1280x621&quality=96&sign=80ca3093c3e408533c30ab0d13c4802a&type=album" },
   { name: 'Александр', massage: "Ну как видишь", likes: "150", ava: "https://sun9-22.userapi.com/impf/c857428/v857428728/c1d38/YAhH1xwuFYI.jpg?size=1280x960&quality=96&sign=9dd73da1d10e6c080b827595a160c7be&type=album" },
   { name: 'Россеянская болельщица', massage: "I can to do it cheap!", likes: "250", ava: "https://kaifolog.ru/uploads/posts/2018-06/1530153755_00_5.jpg" },
   { name: 'Рогозин', massage: "I have a trampoline! It's comfortable on it!", likes: "10", ava: "https://cdn.thealphacentauri.net/wp-content/uploads/usercontent/posts/25415_cover.jpg?x15573" },
]


const MyPosts = () => {
   return (
      <div>
         <textarea name="" id="" cols="30" rows="10"></textarea>
         <button>Add post</button>
         <div>
            <div>В сети: {users.length} пользователей</div>
         </div>
         <div className={s.posts}>
            <Posts name={users[0].name} massage={users[0].massage} likes={users[0].likes} ava={users[0].ava} />

            <Posts name={users[1].name} massage={users[1].massage} likes={users[1].likes} ava={users[1].ava} />

            <Posts name={users[2].name} massage={users[2].massage} likes={users[2].likes} ava={users[2].ava} />

            <Posts name={users[3].name} massage={users[3].massage} likes={users[3].likes} ava={users[3].ava} />

            <Posts name={users[4].name} massage={users[4].massage} likes={users[4].likes} ava={users[4].ava} />

            <Posts name={users[0].name} massage={users[0].massage1} likes={users[0].likes} ava={users[0].ava} />

            <Posts name={users[5].name} massage={users[5].massage} likes={users[5].likes} ava={users[5].ava} />

            <Posts name={users[6].name} massage={users[6].massage} likes={users[6].likes} ava={users[6].ava} />

         </div>
      </div>
   )
}
export default MyPosts;
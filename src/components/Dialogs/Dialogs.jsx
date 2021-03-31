import React from 'react';
import { NavLink } from 'react-router-dom';
import s from "./Dialogs.module.scss";

const Dialog = (obj) => {
   let path = "/Dialogs/" + obj.id
   return (
      <div >
         <NavLink to={path} className={s.dialog} activeClassName={s.active}>{obj.name}</NavLink>
      </div>
   )
}
const Massages = (props) => {
   return (
      <div className="message">{props.messages}</div>
   )
}

const Dialogs = () => {
   let dialogs = [
      { id: 0, name: 'Чёрный властелин', ava: "http://risovach.ru/upload/2019/04/generator/chernyy-vlastelin_205750111_orig_.jpg" },
      { id: 1, name: 'Даун', ava: "https://omoro.ru/wp-content/uploads/2018/11/rozshi_parnei-1.jpg" },
      { id: 2, name: 'Шкальник', ava: "https://www.meme-arsenal.com/memes/111830aa0dd58a937ba0ad0f787e5a97.jpg" },
      { id: 3, name: 'Ян', ava: "https://sun9-6.userapi.com/impf/c851324/v851324358/175a63/SHzMVFdl13Y.jpg?size=1280x621&quality=96&sign=80ca3093c3e408533c30ab0d13c4802a&type=album" },
      { id: 4, name: 'Александр', ava: "https://sun9-22.userapi.com/impf/c857428/v857428728/c1d38/YAhH1xwuFYI.jpg?size=1280x960&quality=96&sign=9dd73da1d10e6c080b827595a160c7be&type=album" },
      { id: 5, name: 'Россеянская болельщица', ava: "https://kaifolog.ru/uploads/posts/2018-06/1530153755_00_5.jpg" },
      { id: 6, name: 'Рогозин', ava: "https://cdn.thealphacentauri.net/wp-content/uploads/usercontent/posts/25415_cover.jpg?x15573" },
      { id: 7, name: 'Белый властелин', ava: "https://lh3.googleusercontent.com/proxy/kTSq_b6qWNTicV1rBd6wbnMD7iE17J1x-LVf5Nrnd5hGSBq0RzxUXGhJx3s8wdaVNWPNPHOAqlu8g52cnJHJUNN-WZg8tB_v8SShvlYLRGPV0-pyHSmDIsMVKIAr70glYHRQMhnkQfOKUBaA" },
      { id: 8, name: 'Иван', ava: "https://pimmedia.egger.com/l/decor/U999_2/s/Detail/f/881x513/8803439149086" },
   ]
   let dialogElement =
      dialogs.map(dialog => <Dialog name={dialog.name} id={dialog.id} />)

   let massages = [
      { id: 1, massage: "Слава Польше!" },
      { id: 2, massage: "Слава Больцеровичу!" },
      { id: 3, massage: "Слава Польскому Народу!" },
   ]
   let messageElement = massages.map(massage => <Massages messages={massage.massage} />);
   return (
      <div className={s.dialogs}>
         <div>
            <div className={s.dialogs_items}>
               {dialogElement}
            </div>
         </div>
         <div className={s.messages}>
            {messageElement}
         </div>
      </div>
   )
}
export default Dialogs;
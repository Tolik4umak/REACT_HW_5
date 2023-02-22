import React from 'react'
import { useDispatch } from 'react-redux'
import s from './style.module.css'
import { delAction } from '../../store/userReducer/userReducer'


export default function Users({users , title}) {

  const dispatch = useDispatch()


  return (
    <div className={s.users_container}>

      <h2 className={s.title}>{title}</h2>

       <div className={s.users}>

         {users.map(user => (
            <div className={s.user} key={user.id}>
              <div className={s.img}>
                <img src={user.link} alt="" />
              </div>
              <div className={s.info}>
                <p>{user.name}</p>
                <button onClick={() => dispatch(delAction(user.id))} >delete</button>
              </div>
            </div>
         ))}

       </div>

    </div>
  )

}

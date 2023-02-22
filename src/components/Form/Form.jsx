import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import s from './style.module.css'
import { addAction } from '../../store/userReducer/userReducer'



export default function Form() {
  
  const dispatch = useDispatch()  

  const [name, setName] = useState('')  
  const [link, setLink] = useState('')  
  const [gender, setGender] = useState('')  

  function createUser(e){
    e.preventDefault()
    const user = {
        id: Date.now(),
        name,
        link,
        gender
    }

    dispatch(addAction(user))

    setName('')
    setLink('')
    setGender('')

  }

  return (
        <form className={s.form} onSubmit={createUser}>
           <div className={s.input_container}>
                <input 
                    className={s.text}
                    required
                    type="text" 
                    name='name' 
                    value={name} 
                    placeholder='name'
                    onChange={(e) => setName(e.target.value)}
                />
                <input 
                    className={s.text}
                    required
                    type="text" 
                    name='link' 
                    value={link} 
                    placeholder='link'
                    onChange={(e) => setLink(e.target.value)}
                />
                <select className='text' placeholder='gender' required name="gender" id="" value={gender} onChange={(e) => setGender(e.target.value)}>
                    <option disabled value="">gender</option>
                    <option value="m">m</option>
                    <option value="f">f</option>
                </select>
           </div>
            <button className={s.button}>Добавить</button>
        </form>
  )
}

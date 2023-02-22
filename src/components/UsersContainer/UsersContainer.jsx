import React from 'react'
import { useSelector } from "react-redux";
import Users from '../Users/Users';
import s from './style.module.css'


export default function UsersContainer() {


  const users = useSelector(state => state.user)

  const man = users.filter(({gender}) => gender === 'm')
  const weman = users.filter(({gender}) => gender === 'f')




  return (
    <div className={s.container}>
        {man.length>0 ? <Users title={'Male'} users={man}/> : ''}
        {weman.length>0 ? <Users title={'Female'} users={weman}/> : ''}
    </div>
  )
}

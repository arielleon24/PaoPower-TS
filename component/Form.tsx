import Image from 'next/image'
import styles from '../styles/Home.module.css'
import data from '../component/data.json'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import axios from 'axios';
import { users } from '../data'

export default function Form(props:any) {
  const { register, handleSubmit } = useForm();

  const eng = props.eng
  const setReg = props.setReg
  
  const userDb:any = []


  axios.get('/api/users').then(res => {
    console.log(res.data)
    userDb.push(res.data)})
      
      const createId = () => {
        let count = userDb.length + 1
        return `user${count}`
      }
      
      const createUser = () => {
        let user = {
          id: createId(),
          // @ts-ignores ---
          username: document.getElementById('username').value,
          // @ts-ignores ---
          email: document.getElementById('email').value,
          // @ts-ignores ---
          password: document.getElementById('password').value
        } 
        userDb.push(user)
        console.log('localUserObject', userDb)
        axios.post('http://localhost:3000/api/users', {user}).then(res => {console.log("POSTDATA", res.data)})
        // console.log("/API/users", users)
      }
      
      const onSubmit = () => console.log(data)

  return (
    <div className={styles.container}>

    <main className={styles.mainForm}>
      <h1 className={styles.titleForm}>
      {eng ? data.eng.welcome : data.fr.welcome}
      </h1>

      <form method='post' onSubmit={handleSubmit(onSubmit)} action="/api/users" className={styles.form}>
        <div>
          <p className={styles.descriptionForm}>{eng ? data.eng.form : data.fr.form}</p>

          <label><b className={styles.description}>{eng ? data.eng.user : data.fr.user}</b></label>
          <input 
            type="text" 
            placeholder={eng ? data.eng.enterUser : data.fr.enterUser} 
            // name="username" 
            id="username" 
            {...register('data.username')}
            required />

          <label><b className={styles.description}>{eng ? data.eng.email : data.fr.email}</b></label>
          <input 
            type="email" 
            placeholder={eng ? data.eng.enterEmail : data.fr.enterEmail} 
            // name="email" 
            id="email" 
            {...register('data.email')}
            required />

          <label><b className={styles.description}>{eng ? data.eng.password : data.fr.password}</b></label>
          <input 
            type="password" 
            placeholder={eng ? data.eng.enterPassword : data.fr.enterPassword} 
            // name="password"
            id="password" 
            {...register('data.password')}
            required />

          <button type="submit" onClick={(event) => {
            event.preventDefault
            // @ts-ignores ---
            if(document.getElementById('username').value && document.getElementById('email').value && document.getElementById('password').value) {
              // createUser()
              console.log("register", register)
              setReg(true)
          }}} className={styles.registerbtn}><h1>{eng ? data.eng.save : data.fr.save}</h1></button>

        </div>
      </form>
    </main>
  </div>
  )
}
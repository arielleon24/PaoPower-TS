import React, { useState } from 'react';
import styles from '../styles/Home.module.css'
import data from '../component/data.json'
import { useForm } from 'react-hook-form'
import axios from 'axios';
import { users } from '../data'

const api = axios.create({
  baseURL: `http://localhost:3000/api/users`
})
export default function Form(props:any) {
  const eng = props.eng
  const setReg = props.setReg

  const { register } =useForm()

  const [username, setUsername] = useState('')
  const [inputEmail, setEmail] = useState('')
  const [inputPassword, setPassword] = useState('')
  const [test, setTest] = useState('')

  axios.get('/api/users').then(res => {
    console.log("API.GET DATA:", res.data)
  })

  const idGenerator =()=> {

    return `test`
  }
      
      const createUser = () => {
        console.log("hello")
        console.log(username, inputEmail, inputPassword)
        // let res = axios.post('/api/users', {
        //   id:idGenerator(), 
        //   username: username,
        //   email: inputEmail,
        //   password: inputPassword
        // }).then(res => {console.log("res",res)})

        let user = {
          id:idGenerator(), 
          username: username,
          email: inputEmail,
          password: inputPassword
        }

        return user

      }
      

  return (
    <div className={`${styles.container} ${styles.bg}`}>
    <main className={`${styles.mainForm} `}>
      <h1 className={styles.titleForm}>
      {eng ? data.eng.welcome : data.fr.welcome}
      </h1>

      <form onSubmit={((e) => {
        e.preventDefault

        })} className={styles.form}>
        <div>
          <p className={styles.descriptionForm}>{eng ? data.eng.form : data.fr.form}</p>

          <label><b className={styles.description}>{eng ? data.eng.user : data.fr.user}</b></label>
          <input 
            type="text" 
            placeholder={eng ? data.eng.enterUser : data.fr.enterUser} 
            id="username" 
            value={username}
            onChange={event=>{setUsername(event.target.value)}}
            required
            />

          <label><b className={styles.description}>{eng ? data.eng.email : data.fr.email}</b></label>
          <input 
            type="email" 
            placeholder={eng ? data.eng.enterEmail : data.fr.enterEmail} 
            id="email" 
            value={inputEmail}
            onChange={event=>{setEmail(event.target.value)}}
            required
            />

          <label><b className={styles.description}>{eng ? data.eng.password : data.fr.password}</b></label>
          <input 
            type="password" 
            placeholder={eng ? data.eng.enterPassword : data.fr.enterPassword} 
            id="password" 
            value={inputPassword}
            onChange={event=>{setPassword(event.target.value)}}
            required
            />


          <button type="submit" onClick={(event) => {
            event.preventDefault()
            console.log(inputEmail, inputPassword)
            createUser()
            // @ts-ignores ---
              setReg(true)
          }} className={styles.registerbtn}><h1>{eng ? data.eng.save : data.fr.save}</h1></button>

        </div>
      </form>
    </main>
    </div>
  )
}
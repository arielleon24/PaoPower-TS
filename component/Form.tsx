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

  const [username, setUsername] = useState('')
  const [inputEmail, setEmail] = useState('')
  const [inputPassword, setPassword] = useState('')

  const localDB= []

  api.get('/').then(res => {
    console.log("API.GET DATA:", res.data)
    localDB.push(res.data)
  })


  const idGenerator =()=> {
    const num = localDB.length + 1
    return `user${num}`
  }
      
      const createUser = () => {
        // let res = axios.post('/api/users', {
        //   id:idGenerator(), 
        //   username: username,
        //   email: inputEmail,
        //   password: inputPassword
        // }).then(res => {console.log("res",res)})

        // let user = {
        //   id:idGenerator(), 
        //   username: username,
        //   email: inputEmail,
        //   password: inputPassword
        // }
        // console.log("newUserObject", user)

        //---------POST REQUESTS SHOWS ON NETWORK TAB BUT IT DOESN'T ADD THE DATA TO THE ENDPOINT------------//
        api.post('/', {
          id:idGenerator(), 
          username: username,
          email: inputEmail,
          password: inputPassword
        }).then(res => console.log("AFTER POST RESPONSE", res))
        // return user
      }
      

  return (
    <div className={`${styles.container} ${styles.bg}`}>
    <main className={`${styles.mainForm} `}>
      <h1 className={styles.titleForm}>
      {eng ? data.eng.welcome : data.fr.welcome}
      </h1>

      <form onSubmit={((event) => {
        event.preventDefault
        createUser()
        setReg(true)
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


          <button type="submit" onClick={() => {
            console.log("this is userInput:",username, inputEmail, inputPassword)
          }} className={styles.registerbtn}><h1>{eng ? data.eng.save : data.fr.save}</h1></button>

        </div>
      </form>
    </main>
    </div>
  )
}
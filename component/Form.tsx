import Image from 'next/image'
import styles from '../styles/Home.module.css'
import data from '../component/data.json'

export default function Form(props:any) {

  const eng = props.eng
  const setReg = props.setReg

  const userDb = {
    user1 : {
      username: "mrFirst", 
      email: "DaOne@gmail.com",
      password: "11111"
    }
  }

  const createId = () => {
    let count = 0
    for(let user in userDb) {
      count += 1
    }
    count += 1
    console.log(count)
    console.log(userDb)
    return `user${count}`
  }

  const createUser = (username: string, email: string, password: string) => {
    let id = createId()
    // @ts-ignores ---
    userDb[id] = {
      username, 
      email, 
      password
    }
  }


  return (
    <div className={styles.container}>

    <main className={styles.main}>
      <h1 className={styles.title}>
      {eng ? data.eng.welcome : data.fr.welcome}
      </h1>

      <form className={styles.form}>
        <div>
          <p className={styles.description}>{eng ? data.eng.form : data.fr.form}</p>

          <label><b className={styles.description}>{eng ? data.eng.user : data.fr.user}</b></label>
          <input type="text" placeholder={eng ? data.eng.enterUser : data.fr.enterUser} name="username" id="username" required />

          <label><b className={styles.description}>{eng ? data.eng.email : data.fr.email}</b></label>
          <input type="text" placeholder={eng ? data.eng.enterEmail : data.fr.enterEmail} name="email" id="email" required />

          <label><b className={styles.description}>{eng ? data.eng.password : data.fr.password}</b></label>
          <input type="text" placeholder={eng ? data.eng.enterPassword : data.fr.enterPassword} name="password" id="password" required />

          <button type="submit" onClick={(ev)=>{
            ev.preventDefault();
            // @ts-ignores ---
            if(document.getElementById('username').value && document.getElementById('email').value && document.getElementById('password').value) {
              // @ts-ignores ---
              createUser(document.getElementById('username').value, document.getElementById('email').value, document.getElementById('password').value)
              setReg(true)
              console.log(userDb)
            }
            }} className={styles.registerbtn}><h1>{eng ? data.eng.save : data.fr.save}</h1></button>

        </div>
      </form>
    </main>
  </div>
  )
}
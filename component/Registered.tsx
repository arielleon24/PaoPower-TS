import Image from 'next/image'
import styles from '../styles/Home.module.css'
import data from '../component/data.json'

export default function Form(props:any) {

  const eng = props.eng
  const setReg = props.setReg

  return (
    <div className={styles.container}>
              <main className={styles.main}>
                <h1 className={styles.title2}>
                {eng ? data.eng.thanks : data.fr.thanks}
                </h1>

                <button type="submit" onClick={()=>{setReg(false)}} className={styles.registerbtn}><h1>{eng ? data.eng.home : data.fr.home}</h1></button>

              </main>
      
            </div>
  )
}
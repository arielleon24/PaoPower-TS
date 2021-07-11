import styles from "../styles/Layout.module.css"
import data from "../component/data.json"
import Index from '../pages/index'
import { useState } from "react";
import logo from '../public/paoLogo.png'


export default function Layout(props:any) {

  const [eng, setEng] = useState(true);
  const switchLanguage = () => {
    if(eng){
      setEng(false)
    } else {
      setEng(true)
    }
  }

  return (
    <>
      <header className={styles.header}>
        <nav className={styles.navbar}>
          <img className={styles.logo} src='https://api.paopower.net/settings/tfxiz-logo-white.png'/>
          <ul className={styles.navmenu}>

            {/* <li className={styles.navitem}>
              <a className={styles.navlink}>Home</a>
            </li> */}

            {/* <li className={styles.navitem}>
              <a className={styles.navlink}>Models</a>
            </li> */}

            <li className={styles.navitem}>
              <a className={styles.navlink}>{eng? "registered users": "Utilisateurs enregistrés"}</a>
            </li>

            {/* <li className={styles.navitem}>
              <a className={styles.navlink}>Sign Up</a>
            </li> */}

            <li className={styles.navitem}>
              <button type="submit" onClick={switchLanguage} className={styles.navlink}>{eng? "FR": "ENG"}</button>
            </li>
          </ul>
        </nav>
      </header>
      <Index eng={eng} />
    </>
  )
}


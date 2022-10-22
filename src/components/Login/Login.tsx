import { useAtom } from "jotai"
import { isUserLoggedAtom } from "../../atoms/login.atom"
import { LoginImageIcon } from "../Icons"
import LogoPayFriends from "../LogoPayFriends/LogoPayFriends"
import styles from './login.module.scss'

const Login = () => {
  const [isUserLogged, setIsUserLogged] = useAtom(isUserLoggedAtom)
  // if user === .... & password === ''
  //  setIsLogged (true)...
  //
  //

  return (
    <div className={styles.container}>
      <div className="actionSection">
        <LogoPayFriends />
        <h1 className={styles.title}>Bem vindo de volta</h1>
        <input className={styles.loginInput} type="email" /> <br />
        <input className={styles.loginInput} type="password" /> <br />
        <button className={styles.submit} onClick={() => setIsUserLogged(true)}> login </button>
      </div>
      <LoginImageIcon />
    </div>
  )
}

export default Login

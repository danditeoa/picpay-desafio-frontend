import { useAtom } from "jotai"
import { isUserLoggedAtom } from "../../atoms/login.atom"
import LogoPayFriends from "../LogoPayFriends/LogoPayFriends"
import { useForm } from "react-hook-form";
import styles from './login.module.scss'
import { LoginImageIcon } from "../Icons";

type UserProps = {
  email: string,
  senha: string
}
const Login = () => {
  const [isUserLogged, setIsUserLogged] = useAtom(isUserLoggedAtom)

  const { register, handleSubmit, formState: { errors } } = useForm<UserProps>({
  });
    
  const onSubmit = (data: UserProps) => {
    if(data.email === 'usuario@gmail.com' && data.senha === 'usuario'){
      setIsUserLogged(true)
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.actionSection}>
        <LogoPayFriends />
        <h1 className={styles.title}>Bem vindo de volta</h1>
        <form onSubmit={handleSubmit(onSubmit)}
          action="/send-data-here" method="post" className={styles.actionForm}>
          <label htmlFor="email">Email</label>
          <input
            className={styles.loginInput}
            {...register("email")}
            name="email"
            type="email"
            required
            minLength={6}
            maxLength={20} />
          <label htmlFor="senha">Senha</label>
          <input
            className={styles.loginInput}
            {...register("senha")}
            name="senha"
            type="password"
            required
            minLength={6}
            maxLength={20} />
          <button className={styles.submit} type="submit">Entrar</button>
        </form >
      </div>
      <div className={styles.image}>
        <LoginImageIcon />
      </div>
    </div>
  )
}

export default Login

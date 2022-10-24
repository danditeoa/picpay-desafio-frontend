import { useAtom } from 'jotai';
import { isUserLoggedAtom } from '../../atoms/login.atom';
import styles from '../Header/header.module.scss'
import LogoPayFriends from '../LogoPayFriends/LogoPayFriends';

const Header = () => {
  const [_, setIsUserLogged] = useAtom(isUserLoggedAtom)

  return (
    <header className={styles.container}> 
      <LogoPayFriends />
      <a onClick={() => setIsUserLogged(false)} className={styles.logout}>
        <img
          className={styles.profilePicture}
          src="https://image.shutterstock.com/image-photo/profile-picture-smiling-millennial-asian-600w-1836020740.jpg"
          alt="imagem do perfil do usuario"
        />
        <p>DESLOGAR</p>
	    </a>
    </header>
  );
};

export default Header

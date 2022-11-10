import { useAtom } from 'jotai';
import Image from 'next/image';
import { isUserLoggedAtom } from '../../atoms/login.atom';
import styles from '../Header/header.module.scss'
import LogoPayFriends from '../LogoPayFriends/LogoPayFriends';

const Header = () => {
  const [_, setIsUserLogged] = useAtom(isUserLoggedAtom)

  return (
    <header className={styles.container}>
      <LogoPayFriends />
      <div className={styles.profileSection}>
        <div className={styles.profilePicture}>
          <Image className={styles.image}
            src="https://image.shutterstock.com/image-photo/profile-picture-smiling-millennial-asian-600w-1836020740.jpg"
            alt="imagem do perfil do usuario"
            layout='fill'
            sizes="100vw"
            objectFit='cover'
          />
        </div>
        <a onClick={() => setIsUserLogged(false)} className={styles.logout}>
          <p>DESLOGAR</p>
        </a>
      </div>
    </header >
  );
};

export default Header

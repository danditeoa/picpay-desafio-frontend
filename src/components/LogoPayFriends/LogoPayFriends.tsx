import { isUserLoggedAtom } from '../../atoms/login.atom'
import classNames from 'classnames'
import styles from './logoPayFriends.module.scss'
import { useAtom } from 'jotai';

const LogoPayFriends = () => {
  const [isUserLogged, setIsUserLogged] = useAtom(isUserLoggedAtom)
  const cx = classNames.bind(styles);

  return (
    <div className={cx(styles.payfriends, {
      [styles.whiteLogo]: isUserLogged,
    })}>
      <b className={cx(styles.payColorLogo, {
        [styles.payWhiteLogo]: isUserLogged,
      })}>Pay</b>Friends
    </div>
  );
};

export default LogoPayFriends;

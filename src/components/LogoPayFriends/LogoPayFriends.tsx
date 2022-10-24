import { isUserLoggedAtom } from '../../atoms/login.atom'
import classNames from 'classnames'
import styles from './logoPayFriends.module.scss'

const LogoPayFriends = () => {

  const cx = classNames.bind(styles);
  return (
    <div className={cx(styles.payfriends, {
      [styles.whiteLogo]: isUserLoggedAtom,
    })}>
      <b className={cx(styles.payColorLogo, {
        [styles.payWhiteLogo]: !isUserLoggedAtom,
      })}>Pay</b>Friends
    </div>
  );
};

export default LogoPayFriends;

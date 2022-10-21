import styles from '../Header/header.module.scss'

const Header = () => {

  return (
    <div className={styles.container}> 
      <span className={styles.payfriends}><b className={styles.pay}>Pay</b>Friends</span>
    </div>
  );
};

export default Header;

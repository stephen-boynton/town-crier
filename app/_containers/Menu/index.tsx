import styles from './styles.module.scss';

export const Menu = () => {
  return (
    <div className={styles.container}>
      <img className={styles.logo} src="./img/raven_logo.png" />
      <ul className={styles.menu}>
        <li>Home</li>
        <li>Notifications</li>
        <li>Profile</li>
        <li>Logout</li>
      </ul>
    </div>
  );
}
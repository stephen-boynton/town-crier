"use client"
import Link from 'next/link';
import styles from './styles.module.scss';
import withAuth from '@/app/_wrappers/withAuth';

export const Menu = ({ firstName, email, isAuthenticated, setUserUnauthenticated }) => {
  const handleSignout = () => {
    fetch('/signout', {
      credentials: 'include',
      method: 'POST',
    }).then((resp) => {
      if (resp.ok) {
        return setUserUnauthenticated();
      }

      throw new Error('Failed to sign out');
    }).catch((err) => {
      console.error(err);
    })
  }
  return (
    <div className={styles.container}>
      <img className={styles.logo} src="./img/raven_logo.png" />
      {email && (
        <p className={styles.name}>
          Welcome, {email}!
        </p>
      )}
      <ul className={styles.menu}>
        {isAuthenticated &&
          (<>
            <li>Home</li>
            <li>Notifications</li>
            <li>Profile</li>
          </>
          )}
        <li>
          {isAuthenticated
            ? (
              <button onClick={handleSignout} className={styles.signOutButton}>
                Log Out
              </button>
            )
            : (
              <Link href="/login">
                Log In
              </Link>
            )}
        </li>
      </ul>
    </div>
  );
}

export const MenuWithAuth = withAuth(Menu);
"use client"
import Link from 'next/link';
import styles from './styles.module.scss';
import withUser from '@/app/_wrappers/withUser';
import { UserContextProps } from '@/app/_contexts/user';

type MenuProps = {
  handleSignout: () => void;
  user: Partial<UserContextProps>;
}

export function Menu({ handleSignout, user: { firstName, isAuthenticated, setUserUnauthenticated } = {} }: MenuProps) {

  return (
    <div className={styles.container}>
      <img className={styles.logo} src="./img/raven_logo.png" />
      {firstName && (
        <p className={styles.name}>
          Welcome, {firstName}!
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

export const MenuWithAuth = withUser(Menu);
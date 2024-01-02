"use client";
import styles from './styles.module.scss'
import { MenuWithAuth } from './_containers/Menu'
import SearchBar from './_components/SearchBar'
import { NewsList } from './_containers/RealmNews'
import { mockNewsItems } from './_containers/RealmNews/mocks'
import { useUserContext } from './_hooks/useUserContext';
import { UserFeed } from './_containers/UserFeed';

export default function Index() {
  const { setUserUnauthenticated } = useUserContext();
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
      <div className={styles.leftColumn}>
        <MenuWithAuth handleSignout={handleSignout} />
      </div>
      <div className={styles.centerColumn}>
        <UserFeed />
      </div>
      <div className={styles.rightColumn}>
        <SearchBar onSearch={(s: string) => { }} />
        <NewsList newsItems={mockNewsItems} />
      </div>
    </div>
  )
}

import styles from './styles.module.css'
import { Input } from './_components/Input'
import Feed from './_containers/Feed'
import { mockFeed } from './_containers/Feed/mocks'
import { Menu } from './_containers/Menu'
import SearchBar from './_components/SearchBar'
import { NewsList } from './_containers/RealmNews'
import { mockNewsItems } from './_containers/RealmNews/mocks'

export default function Index() {
  return (
    <div className={styles.container}>
      <div className={styles.leftColumn}>
        <Menu />
      </div>
      <div className={styles.centerColumn}>
        <h2>Your Rook</h2>
        <Input userAvatar="./img/wiz_avatar.png" />
        <div className={styles.feedContainer}>
          <Feed messages={mockFeed.messages} />
        </div>
      </div>
      <div className={styles.rightColumn}>
        <SearchBar />
        <NewsList newsItems={mockNewsItems} />
      </div>
    </div>
  )
}

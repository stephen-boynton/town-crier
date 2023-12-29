import styles from './styles.module.css'
import { Input } from './_components/Input'
import Feed from './_containers/Feed'
import { mockFeed } from './_containers/Feed/mocks'

export default function Index() {
  return (
    <div className={styles.container}>
      <div className={styles.leftColumn}></div>
      <div className={styles.centerColumn}>
        <h2>Your Rook</h2>
        <Input userAvatar="./img/wiz_avatar.png" />
        <div className={styles.feedContainer}>
          <Feed messages={mockFeed.messages} />
        </div>
      </div>
      <div className={styles.rightColumn}></div>
    </div>
  )
}

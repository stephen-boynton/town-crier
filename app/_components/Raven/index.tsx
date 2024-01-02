import { IconButton } from '@/app/_components/IconButton'
import styles from './styles.module.scss'

export type RavenProps = {
  content: string
  username: string
  userId: string
  date: string
  userAvatar: string
  id: string
}


export function Raven({ content, userAvatar, username, date }: RavenProps) {
  return (
    <section className={styles.container}>
      <div className={styles.contentContainer}>
        <img className={styles.avatar} src={userAvatar} />
        <div className={styles.nameAndRaven}>
          <span className={styles.username}>
            {username}
            <span className={styles.date}>{date}</span>
          </span>
          <div className={styles.raven}>
            {content}
          </div>
        </div>
      </div>
      <div className={styles.buttonBar}>
        <IconButton onClick={() => { }} icon="HeartIcon" className={styles.actionButton} />
        <IconButton onClick={() => { }} icon="ResetIcon" className={styles.actionButton} />
        <IconButton onClick={() => { }} icon="Share1Icon" className={styles.actionButton} />
        <IconButton onClick={() => { }} icon="ArrowRightIcon" className={styles.actionButton} />
      </div>
    </section>
  )
}
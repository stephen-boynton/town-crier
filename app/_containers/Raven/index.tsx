import { IconButton } from '@/app/_components/IconButton'
import styles from './styles.module.scss'
import { ArrowRightIcon, HeartIcon, ResetIcon, Share1Icon } from '@radix-ui/react-icons'

export type RavenProps = {
  content: string
  username: string
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
        <IconButton>
          <HeartIcon className={styles.actionButton} />
        </IconButton>
        <IconButton>
          <ResetIcon className={styles.actionButton} />
        </IconButton>
        <IconButton>
          <Share1Icon className={styles.actionButton} />
        </IconButton>
        <IconButton>
          <ArrowRightIcon className={styles.actionButton} />
        </IconButton>
      </div>
    </section>
  )
}
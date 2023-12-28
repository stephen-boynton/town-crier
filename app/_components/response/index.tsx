import styles from './styles.module.scss'

export function Response({ message, loading }) {
  return (
    <p className={styles.message}>
      {message}
    </p>
  )
}
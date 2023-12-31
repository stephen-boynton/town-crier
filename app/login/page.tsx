"use client"
import { useRouter } from 'next/navigation'
import styles from './styles.module.scss'
import Link from 'next/link'
import { useState } from 'react'
import { useUserContext } from '../_hooks/useUserContext'

export default function Login({
  searchParams,
}: {
  searchParams: { message: string }
}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const { setUserAuthenticated } = useUserContext();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    fetch('/login/user', { credentials: 'include', method: 'POST', body: JSON.stringify({ email, password }) }).then((res) => {
      if (res.status === 200) {
        setUserAuthenticated();
        router.push('/')
      } else {
        router.push('/login?message=Invalid%20credentials')
      }
    }).catch((err) => {
      console.error(err);
      router.push('/login?message=Unknown%20error')
    })
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleLogin} className={styles.form}>
        <div className={styles.brand}>
          <img className={styles.logo} src="./img/raven_logo.png" />
          <h1 className={styles.title}>
            Raven
          </h1>
        </div>
        <label className={styles.label} htmlFor="email">
          Email
        </label>
        <input
          onChange={handleEmailChange}
          className={styles.input}
          name="email"
          placeholder="you@example.com"
          required
        />
        <label className={styles.label} htmlFor="password">
          Password
        </label>
        <input
          onChange={handlePasswordChange}
          className={styles.input}
          type="password"
          name="password"
          placeholder="••••••••"
          required
        />
        <button type="submit" onSubmit={handleLogin} className={styles.signInButton}>
          Sign In
        </button>

        <Link href="/signup" className={styles.signUpButton}>
          Sign Up
        </Link>
        {searchParams?.message && (
          <p className={styles.warning}>
            {searchParams.message}
          </p>
        )}
      </form>
    </div>
  )
}
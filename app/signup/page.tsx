'use client'
import React, { useState } from 'react';
import styles from './styles.module.scss';
import { Selector } from '../_components/Select';
import { useRouter } from 'next/navigation';

export default function SignUp({
  searchParams,
}: {
  searchParams: { message: string }
}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [handle, setHandle] = useState('');
  const [username, setUsername] = useState('');
  const [archetype, setArchetype] = useState('');
  const router = useRouter();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHandle(e.target.value);
  };

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleArchetypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setArchetype(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    fetch('/signup/user', {
      credentials: 'include',
      method: 'POST',
      body: JSON.stringify({
        email, password, archetype, handle, username
      })
    })
      .then((res) => {
        if (res.status === 200) {
          router.push('/')
        } else {
          router.push('/signup?message=Unknown%20error')
        }
      }).catch((err) => {
        console.error(err);
        router.push('/signup?message=Unknown%20error')
      })
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.brand}>
          <img className={styles.logo} src="./img/raven_logo.png" />
          <h1 className={styles.title}>
            Raven Sign-Up
          </h1>
        </div>
        <label className={styles.label}>
          Email:
          <input className={styles.input} type="email" value={email} onChange={handleEmailChange} />
        </label>
        <br />
        <label className={styles.label}>
          Password:
          <input className={styles.input} type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <br />
        <label className={styles.label}>
          Username:
          <input className={styles.input} type="text" value={username} onChange={handleUsernameChange} />
        </label>
        <br />
        <label className={styles.label}>
          Handle (if different from username):
          <input className={styles.input} type="text" value={handle} onChange={handleHandleChange} />
        </label>
        <br />
        <label className={styles.label}>
          Archetype
          <Selector onChange={handleArchetypeChange} />
        </label>
        <button className={styles.button} type="submit">Sign Up</button>
      </form>
      {searchParams?.message && (
        <p className={styles.warning}>
          {searchParams.message}
        </p>
      )}
    </div>
  );
};

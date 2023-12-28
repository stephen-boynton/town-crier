import DeployButton from '../components/DeployButton'
import AuthButton from '../components/AuthButton'
import { createClient } from '@/utils/supabase/server'
import ConnectSupabaseSteps from '@/components/ConnectSupabaseSteps'
import SignUpUserSteps from '@/components/SignUpUserSteps'
import Header from '@/components/Header'
import { cookies } from 'next/headers'
import styles from './styles.module.css'
import { SendButton } from './_components/sendButton'
import { useChatGpt } from './_hooks/useChatGpt'
import { useState } from 'react'
import { Input } from './_components/Input'

export default async function Index() {
  const cookieStore = cookies()



  const canInitSupabaseClient = () => {
    // This function is just for the interactive tutorial.
    // Feel free to remove it once you have Supabase connected.
    try {
      createClient(cookieStore)
      return true
    } catch (e) {
      return false
    }
  }

  const isSupabaseConnected = canInitSupabaseClient()

  return (
    <div className={styles.container}>
      <Input />
    </div>
  )
}

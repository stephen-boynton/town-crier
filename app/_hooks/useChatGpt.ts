import { useEffect, useState, useRef, Ref } from 'react';

type Conversation = { role: string, content: string }

export const useChatGpt = () => {
  const [response, setResponse] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  const getResponse = async (input: string) => {
    try {
      setLoading(true)
      const res = await fetch('http://localhost:3000/raven', { method: 'POST', body: JSON.stringify({ conversation: input }) })
      const data = await res.json()
      console.log({ data });
      setResponse(data.result)
      setLoading(false)
    } catch (error: any) {
      setError(error.message)
      setLoading(false)
      console.error(error);
    }
  }

  return {
    response,
    loading,
    error,
    getResponse
  }
}
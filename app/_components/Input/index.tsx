"use client";
import { useChatGpt } from "@/app/_hooks/useChatGpt";
import { useEffect, useState } from "react";
import { Response } from "@/app/_components/response";

export function Input() {
  const [input, setInput] = useState('');
  const [sendRaven, setSendRaven] = useState(false);
  const { response, loading, getResponse } = useChatGpt();

  const onChange = (e) => {
    setInput(e.target.value);
  };

  const onClick = () => {
    // setSendRaven(true);
  };

  useEffect(() => {
    if (sendRaven) {
      getResponse(input);
      setSendRaven(false);
    }
  });

  return (
    <div>
      <Response message={'This is my message yeah!'} loading={false} />
      <textarea onChange={onChange} placeholder="Type your message here..."></textarea>
      <button onClick={onClick} >Send your raven!</button>
    </div>
  )
}
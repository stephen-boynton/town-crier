"use client"
import { useChatGpt } from "@/app/_hooks/useChatGpt";
import { useEffect, useState } from "react";
import { Response } from "@/app/_components/response";
import { IconButton } from "../IconButton";
import { PaperPlaneIcon } from "@radix-ui/react-icons";
import styles from './styles.module.scss';
import withAuth from "@/app/_wrappers/withAuth";

export function Input({ userAvatar }) {
  const [input, setInput] = useState('');
  const [charNumber, setCharNumber] = useState(0);

  const onChange = (e) => {
    const inputLength = e.target.value.length;
    if (inputLength > 140) return;

    setCharNumber(inputLength);
    setInput(e.target.value);
  };

  const onClick = () => {
    // setSendRaven(true);
  };

  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <img className={styles.avatar} src={userAvatar} />
        <textarea value={input} onChange={onChange} placeholder="Type your message here..."></textarea>
      </div>
      <div className={styles.actionBar}>
        <div className={styles.charCounter}>{charNumber}/140</div>
        <IconButton>
          <PaperPlaneIcon className={styles.icon} />
        </IconButton>
      </div>
    </div>
  )
}

export const InputWithUser = withAuth(Input);
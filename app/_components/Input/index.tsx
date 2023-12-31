"use client"
import { useChatGpt } from "@/app/_hooks/useChatGpt";
import { useEffect, useState } from "react";
import { Response } from "@/app/_components/response";
import { IconButton } from "../IconButton";
import { PaperPlaneIcon } from "@radix-ui/react-icons";
import styles from './styles.module.scss';

export function Input({ userAvatar }) {
  const [input, setInput] = useState('');
  const [charNumber, setCharNumber] = useState(0);

  const onChange = (e) => {
    const inputLength = e.target.value.length;
    setCharNumber(inputLength);

    if (inputLength > 280) return;

    setInput(e.target.value);
  };

  const onClick = () => {
    // setSendRaven(true);
  };

  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <img className={styles.avatar} src={userAvatar} />
        <textarea onChange={onChange} placeholder="Type your message here..."></textarea>
      </div>
      <div className={styles.actionBar}>
        <div className={styles.charCounter}>{charNumber}/280</div>
        <IconButton>
          <PaperPlaneIcon className={styles.icon} />
        </IconButton>
      </div>
    </div>
  )
}
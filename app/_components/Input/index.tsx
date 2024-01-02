"use client"
import { useState } from "react";
import { IconButton } from "../IconButton";
import styles from './styles.module.scss';
import withUser from "@/app/_wrappers/withUser";

type InputProps = {
  userAvatar: string;
}

export function Input({ userAvatar }: InputProps) {
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
        <IconButton onClick={onClick} icon="PaperPlaneIcon" className={styles.icon} />
      </div>
    </div>
  )
}

export const InputWithUser = withUser(Input);
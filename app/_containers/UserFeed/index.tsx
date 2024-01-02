import Feed from "@/app/_components/Feed";
import { Input } from "@/app/_components/Input";
import styles from "./styles.module.scss";
import { mockFeed } from "@/app/_components/Feed/mocks";

export function UserFeed() {
  return (
    <>
      <h2>Your Rook</h2>
      <Input userAvatar="./img/wiz_avatar.png" />
      <div className={styles.feedContainer}>
        <Feed messages={mockFeed.messages} />
      </div></>
  );
}
import Feed from ".";

export default {
  title: "Feed",
  component: Feed,
};

export const Default = {
  args: {
    messages: [
      {
        id: 1,
        content: "This is a raven",
        username: "Jon Snow",
        date: "2 hours ago",
        userAvatar: "/img/wiz_avatar.png",
      },
      {
        id: 2,
        content: "This is another raven",
        username: "Jon Snow",
        date: "2 hours ago",
        userAvatar: "https://i.pravatar.cc/300",
      },
      {
        id: 3,
        content: "This is a third raven",
        username: "Jon Snow",
        date: "2 hours ago",
        userAvatar: "https://i.pravatar.cc/300",
      },
    ],
  },
}
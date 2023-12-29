interface NewsItem {
  id: number;
  title: string;
  content: string;
  date: Date;
}

export const mockNewsItems: NewsItem[] = [
  {
    id: 1,
    title: "Breaking News",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: new Date(),
  },
  {
    id: 2,
    title: "Latest Updates",
    content: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: new Date(),
  },
  {
    id: 3,
    title: "Important News",
    content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    date: new Date(),
  },
  {
    id: 4,
    title: "Breaking News",
    content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    date: new Date(),
  },
  {
    id: 5,
    title: "Breaking News",
    content: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    date: new Date(),
  },
];

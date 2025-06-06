import { User, Pin } from "../types";

export const currentUser: User = {
  id: "user-1",
  username: "Zayakkaa",
  avatar:
    "https://i.pinimg.com/736x/42/dd/df/42dddf534ba4a77e12fe93e164d9f065.jpg",
  bio: "Zaya,s pink aesthetic pink pinterest",
  followersCount: 17247,
  followingCount: 17,
};

export const users: User[] = [
  currentUser,
  {
    id: "user-2",
    username: "Bayraashi",
    avatar:
      "https://i.pinimg.com/736x/c6/72/1e/c6721ef31f46bb99be31e5461d65add5.jpg",
    bio: "Photographer and nature lover",
    followersCount: 2341,
    followingCount: 432,
  },
  {
    id: "user-3",
    username: "Sarah",
    avatar:
      "https://i.pinimg.com/736x/21/e1/c3/21e1c34404f56697b1dd75f5b9009d23.jpg",
    bio: "Travel blogger and adventurer",
    followersCount: 5432,
    followingCount: 321,
  },
];

export const pins: Pin[] = [
  {
    id: "pin-1",
    title: "Purple mountain landscape",
    description: "Beautiful landscape with purple tones",
    imageurl:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    aspectRatio: 1.5,
    createdAt: "2023-10-15",
    savesCount: 342,
    commentsCount: 21,
    userId: "user-2",
    user: users.find((u) => u.id === "user-2"),
  },
  {
    id: "pin-2",
    title: "Pink aesthetic room",
    description: "Room design with pink aesthetics",
    imageurl:
      "https://i.pinimg.com/736x/45/7e/6b/457e6b5a0d03142d288f5e31fc5b78a2.jpg",
    aspectRatio: 0.7,
    createdAt: "2023-10-12",
    savesCount: 543,
    commentsCount: 32,
    userId: "user-1",
    user: users.find((u) => u.id === "user-1"),
  },
  {
    id: "pin-3",
    title: "Purple flowers in bloom",
    description: "Beautiful purple blooms in a garden",
    imageurl:
      "https://i.pinimg.com/736x/a5/75/7d/a5757df14545175069325d0d80b4825a.jpg",
    aspectRatio: 0.7,
    createdAt: "2023-10-10",
    savesCount: 654,
    commentsCount: 43,
    userId: "user-3",
    user: users.find((u) => u.id === "user-3"),
  },
  {
    id: "pin-4",
    title: "Purple and pink sunset",
    description: "A beautiful sunset with purple and pink hues",
    imageurl:
      "https://images.unsplash.com/photo-1518128958364-65859d70aa41?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    aspectRatio: 0.7,
    createdAt: "2023-10-08",
    savesCount: 765,
    commentsCount: 54,
    userId: "user-2",
    user: users.find((u) => u.id === "user-2"),
  },
  {
    id: "pin-5",
    title: "Purple fashion aesthetic",
    description: "Fashion photography with pink tones",
    imageurl:
      "https://i.pinimg.com/736x/a8/ae/1d/a8ae1d5cb2cfc6b0da4f10a43d3edbfe.jpg",
    aspectRatio: 0.7,
    createdAt: "2023-10-05",
    savesCount: 876,
    commentsCount: 65,
    userId: "user-1",
    user: users.find((u) => u.id === "user-1"),
  },
  {
    id: "pin-6",
    title: "Purple digital art",
    description: "Abstract digital art with purple theme",
    imageurl:
      "https://images.unsplash.com/photo-1557682260-96773eb01377?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=729&q=80",
    aspectRatio: 1.2,
    createdAt: "2023-10-03",
    savesCount: 987,
    commentsCount: 76,
    userId: "user-3",
    user: users.find((u) => u.id === "user-3"),
  },
  {
    id: "pin-7",
    title: "Pink and purple gradient",
    description: "Gradient background in pink and purple",
    imageurl:
      "https://images.unsplash.com/photo-1545231027-637d2f6210f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=675&q=80",
    aspectRatio: 0.7,
    createdAt: "2023-10-01",
    savesCount: 1098,
    commentsCount: 87,
    userId: "user-2",
    user: users.find((u) => u.id === "user-2"),
  },
  {
    id: "pin-8",
    title: "Im Just Girl Era",
    description: "Cosmic purple galaxy for phone background",
    imageurl:
      "https://i.pinimg.com/736x/b3/dc/5f/b3dc5f93a86792f2c478c16e8ef6ae6c.jpg",
    aspectRatio: 0.7,
    createdAt: "2023-09-28",
    savesCount: 1209,
    commentsCount: 98,
    userId: "user-1",
    user: users.find((u) => u.id === "user-1"),
  },
  {
    id: "pin-9",
    title: "Pink aesthetic café",
    description: "Cozy café with pink theme",
    imageurl:
      "https://images.unsplash.com/photo-1579656381226-5fc0f0100c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=627&q=80",
    aspectRatio: 0.7,
    createdAt: "2023-09-25",
    savesCount: 1320,
    commentsCount: 109,
    userId: "user-3",
    user: users.find((u) => u.id === "user-3"),
  },
  {
    id: "pin-10",
    title: "Purple marble texture",
    description: "Marble texture with purple swirls",
    imageurl:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
    aspectRatio: 1.5,
    createdAt: "2023-09-22",
    savesCount: 1431,
    commentsCount: 120,
    userId: "user-2",
    user: users.find((u) => u.id === "user-2"),
  },
  {
    id: "pin-11",
    title: "Mens outfit",
    description: "Mature world",
    imageurl:
      "https://i.pinimg.com/736x/87/91/d6/8791d63ab649d0592cdfa649221ff46c.jpg",
    aspectRatio: 1.5,
    createdAt: "2023-09-22",
    savesCount: 1431,
    commentsCount: 120,
    userId: "user-2",
    user: users.find((u) => u.id === "user-2"),
  },
];

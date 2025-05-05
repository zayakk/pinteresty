export interface User {
  id: string;
  username: string;
  avatar: string;
  bio?: string;
  followersCount: number;
  followingCount: number;
}

// export interface Pin {
//   id: string;
//   title: string;
//   description?: string;
//   imageurl: string;
//   aspectRatio: number;
//   createdAt: string;
//   savesCount: number;
//   commentsCount: number;
//   userId: string;
//   user?: User;
// }
export interface Pin {
  pinId: number;
  userId: number;
  title: string;
  imageurl: string;
  description: string;
  category: string;
  created_at: null;
}

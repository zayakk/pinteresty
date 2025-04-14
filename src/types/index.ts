
export interface User {
  id: string;
  username: string;
  avatar: string;
  bio?: string;
  followersCount: number;
  followingCount: number;
}

export interface Pin {
  id: string;
  title: string;
  description?: string;
  imageUrl: string;
  aspectRatio: number;
  createdAt: string;
  savesCount: number;
  commentsCount: number;
  userId: string;
  user?: User;
}

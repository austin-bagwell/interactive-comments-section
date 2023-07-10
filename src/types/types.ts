export interface CommentProps {
  id: number;
  content: string;
  createdAt: string;
  score: number;
  replies: Array<CommentProps>;
  user: {
    username: string;
    image: {
      png: string;
      webp: string;
    };
  };
}

import "./App.css";
import { CommentCard } from "./components/CommentCard";
import { CommentProps } from "./types/types";

const amyComment: CommentProps = {
  id: 1,
  content:
    "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
  createdAt: "1 month ago",
  score: 12,
  user: {
    image: {
      png: "/assets/images/avatars/image-amyrobson.png",
      webp: "/assets/images/avatars/image-amyrobson.webp",
    },
    username: "amyrobson",
  },
  replies: [],
};

function App() {
  return (
    <main className="min-h-screen flex flex-col justify-start items-center">
      <header className="flex justify-center">
        <h1 className="text-5xl m-5">Brass Tacks Forum</h1>
      </header>
      <CommentCard comment={amyComment} />
      <CommentCard comment={amyComment} />
    </main>
  );
}

export default App;

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
    <main className="flex justify-center">
      <CommentCard comment={amyComment} />
    </main>
  );
}

export default App;

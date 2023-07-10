import iconMinus from "/assets/images/icon-minus.svg";
import iconPlus from "/assets/images/icon-plus.svg";

import { CommentProps } from "../types/types";

interface CommentCardProps {
  comment: CommentProps;
}

export function CommentCard({ comment }: CommentCardProps) {
  const {
    username,
    image: { png, webp },
  } = comment.user;
  const { content, createdAt } = comment;
  return (
    <div className="flex justify-around min-w-[50%] border-2 border-red-200">
      <UpvoteDownvoteButton />
      <div>
        {/* div here for header type stuff contains user + actions */}
        {/* user stuff */}
        <div>
          <img src={webp} className="max-h-2rem" alt="profile pic" />
          <p className="pl-2">{username}</p>
          <p className="pl-2">{createdAt}</p>
        </div>
        {/* TODO action buttons */}

        {/* text content */}
        <div>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
}

function UpvoteDownvoteButton() {
  return (
    <div className="min-w-[3rem] p-2">
      <div className="flex flex-col items-center  p-1 rounded-md bg-slate-200">
        <img src={iconPlus} className="w-4 mb-4" alt="upvote" />
        <p className="mb-4">77</p>
        <img src={iconMinus} className="mb-4 w-4" alt="downvote" />
      </div>
    </div>
  );
}

import iconMinus from "/assets/images/icon-minus.svg";
import iconPlus from "/assets/images/icon-plus.svg";
import iconReply from "/assets/images/icon-reply.svg";

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
      <ContentWrapper
        avatar={webp}
        username={username}
        createdAt={createdAt}
        content={content}
      />
    </div>
  );
}

function ContentWrapper({ avatar, username, createdAt, content }) {
  const user = {
    avatar,
    username,
    createdAt,
  };

  return (
    <div>
      <CardHeader user={user} />
      <CommentContent content={content} />
    </div>
  );
}

function CardHeader({ user }) {
  return (
    <div className="flex flex-row justify-between">
      <div className="flex flex-row basic-1/2">
        <img src={user.avatar} className="max-h-2rem" alt="profile pic" />
        <p className="pl-2">{user.username}</p>
        <p className="pl-2">{user.createdAt}</p>
      </div>
      <div className="flex basis-1/2">
        <img src={iconReply} className="max-h-2rem" alt="reply button" />
      </div>
    </div>
  );
}

function CommentContent({ content }) {
  return (
    <div>
      <p>{content}</p>
    </div>
  );
}

function UpvoteDownvoteButton() {
  return (
    <div className="min-w-[3rem] p-2">
      <div className="flex flex-col items-center p-1 rounded-md bg-slate-200">
        <img src={iconPlus} className="w-4 mb-4" alt="upvote" />
        <p className="mb-4">77</p>
        <img src={iconMinus} className="mb-4 w-4" alt="downvote" />
      </div>
    </div>
  );
}

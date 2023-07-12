import iconMinus from "/assets/images/icon-minus.svg";
import iconPlus from "/assets/images/icon-plus.svg";
import iconReply from "/assets/images/icon-reply.svg";

import { CommentProps } from "../types/types";
import { useState } from "react";

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
    <div className="flex justify-around basis-3/4 border-2 border-red-200">
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

interface ContentWrapperProps {
  avatar: string;
  username: string;
  createdAt: string;
  content: string;
}

function ContentWrapper({
  avatar,
  username,
  createdAt,
  content,
}: ContentWrapperProps) {
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
    <div className="flex flex-row justify-between basis-1/4">
      <CommentDetails user={user} />
      <ActionButtons />
    </div>
  );
}

function CommentDetails({ user }) {
  return (
    <div className="flex flex-row items-center basic-1/2">
      <img src={user.avatar} className="h-8" alt="profile pic" />
      <p className="pl-2 ml-2 font-semibold">{user.username}</p>
      <p className="pl-2 ml-2">{user.createdAt}</p>
    </div>
  );
}

function ActionButtons() {
  //   const [edit, setEdit] = useState(false);

  return (
    <div className="flex items-center basis-1/2">
      <img src={iconReply} className="h-6" alt="reply button" />
      <span>Reply</span>
    </div>
  );
}

function CommentContent({ content }) {
  return (
    <div className="basis-3/4">
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

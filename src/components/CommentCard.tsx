import { useState } from "react";
import { CommentProps } from "../types/types";

import iconMinus from "/assets/images/icon-minus.svg";
import iconPlus from "/assets/images/icon-plus.svg";
import iconReply from "/assets/images/icon-reply.svg";
import iconEdit from "/assets/images/icon-edit.svg";
import iconDelete from "/assets/images/icon-delete.svg";

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
    <div className="flex justify-between items-start max-w-5xl p-3 mb-3 border-2 border-blue-200">
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
    <div className="flex flex-col justify-between">
      <CardHeader user={user} />
      <CommentContent content={content} />
    </div>
  );
}

function CardHeader({ user }) {
  return (
    <div className="flex flex-row justify-between">
      <CommentDetails user={user} />
      <ActionButtons />
    </div>
  );
}

function CommentDetails({ user }) {
  return (
    <div className="flex flex-row items-center">
      <img src={user.avatar} className="h-8" alt="profile pic" />
      <p className="pl-2 ml-2 font-semibold">{user.username}</p>
      <p className="pl-2 ml-2">{user.createdAt}</p>
    </div>
  );
}

// TODO
// extract into ActionButton and pass icon/function as prop
function ActionButtons() {
  return (
    <div className="flex justify-end">
      <ActionButton icon={iconReply} label="Reply" />
      <ActionButton icon={iconDelete} label="Delete" />
      <ActionButton icon={iconEdit} label="Edit" />
    </div>
  );
}

function ActionButton({ icon, label }) {
  return (
    <button className="flex mr-5">
      <img src={icon} className="mr-2 h-6" alt="reply button" />
      <span>{label}</span>
    </button>
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

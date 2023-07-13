import { useState } from "react";
import { CommentProps } from "../types/types";
import { ActionButton } from "./elements/ActionButton";

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
  const { content, createdAt, score } = comment;

  return (
    <div className="flex justify-between items-start max-w-5xl p-3 mb-3 bg-white">
      <UpvoteDownvoteButton commentScore={score} />
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
// fix setState
function ActionButtons() {
  const [edit, setEdit] = useState(true);

  return (
    <div className="flex justify-end">
      {edit ? (
        <>
          <ActionButton
            icon={iconReply}
            iconClass="mr-2 h-6"
            label="Reply"
            className="flex mr-5"
            state={edit}
            onClick={() => setEdit(!edit)}
          />
        </>
      ) : (
        <div className="flex">
          <ActionButton
            icon={iconDelete}
            iconClass="mr-2 h-6"
            label="Delete"
            className="flex mr-5"
            state={edit}
            onClick={() => setEdit(!edit)}
          />
          <ActionButton
            icon={iconEdit}
            iconClass="mr-2 h-6"
            label="Edit"
            className="flex mr-5"
            state={edit}
            onClick={() => setEdit(!edit)}
          />
        </div>
      )}
    </div>
  );
}

interface CommentTextContent {
  content: string;
}
function CommentContent({ content }: CommentTextContent) {
  return (
    <div className="mt-3 basis-3/4">
      <p>{content}</p>
    </div>
  );
}

// FIXME
// takes two clicks for the counter to register the onclick change?
function UpvoteDownvoteButton({ commentScore }) {
  let [score, setScore] = useState(commentScore);

  return (
    <div className="min-w-[3rem] p-2">
      <div className="flex flex-col items-center p-1 rounded-md bg-slate-200">
        <ActionButton
          icon={iconPlus}
          iconClass="mt-2 w-fit"
          className="mb-4"
          onClick={() => {
            setScore(score++);
          }}
        />
        <p className="mb-4">{score}</p>
        <ActionButton
          icon={iconMinus}
          iconClass="h-[0.2rem] w-fit"
          className="mb-4"
          onClick={() => setScore(score--)}
        />
      </div>
    </div>
  );
}

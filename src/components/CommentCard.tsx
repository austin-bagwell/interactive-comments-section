import iconMinus from "../assets/images/icon-minus.svg";
import iconPlus from "../assets/images/icon-plus.svg";
import avatarAmy from "../assets/images/avatars/image-amyrobson.webp";
import reply from "../assets/images/icon-reply.svg";

export function CommentCard() {
  return (
    <div className="flex justify-around min-w-[50%] border-2 border-red-200">
      <UpvoteDownvoteButton />
      <CommentCardContentArea />
    </div>
  );
}

function CommentCardContentArea() {
  return (
    <div className="basis-10/12">
      <PostDetails userIcon={avatarAmy} userName="jane" postTime="week ago" />
      <p>here's some comment text</p>
    </div>
  );
}

// function CommentCardHeader(details) {
//     return (
//         <div>
//             <PostDetails details={details}/>
//             <ActionButtons />
//         </div>
//     )
// }

interface PostDetailsProps {
  userName: string;
  userIcon: string;
  postTime: string;
}
function PostDetails({ userName, userIcon, postTime }: PostDetailsProps) {
  return (
    <div className="flex flex-row justify-start">
      <img src={userIcon} className="max-h-2rem" alt="profile pic" />
      <p className="pl-2">{userName}</p>
      <p className="pl-2">{postTime}</p>
    </div>
  );
}

function UpvoteDownvoteButton() {
  return (
    <div className="flex flex-col">
      <img src={iconPlus} className="w-4" alt="upvote" />
      <p>77</p>
      <img src={iconMinus} className="w-4" alt="downvote" />
    </div>
  );
}

function ActionButtons() {
  return (
    <>
      <img src={reply} className="w-4" alt="reply" />
    </>
  );
}

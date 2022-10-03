import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "박원석",
        comment: "안녕하세요. 원돌리입니다.",
    },
    {
        name: "조영관",
        comment: "조바위든입니다. 반갑습니다.",
    },
    {
        name: "강원기",
        comment: "메이플슽오리~",
    },
];


function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                )
            })}
        </div>
    );
}

export default CommentList;
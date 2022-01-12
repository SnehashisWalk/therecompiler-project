import React from "react";
import "./post.css";

export default function Post(props) {
  console.log(props);
  return (
    <div className="post-container">
      <div className="post-left">
        {props.content.contentImg ? (
          <img src={props.content.contentImg} alt="content" />
        ) : (
          ""
        )}
      </div>
      <div className="post-right">
        <div className="post-header">
          <h2 className="post-heading">
            {props.content.title ? props.content.title : "Demo Heading"}
          </h2>
        </div>
        <div className="post-content">
          <p className="post">
            {props.content.shortDesc
              ? props.content.shortDesc
              : "short description"}
          </p>
        </div>
      </div>
    </div>
  );
}

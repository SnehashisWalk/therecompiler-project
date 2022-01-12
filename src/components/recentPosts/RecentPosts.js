import React from "react";
import { Link } from "react-router-dom";
import "./recentposts.css";

const values = [
  {
    title: "How to use Multer for uploading files in Node.js",
    img: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    imgAlt: "multer-img",
    link: "/post/multer",
  },
  {
    title: "Basics of Machine Learning",
    img: "https://images.pexels.com/photos/3143813/pexels-photo-3143813.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    imgAlt: "ml-img",
    link: "/post/ml-basics",
  },
];

export default function RecentPosts() {
  return values.map((item, index) => {
    return (
      <Link to={item.link} style={{ textDecoration: "none" }} key={index}>
        <div className="rp-body">
          <div className="rp-left">
            <img src={item.img} alt={item.imgAlt} />
          </div>
          <div className="rp-right">
            <h3>{item.title}</h3>
          </div>
        </div>
      </Link>
    );
  });
}

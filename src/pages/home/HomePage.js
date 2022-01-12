import React from "react";
import Post from "../../components/posts/Post";
import "./homepage.css";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import RecentPosts from "../../components/recentPosts/RecentPosts";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";

export default function HomePage() {
  return (
    <>
      <Header />
      <div className="content">
        <Navbar />
        <div className="first-container">
          <div className="carousel-container">
            <img
              src="https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              alt="carousel"
            />
          </div>
          <div className="site-desc">
            <h2 className="site-desc-heading">Welcome to TheRecompiler</h2>
            <p className="site-desc-content">
              One stop for all Web development, Android app development, and
              ML/AI solutions.
            </p>
          </div>
        </div>
        <div className="second-container">
          <div className="posts-container">
            <Link to="/post/multer" style={{ textDecoration: "none" }}>
              <Post
                content={{
                  title: "How to use Multer for uploading files in Node.js",
                  contentImg:
                    "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                  shortDesc:
                    "Multer is a node.js middleware for handling multipart/form-data.",
                }}
              />
            </Link>
            <Link to="/post/nodejs-server" style={{ textDecoration: "none" }}>
              <Post
                content={{
                  title: "Setup a simple NodeJS server",
                  contentImg:
                    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1034&q=80",
                  shortDesc: "NodeJS - Setup a Simple HTTP Server",
                }}
              />
            </Link>
            <Link to="/post/android-api-req" style={{ textDecoration: "none" }}>
              <Post
                content={{
                  title: "Handling API requests in Android with Volley.",
                  contentImg:
                    "https://images.unsplash.com/photo-1599016012665-13b74bb3b528?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1336&q=80",
                  shortDesc:
                    "Volley is an HTTP library that makes networking for Android apps easier and most importantly faster.",
                }}
              />
            </Link>
          </div>
          <div className="recent-posts">
            <h2 className="site-desc-heading">RECENT POSTS</h2>
            <div className="recent-post">
              <RecentPosts />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

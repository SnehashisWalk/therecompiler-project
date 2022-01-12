import React from "react";
import { Link } from "react-router-dom";
import "./postpage.css";
import { Avatar } from "@mui/material";
import Footer from "../../components/footer/Footer";

export default function PostPage() {
  return (
    <>
      <div className="container">
        <div className="header">
          <div className="header-left">
            <h2 className="heading-sec">
              <Link style={{ textDecoration: "none" }} to="/">
                The Recompiler
              </Link>
            </h2>
          </div>
        </div>
        <div className="post-page-content">
          <h1 className="post-heading-pri">
            How to use Multer for uploading files in Node.js
          </h1>
          <h3 className="post-subheading">
            Multer is a node.js middleware for handling multipart/form-data.
          </h3>
          <div className="post-info">
            <div className="post-info-left">
              <Avatar src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
              <h5 className="avatar-name">Snehashis Lenka</h5>
              {/* <h5 className="post-time">1 day ago</h5> */}
              <h5 className="post-length">4 min read</h5>
            </div>
            <div className="post-info-right"></div>
          </div>
          {/* <div className="post-img">
            <img
              src="https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="post pic"
            />
          </div> */}
          <div className="post-writeup">
            <p>
              Multer is a node.js middleware for handling multipart/form-data,
              which is primarily used for uploading files. It is written on top
              of busboy for maximum efficiency.
            </p>
            <p>
              NOTE: Multer will not process any form which is not multipart
              (multipart/form-data).
            </p>
            <p>
              <strong>Installation</strong>
            </p>
            <div className="post-img">
              <img src="/multer-post/install.png" alt="installation pic" />
            </div>
            <p>
              <strong>Usage</strong>
            </p>
            <p>
              Multer adds a body object and a file or files object to the
              request object. The body object contains the values of the text
              fields of the form, the file or files object contains the file
              uploaded via the form.
            </p>
            <p>
              <strong>Demo</strong>
            </p>
            <p>
              In this demo we will use React at frontend and Node at backend.
            </p>
            <p>
              We will be using React-Bootstrap library and use the Form
              component, after adding CSS and creating states for storing form
              data to upload.
            </p>
            <div className="post-img">
              <img src="/multer-post/front.png" alt="frontend" />
            </div>
            <p>React code for the frontend.</p>
            <div className="post-img">
              <img src="/multer-post/frontcode1.png" alt="frontendcode" />
            </div>
            <div className="post-img">
              <img src="/multer-post/frontcode2.png" alt="frontendcode" />
            </div>
            <p>
              Now we will setup our backend, we need to install{" "}
              <i>
                <strong>express</strong>
              </i>{" "}
              and{" "}
              <i>
                <strong>cors</strong>
              </i>{" "}
              to create an express server and here we install{" "}
              <i>
                <strong>multer</strong>
              </i>{" "}
              for receiving the uploaded files.
            </p>
            <div className="post-img">
              <img src="/multer-post/backend.png" alt="backendcode" />
            </div>
            <p>
              Now we will upload the file from frontend and receive it at our
              backend.
            </p>
            <div className="post-img">
              <img src="/multer-post/result1.png" alt="result" />
            </div>
            <p>
              At backend, now we can see there is a new folder created named
              uploads containing our file which was uploaded from frontend. We
              can console log the file details which was uploaded from frontend.
            </p>
            <div className="post-img">
              <img src="/multer-post/result2.png" alt="result" />
            </div>
            <p>
              So this is how we can upload files from our frontend to our
              backend server using multer.
            </p>
            <p>
              For more details follow{" "}
              <a
                href="https://www.npmjs.com/package/multer"
                target="_blank"
                rel="noreferrer"
              >
                <i>
                  <strong>multer</strong>
                </i>
              </a>{" "}
              documentation.
            </p>
            <p>
              And for more updates and tricks in web development follow{" "}
              <strong>TheRecompiler</strong>.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

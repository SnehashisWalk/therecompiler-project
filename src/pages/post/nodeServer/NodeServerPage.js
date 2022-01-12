import React from "react";
import { Link } from "react-router-dom";
import "../postpage.css";
import { Avatar } from "@mui/material";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";

export default function NodeServerPage() {
  return (
    <>
      <div className="container">
        <Header />
        <div className="post-page-content">
          <h1 className="post-heading-pri">Setup a simple NodeJS server</h1>
          <h3 className="post-subheading">
            NodeJS - Setup a Simple HTTP Server
          </h3>
          <div className="post-info">
            <div className="post-info-left">
              <Avatar src="/images/dp/dp.jpg" />
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
              This is a post to show you how to setup a HTTP web server using
              NodeJS on your local machine.
            </p>
            <p>
              <strong>Download and Install NodeJS</strong>
            </p>
            <p>
              Install NodeJS from the official website -{" "}
              <a href="https://nodejs.org/en/" target="_blank" rel="noreferrer">
                https://nodejs.org/en/
              </a>
              . Make sure you install the latest stable version(LTS). In this
              post we will be using NodeJS version 16.13.1.
            </p>
            <p>
              Once NodeJS is installed we can initialize our backend package
              using the command <strong>npm init</strong>. You can provide all
              the details propmpted by the cli or you can hit spacebar to skip.
              For this demo we will skip the prompts.
            </p>
            <div className="post-img">
              <img src="/nodejsserver-post/npminit.png" alt="npm init" />
            </div>
            <p>
              Now we have initialized the our node package "demo-backend". Now
              we will create a JS file index.js.
            </p>
            <p>
              NodeJS has a built-in module called HTTP, which allows NodeJS to
              transfer data over Hyper Text Transfer Protocol (HTTP). To include
              HTTP module, use the require() method.
            </p>
            <div className="code-example">
              <div className="code">
                <span className="code-span">
                  <span style={{ color: "mediumblue" }}>var</span>{" "}
                  <span>http = require('http');</span>
                </span>
              </div>
            </div>
            <p>
              The HTTP module can create an HTTP server that listens to server
              ports and gives a response back to the client. Use the{" "}
              <span
                style={{
                  color: "#db36a4",
                  backgroundColor: "#e7e9eb",
                  padding: "0 0.5rem 0 0.5rem",
                }}
              >
                createServer( )
              </span>{" "}
              method to create an HTTP server:
            </p>
            <div className="post-img">
              <img src="/nodejsserver-post/server.png" alt="server code" />
            </div>
            <p>
              The function passed into the http.createServer() method, will be
              executed when someone tries to access the computer on port 8080.
              Save the code above in a file called "demo_http.js", and initiate
              the file:
            </p>
            <div className="code-example">
              <div className="code">
                <span className="code-span">
                  {"C:\\Users\\Your Name> "}node index.js
                </span>
              </div>
            </div>
            <div className="post-img">
              <img src="/nodejsserver-post/localhost.png" alt="localhost" />
            </div>
            <p>
              If you have followed the same steps on your computer, you will see
              the same result as the example.
            </p>
            <p>
              For more details follow{" "}
              <a
                href="https://nodejs.dev/learn"
                target="_blank"
                rel="noreferrer"
              >
                <i>
                  <strong>NodeJS</strong>
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

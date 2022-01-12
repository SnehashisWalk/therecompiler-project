import React from "react";
import { Link } from "react-router-dom";
import "../postpage.css";
import { Avatar } from "@mui/material";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";

export default function AndroidApiReqPage() {
  return (
    <>
      <div className="container">
        <Header />
        <div className="post-page-content">
          <h1 className="post-heading-pri">
            Handling API requests in Android with Volley.
          </h1>
          <h3 className="post-subheading">
            Volley is an HTTP library that makes networking for Android apps
            easier and most importantly faster.
          </h3>
          <div className="post-info">
            <div className="post-info-left">
              <Avatar src="/images/dp/dp.jpg" />
              <h5 className="avatar-name">Snehashis Lenka</h5>
              {/* <h5 className="post-time">1 day ago</h5> */}
              <h5 className="post-length">7 min read</h5>
            </div>
            <div className="post-info-right"></div>
          </div>
          <div className="post-img">
            <img
              src="https://images.unsplash.com/photo-1599016012665-13b74bb3b528?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1336&q=80"
              alt="post pic"
            />
          </div>
          <div className="post-writeup">
            <p>
              This is a post to show you how to handle API requests in Android,
              for which we will be using Volley, a HTTP library that makes
              networking for Android apps easier.
            </p>
            <p>
              <strong>Volley</strong>
            </p>
            <p>
              Volley is an HTTP library that makes networking for Android apps
              easier and most importantly, faster. Volley is available on{" "}
              <a
                href="https://github.com/google/volley"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              .
            </p>
            <p>Volley offers the following benefits:</p>
            <ul>
              <li className="post-list-item">
                Automatic scheduling of network requests.
              </li>
              <li className="post-list-item">
                Multiple concurrent network connections.
              </li>
              <li className="post-list-item">
                Transparent disk and memory response caching with standard HTTP
                cache coherence.
              </li>
              <li className="post-list-item">
                Support for request prioritization.
              </li>
              <li className="post-list-item">
                Cancellation request API. You can cancel a single request, or
                you can set blocks or scopes of requests to cancel.
              </li>
              <li className="post-list-item">
                Ease of customization, for example, for retry and backoff.
              </li>
              <li className="post-list-item">
                Strong ordering that makes it easy to correctly populate your UI
                with data fetched asynchronously from the network.
              </li>
              <li className="post-list-item">Debugging and tracing tools.</li>
            </ul>
            <p>
              The easiest way to add Volley to your project is to add the
              following dependency to your app's build.gradle file:
            </p>
            <div className="code-example">
              <div className="code">
                <span className="code-span">{"dependencies { "}</span>
                <br />
                <span
                  className="code-span"
                  style={{ marginLeft: "4rem", letterSpacing: "0.5rem" }}
                >
                  ...
                </span>
                <br />
                <span className="code-span" style={{ marginLeft: "4rem" }}>
                  {'implementation("com.android.volley:volley:1.2.1")'}
                </span>
                <br />
                <span className="code-span">{"}"}</span>
              </div>
            </div>
            <p>
              <strong>Sending a simple request</strong>
            </p>
            <p>
              At a high level, you use Volley by creating a{" "}
              <span
                style={{
                  color: "black",
                  backgroundColor: "#e7e9eb",
                  padding: "0 0.5rem 0 0.5rem",
                }}
              >
                RequestQueue
              </span>{" "}
              and passing it{" "}
              <span
                style={{
                  color: "black",
                  backgroundColor: "#e7e9eb",
                  padding: "0 0.5rem 0 0.5rem",
                }}
              >
                Request
              </span>{" "}
              objects. The{" "}
              <span
                style={{
                  backgroundColor: "#e7e9eb",
                  color: "black",
                  padding: "0 0.5rem 0 0.5rem",
                }}
              >
                RequestQueue
              </span>{" "}
              manages worker threads for running the network operations, reading
              from and writing to the cache, and parsing responses. Requests do
              the parsing of raw responses and Volley takes care of dispatching
              the parsed response back to the main thread for delivery.
            </p>
            <p>
              <strong>Add the INTERNET permission</strong>
            </p>
            <p>
              To use Volley, you must add the{" "}
              <span
                style={{
                  color: "black",
                  backgroundColor: "#e7e9eb",
                  padding: "0 0.5rem 0 0.5rem",
                }}
              >
                android.permission.INTERNET
              </span>{" "}
              permission to your app's manifest. Without this, your app won't be
              able to connect to the network.
            </p>
            <p>
              <strong>Use newRequestQueue</strong>
            </p>
            <p>
              Volley provides a convenience method{" "}
              <span
                style={{
                  color: "black",
                  backgroundColor: "#e7e9eb",
                  padding: "0 0.5rem 0 0.5rem",
                }}
              >
                Volley.newRequestQueue
              </span>{" "}
              that sets up a{" "}
              <span
                style={{
                  color: "black",
                  backgroundColor: "#e7e9eb",
                  padding: "0 0.5rem 0 0.5rem",
                }}
              >
                RequestQueue
              </span>{" "}
              for you, using default values, and starts the queue. For example:
            </p>
            <div className="post-img">
              <img src="/android/api-request.png" alt="server code" />
            </div>
            <p>
              Volley always delivers parsed responses on the main thread.
              Running on the main thread is convenient for populating UI
              controls with received data, as you can freely modify UI controls
              directly from your response handler, but it's especially critical
              to many of the important semantics provided by the library,
              particularly related to canceling requests.
            </p>
            <p>
              <strong>Send a request</strong>
            </p>
            <p>
              To send a request, you simply construct one and add it to the{" "}
              <span
                style={{
                  color: "black",
                  backgroundColor: "#e7e9eb",
                  padding: "0 0.5rem 0 0.5rem",
                }}
              >
                RequestQueue
              </span>{" "}
              with{" "}
              <span
                style={{
                  color: "black",
                  backgroundColor: "#e7e9eb",
                  padding: "0 0.5rem 0 0.5rem",
                }}
              >
                add( )
              </span>
              , as shown above. Once you add the request it moves through the
              pipeline, gets serviced, and has its raw response parsed and
              delivered.
            </p>
            <p>
              When you call{" "}
              <span
                style={{
                  color: "black",
                  backgroundColor: "#e7e9eb",
                  padding: "0 0.5rem 0 0.5rem",
                }}
              >
                add( )
              </span>
              , Volley runs one cache processing thread and a pool of network
              dispatch threads. When you add a request to the queue, it is
              picked up by the cache thread and triaged: if the request can be
              serviced from cache, the cached response is parsed on the cache
              thread and the parsed response is delivered on the main thread. If
              the request cannot be serviced from cache, it is placed on the
              network queue. The first available network thread takes the
              request from the queue, performs the HTTP transaction, parses the
              response on the worker thread, writes the response to cache, and
              posts the parsed response back to the main thread for delivery.
            </p>
            <p>
              Note that expensive operations like blocking I/O and
              parsing/decoding are done on worker threads. You can add a request
              from any thread, but responses are always delivered on the main
              thread.
            </p>
            <p>Figure illustrates the life of a request:</p>
            <div className="post-img">
              <img src="/android/req-figure.png" alt="server code" />
            </div>
            <p>
              This is how we can request an API call in Android using Volley
            </p>
            <p>
              For more details follow{" "}
              <a
                href="https://github.com/google/volley"
                target="_blank"
                rel="noreferrer"
              >
                <i>
                  <strong>Volley</strong>
                </i>
              </a>{" "}
              documentation.
            </p>
            <p>
              And for more updates and tricks in android development follow{" "}
              <strong>TheRecompiler</strong>.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

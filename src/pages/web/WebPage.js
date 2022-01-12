import "./webpage.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import { Link } from "react-router-dom";

const values = [
  {
    title: "How to use Multer for uploading files in Node.js",
    shortDesc:
      "Multer is a node.js middleware for handling multipart/form-data.",
    img: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    imgAlt: "multer",
    link: "/post/multer",
  },
  {
    title: "Setup a simple NodeJS server",
    shortDesc: "NodeJS - Setup a Simple HTTP Server",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1034&q=80",
    imgAlt: "nodejs-server",
    link: "/post/nodejs-server",
  },
];

export default function WebPage() {
  return (
    <>
      <Header />
      <div className="wp-content">
        <Navbar />
        <div className="wp-heading-box">
          <h2 className="wp-heading">Web</h2>
        </div>
        {values.map((item, index) => {
          return (
            <Link to={item.link} key={index} style={{ textDecoration: "none" }}>
              <div className="wp-post-body">
                <div className="wp-post-left">
                  <img src={item.img} alt={item.imgAlt} />
                </div>
                <div className="wp-post-right">
                  <h2>{item.title}</h2>
                  <h4>{item.shortDesc}</h4>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      <Footer />
    </>
  );
}

const styles = {
  title: {
    color: "#fff",
  },
};

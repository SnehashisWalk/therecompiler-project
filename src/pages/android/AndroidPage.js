import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import "./androidpage.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const values = [
  {
    title: "Handling API requests in Android with Volley.",
    shortDesc:
      "Volley is an HTTP library that makes networking for Android apps easier and most importantly faster.",
    img: "https://images.unsplash.com/photo-1599016012665-13b74bb3b528?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1336&q=80",
    imgAlt: "android-api-req",
    link: "/post/android-api-req",
  },
];

export default function AndroidPage() {
  return (
    <>
      <Header />
      <div className="ap-container">
        <Navbar />
        <div className="ap-heading-box">
          <h2 className="ap-heading">Android</h2>
        </div>
        {values.map((item, index) => {
          return (
            <Link to={item.link} key={index} style={{ textDecoration: "none" }}>
              <div className="ap-post-body">
                <div className="ap-post-left">
                  <img src={item.img} alt={item.imgAlt} />
                </div>
                <div className="ap-post-right">
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

import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import "./mlpage.css";
import { Link } from "react-router-dom";

const values = [
  {
    title: "Basics of Machine Learning",
    shortDesc:
      "Short guide for understanding basics of machine learning and its mlplications.",
    img: "https://images.pexels.com/photos/3143813/pexels-photo-3143813.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    imgAlt: "ml-page",
    link: "/post/ml-basics",
  },
];

export default function MLPage() {
  return (
    <>
      <Header />
      <div className="ml-container">
        <Navbar />
        <div className="ml-heading-box">
          <h2 className="ml-heading">
            Machine Learning / Artificial Intelligence
          </h2>
        </div>
        {values.map((item, index) => {
          return (
            <Link to={item.link} key={index} style={{ textDecoration: "none" }}>
              <div className="ml-post-body">
                <div className="ml-post-left">
                  <img src={item.img} alt={item.imgAlt} />
                </div>
                <div className="ml-post-right">
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

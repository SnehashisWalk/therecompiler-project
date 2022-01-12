import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import "./aboutpage.css";

export default function AboutPage() {
  return (
    <>
      <Header />
      <div className="abt-container">
        <div className="abt-content">
          <div className="abt-content-left">
            <img src="/images/dp/dp.jpg" alt="dp" />
          </div>
          <div className="abt-content-right">
            <h2 className="abt-heading">TheRecompiler</h2>
            <h5 className="abt-desc">
              TheRecompiler is developed and maintained by Snehashis Lenka, a
              former System Engineer at Infosys Ltd. He has worked on web
              development, android development and machine learning. Here on
              TheRecompiler he pens down his thoughts, tips and tricks he found
              and conjured working on software development. The purpose of this
              blog is to provide high-quality content for software developers.
            </h5>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

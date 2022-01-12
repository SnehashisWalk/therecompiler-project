import React from "react";
import "../postpage.css";
import { Avatar } from "@mui/material";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";

export default function MLBasics() {
  return (
    <>
      <div className="container">
        <Header />
        <div className="post-page-content">
          <h1 className="post-heading-pri">Basics of Machine Learning</h1>
          <h3 className="post-subheading">
            Short guide for understanding basics of machine learning and its
            applications.
          </h3>
          <div className="post-info">
            <div className="post-info-left">
              <Avatar src="/images/dp/dp.jpg" />
              <h5 className="avatar-name">Snehashis Lenka</h5>
              {/* <h5 className="post-time">1 day ago</h5> */}
              <h5 className="post-length">5 min read</h5>
            </div>
            <div className="post-info-right"></div>
          </div>
          <div className="post-img">
            <img
              src="https://images.pexels.com/photos/3143813/pexels-photo-3143813.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="post pic"
            />
          </div>
          <div className="post-writeup">
            <p>
              In simple words machine learning is the computer's ability to
              learn without being explicitly programmed.
            </p>
            <p>
              At the basic level, machine learning uses programmed algorithms
              that receive and analyse input data to predict output values
              within an acceptable range. As new data is fed to these
              algorithms, they learn and optimise their operations to improve
              performance, developing ‘intelligence’ over time.
            </p>
            <p>
              There are four types of machine learning algorithms: supervised,
              semi-supervised, unsupervised and reinforcement.
            </p>
            <p>
              <strong>Supervised learning</strong>
            </p>
            <p>
              In supervised learning, the machine is taught by example. The
              operator provides the machine learning algorithm with a known
              dataset that includes desired inputs and outputs, and the
              algorithm must find a method to determine how to arrive at those
              inputs and outputs. While the operator knows the correct answers
              to the problem, the algorithm identifies patterns in data, learns
              from observations and makes predictions. The algorithm makes
              predictions and is corrected by the operator – and this process
              continues until the algorithm achieves a high level of
              accuracy/performance.
            </p>
            <p>
              Under the umbrella of supervised learning fall: Classification,
              Regression and Forecasting.
            </p>
            <ol>
              <li className="post-list-item">
                <strong>Classification:</strong> In classification tasks, the
                machine learning model or program draws a conclusion from
                observed values and determine to what category new observations
                belong. For instance, when filtering emails as ‘spam’ or ‘not
                spam’, the model or program must look at existing observational
                data and filter the emails accordingly.
              </li>
              <li className="post-list-item">
                <strong>Regression:</strong> In regression tasks, the machine
                learning program must estimate – and understand – the
                relationships among variables. Regression analysis focuses on
                one dependent variable and a series of other changing variables
                – making it particularly useful for prediction and forecasting.
              </li>
              <li className="post-list-item">
                <strong>Forecasting:</strong> Forecasting is the process of
                making predictions about the future based on the past and
                present data, and is used to analyse trends or patterns.
              </li>
            </ol>
            <p>
              <strong>Semi-supervised learning</strong>
              <p>
                Semi-supervised learning is similar to supervised learning, but
                instead uses both labelled and unlabelled data. Labelled data is
                essentially information that has meaningful tags so that the
                algorithm can understand the data, whilst unlabelled data lacks
                that information. By using this combination, machine learning
                algorithms can learn to label unlabelled data.
              </p>
            </p>
            <p>
              <strong>Unsupervised learning</strong>
              <p>
                In unsupervised learning, the machine learning algorithm
                analyzes data to identify patterns. There is no particular
                outcome provided by the ML engineers. Instead, the machine
                determines the relationships in the data and create a set of
                rules and generates inferences from it. In this process, the ML
                algorithm is left to interpret large data sets and address that
                data accordingly.
              </p>
            </p>
            <p>
              Under unsupervised learning there is Clustering and Dimension
              Reduction.
            </p>
            <p>
              <strong>Clustering</strong> means clustering or gathering similar
              data together, it is useful for cleaning dirty data and grouping
              the required data. For instance, in a datasets of different movies
              clustering helps to organize the movies based on their genres.
            </p>
            <p>
              <strong>Dimension Reduction</strong> means reducing the number of
              variables in a model that a ML algorithm has to consider, thus
              thereby reducing the number of variables simplifying the problem.
            </p>
            <p>
              <strong>Reinforcement learning</strong>
            </p>
            <p>
              Reinforcement learning in a way machine or a machine learning
              algorithm in a trial and error fashion. The ML algorithm is
              provided with a set of instructions,parameters and values. The
              algorithm then defines the rules, and explore different options
              and possibilities and evaluates which one among the many is the
              optimal. Thus feeding the ML algorithm with more data and
              parameters the algorithm learn from past experiences and keeps on
              improving itself, thus adapting itself to the best possible
              result.
            </p>
            <p>
              <strong>Machine Learning Applications</strong>
            </p>
            <ul>
              <li className="post-list-item">Image Recoginition</li>
              <li className="post-list-item">Speech Recoginition</li>
              <li className="post-list-item">Self-driving cars</li>
              <li className="post-list-item">Product recommendations</li>
              <li className="post-list-item">Medical Diagnosis</li>
              <li className="post-list-item">Fraud Detection</li>
              <li className="post-list-item">Traffic alerts</li>
              <li className="post-list-item">Virtual Personal Assistants</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import WebPage from "./pages/web/WebPage";
import CreatePost from "./pages/createPost/CreatePost";
import NodeServerPage from "./pages/post/nodeServer/NodeServerPage";
import AndroidApiReqPage from "./pages/post/android-api/AndroidApiReqPage";
import MLBasics from "./pages/post/ml/MLBasics";
import MulterPage from "./pages/post/multer/MulterPage";
import AndroidPage from "./pages/android/AndroidPage";
import MLPage from "./pages/ml/MLPage";
import AboutPage from "./pages/about/AboutPage";
import { useEffect } from "react";

const Wrapper = ({ children }) => {
  const location = useLocation();
  useEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

ReactDOM.render(
  <BrowserRouter>
    <Wrapper>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="post/multer" element={<MulterPage />} />
        <Route path="webcontent" element={<WebPage />} />
        <Route path="android-content" element={<AndroidPage />} />
        <Route path="create-post" element={<CreatePost />} />
        <Route path="post/nodejs-server" element={<NodeServerPage />} />
        <Route path="post/android-api-req" element={<AndroidApiReqPage />} />
        <Route path="post/ml-basics" element={<MLBasics />} />
        <Route path="ml-content" element={<MLPage />} />
        <Route path="about" element={<AboutPage />} />
      </Routes>
    </Wrapper>
  </BrowserRouter>,
  document.getElementById("root")
);

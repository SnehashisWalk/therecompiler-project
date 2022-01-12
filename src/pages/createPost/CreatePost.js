// import React, { useState } from "react";
import "./createPost.css";

// export default function CreatePost() {
//   const [textHighlighted, setTextHighlighted] = useState("");
//   const [disable, setDisable] = useState(false);

//   const handleChange = (e) => {
//     console.log(e.target.value);
//   };

//   const handleMouseUp = (e) => {
//     let text = "";
//     if (typeof window.getSelection() != "undefined") {
//       text = window.getSelection().toString();
//       if (text) {
//         setDisable(true);
//       } else {
//         setDisable(false);
//       }
//     } else if (
//       typeof document.selection != "undefined" &&
//       document.selection.type === "Text"
//     ) {
//       text = document.selection.createRange().text;
//     }
//     // if (text) {
//     //   setTextHighlighted(text);
//     // } else {
//     //   setTextHighlighted("");
//     //   console.log("else part");
//     // }
//     console.log(text);
//     // console.log(textHighlighted);
//   };

//   const handleBoldClick = () => {
//     if (textHighlighted) {
//       setTextHighlighted(`<strong>${textHighlighted}</strong>`);
//     }
//   };

//   const handleResetClick = () => {
//     setDisable(false);
//   };

//   return (
//     <div className="create-post-container">
//       <h2>Create Post Page</h2>
//       <div className="control-pallete">
//         <button onClick={handleBoldClick} className="control-pallete-btn">
//           B
//         </button>
//         <button onClick={handleResetClick} className="control-pallete-btn">
//           R
//         </button>
//       </div>
//       <div className="editor-area">
//         <textarea
//           disabled={disable}
//           onMouseUp={handleMouseUp}
//           onChange={handleChange}
//           className="text-area"
//         ></textarea>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import axios from "axios";

export default function CreatePost() {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState(null);
  const [category, setCategory] = useState(null);
  const [shortDesc, setShortDesc] = useState(null);

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (
      title !== null &&
      category !== null &&
      shortDesc !== null &&
      file !== null
    ) {
      const formData = new FormData();
      formData.append("files", file);
      formData.append("title", title);
      formData.append("category", category);
      formData.append("shortDesc", shortDesc);

      console.log(formData);
      const config = {
        headers: {
          "content-type": "multipart/form-data",
        },
      };
      axios
        .post("http://localhost:8800/api/upload/", formData, config)
        .then((response) => {
          alert("The file is successfully uploaded");
        })
        .catch((error) => {
          console.log(error);
        });
    }
    // if (title !== null && file !== null) {
    //   const formData = new FormData();
    //   let data = { title, formData };
    //   const config = {
    //     header: {
    //       "content-type": "multipart/form-data",
    //     },
    //   };
    //   formData.append("file", data);
    //   console.log(formData);
    //   axios
    //     .post("http://localhost:8800/api/upload/", formData, config)
    //     .then((res) => {
    //       alert("File uploaded.");
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // } else {
    //   alert("please provide title as well as file");
    // }
  };

  const onChange = (name) => (e) => {
    switch (name) {
      case "title":
        setTitle(e.target.value);
        break;
      case "category":
        setCategory(e.target.value);
        break;
      case "shortDesc":
        setShortDesc(e.target.value);
        break;
      case "file":
        setFile(e.target.files[0]);
        break;
      default:
        break;
    }
  };

  return (
    <div className="create-post-container">
      <form onSubmit={onFormSubmit} encType="multipart/form-data">
        <h1>File Upload</h1>
        <div style={{ display: "flex" }}>
          <h3>Title: </h3>
          <input type="text" name="title" onChange={onChange("title")} />
        </div>
        <div style={{ display: "flex" }}>
          <h3>Category: </h3>
          <input type="text" name="title" onChange={onChange("category")} />
        </div>
        <div style={{ display: "flex" }}>
          <h3>Short Description: </h3>
          <input type="text" name="title" onChange={onChange("shortDesc")} />
        </div>
        <input type="file" name="file" onChange={onChange("file")} />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}

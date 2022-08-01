import axios from "../utils/AxiosInstance";
import { Alert } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { Editor } from "@tinymce/tinymce-react";

const Create = () => {
  const [thumbnail, setthumbnail] = useState("");
  const [title, settitle] = useState("");
  const [category, setcategory] = useState("World");
  const [except, setexcept] = useState("");
  const [content, setcontent] = useState("");

  const [status, setstatus] = useState("");
  const [error, seterror] = useState("");
  const [created, setcreated] = useState("");

  const [visiblety, setvisiblety] = useState(false);

  //   const handleChange = ({ currentTarget: input }) => {
  //     let newData = { ...data };
  //     newData[input.name] = input.value;
  //     setData(newData);
  //     };

  const Post = () => {
    axios
      .post("createposts/", {
        "thumbnail_url": thumbnail,
        "title": title,
        "category": category,
        "except": except,
        "content": content,
        "status": status,

      })
      .then((response) => {
        // console.log(response)
        if (response.status === 201) {
          setcreated("Data Successfully Submitted");
        } else {
          seterror("Request Time Out");
          setvisiblety(true);
        }
      })
      .catch((error) => {
        setvisiblety(true);
        seterror(error.message);
      });
  };
  console.log(thumbnail)
  console.log(content)
  return (
    <>
      {visiblety === true ? error !== "" ? (
        <Alert variant="danger" onClose={() => setvisiblety(false)} dismissible>
          {error}
        </Alert>
      ) : null : null}

      {visiblety === true ? created !== "" ? (
        <Alert variant="success" onClose={() => setvisiblety(false)} dismissible>
          {error}
        </Alert>
      ) : null : null}

      <form className="my-5">
        <div class="custom-file my-4">
          <label for="formFile" class="form-label">
            Thumbnail
          </label>
          <input
            class="form-control"
            type="file"
            id="formFile"
            accept="image/jpeg,image/jpg,image/png"
            onChange={(e) => {
              //   console.log(e.target.files.name)
              setthumbnail(e.target.files[0]);
            }}
          />
        </div>

        <div class="form-group my-4">
          <div class="form-floating">
            <input
              type="text"
              class="form-control"
              id="floatingInputGrid"
              onChange={(e) => settitle(e.target.value)}
            />
            <label for="floatingInputGrid">Title</label>
          </div>
        </div>

        <div class="form-floating">
          <select
            class="form-select"
            aria-label="Default select example"
            onChange={(e) => setcategory(e.target.value)}
          >
            <option value="World">World</option>
            <option value="Enviroment">Enviroment</option>
            <option value="Technology">Technology</option>
            <option value="Design">Design</option>
            <option value="Culture">Culture</option>
            <option value="Business">Business</option>
            <option value="Politics">Politics</option>
            <option value="Opinions">Opinions</option>
            <option value="Science">Science</option>
            <option value="Health">Health</option>
            <option value="Style">Style</option>
            <option value="Travel">Travel</option>
          </select>
          <label for="floatingSelect">Categorys</label>
        </div>

        <div class="form-group my-4">
          <div class="form-floating">
            <textarea
              class="form-control"
              placeholder="Excerpt"
              id="floatingTextarea2"
              onChange={(e) => setexcept(e.target.value)}
              style={{ height: "100px" }}
            ></textarea>
            <label for="floatingTextarea2">Excerpt</label>
          </div>
        </div>

        <div class="form-group my-4">
          <Editor
            textareaName="content"
            //   initialValue="<p>This is the initial content of the editor.</p>"
            init={{
              height: 400,
              menubar: false,

              plugins: [
                "advlist autolink lists link image charmap print preview anchor",
                "searchreplace visualblocks code fullscreen",
                "insertdatetime media table paste code help wordcount",
                "quickbars",
                "codesample",
                "hr",
                "searchreplace",
                "spellchecker",
                "image",
                "bbcode",
              ],

              menubar: ["edit", "tools", "insert"],

              toolbar:
                "undo redo | formatselect | " +
                "bold italic backcolor | alignleft aligncenter  " +
                "alignright alignjustify | bullist numlist outdent indent | codesample  hr searchreplace spellchecker image",

              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",

              codesample_global_prismjs: true,

              codesample_languages: [
                { text: "HTML/XML", value: "markup" },
                { text: "JavaScript", value: "javascript" },
                { text: "CSS", value: "css" },
                { text: "PHP", value: "php" },
                { text: "Ruby", value: "ruby" },
                { text: "Python", value: "python" },
                { text: "Java", value: "java" },
                { text: "C", value: "c" },
                { text: "C#", value: "csharp" },
                { text: "C++", value: "cpp" },
              ],
            }}
            onEditorChange={(newText) => setcontent(newText)}
          />
        </div>

        <div class="btn-group">
          <a
            class="btn btn-primary active"
            aria-current="page"
            onClick={(event) => {
              setstatus("Published");
              Post();
            }}
          >
            Publish
          </a>
          <a
            class="btn btn-primary"
            onClick={(event) => {
              setstatus("Draft");
              Post();
            }}
          >
            Draft
          </a>
        </div>
      </form>
    </>
  );
};

export default Create;



{/* <div  dangerouslySetInnerHTML={{__html: body}} /> */ }

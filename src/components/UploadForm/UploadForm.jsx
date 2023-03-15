import { useState } from "react";
import "./UploadForm.scss";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

function UploadForm({ setShowModal }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [titleClass, setTitleClass] = useState(
    "upload-form__input upload-form__input--title"
  );
  const [titlePlaceholder, setTitlePlaceholder] = useState(
    "Add a title to your video"
  );
  const [descriptionClass, setDescriptionClass] = useState(
    "upload-form__input upload-form__input--description"
  );
  const [descriptionPlaceholder, setDescriptionPlaceholder] = useState(
    "Add a description to your video"
  );

  function handleFormSubmission(e) {
    e.preventDefault();

    if (title === "") {
      setTitleClass("upload-form__input upload-form__input--title invalid");
      setTitlePlaceholder("Please input a title for your submission.");
      return;
    }
    if (description === "") {
      setDescriptionClass(
        "upload-form__input upload-form__input--description invalid"
      );
      setDescriptionPlaceholder(
        "Please input a description for your submission."
      );
      return;
    }

    axios
      .post(`${API_URL}/videos`, {
        title,
        description,
        image: "https://i.imgur.com/TWxzU3i.jpeg",
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.error(err);
      });

    setTitle("");
    setDescription("");
    setShowModal(true);
  }

  function handleTitleChange(e) {
    setTitle(e.target.value);
    setTitleClass("upload-form__input upload-form__input--title");
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
    setDescriptionClass("upload-form__input upload-form__input--description");
  }

  return (
    <div className="upload-form">
      <h1 className="upload-form__heading">Upload Video</h1>

      <form
        action=""
        className="upload-form__form"
        onSubmit={handleFormSubmission}
      >
        <div className="upload-form__container">
          <div className="upload-form__column">
            <h3 className="upload-form__subheading">Video Thumbnail</h3>
            <img
              src="http://localhost:5000/images/Upload-video-preview.jpg"
              alt=""
              className="upload-form__image"
            />
          </div>
          <div className="upload-form__column upload-form__column--fields">
            <label
              htmlFor="title"
              className="upload-form__subheading upload-form__label"
            >
              Title your video
            </label>
            <input
              className={titleClass}
              type="text"
              name="title"
              id="title"
              placeholder={titlePlaceholder}
              value={title}
              onChange={handleTitleChange}
            />
            <label
              htmlFor="description"
              className="upload-form__subheading upload-form__label"
            >
              Add a video description
            </label>
            <textarea
              className={descriptionClass}
              type="text"
              name="description"
              id="description"
              placeholder={descriptionPlaceholder}
              value={description}
              onChange={handleDescriptionChange}
            />
          </div>
        </div>
        <div className="upload-form__buttons">
          <button
            className="upload-form__btn upload-form__btn--upload"
            type="submit"
          >
            Publish
          </button>
          <button
            className="upload-form__btn upload-form__btn--cancel"
            type="reset"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default UploadForm;

import { useState } from "react";
import uploadThumbnail from "../../assets/images/Upload-video-preview.jpg";
import "./UploadForm.scss";

function UploadForm({ setShowModal }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleFormSubmission(e) {
    e.preventDefault();

    if (title === "" || description === "") {
      alert("Please fill out the required fields.");
      return;
    }
    setTitle("");
    setDescription("");
    setShowModal(true);
  }
  function handleTitleChange(e) {
    setTitle(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
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
            <img src={uploadThumbnail} alt="" className="upload-form__image" />
          </div>
          <div className="upload-form__column upload-form__column--fields">
            <label
              htmlFor="title"
              className="upload-form__subheading upload-form__label"
            >
              Title your video
            </label>
            <input
              className="upload-form__input upload-form__input--title"
              type="text"
              name="title"
              id="title"
              placeholder="Add a title to your video"
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
              className="upload-form__input upload-form__input--description"
              type="text"
              name="description"
              id="description"
              placeholder="Add a description to your video"
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

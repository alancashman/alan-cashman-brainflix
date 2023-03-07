import uploadThumbnail from "../../assets/images/Upload-video-preview.jpg";
import "./UploadForm.scss";
function UploadForm() {
  return (
    <div className="upload-form">
      <h1 className="upload-form__heading">Upload Video</h1>

      <h3 className="upload-form__subheading">Video Thumbnail</h3>

      <img src={uploadThumbnail} alt="" className="upload-form__image" />
      <form action="" className="upload-form__form">
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
        />
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

import './boxContent.css'

const ContentBox = ({ title, imgSrc, content }) => (
    <div className="box__content">
      <h1>{title}</h1>
      <img src={imgSrc} alt={title} />
      <p>{content}</p>
    </div>
  );

export default ContentBox;
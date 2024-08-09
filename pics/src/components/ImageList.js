import "./ImageList.css";
import ImageShow from "./ImageShow";

function ImageList({ images }) {
  const renderedImages = images.map((item) => (
    <ImageShow image={item} key={item.id} />
  ));

  return <div className="image-list">{renderedImages}</div>;
}

export default ImageList;

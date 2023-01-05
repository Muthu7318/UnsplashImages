import ImageShow from "./ImageShow";
import "./ImageList.css";

function ImageList({ images }) {
  const image = images.map((item) => (
    <ImageShow key={item.id} img={item}></ImageShow>
  ));
  return <div className="image-list">{image}</div>;
}

export default ImageList;

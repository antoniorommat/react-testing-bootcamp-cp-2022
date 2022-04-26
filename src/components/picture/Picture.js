import { Img } from "./Picture.styles";

const Picture = ({src, title}) => {
  return (
    <>
      <h2>{title ? title : 'Image Title'}</h2>
      <Img src={src} aria-label="apod picture" />
    </>
  );
}

export default Picture;

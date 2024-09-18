import { useNavigate, Link } from "react-router-dom";
import { Body, DirectoryItemContainer } from "./images-styles";

const Images1 = ({ category }) => {
  
  let { imageUrl, route } = category;

  //route = "category/art1"
  const navigate = useNavigate();
  const onNavigateHandler = () => navigate(route);
 
  console.log("routez: ", route)
  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <Body>
        <div className="images">
          <img src={imageUrl} alt={``} width={150} />
        </div>
      </Body>
    </DirectoryItemContainer>
  );
};

export default Images1;

import { useNavigate, NavLink } from "react-router-dom";
import { Body, DirectoryItemContainer, ImagesComponent } from "./images-styles";

const Images = ({ category }) => {
  
  let { imageUrl, route } = category;

  //route = "category/art1"
  const navigate = useNavigate();
  const onNavigateHandler = () => navigate(route);
 
  console.log("routez: ", route)
  return (
    <NavLink to={route}>
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <Body>
        <ImagesComponent>
          <img src={imageUrl} alt={``} />
        </ImagesComponent>
      </Body>
    </DirectoryItemContainer>
    </NavLink>
  );
};

export default Images;

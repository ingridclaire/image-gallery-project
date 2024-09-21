import { useNavigate, Link } from "react-router-dom";
import { Body, DirectoryItemContainer } from "./images-styles";

const Images1 = ({ category }) => {
  let { imageUrl, route } = category;

  //route = "category/art1"
  const navigate = useNavigate();
  /*ICC: instead of using an onClick handler, you can use the Link component from react-router-dom or your styled NavLink with a to prop. If the only purpose of a click handler is to navigate to another route/page, then it's better to use the Link component.
  Example:
  <NavLink to={route}>
    <DirectoryItemContainer>
      <Body>
        <div className="images">
          <img src={imageUrl} alt={``} width={150} />
        </div>
      </Body>
    </DirectoryItemContainer>
  </NavLink>
  */
  const onNavigateHandler = () => navigate(route);

  console.log("routez: ", route);
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

import { useNavigate } from 'react-router-dom';
import { PhotoContainer, DropDown } from "./photoimages-styles";
import Panel from "../panel/panel-component-copy2";
import { createPortalcreate } from 'react-dom';
import { usePortal } from "react-dom";
import { createPortal } from 'react-dom';

const PhotoImages1 = ({ category, productID }) => {
  const { id, imageUrl, name, price } = category;
  const navigate = useNavigate();

  return (
    <div>
      <div id='drop'>

        {id}

      </div>
      <div>
        <h2>{name}</h2>
        <h3>${price}.00</h3>
        <div className="images">
          <img src={imageUrl} alt={``} width={90} />
        </div>
      </div>
      <Panel key={id} category={category} productID={productID} />
    </div>
  );
}
export default PhotoImages1;
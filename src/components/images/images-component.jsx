import { useNavigate, Link } from 'react-router-dom';
import { Body, img, images, DirectoryItemContainer } from './images-styles';

const Images1 = ({ category }) => {
    const { imageUrl, route } = category;
    const navigate = useNavigate();
    const onNavigateHandler = () => navigate(route);

    return (
        <DirectoryItemContainer onClick={onNavigateHandler}>
            <Body>
                <h2>ab</h2>
                <div className="images">
                    <img src={imageUrl} alt={``} width={60} />
                </div>
            </Body>
        </DirectoryItemContainer>
    );
}
export default Images1;

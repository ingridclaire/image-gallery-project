import Images from "../../components/images/images-component";
import { DirectoryContainer } from "./directory-styles";
import "./directory-styles.css";

const categories = [
  {
    id: 2,
    name: "Al",
    imageUrl: require("../../assets/artist1.jpg"),
    route: "category/art1",
  },
  {
    id: 1,
    name: "Debbie",
    imageUrl: require("../../assets/artist2.jpg"),
    route: "category/art2",
  },
  {
    id: 3,
    name: "Joe",
    imageUrl: require("../../assets/artist3.jpg"),
    route: "category/art3",
  },
  {
    id: 4,
    name: "Kate",
    imageUrl: require("../../assets/artist4.jpg"),
    route: "category/art4",
  },
  {
    id: 5,
    name: "Bill",
    imageUrl: require("../../assets/artist5.jpg"),
    route: "category/art5",
  },
];

// ICC you mentioned in a question about making this component "static." I'm not sure what you mean by that. I'm assuming you mean that the component is not dynamic and does not change. If that is the case, then this component is already static. Or are you talking about stylistically?
// ICC static generally means that a component does not use state and it will not need to be re-rendered due to state changes. A dynamic component would be one that uses state and will re-render when the state changes. This component is static because it does not use state. It is just rendering the categories array.
const Directory = () => {
  return (
    <div>
      <div className="ArtistTitle">Select an Artist</div>
      <DirectoryContainer>
        {categories.map((category) => (
          <Images key={category.imageUrl} category={category} />
        ))}
      </DirectoryContainer>
    </div>
  );
};
export default Directory;

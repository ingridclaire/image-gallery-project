import Images1 from "../images/images-component";
import { DirectoryContainer } from "../directory/directory-styles";

const categories = [
  {
    id: 1,
    name: "Al",
    imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    route: "category/hats",
  },
  {
    id: 2,
    name: "Debbie",
    imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    route: "category/art2",
  },
  {
    id: 3,
    name: "Joe",
    imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    route: "category/art3",
  },
  {
    id: 4,
    name: "Kate",
    imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    route: "category/art4",
  },
  {
    id: 5,
    name: "Bill",
    imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    route: "category/art5",
  },
];

let checkedComponent = "react multiple";
const Directory = () => {
  let count = 0;
  return (
    <div>
      <DirectoryContainer>
        {categories.map((category) => (
          <Images1 key={category.name} category={category} />
        ))}
      </DirectoryContainer>
    </div>
  );
};
export default Directory;

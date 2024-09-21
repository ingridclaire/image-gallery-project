import Images1 from "../images/images-component";
import { DirectoryContainer } from "../directory/directory-styles";
/* ICC: store the categories array in another file of data/constants and import it here. How this will look:
In the export file:
export const categories = [(the array you have here)];

In this file:
import { categories } from "../../data/categories";

This would be assuming you create a folder called data within src. And then within the data folder, create a file called categories.js where you define and export the categories array as shown above.

*/
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
const Directory = () => {
  return (
    <div>
      {/* ICC: avoid excessive use of br tags like this, instead use margin/padding with CSS */}
      <br></br> <br></br> <br></br> <br></br>
      <h1>Select an Artist</h1>
      <br></br> <br></br> <br></br> <br></br>
      <DirectoryContainer>
        {/* ICC: perfect example of returning a component (Images1) from the map callback - always use this pattern isntead of returning a bunch of JSX code */}
        {categories.map((category) => (
          <Images1 key={category.imageUrl} category={category} />
        ))}
      </DirectoryContainer>
    </div>
  );
};
export default Directory;

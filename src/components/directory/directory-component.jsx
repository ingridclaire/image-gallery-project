import Images1 from "../images/images-component";
import { DirectoryContainer } from "../directory/directory-styles";

const categories = [
  {
    id: 2,
    name: "Al",
    imageUrl: require ("../../assets/artist1.jpg"),
    route: "category/art1",
  },
  {
    id: 1,
    name: "Debbie",
    imageUrl: require ("../../assets/artist2.jpg"),
    route: "category/art2",
  },      
  {
    id: 3,
    name: "Joe",
    imageUrl: require ("../../assets/artist3.jpg"),
    route: "category/art3",
  },
  {
    id: 4,
    name: "Kate",
    imageUrl: require ("../../assets/artist4.jpg"),
    route: "category/art4",
  },
  {
    id: 5,
    name: "Bill",
    imageUrl: require ("../../assets/artist5.jpg"),
    route: "category/art5",
  },
];
const Directory = () => {
  return (
    <div>
       <br></br> <br></br> <br></br> <br></br> 
       <h1>Select an Artist</h1>
       <br></br> <br></br> <br></br> <br></br>
      <DirectoryContainer>
        {categories.map((category) => (
          <Images1 key={category.imageUrl} category={category} />
        ))}
      </DirectoryContainer>
    </div>
  );
};
export default Directory;

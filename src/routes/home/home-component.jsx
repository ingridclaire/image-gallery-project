import Directory from "../../components/directory/directory-component";

// ICC: it seems unnecessary to have a separate component that nests the Directory component. Instead, just use Directory component directly or rename Directory to Home. You can add the extra div tag to the JSX in Directory component if you need it.
const Home = () => {
  return (
    <div>
      <Directory />
    </div>
  );
};

export default Home;

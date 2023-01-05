import { useState } from "react";
import SearchBar from "./Components/SearchBar";
import ImageList from "./Components/ImageList";
import searchImages from "./api";

function App() {
  const [images, setImage] = useState([]);
  const handleSubmit = async (searchTerm) => {
    const searchResult = await searchImages(searchTerm);
    setImage(searchResult);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit}></SearchBar>
      <ImageList images={images}></ImageList>
    </div>
  );
}

export default App;

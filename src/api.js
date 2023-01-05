import axios from "axios";

const searchImages = async (searchTerm) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID 9iQ2vwJfKFAntfm5ssnu5ai8BHZFvlFB9jigTcjRI8E",
    },
    params: {
      query: searchTerm,
    },
  });
  return response.data.results;
};

export default searchImages;

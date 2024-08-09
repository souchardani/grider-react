import axios from "axios";

const searchImages = async (searchTerm) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID 1GMMW6NDdE0R6x3LAZe5xNdN3EC_B6ZbWZyQgkC0yps",
    },
    params: {
      query: searchTerm,
    },
  });

  return response.data.results;
};

export default searchImages;

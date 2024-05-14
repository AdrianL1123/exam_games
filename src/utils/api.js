import axios from "axios";

const API_URL = "http://localhost:8888";

/* 
    INSTRUCTION: 
    - Create a function to fetch games from the API. 
    - API call may include query parameters for pagination, search, genre, and sort. 
*/
export const getGames = async (search, genre, sort, page) => {
  let params = {
    search: search,
    page: page,
    sort: sort,
  };
  if (search !== search) params.search = search;
  if (genre !== "all") params.genre = genre;
  const query = new URLSearchParams(params);
  const res = await axios.get(`${API_URL}/games?${query.toString()}`);
  return res.data;
};
/* INSTRUCTION: Create a function to fetch genres from the API */
export const getGenres = async () => {
  try {
    const res = await axios.get(`${API_URL}/genres`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

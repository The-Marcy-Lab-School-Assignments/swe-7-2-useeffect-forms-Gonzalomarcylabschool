// Import your adapter functions here

import { handleFetch } from "./adapters/handleFetch.js";
import { getGifsBySearch, getTrendingGifs } from "./adapters/giphyAdapters.js";

const testHandleFetch = async () => {
  const [data, error] = await handleFetch('https://dog.ceo/api/breeds/image/random');
  if (error) {
    return console.log(error);
  }
  console.log(data);
}


// Test your adapter functions here
const testAdapters = async () => {
  const [trendingData, trendingError] = await getTrendingGifs();
  if (trendingError) {
    return console.log(trendingError);
  }
  console.log(trendingData);

  const [searchData, searchError] = await getGifsBySearch('dog');
  if (searchError) {
    return console.log(searchError);
  }
  console.log(searchData);

}

testHandleFetch();
testAdapters();
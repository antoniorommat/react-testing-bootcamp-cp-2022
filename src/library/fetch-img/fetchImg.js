const fetchImg = async (url, key, date) => {
  const URL = `${url}?api_key=${key}&date=${date}`;
  let dataFetch = '';

  try {
    dataFetch = await fetch(URL)
          .then(response => response.json());
  } catch (error) {
    dataFetch = error;
  }

  return dataFetch;
};

export default fetchImg;

export const fetchNews = async (searchWord) => {
  const newsUrl = 'https://newsapi.org/v2/everything?apiKey=';

  const response = await fetch(
    `${newsUrl}${process.env.NEWS_API_KEY}&qInTitle=${searchWord}`
  );
  const json = await response.json();

  const articles = json.articles;

  return articles;
};

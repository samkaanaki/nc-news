import axios from 'axios';

export const getArticles = () => {
  return axios
    .get('https://nc-news-for-frontend.herokuapp.com/api/articles')
    .then(({ data }) => {
      return data.articles;
    });
};

export const getSingleArticle = (article_id) => {
  return axios
    .get(
      `https://nc-news-for-frontend.herokuapp.com/api/articles/${article_id}`
    )
    .then(({ data }) => {
      console.log(data);
      return data;
    });
};

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
      return data;
    });
};

export const getArticleComments = (article_id) => {
  return axios
    .get(
      `https://nc-news-for-frontend.herokuapp.com/api/articles/${article_id}/comments`
    )
    .then(({ data }) => {
      return data;
    });
};

export const postComment = (article_id, comment) => {
  return axios.post(
    `https://nc-news-for-frontend.herokuapp.com/api/articles/${article_id}/comments`,
    {
      body: comment,
      username: 'jessjelly'
    }
  );
};

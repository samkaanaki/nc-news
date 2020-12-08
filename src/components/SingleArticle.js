import React from 'react';
import { getSingleArticle } from '../api';

class SingleArticle extends React.Component {
  state = {
    isLoading: true,
    article: {}
  };

  componentDidMount() {
    getSingleArticle(this.props.article_id).then((article) => {
      this.setState({ article });
    });
  }

  render() {
    return <p>single article page</p>;
  }
}

export default SingleArticle;

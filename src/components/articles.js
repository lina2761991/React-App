import React, { Component } from "react";

//imports needed for the redux store mapping
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

//import action for this component
import { fetchArticles } from "../actions/fetchArticles";

class Articles extends Component {
  //--------- life-cycle functions
  //   componentDidMount() {
  //     //
  //     fetchTestimonials();
  //   }

  render() {
    return (
      <section className="articles">
        <h1> Articles</h1>
        <p>
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
          ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
          egestas semper.
        </p>
        {this.props.fetchArticles.map((article) => {
          return (
            <div className="cards" key={article.title}>
              <div>
                <div className="icons">
                  <img src={article.image} />
                </div>
                <div className="content">
                  <p>{article.date}</p>
                  <p className="content-title">{article.title}</p>
                  <p className="quote">{article.body}</p>
                </div>
              </div>
              <a href={article.url} class="btn-style-two">
                Read More
              </a>
            </div>
          );
        })}
      </section>
    );
  }
}

//-----------------mapping
function mapStateToProps(state) {
  return {
    fetchArticles: state.FETCH_ARTICLES.fetchArticles,
  };
}

function matchDispatchToProps(dispatch) {
  //match the action imported to a new prop
  return bindActionCreators({ fetchArticlesAction: fetchArticles }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Articles);

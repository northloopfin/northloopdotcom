import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import axios from 'axios';

// This is i18n and i10n
// import { FormattedMessage, FormattedDate, FormattedTime } from 'react-intl'
import BlogViewFile from '../../common/components/Pages/Blog/Blog.jsx';

class BlogView extends Component {
  state = {
    posts:[]
  }

  componentWillMount() {

     axios.get("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40north_loop")
      .then(res => {
        console.log(res.data.items);
        this.setState({posts: res.data.items});
      })
  }

  render() {
    // Note for i18n and i10n
    // if `id` is found, it will use the matched message
    // otherwise, it will use defaultMessage as fallback

    return (
      <div>
        <BlogViewFile posts={this.state.posts} />
      </div>
    )
  }
}


export default BlogView;
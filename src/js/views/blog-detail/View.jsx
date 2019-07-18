import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';
import Container from '@material-ui/core/Container';

// This is i18n and i10n
// import { FormattedMessage, FormattedDate, FormattedTime } from 'react-intl'
import BlogDetailViewFile from '../../common/components/Pages/BlogDetail/BlogDetail.jsx';
import blogData from '../blog/blogdata';

class BlogDetailView extends Component {
  state = {
    post: null,
    loading: true
  }

  componentWillMount() {
    /*axios.get("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40north_loop").then(res => {
      this.setState({posts: res.data.items, loading: false});
    });*/
    this.setState({post: blogData[this.props.match.params.blogId - 1], loading: false});
  }

  render() {
    // Note for i18n and i10n
    // if `id` is found, it will use the matched message
    // otherwise, it will use defaultMessage as fallback
    if ( ga ) {
      ga('send', 'event', 'PageView', 'BlogPageView', 'Blog-Page-View-Label', 1);
    }

    return (
      <div>
        { 
          !this.state.loading ? <BlogDetailViewFile post={this.state.post} /> :
          <Container>
            <div style={{ 'display': 'flex', 'justifyContent': 'center', 'marginTop': '20%', 'marginBottom': '20%' }}>
              <CircularProgress color="secondary" />
            </div>
          </Container>
        }
      </div>
    )
  }
}


export default BlogDetailView;
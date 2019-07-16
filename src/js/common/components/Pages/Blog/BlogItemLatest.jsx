import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';

import styles from './BlogCSS/Blog.css';

import defaultAvatar from '../../../../../assets/images/jai.jpeg';

class BlogItemLatest extends Component {
  render() {
    console.log('post:', this.props.post);
    const { post } = this.props;
    return (
      <div className={styles['blog-item-latest']}>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={6}>
            <div className={styles['author']}>
              <Avatar alt="Author" src={defaultAvatar} className={styles.avatar} />
              <span>{post.author}</span>
            </div>
            <span className={styles['pub-date']}>{post.pubDate}</span>
            <div className={styles.title}>{post.title}</div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <img src={post.thumbnail} alt="Thumbnail Image" />
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default BlogItemLatest

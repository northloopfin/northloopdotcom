import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';

import { getAbout } from './utils';

import styles from './BlogCSS/Blog.css';

import defaultAvatar from '../../../../../assets/images/jai.jpeg';

class BlogItemLatest extends Component {
  render() {
    const { post } = this.props;
    return (
      <div className={styles['blog-item-latest']}>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={6}>
            <div className={styles['blog-content']}>
              <div className={styles['author']}>
                <Avatar alt="Author" src={defaultAvatar} className={styles.avatar} />
                <span>North Loop</span>
              </div>
              <span className={styles['pub-date']}>30 June 2019</span>
              <div className={styles.title}>{post.title}</div>
              <div className={styles.about}>{getAbout(post.about, 200)}</div>
              <NavLink to={`/blogs/${post.id}`} className={styles['button-link']}>
                <Button variant="contained" color="secondary">Read More</Button>
              </NavLink>
            </div> 
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className={styles.thumbnail} style={{backgroundImage: `url(${post.thumbnail})`}}></div>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default BlogItemLatest

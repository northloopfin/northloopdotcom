import React, { PureComponent } from 'react';
import Container from '@material-ui/core/Container';

import Footer from '../../Footer/Footer';
import BlogItemLatest from './BlogItemLatest';
import BlogItem from './BlogItem.jsx';

import styles from './BlogCSS/Blog.css';

const blogContainerStyle = {
	display: 'flex',
	padding: '5%',
	flexWrap: 'wrap',
	alignItems: 'flex-start',
  justifyContent: 'space-evenly'
};

class Blog extends PureComponent {
  render() {
  	
		const { posts } = this.props;

  	let array = [];

  	const blogs = posts.map((post, i) => {
  		return <BlogItem key={'bp-' + i} data={post} />;
  	});

    return (
			<div className={styles['blog-container']}>
				<Container>
					<BlogItemLatest post={posts[0]} />
					{blogs}
					<Footer />
				</Container>
		  </div>
    );
  }
}

export default Blog;

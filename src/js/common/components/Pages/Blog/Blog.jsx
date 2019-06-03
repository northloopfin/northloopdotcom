import React, { PureComponent } from 'react';
import BlogItem from './BlogItem.jsx';
import Container from '@material-ui/core/Container';

const blogContainerStyle = {
	display: 'flex',
	padding: '5%',
	flexWrap: 'wrap',
	alignItems: 'flex-start'
};

class Blog extends PureComponent {
  render() {
  	
  	const { posts } = this.props;

  	let array = [];

  	const blogs = posts.map((post, i) => {
  		return <BlogItem key={'bp-' + i} data={post} />;
  	});

    return (
    	<Container>
    		<div className="blog-container" style={blogContainerStyle}>
			    {blogs}
		    </div>
    	</Container>
    );
  }
}

export default Blog;

import React, { PureComponent } from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

import Footer from '../../Footer/Footer';
import BlogItemLatest from './BlogItemLatest';
import BlogItem from './BlogItem.jsx';

import styles from './BlogCSS/Blog.css';

class Blog extends PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			postShowNum: 5,
			searchStr: '',
			postsToShow: []
		};
	}

	componentDidMount() {
		this.setState({ postsToShow: this.props.posts.slice(1) });
	}

  render() {
		let blogs = [];
		if (this.state.postsToShow.length > 0) {
			const showNum = this.state.postShowNum > this.state.postsToShow.length ? this.state.postsToShow.length : this.state.postShowNum;
			blogs = this.state.postsToShow.slice(0, showNum).map((post, i) => {
				return <BlogItem key={'bp-' + i} post={post} />;
			});
		}

    return (
			<div className={styles['blog-container']}>
				<Container>
					<BlogItemLatest post={this.props.posts[0]} />
					<div className={styles['input-container']}>
						<Paper className={styles.paper}>
							<InputBase className={styles.input}
								placeholder="Search blog"
								inputProps={{ 'aria-label': 'Search Google Maps' }}
							/>
							<IconButton aria-label="Search" className={styles.button}>
								<SearchIcon />
							</IconButton>
						</Paper>
					</div>
					{this.state.postsToShow.length > 0 ?
						<div className={styles.blogs}>
							{blogs}
						</div>
					:
						<p>No Posts to Show.</p>
					}
					<Footer />
				</Container>
		  </div>
    );
  }
}

export default Blog;

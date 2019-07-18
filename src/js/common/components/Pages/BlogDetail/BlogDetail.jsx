import React, { PureComponent } from 'react';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';

import defaultAvatar from '../../../../../assets/images/jai.jpeg';

import Footer from '../../Footer/Footer';

import styles from './BlogDetailCSS/BlogDetail.css';

class BlogDetail extends PureComponent {

  render() {
		const {post} = this.props;
    return (
			<div className={styles['blog-detail-container']}>
				{!this.props.post ?
					<div>{`Blog with id: ${this.props.match.params.blogId} doesn't exist.`}</div>
				:
					<Container>
						<div className={styles['author']}>
							<Avatar alt="Author" src={defaultAvatar} className={styles.avatar} />
							<span>North Loop</span>
						</div>
						<span className={styles['pub-date']}>30 June 2019</span>
						<div className={styles.title}>{post.title}</div>
						<div className={styles.thumbnail}>
							<img src={post.thumbnail} alt="Blog Thumbnail" />
							<div>Credit: North Loop</div>
						</div>
						<div className={styles.about} dangerouslySetInnerHTML={{__html: post.about}}></div>
						<div className={styles['mid-title']}>{post.things_to_do.title}</div>
						<div className={styles['about']} dangerouslySetInnerHTML={{__html: post.things_to_do.content}}></div>
						<Grid container spacing={6}>
							<Grid item xs={12} sm={6} className={styles['img-grid']}>
								<div className={styles.thumbnail}>
									<img src={post.image2} alt="Blog Thumbnail" />
									<div>Credit: North Loop</div>
								</div>
							</Grid>
							<Grid item xs={12} sm={6} className={styles['facts-grid']}>
								<div className={styles['facts-content']}>
									<div className={styles['facts-title']}>Quick Facts</div>
									<div className={styles['facts-detail']}>
										<p>{ `Founded : ${post.quick_facts.founded}` }</p>
										<p>{ `Location: ${post.quick_facts.location}` }</p>
										<p>{ `Students: ${post.quick_facts.students}` }</p>
										{post.quick_facts.admit_rate && <p>{ `Admit Rate: ${post.quick_facts.admit_rate}` }</p>}
										<p>{ `International Students: ${post.quick_facts.international_students}` }</p>
									</div>
								</div> 
							</Grid>
						</Grid>
						<Footer />
					</Container>
				}
		  </div>
    );
  }
}

export default BlogDetail;

import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import Logo from '../../../../assets/images/bottom.png';
import styles from './Footer.css';

const liTextCenter = { 'textAlign': 'center' };

class Footer extends PureComponent {
  render() {
    const { location } = this.props;
    const { pathname } = location;
    const isBlog = pathname === '/blog';

    return (
      <footer className={styles.globalFooter}>
        <Container className={styles.footerSection}>
          <nav>
          <Grid container style={{justifyContent: "center"}}>
            <Grid item xs={12} sm={3}>
              <ul>
                <li style={liTextCenter}><a href="https://www.instagram.com/northloopbank/" target="_blank">Instagram</a></li>
              </ul>  
            </Grid>
            <Grid item xs={12} sm={3}>
              <ul>
                <li style={liTextCenter}><a href="https://www.facebook.com/northloopbank/" target="_blank">Facebook</a></li>
              </ul>  
            </Grid>
            <Grid item xs={12} sm={3}>
              <ul>
                <li style={liTextCenter}><a href="https://twitter.com/NorthLoop11" target="_blank">Twitter</a></li>
              </ul>  
            </Grid>
            <Grid item xs={12} sm={3}>
              <ul>
                <li style={liTextCenter}><a href="/#/blogs">Blog</a></li>
              </ul>  
            </Grid>
          </Grid>
            <p style={liTextCenter} className={styles.copy}>© 2019 North Loop Technologies, Inc. Savings and loans are provided by third parties, and not North loop directly</p>      
          </nav>
        </Container>
      </footer>
    );
  }
}

export default Footer;

// <Grid item xs={12} sm={4}>
//           <ul>
//             <li>Privacy</li>
//             <li>Legal</li>
//             <li>Terms of Service</li>
//           </ul>
//         </Grid>

// <li>Help</li>
// <li>Careers</li>

// <Grid item xs={12} sm={4}>
        
//           <ul>
//             <li><a href="https://www.instagram.com/northloopbank/" target="_blank">Instagram</a></li>
//             <li><a href="https://www.facebook.com/northloopbank/" target="_blank">Facebook</a></li>
//             <li><a href="https://twitter.com/NorthLoop11" target="_blank">Twitter</a></li>
//           </ul>
//         </Grid>


// <Grid item xs={12} sm={4}>
//           <ul>
//             <li className={!isBlog ? styles.active : ''}>
//               {isBlog ? 'Blog' : <Link to="/blog">Blog</Link>}
//             </li>
//           </ul>
//         </Grid>

// <img src={Logo} alt="Logo" />

// <Grid item xs={12} sm={4}>
//               <ul>
                // <li className={!isBlog ? styles.active : ''}>
                //   {isBlog ? 'Blog' : <Link to="/blog">Blog</Link>}
                // </li>
//               </ul>  
//             </Grid>

// <Grid item xs={12} sm={3}>
//               <ul>
//                 <li style={liTextCenter} className={!isBlog ? styles.active : ''}>
//                   {isBlog ? 'Blog' : <Link to="/blog">Blog</Link>}
//                 </li>
//               </ul>  
//             </Grid>

import React from 'react'
import styles from './Schools.css'

import princeton from '../../../../../../assets/images/princeton.png'
import nyu from '../../../../../../assets/images/nyu.png'
import arizona from '../../../../../../assets/images/arizona.png'
import pace from '../../../../../../assets/images/pace.png'

const imgs = [ 
    {
        width: '201',
        height: '71',
        src: princeton
    },
    {
        width: '148',
        height: '65',
        src: nyu
    },
    {
        width: '224',
        height: '45',
        src: arizona
    },
    {
        width: '118',
        height: '56',
        src: pace
    }
];

const Schools = () => (
    <div className={styles.mainWrapper}>
      <div className={styles.tabRow}>
        {imgs.map(img => (
            <div className={styles.tab}>
                <img src={img.src} alt="university" width={img.width} height={img.height} />
            </div>
        ))}
      </div>
    </div>
);

export default Schools

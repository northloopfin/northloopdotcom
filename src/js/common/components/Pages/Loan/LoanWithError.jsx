import React, { PureComponent } from 'react';

import styles from './LoanCSS/Loan.css';

class LoanWithError extends PureComponent {
  render() {
    const { loan } = this.props;
    const result = loan && loan.result ? loan.result : null;

    if (result && result.size && result.size > 0) {
      return (
        <div className={styles.homeOutput}>
          <h1>This should catch by ErrorBoundary</h1>
          {result.something_not_existed.get('something_not_existed')}
        </div>
      );
    }
    return <div />;
  }
}

export default LoanWithError;

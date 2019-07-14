import React, { PureComponent } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Container from '@material-ui/core/Container';
import styles from './Loading.css';

class Loading extends PureComponent {
  getMessage() {
    const {
      isLoading, timedOut, pastDelay, error,
    } = this.props;

    const errorMessage = 'We can&apos;t pull up information at this point, please try again.';

    if (isLoading) {
      if (timedOut) {
        return <div>{errorMessage}</div>;
      }
      if (pastDelay) {
        return (
            <Container>
              <div style={{ 'display': 'flex', 'justifyContent': 'center', 'marginTop': '5%', 'marginBottom': '5%' }}>
                <CircularProgress color="secondary" />
              </div>
            </Container>
          );
      }
      return null;
    }
    if (error) {
      return <div>{errorMessage}</div>;
    }

    return null;
  }

  render() {
    return this.getMessage();
  }
}

export default Loading;

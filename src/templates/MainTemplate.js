import PropTypes from 'prop-types'
import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'theme/GlobalStyle';
import { theme } from 'theme/mainTheme';

class MainTemplate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageType: 'projects',
    };
  }

  componentDidMount() {
    this.setCurrentPage();
  }

  componentDidUpdate(prevProps, prevState) {
    this.setCurrentPage(prevState);
  }

  setCurrentPage = (prevState = '') => {
    const pageTypes = ['projects', 'tasks', 'users'];
    const {location: {pathname}} = this.props;
    const [currentPage] = pageTypes.filter(page => pathname.includes(page));

    if(prevState.pageType !== currentPage) {
      this.setState({pageType: currentPage});
      console.log(this.state);
    }
  }

  render() {
    const { children } = this.props;
    return (
      <div>
        <GlobalStyle />
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </div>
    );
  }
}

export default withRouter(MainTemplate);

MainTemplate.propTypes = {
  location: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.array,
  ]).isRequired
}
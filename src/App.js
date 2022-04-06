import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import Layout from './components/Layout';

import themes from './styles/themes';

class App extends React.Component {
  state = {
    theme: 'light',
  }
  
  handleToggleTheme = () => {
    this.setState((prevState) => ({
      theme: prevState.theme === 'light' ? 'dark' : 'light',
    }));
  }

  render() {
    const { theme } = this.state;

    return (
      <ThemeProvider theme={themes[theme] || themes.dark}>
        <GlobalStyle />
        <Layout
          onToggleTheme={this.handleToggleTheme}
          selectedTheme={theme}
        />
      </ThemeProvider>
    );
  }
}

export default App;

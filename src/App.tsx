import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import './App.css';
import appTheme from './appTheme';
import ButtonAppBar from './components/view/ButtonAppBar';

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <ButtonAppBar />
    </ThemeProvider>
  );
}

export default App;

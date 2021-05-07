import { createMuiTheme, Theme } from '@material-ui/core/styles';

const appTheme: Theme = createMuiTheme({
  palette: {
    primary: {
      light: '#d1d9ff',
      main: '#9fa8da',
      dark: '#6f79a8',
      contrastText: '#000000',
    },
    secondary: {
      light: '#b085f5',
      main: '#7e57c2',
      dark: '#4d2c91',
      contrastText: '#ffffff',
    },
  },
});

export default appTheme;

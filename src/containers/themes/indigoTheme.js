import indigo from '@material-ui/core/colors/indigo';
import pink from '@material-ui/core/colors/pink';

export default {
  palette: {
    primary: {
      light: indigo[300],
      main: '#ed1c24',
      dark: '#E91E63',
      contrastText: '#fff'
    },
    secondary: {
      light: pink[300],
      main: pink['A200'],
      dark: pink[700],
      contrastText: '#fff'
    }
  },
  status: {
    danger: 'orange',
  },
  typography: {
    button: {
      fontWeight: 400,
      textAlign: 'capitalize'
    },
  },
};

import * as React from 'react';
import { styled, createTheme } from '@mui/system';

export const customTheme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
      contrastText: 'white',
    },
  },
});
{/* 

**MATERIAL UI STYLES EXAMPLE USING THE THEME***

const MyThemeComponent = styled('div')(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  backgroundColor: theme.palette.primary.main,
  padding: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,
}));

*/}

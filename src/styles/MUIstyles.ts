import { createTheme } from '@mui/system';
import { palette } from './palette';

export const customTheme = createTheme({
  palette,
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

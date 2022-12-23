import IconButton, { IconButtonProps } from '@mui/material';
import styled from 'styled-components';

export const Container = styled.div`
  
`;
/* 
interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
  }
  
export const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return (<IconButton {...other} />);
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  })); */
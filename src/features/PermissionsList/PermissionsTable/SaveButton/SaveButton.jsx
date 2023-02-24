import Button from '@mui/material/Button';
import {styled} from '@mui/material/styles';

export const SaveButton = ({text, updateState}) => {
    const ColorButton = styled(Button)(({theme}) => ({
        color: theme.palette.getContrastText('#3D3D3D'),
        backgroundColor: 'var(--prime-color)',
        textTransform: 'capitalize',
        width: 180,
        height: 50,
        borderRadius: 10,
        fontWeight: 'bold',
        '&:hover': {
            backgroundColor: '#010101',
        },
    }));

    return (
        <ColorButton variant="contained" onClick={updateState}>{text}</ColorButton>
    );
}

import { Paper, InputBase, IconButton } from '@mui/material';
import { FiSearch } from 'react-icons/fi';

export const SearchField = ({ handleSearch }) => {
    return (
        <Paper
            component="form"
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                width: '93%',
                backgroundColor: 'var(--search-and-header-color)',
                borderRadius: 20,
                boxShadow: 'none',
                marginTop: 2,
                marginBottom: 4,
            }}
        >
            <IconButton type="button" aria-label="search">
                <FiSearch />
            </IconButton>
            <InputBase
                placeholder="Search"
                inputProps={{ 'aria-label': 'search google maps' }}
                onChange={handleSearch}
                fullWidth
            />
        </Paper>
    );
};

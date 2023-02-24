import {useState} from 'react';
import {useSelector} from 'react-redux';
import {PermissionsTable} from './PermissionsTable/PermissionsTable';
import {useDebounce} from '../../hooks/useDebounce'
import {SearchField} from './SearchField/SearchField';
import Grid from '@mui/material/Grid';
import styles from './PermissionsList.module.css'

export const PermissionsList = () => {
    const [query, setQuery] = useState('');
    const debouncedValue = useDebounce(query, 500);
    const permissions = useSelector(state => state.permissions.permissions);

    const search = (data) => {
        return data.filter(todo => todo.name.toLowerCase().includes(debouncedValue));
    }

    const handleSearch = (e) => {
        setQuery(e.target.value.toLowerCase());
    }

    return (
        <Grid container>
            <Grid item xs>
            </Grid>
            <Grid item xs={11} md={8} lg={6}>
                <div>
                    <h1>Permissions</h1>
                    <Grid container>
                        <Grid item xs={5}>
                            <h2>Users <span className={styles.usersLength}>{permissions.length}</span></h2>
                        </Grid>
                        <Grid item xs={7}>
                            <SearchField handleSearch={handleSearch}/>
                        </Grid>
                    </Grid>
                    <PermissionsTable permissions={search(permissions)}/>
                </div>
            </Grid>
            <Grid item xs>
            </Grid>
        </Grid>
    );
}

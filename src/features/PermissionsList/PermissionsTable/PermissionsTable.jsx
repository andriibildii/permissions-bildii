import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updatePermission } from '../../../app/permissionsSlice';
import { DropdownMenu } from './DropdownMenu/DropdownMenu';
import { SaveButton } from './SaveButton/SaveButton';
import {
    Table,
    TableBody,
    TableCell,
    tableCellClasses,
    TableContainer,
    TableHead,
    TableRow,
    IconButton,
} from '@mui/material';
import { BsSortDown } from 'react-icons/bs';
import CircleIcon from '@mui/icons-material/Circle';
import { styled } from '@mui/material/styles';
import './PermissionsTable.css';

const StyledTableCell = styled(TableCell)(() => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: 'var(--search-and-header-color)',
        color: 'grey',
        padding: 10,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
        padding: 5,
    },
}));

export const PermissionsTable = ({ permissions }) => {
    const [newPermissions, setNewPermissions] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        setNewPermissions(permissions);
    }, [permissions]);

    const createData = (icon, name, view, execute, modify, del, dropdownMenu,) => {
        return { icon, name, view, execute, modify, del, dropdownMenu };
    };

    const sortData = () => {
        setNewPermissions(current => [...current.reverse()]);
    };

    const columns = [
        {
            id: 'name',
            label: 'User Name',
            minWidth: 250,
            button: (
                <IconButton onClick={sortData}>
                    <BsSortDown />
                </IconButton>
            ),
        },
        { id: 'view', label: 'View', minWidth: 30, align: 'center' },
        { id: 'execute', label: 'Execute', minWidth: 30, align: 'center' },
        { id: 'modify', label: 'Modify', minWidth: 30, align: 'center' },
        { id: 'del', label: 'Delete', minWidth: 30, align: 'center' },
        { id: 'dropdownMenu', label: '', minWidth: 10, align: 'right' },
    ];

    const rows = newPermissions.map(todo =>
        createData(
            <CircleIcon />,
            todo.name,
            <input
                type="checkbox"
                checked={todo.view}
                onChange={() => handleChange('view', todo.id)}
            />,
            <input
                type="checkbox"
                checked={todo.execute}
                onChange={() => handleChange('execute', todo.id)}
            />,
            <input
                type="checkbox"
                checked={todo.modify}
                onChange={() => handleChange('modify', todo.id)}
            />,
            <input
                type="checkbox"
                checked={todo.del}
                onChange={() => handleChange('del', todo.id)}
            />,
            <DropdownMenu id={todo.id} />,
        ),
    );

    const handleChange = (param, id) => {
        setNewPermissions(current =>
            current.map(obj => {
                if (obj.id === id) {
                    return { ...obj, [param]: !obj[param] };
                }
                return obj;
            }),
        );
    };

    const updateState = () => {
        dispatch(updatePermission(newPermissions));
    };

    return (
        <>
            <div>
                <TableContainer
                    sx={{ maxHeight: 620, width: '100%', boxShadow: 'none' }}
                >
                    <Table sx={{ width: '97%' }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                {columns.map(column => (
                                    <StyledTableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth }}
                                    >
                                        {column.label}
                                        {column.button && column.button}
                                    </StyledTableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map(row => (
                                <TableRow hover key={row.name}>
                                    <StyledTableCell
                                        component="th"
                                        scope="row"
                                        style={{ paddingLeft: 10 }}
                                    >
                                        <div className="userName_container">
                                            <span className="userIcon">
                                                {row.icon}
                                            </span>
                                            <span className="userName">
                                                {row.name}
                                            </span>
                                        </div>
                                    </StyledTableCell>
                                    <StyledTableCell align="center">
                                        {row.view}
                                    </StyledTableCell>
                                    <StyledTableCell align="center">
                                        {row.execute}
                                    </StyledTableCell>
                                    <StyledTableCell align="center">
                                        {row.modify}
                                    </StyledTableCell>
                                    <StyledTableCell align="center">
                                        {row.del}
                                    </StyledTableCell>
                                    <StyledTableCell align="right">
                                        {row.dropdownMenu}
                                    </StyledTableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            <div className="saveButton">
                <SaveButton updateState={updateState} text="Save" />
            </div>
        </>
    );
};

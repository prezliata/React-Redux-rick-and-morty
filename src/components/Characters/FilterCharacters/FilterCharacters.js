import { React, Fragment, useState } from 'react';
import { withStyles } from '@material-ui/core';
import { compose } from 'redux';
import { useDispatch } from "react-redux";
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import { FIRST_PAGE } from '../../../utils/const';
import styles from './styles';

const FilterCharacters = (props) => {
    const { classes, loadCharactersByPage,  getStatus, getGender, onSetPage } = props;

    const dispatch = useDispatch();

    const [status, setStatus] = useState('');
    const [gender, setGender] = useState('');

    const handleChangeStatus = (e) => {
        dispatch(getStatus(e.target.value))
        setStatus(e.target.value)
    }

    const handleChangeGender = (e) => {
        dispatch(getGender(e.target.value))
        setGender(e.target.value)
    }

    const handleSearch = () =>{
        onSetPage(FIRST_PAGE)
        dispatch(loadCharactersByPage(FIRST_PAGE, status, gender))
    }
    
    return (
        <Fragment>
            <div className={classes.filter}>
                <FormControl size="small"  className={classes.filterSelect}>
                    <InputLabel htmlFor="status">status</InputLabel>
                    <Select onChange={(e) => handleChangeStatus(e)}
                        native
                        value={status}
                        label="status"
                        inputProps={{
                            name: 'status',
                            id: 'status',
                        }}
                        >
                        <option value={''}></option>
                        <option value={'unknown'}>unknown</option>
                        <option value={'alive'}>alive</option>
                        <option value={'dead'}>dead</option>
                    </Select>
                </FormControl>
                <FormControl size="small"  className={classes.filterSelect}>
                    <InputLabel htmlFor="gender">gender</InputLabel>
                    <Select onChange={(e) => handleChangeGender(e)}
                        native
                        value={gender}
                        label="gender"
                        inputProps={{
                            name: 'gender',
                            id: 'gender',
                        }}
                        >
                        <option value={''}></option>
                        <option value={'unknown'}>unknown</option>
                        <option value={'female'}>female</option>
                        <option value={'male'}>male</option>
                        <option value={'genderless'}>genderless</option>
                    </Select>
                </FormControl>
            </div>
            <Button variant="contained" color="primary" onClick={() => handleSearch()}>
                Search...
            </Button>
        </Fragment>
    );
}

export default compose(withStyles(styles))(FilterCharacters);
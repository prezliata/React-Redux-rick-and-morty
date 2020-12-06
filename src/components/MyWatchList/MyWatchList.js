import { React, Fragment, useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import DoneIcon from '@material-ui/icons/Done';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import styles from './styles';

const MyWatchList = (props) => {
	const { classes } = props;

	useEffect(() => {
		const fetchedObject = localStorage.getItem('film');
		if(fetchedObject) {
			setListOfFilms(JSON.parse(fetchedObject ));
		}
	}, []);

	const [listOfFilms, setListOfFilms] = useState([]);

	const [name, setName]= useState('');

	const onChange = event => setName(event.target.value);

	const handleAddFilm = () => {
		if(name !== ''){
			const newFilm = {
				id: Date.now(),
				name: name,
				reviewed: false
			}
			const fetchedObject = JSON.parse(localStorage.getItem('film'));
			if(fetchedObject === null){
				localStorage.setItem('film', JSON.stringify([newFilm]));
				const fetchedObject = localStorage.getItem('film');
				if(fetchedObject) {
					setListOfFilms(JSON.parse(fetchedObject));
				}
				setName('')
			}else{
				fetchedObject.push(newFilm)
				localStorage.setItem('film', JSON.stringify(fetchedObject));
				setListOfFilms(JSON.parse(localStorage.getItem('film')));
				setName('')
			}
		}
	};

	const handleDeleteFilm = (id) =>{
		const fetchedObject = JSON.parse(localStorage.getItem('film'));
		const newList = fetchedObject.filter((el) => el.id !== id);
		localStorage.setItem('film', JSON.stringify(newList));
		setListOfFilms(newList);
	}

	const handleChangeStatus = (id) =>{
		const fetchedObject = JSON.parse(localStorage.getItem('film'));
		fetchedObject.forEach((el) =>{
			if (el.id === id) {
				if (el.reviewed) {
					el.reviewed = false;
				} else {
					el.reviewed = true
				}
			}
		});
		localStorage.setItem('film', JSON.stringify(fetchedObject));
		setListOfFilms(fetchedObject);
	}

	if (listOfFilms) {
		return (
			<Fragment>
				<h1>My Watch List</h1>
				<form className={classes.form}>
					<TextField value={name} onChange={(e) => onChange(e)} type="text" className={classes.filterSelect} size="small" label="name" variant="outlined"/>
					<Button
						startIcon={<AddIcon />}
						className={classes.btn}
						variant="contained"
						color="primary"
						onClick={() => handleAddFilm()}
					>					
						Add film
					</Button>
				</form>
				<ul>
					{listOfFilms.map((film) => (
						<li key={film.id} className={classes.wrapper}>
							{film.reviewed === false ? <span >{film.name}</span> : <span ><strike>{film.name}</strike></span>}
							<div>
							<Button
								startIcon={<DoneIcon />}
								className={classes.btn}
								variant="outlined"
								color="primary"
								onClick={() => handleChangeStatus(film.id)}
							>					
								Done
							</Button>
							<Button
								startIcon={<DeleteForeverIcon />}
								className={classes.btn}
								variant="outlined"
								color="secondary"
								onClick={() => handleDeleteFilm(film.id)}
							>					
								Delete
							</Button>
							</div>
						</li>
					))}
				</ul>
			</Fragment>
		);
	}
};

export default withStyles(styles)(MyWatchList);

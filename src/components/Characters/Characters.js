import { React, Fragment, useState, useEffect } from 'react';
import { loadCharactersByPage, getStatus, getGender} from "../../actions/characters";
import { useDispatch, useSelector } from "react-redux";
import { withStyles } from '@material-ui/core';
import { compose } from 'redux';
import { FIRST_PAGE } from '../../utils/const';
import Card from './Card/Card';
import PaginationControl from './PaginationControl/PaginationControl';
import FilterCharacters from './FilterCharacters/FilterCharacters'
import CharacterInfo from './CharacterInfo/CharacterInfo'
import styles from './styles';

const Characters = (props) => {
	const { classes } = props;

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(loadCharactersByPage())
		dispatch(getStatus(''))
		dispatch(getGender(''))
	}, [dispatch]);

	const charactersData = useSelector(state => state.charactersReducer);
	const status = useSelector(state => state.charactersReducer.status);
	const gender = useSelector(state => state.charactersReducer.gender);

	const [page, setPage] = useState(1);
	const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
	  setPage(value);
	  dispatch(loadCharactersByPage(value,status,gender))
	};

	const handleSetPage = () =>{
		setPage(FIRST_PAGE)	
	}
	
	const [characterInfoOpen, setCharacterInfoOpen] = useState(false);
	const [characterInfo, setCharacterInfo] = useState({});

	const handleCharacterInfoOpen = (id) =>{
		setCharacterInfoOpen(true)
		const charactersList = charactersData.charactersList;
		const characterInfo = charactersList.filter((el) => el.id === id)[0];
		setCharacterInfo(characterInfo)
	}
	const handleCharacterInfoClose = () =>{
		setCharacterInfoOpen(false)
	}

	return (
		<Fragment>
            <h1>Characters</h1>
			<FilterCharacters 
				loadCharactersByPage={loadCharactersByPage}
				status = {status}
				gender = {gender}
				getStatus = {getStatus}
				getGender = {getGender}
				onSetPage = {handleSetPage}
			/>
			<CharacterInfo 
				characterInfoOpen = {characterInfoOpen}
				onCharacterInfoClose = {handleCharacterInfoClose}
				character={charactersData.charactersList}
				characterInfo={characterInfo}
			/>
			<div className={classes.wrapper}>
				{charactersData.charactersList.map((character) => (
					<div key={character.id}>
						<Card
							character={character}
							onCharacterInfoOpen = {handleCharacterInfoOpen}
						/>
					</div>
				))}
			</div>
			<PaginationControl
				pages = {charactersData.pageInfo.pages}
				onHandleChangePage = {handleChangePage}
				page = {page}
			/>
		</Fragment>
	);
};

export default compose(withStyles(styles))(Characters);



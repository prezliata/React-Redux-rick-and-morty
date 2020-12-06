import { React, Fragment } from 'react';
import { withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import styles from './styles';

const CharacterInfo = (props) => {
    const { classes, characterInfoOpen, onCharacterInfoClose, characterInfo } = props;

	return (
		<Fragment>
			<Dialog
				open={characterInfoOpen}
				onClose={onCharacterInfoClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle className={classes.dialogTitle} id="alert-dialog-title">{'Character Info'}</DialogTitle>
				<DialogContent>
					<form className={classes.modal} noValidate autoComplete="off">
						<img className={classes.characterImage} src={characterInfo.image} alt='img'/>
                        <h3 className={classes.characterName}>{characterInfo.name}</h3>
						<ul className={classes.list}>
							<li><b>Status:</b> {characterInfo.status}</li>
							<li><b>Species:</b> {characterInfo.species}</li>
							<li><b>Gender:</b> {characterInfo.gender}</li>
						</ul>
					</form>
				</DialogContent>
				<DialogActions>
					<Button onClick={() => onCharacterInfoClose()} color="primary">
						Close
					</Button>
				</DialogActions>
			</Dialog>
		</Fragment>
	);
};

export default withStyles(styles)(CharacterInfo);
const styles = (theme) => ({
    modal: {
        display: 'flex',
        flexDirection: 'column',
        '& > *': {
            margin: theme.spacing(1)
        }
    },
    characterImage: {
        margin: '0px auto',
        maxWidth: 270,
        borderRadius: 5
    },
    dialogTitle: {
        textAlign: 'center'
    },
    list: {
        listStyle: 'none'
    },
    characterName: {
        textAlign: 'center'
    }
});

export default styles
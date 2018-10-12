import {blue} from "@material-ui/core/colors/";

export default ({
    paper: {
        width: 280,
        padding: 10
    },
    paperCadastro: {
        width: 280,
        padding: 10,
        height: 350
    },
    'textfield-container': {
        marginTop: 5
    },
    textfield: {
        width: '95%',
        backgroundColor: 'rgba(224, 224, 224, 1)',
        padding: '0 5px',
        borderRadius: 30,
        '&:hover': {
            backgroundColor: 'rgba(224, 224, 224, .6)'
        }
    },
    inputField: {
        fontSize: 14
    },
    'button-container': {
        marginTop: 30,
        display: 'flex',
        justifyContent: 'flex-end'
    },
    button: {
        borderColor: blue[500],
        color: blue[500],
        '&:hover': {
            backgroundColor: 'rgba(33, 150, 243, .2)',
        },
    },
    smallLabel: {
        fontSize: 12
    },
    rightIcon: {
        marginLeft: 8,
        fontSize: 18
    },
    caption: {
        marginTop: 10
    },
    'actions-button-container': {
        marginTop: 30,
        height: 150,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignContent: 'stretch'
    }
})
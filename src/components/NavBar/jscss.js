import {blue} from '@material-ui/core/colors';
export default ({
    'app-bar': {
        backgroundColor: '#283752'
    },
    'app-bar-left': {
        flexGrow: 1,
        display: 'inline-flex',
        justifyContent: 'flex-start',
        alignContent: 'center'
    },
    'app-bar-center': {
        flexGrow: 1,
        display: 'inline-flex',
        justifyContent: 'center',
        alignContent: 'center'
    },
    'app-bar-right': {
        flexGrow: 1,
        display: 'inline-flex',
        justifyContent: 'flex-end',
        alignContent: 'center'
    },
    toolbar: {
        justifyContent: 'space-between'
    },
    logo: {
        width: 50,
        height: 32,
        alignSelf: 'center'
    },
    'no-logo': {
        borderRadius: '50%'
    },
    paper: {
        width: 280,
        padding: 10
    },
    paperCadastro: {
        width: 280,
        padding: 10,
        height: 350
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
    input: {
        fontSize: 14
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
    }
});
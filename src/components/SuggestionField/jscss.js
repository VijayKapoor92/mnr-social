import {grey} from '@material-ui/core/colors';
export default ({
    textfield: {
        width: '100%',
        padding: '5px 10px',
        backgroundColor: 'rgba(900, 900, 900, 0.1)',
        borderRadius: 20,
        transition: 'background-color 250ms ease-out'
    },
    'textfield-hover': {
        backgroundColor: 'rgba(900, 900, 900, 0.2)'
    },
    'textfield-focus': {
        backgroundColor: 'rgba(900, 900, 900, 1)'
    },
    'icon-white': {
        color: 'white'
    },
    'icon-default': {
        color: grey[500]
    }
});
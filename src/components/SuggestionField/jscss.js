import {grey} from '@material-ui/core/colors';
export default ({
    textfield: {
        width: '100%',
        padding: '5px 10px',
        backgroundColor: 'rgba(900, 900, 900, 0.1)',
        borderRadius: 20,
        transition: 'background-color 300ms linear'
    },
    'textfield-hover': {
        backgroundColor: 'rgba(900, 900, 900, 0.2)'
    },
    'textfield-focus': {
        backgroundColor: 'rgba(900, 900, 900, 1)'
    },
    icon: {
        transition: 'color 300ms linear'
    },
    'icon-dark-grey': {
        color: grey[800]
    },
    'icon-default': {
        color: grey[500]
    },
    'loader-out': {
        opacity: 0,
        transition: 'opacity 500ms'
    },
    'loader-in': {
        opacity: 1
    },
    root: {
        position: 'relative',
        width: '100%'
    }
});
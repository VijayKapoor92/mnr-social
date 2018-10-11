import {grey} from '@material-ui/core/colors';
export default ({
    'suggestions-container': {
        position: 'absolute',
        top: 50,
        left: 35,
        right: 0,
        height: 'auto',
        maxHeight: 300,
        overflow: 'hidden',
        overflowY: 'auto'
    },
    list: {
        opacity: 1
    },
    listItem: {
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: grey[300],
        }
    }
});
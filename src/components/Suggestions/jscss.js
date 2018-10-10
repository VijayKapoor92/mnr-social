export default ({
    'suggestions-container': {
        position: 'absolute',
        top: 50,
        left: 35,
        right: 0,
        height: 0,
        maxHeight: 300,
        overflow: 'hidden',
        overflowY: 'auto',
        transition: 'height 250ms'
    },
    'suggestions-container-opened': {
        height: 'auto'
    },
    list: {
        height: 0
    },
    'list-visible': {
        height: 'auto'
    }
});
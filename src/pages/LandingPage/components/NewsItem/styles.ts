import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        width: '100%',
        borderRadius: 12,
        backgroundColor: 'white',
    },
    textContainer: {
        padding: 12,
    },
    image: {
        width: '100%',
        height: 100,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
    },
    publishedAtText: {
        fontSize: 10,
        lineHeight: 14,
        color: '#A1A1A1',
    },
    titleText: {
        fontSize: 14,
        lineHeight: 22,
        fontWeight: '600',
        color: '#303030',
    },
    descriptionText: {
        fontSize: 12,
        lineHeight: 16,
        color: '#6E6E6E',
        marginTop: 4,
    },
    authorText: {
        textAlign: 'right',
        fontSize: 10,
        lineHeight: 14,
        color: '#A1A1A1',
        marginTop: 8,
    },
});

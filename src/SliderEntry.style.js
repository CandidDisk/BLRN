import { StyleSheet, Dimensions, Platform } from 'react-native';
import { colors } from './index.style';

const IS_IOS = Platform.OS === 'ios';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

function wp (percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}

const slideHeight = viewportHeight * 0.36;
const slideWidth = wp(75);
const itemHorizontalMargin = wp(2);

export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth / 1.6;
export const itemHeight = 100;

const entryBorderRadius = 8;

export default StyleSheet.create({
    slideInnerContainer: {
        width: itemWidth,
        height: 200,
        paddingHorizontal: itemHorizontalMargin,
        paddingBottom: 18 // needed for shadow
    },

    imageContainer: {
        paddingLeft: 40,
        marginBottom: IS_IOS ? 0 : -1, // Prevent a random Android rendering issue
        backgroundColor: 'white',
        width: 150,
        height: 150,
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

    elevation: 4,
    },
    image: {
        ...StyleSheet.absoluteFillObject,
        resizeMode: 'cover',
        height: 150,
    },
    textContainer: {
        justifyContent: 'center',
        paddingTop: 20 - entryBorderRadius,
        paddingBottom: 5,
        paddingHorizontal: 16,
        paddingLeft: 50,
        backgroundColor: 'transparent',
        borderBottomLeftRadius: entryBorderRadius,
        borderBottomRightRadius: entryBorderRadius
    },

    title: {
        color: colors.gray,
        fontSize: 13,
        fontWeight: '200',
        letterSpacing: 0.5
    },

    card: {
        width: itemWidth,
        height: 150,
        width: 300,
        paddingHorizontal: itemHorizontalMargin,
        paddingBottom: 18, // needed for shadow
        backgroundColor: '#f5f5f8',

        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        paddingBottom: 5,
        paddingHorizontal: 16,
        paddingLeft: 50,
    },


});

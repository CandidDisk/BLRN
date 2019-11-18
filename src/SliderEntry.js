import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { ParallaxImage } from 'react-native-snap-carousel';
import styles from './SliderEntry.style';
import {Grid, Col} from 'react-native-elements';

class SliderEntryImg extends Component {

    static propTypes = {
        data: PropTypes.object.isRequired,
        even: PropTypes.bool,
        parallax: PropTypes.bool,
        parallaxProps: PropTypes.object
    };

    get image () {
        const { data: { illustration }, parallax, parallaxProps, even } = this.props;

        return parallax ? (
            <ParallaxImage
              source={{ uri: illustration }}
              containerStyle={[styles.imageContainer, even ? styles.imageContainerEven : {}]}
              style={styles.image}
              parallaxFactor={0.35}
              showSpinner={true}
              {...parallaxProps}
            />
        ) : (
            <Image
              source={{ uri: illustration }}
              style={styles.image}
            />
        );
    }

    render () {
        const { data: { title, subtitle }, even } = this.props;

        const uppercaseTitle = title ? (
            <Text
              style={[styles.title, even ? styles.titleEven : {}]}
              numberOfLines={2}
            >
                { title.toUpperCase() }
            </Text>
        ) : false;

        return (

            <TouchableOpacity
              activeOpacity={1}
              style={styles.slideInnerContainer}
              onPress={() => { alert(`You've clicked '${title}'`); }}
              >
                <View style={styles.shadow} />
                <View style={[styles.imageContainer, even ? styles.imageContainerEven : {}]}>
                    { this.image }
                    <View style={[styles.radiusMask, even ? styles.radiusMaskEven : {}]} />
                </View>
                <View style={[styles.textContainer, even ? styles.textContainerEven : {}]}>
                    { uppercaseTitle }
                </View>
            </TouchableOpacity>
        );
    }
}


class SliderEntryPort extends Component {

    static propTypes = {
        data: PropTypes.object.isRequired,
    };



    render () {
        const { data: { title, subtitle }} = this.props;

        const uppercaseTitle = title ? (
            <Text
              style={[styles.title]}
              numberOfLines={2}
            >
                { title.toUpperCase() }
            </Text>
        ) : false;

        return (

            <TouchableOpacity
              activeOpacity={1}
              style={styles.card}
              onPress={() => { alert(`You've clicked '${title}'`); }}
              >
                <View style={styles.shadow} />

                <View style={[styles.textContainer]}>
                    <View style={{flex: 1, flexDirection:'row', justifyContent: 'space-between'}}>
                        <View style={{flex: 2, flexDirection:'column', marginRight: 120, marginTop: 40, justifyContent: 'space-between'}}><View style={{marginBottom: 30, width: 200}}><Text>My Record</Text></View><View style={{marginBottom: 30, width: 200}}>{ uppercaseTitle }</View></View>
                        <View style={{flex: 2, flexDirection:'column', marginRight: 120, marginTop: 40, justifyContent: 'space-between'}}><View style={{marginBottom: 30, width: 200}}><Text>Win Pct.</Text></View></View>
                        <View style={{flex: 2, marginRight: 120, marginTop: 100}}>{ uppercaseTitle }</View>
                    </View>

                </View>
            </TouchableOpacity>
        );
    }
}


export{
    SliderEntryImg,
    SliderEntryPort,
}


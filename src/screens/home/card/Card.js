import React, { useRef } from 'react';
import {
    Animated, Image, Text, TouchableOpacity, View, StyleSheet,Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../../consts/colors';

const { width } = Dimensions.get('screen');
const cardWidth = width / 1.8;

function Card ({ hotel, index, navigation, scrollX }) {
    const inputRange = [
        (index - 1) * cardWidth,
        index * cardWidth,
        (index + 1) * cardWidth,
    ];
    const opacity = scrollX.interpolate({
        inputRange,
        outputRange: [0.7, 0, 0.7],
    });
    const scale = scrollX.interpolate({
        inputRange,
        outputRange: [0.8, 1, 0.8],
    });
    return (
        <TouchableOpacity
            activeOpacity={1}
            onPress={() => navigation.navigate('DetailsScreen', hotel)}>
            <Animated.View style={[styles.card, { transform: [{ scale }] }]}>
                <Animated.View style={[styles.cardOverLay, { opacity }]} />
                <View style={styles.priceTag}>
                    <Text style={{ color: COLORS.white, fontSize: 20, fontWeight: 'bold' }}>${hotel.price}</Text>
                </View>
                <Image source={hotel.image} style={styles.cardImage} />
                <View style={styles.cardDetails}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View>
                            <Text style={{ fontWeight: 'bold', fontSize: 17, paddingTop: 10, }}>{hotel.name}</Text>
                            <Text style={{ color: COLORS.grey, fontSize: 12 }}>{hotel.location}</Text>
                        </View>
                        <Icon name='bookmark-border' size={26} color={COLORS.primary} style={{ paddingTop: 10, paddingRight: 5 }} />
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Icon name='star' size={15} color={COLORS.orange} />
                            <Icon name='star' size={15} color={COLORS.orange} />
                            <Icon name='star' size={15} color={COLORS.orange} />
                            <Icon name='star' size={15} color={COLORS.orange} />
                            <Icon name='star' size={15} color={COLORS.grey} />
                        </View>
                        <Text style={{ fontSize: 10, color: COLORS.grey, paddingRight:10 }}>365 reviews</Text>
                    </View>
                </View>
            </Animated.View>
        </TouchableOpacity>
    );
};
export default Card;

const styles = StyleSheet.create({
    card: {
        height: 280,
        width: cardWidth,
        marginRight: 20,
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 15,
        borderRadius: 15,
        backgroundColor: COLORS.white
    },
    cardImage: {
        height: 200,
        width: '100%',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,

    },
    priceTag: {
        height: 60,
        width: 80,
        backgroundColor: COLORS.primary,
        position: 'absolute',
        zIndex: 1,
        right: 0,
        borderTopRightRadius: 15,
        borderBottomLeftRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',

    },
    cardDetails: {
        height: 80,
        borderRadius: 15,
        backgroundColor: COLORS.white,
        position: 'absolute',
        bottom: 0,
        paddingLeft: 10,
        width: '100%',
    },
    cardOverLay: {
        height: 280,
        backgroundColor: COLORS.white,
        position: 'absolute',
        zIndex: 100,
        width: cardWidth,
        borderRadius: 15,
    },
})
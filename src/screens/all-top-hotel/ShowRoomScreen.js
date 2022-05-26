import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';


export default function ShowRoomScreen({ navigation }) {
    const Card = () => {
        return (
            <TouchableOpacity >
                <View style={styles.card}>

                    <View style={styles.priceTag}>
                        <Text style={{ color: COLORS.white, fontSize: 20, fontWeight: 'bold' }}>$120</Text>
                    </View>
                    <Image source={require('../../../assets/images/hotel1.jpg')} style={styles.cardImage} />
                    <View style={styles.cardDetails}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View>
                                <Text style={{ fontWeight: 'bold', fontSize: 17, paddingTop: 10, }}>Silver Hotel & SPA</Text>
                                <Text style={{ color: COLORS.grey, fontSize: 12 }}>Green street,Central district</Text>
                            </View>
                            <Icon name='bookmark-border' size={26} color={COLORS.primary} style={{ paddingTop: 15,paddingRight: 20}} />
                            
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 10 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Icon name='star' size={15} color={COLORS.orange} />
                                <Icon name='star' size={15} color={COLORS.orange} />
                                <Icon name='star' size={15} color={COLORS.orange} />
                                <Icon name='star' size={15} color={COLORS.orange} />
                                <Icon name='star' size={15} color={COLORS.grey} />
                                <Text style={{ fontSize: 10, color: COLORS.grey, paddingLeft: 10, paddingTop: 3 }}>365 reviews</Text>
                            </View>
                            <Text style={{ fontSize: 10, color: COLORS.grey, paddingRight:10 }}>Book Now</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <ScrollView>

            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />

        </ScrollView>

    );
}

const styles = StyleSheet.create({
    header: {
        marginTop: 60,
        marginHorizontal: 20,

    },
    card: {
        height: 280,
        width: 400,
        marginRight: 20,
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 15,
        borderRadius: 15,
        backgroundColor: COLORS.white,
        marginTop: 20,
        marginLeft: 7
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

        borderRadius: 15,
    },
})
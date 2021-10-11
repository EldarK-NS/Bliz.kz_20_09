import React from 'react'
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Image } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { MyTheme } from '../layout/theme';
import moment from 'moment';
import { useNavigation } from '@react-navigation/core';

export default function SpecEquipItemInfo(props) {
    const navigation = useNavigation()
    const { title, price, net, mobility, capacity, address, companyName, rating, updatedAtt, city, image } = props
    function numberWithSpaces(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }
    const ratingsStar = (num, max) => {
        let rating = [];
        for (let i = 1; i < max; i++) {
            let x = max - num - i;
            rating.push(x);
        }
        return rating.reverse();
    };
    const getEquipCard = () => {
        navigation.navigate('SpecEquipmCard')
    }
    return (
        <TouchableOpacity style={styles.container} onPress={getEquipCard}>
            <View style={styles.upSection}>
                <Text style={styles.title}>{title}</Text>
                <AntDesign
                    name="staro"
                    size={24}
                    color={MyTheme.grey}
                    style={styles.iconStar}
                />
            </View>
            <View style={styles.middleSection}>
                <Image style={styles.image}
                    source={{
                        uri: image,
                    }} />
                <View style={styles.content}>
                    <Text style={styles.price}>{price} &#8376; в час</Text>
                    <Text style={styles.descr} numberOfLines={4} ellipsizeMode={'tail'}>масса: {net} тн, мобильность: {mobility}, емкость ковша: {capacity} </Text>
                    <Text style={styles.address}>{city, address}</Text>
                </View>
            </View>
            <View style={styles.footerSection}>
                <View style={styles.footerLeftSide}>
                    <View style={styles.stars}>
                        {ratingsStar({ rating }, 6).map((item, index) => {
                            return (
                                <FontAwesome
                                    name="star"
                                    size={17}
                                    color="#43CC8E"
                                    key={index}
                                    style={styles.smallStar}
                                />
                            );
                        })}
                    </View>
                    <Text style={styles.companyName}>
                        {companyName}
                    </Text>
                </View>
                <Text style={styles.time}>изм. {updatedAtt}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width - 30,
        borderBottomColor: MyTheme.grey,
        borderBottomWidth: 0.5,
    },
    upSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        // fontFamily: 'IBMPlexSans-Medium',
        fontSize: 17,
        lineHeight: 24,
        marginTop: 17,
        marginBottom: 14,
        color: MyTheme.black
    },
    iconStar: {

    },
    middleSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    image: {
        width: 143,
        height: 100
    },
    content: {
        width: 200,
        flexDirection: 'column'
    },
    price: {
        // fontFamily:'IBM-Medium',
        fontSize: 14,
        lineHeight: 24,
        color: MyTheme.black
    },
    descr: {
        // fontFamily:'IBM-Regular',
        fontSize: 14,
        lineHeight: 21,
        color: MyTheme.black
    },
    address: {
        fontSize: 14,
        lineHeight: 21,
        color: MyTheme.grey
    },
    footerSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    footerLeftSide: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 14,
    },
    stars: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    smallStar: {
        marginHorizontal: 2,
    },
    companyName: {
        // fontFamily:'IBM-REgular',
        fontSize: 12,
        color: MyTheme.grey,
        marginLeft: 5
    },
    time: {
        // fontFamily:'IBM-REgular',
        fontSize: 12,
        color: MyTheme.grey,
        alignSelf: 'flex-end'
    },

})


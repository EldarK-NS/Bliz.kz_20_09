import React from 'react'
import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native'
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import { MyTheme } from '../layout/theme'
import { useNavigation } from '@react-navigation/core';

export default function SearchElementSimple(props) {
    const { title, quantity, navPath } = props
    const navigation = useNavigation()

    const handlePress = () => {
        navigation.navigate(navPath)
    }

    return (
        <Pressable style={styles.container} onPress={handlePress}>
            <View style={styles.mainPart}>
                <View style={styles.titleSection}>
                    <Text style={styles.title}>{title}</Text>
                </View>

                <View style={styles.rightSide}>
                    <Text style={styles.quantity}>{quantity}</Text>
                    <EntypoIcon name="chevron-right" size={15} color={MyTheme.grey} />
                </View>
            </View>
            <View style={styles.bottomLine}>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 60,
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    mainPart: {
        width: "100%",
        height: '100%',
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    quantity: {
        // fontFamily: 'IBM-Regular',
        fontSize: 14,
        lineHeight: 20,
        marginRight: 15,
        color: MyTheme.grey
    },
    titleSection: {
        marginLeft: 16,
    },
    title: {
        // fontFamily: 'IBM-Regular',
        fontSize: 17,
        color: MyTheme.black,
        lineHeight: 24
    },
    rightSide: {
        marginRight: 15,
        flexDirection: 'row',
        alignItems: 'center'
    },
    bottomLine: {
        backgroundColor: MyTheme.grey,
        width: Dimensions.get('window').width * 0.93,
        height: 0.5,
        alignSelf: 'center'
    }
})

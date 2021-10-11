import React from 'react'
import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native'
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import { MyTheme } from '../layout/theme'
import { useNavigation } from '@react-navigation/core';

export default function SearchElementMain(props) {
    const { title, subtitle, iconname, mainPath, navPath } = props
    const navigation = useNavigation()

    const handlePress = () => {
        navigation.navigate(mainPath, { screen: navPath })
    }

    return (
        <Pressable style={styles.container} onPress={handlePress}>
            <View style={styles.mainPart}>
                <View style={styles.leftSide}>
                    {iconname ? <MaterialIcon name={iconname} size={30} color={MyTheme.blue} /> : null}
                    <View style={styles.titleSection}>
                        <Text style={styles.title}>{title}</Text>
                        {subtitle ? <Text style={styles.subTitle}>{subtitle}</Text> : null}
                    </View>
                </View>
                <View style={styles.rightSide}>
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
    leftSide: {
        marginLeft: 16,
        flexDirection: 'row',
        alignItems: 'center',
    },

    titleSection: {
        marginLeft: 15,
    },
    title: {
        // fontFamily: 'IBM-Medium',
        fontSize: 17,
        color: '#20273D',
        lineHeight: 24
    },
    subTitle: {
        // fontFamily: 'IBM-Regular',
        fontSize: 13,
        color: '#A2A9B2',
        lineHeight: 16
    },
    rightSide: {
        marginRight: 20
    },
    bottomLine: {
        backgroundColor: '#979797',
        width: Dimensions.get('window').width * 0.93,
        height: 0.5,
        alignSelf: 'center'
    }
})

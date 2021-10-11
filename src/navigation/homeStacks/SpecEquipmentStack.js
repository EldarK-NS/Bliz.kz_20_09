import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import CategoryListScreen from '../../screens/homeScreen/specEquipScreens/CategoryListScreen'
import CategoryItemsScreen from '../../screens/homeScreen/specEquipScreens/CategoryItemsScreen'
import { MyTheme } from '../../components/layout/theme';
import SearchResultsScreen from '../../screens/homeScreen/specEquipScreens/SearchResultsScreen';
import SpecEquipItemCard from '../../screens/homeScreen/specEquipScreens/SpecEquipItemCard';
const Stack = createStackNavigator();

export default function SpecEquipmentStack() {
    return (
        <Stack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: MyTheme.blue,
            },
            headerTitleStyle: {
                color: "white",
            },
            headerTitleAlign: "center",
        }}>
            <Stack.Screen name="CategoryList" component={CategoryListScreen}
                options={({ navigation, route }) => ({
                    headerTitle: "Спецтехника",
                    headerTitleStyle: {
                        fontSize: 17,
                        fontWeight: 'bold',
                        color: 'white'
                    },
                    headerLeft: () => (
                        <Pressable
                            style={styles.leftButton}
                            onPress={() => navigation.goBack()}
                        >
                            <AntDesign name="left" size={24} color="white" />
                            <Text style={styles.buttonText}>Назад</Text>
                        </Pressable>
                    )
                })}
            />
            <Stack.Screen name="CategoryItems" component={CategoryItemsScreen}
                options={({ navigation, route }) => ({
                    headerTitle: "Землеройная",
                    headerTitleStyle: {
                        fontSize: 17,
                        fontWeight: 'bold',
                        color: 'white'
                    },
                    headerLeft: () => (
                        <Pressable
                            style={styles.leftButton}
                            onPress={() => navigation.goBack()}
                        >
                            <AntDesign name="left" size={24} color="white" />
                            <Text style={styles.buttonText}>Поиск</Text>
                        </Pressable>
                    ),
                    // headerRight: () => (
                    //     <Pressable
                    //         style={[styles.leftButton, { marginRight: 10 }]}
                    //         onPress={() => navigation.goBack()}
                    //     >
                    //         <Text style={styles.buttonText}>Фильтр</Text>
                    //         <MaterialCommunityIcons
                    //             name="filter-variant"
                    //             size={24}
                    //             color="white"
                    //         />
                    //     </Pressable>
                    // ),
                })}
            />
            <Stack.Screen name="SpecEquipmResults" component={SearchResultsScreen}
                options={({ navigation, route }) => ({
                    headerTitle: "",
                    headerLeft: () => (
                        <Pressable
                            style={styles.leftButton}
                            onPress={() => navigation.goBack()}
                        >
                            <AntDesign name="left" size={24} color="white" />
                            <Text style={styles.buttonText}>Назад</Text>
                        </Pressable>
                    ),
                    headerRight: () => (
                        <Pressable
                            style={[styles.leftButton, { marginRight: 10 }]}
                            onPress={() => console.log('filter spec equipment')}
                        >
                            <Text style={styles.buttonText}>Фильтр</Text>
                            <MaterialCommunityIcons
                                name="filter-variant"
                                size={24}
                                color="white"
                            />
                        </Pressable>
                    ),
                })}

            />
            <Stack.Screen name="SpecEquipmCard" component={SpecEquipItemCard}
                options={({ navigation, route }) => ({
                    headerTitle: "",
                    headerLeft: () => (
                        <Pressable
                            style={styles.leftButton}
                            onPress={() => navigation.goBack()}
                        >
                            <AntDesign name="left" size={24} color="white" />
                            <Text style={styles.buttonText}>Экскаваторы</Text>
                        </Pressable>
                    ),
                    headerRight: () => (
                        <Pressable
                            style={[styles.leftButton, { marginRight: 10 }]}
                            onPress={() => console.log('specEquipCard')}
                        >
                            <AntDesign
                                name="staro"
                                size={20}
                                color="white"
                                style={styles.icon}
                            />
                            <AntDesign
                                name="upload"
                                size={20}
                                color="white"
                                style={styles.icon}
                            />
                        </Pressable>
                    ),
                })}

            />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    leftButton: {
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 10,
    },
    buttonText: {
        color: "white",
        // fontFamily: "IBM-Regular",
        fontSize: 17,
        lineHeight: 22,
        color: 'white'
    },
    icon: {
        marginRight: 15
    }
})
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {MyTheme} from '../layout/theme';
import {useNavigation} from '@react-navigation/core';

export default function MessageItem({
  img,
  userName,
  text,
  createdAtt,
  newMessage,
}) {
  const navigation = useNavigation();

  const goToMessage = () => {
    // navigation.navigate('Message', {screen: 'Chat'});
    navigation.navigate('Chat', {name: userName, image: img});
  };

  return (
    <TouchableOpacity style={styles.container} onPress={goToMessage}>
      <View style={styles.leftSide}>
        <Image
          style={styles.image}
          source={{
            uri: img,
          }}
        />
        <View style={styles.content}>
          <Text style={styles.userName}>{userName}</Text>
          <Text style={styles.messText} ellipsizeMode="tail" numberOfLines={2}>
            {text}
          </Text>
        </View>
      </View>
      <View style={styles.rightSide}>
        <Text style={styles.date}>{createdAtt}</Text>
        {newMessage ? (
          <View style={styles.wrapper}>
            <Text style={styles.quantity}>{newMessage}</Text>
          </View>
        ) : null}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width - 30,
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderBottomColor: MyTheme.grey,
    paddingVertical: 15,
  },
  leftSide: {
    flexDirection: 'row',
  },
  content: {
    width: '70%',
  },
  userName: {
    // fontFamily: 'IBM-Medium',
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
    color: MyTheme.black,
  },
  messText: {
    // fontFamily: 'IBM-Regular',
    fontSize: 13,
    lineHeight: 16,
    color: MyTheme.grey,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  rightSide: {
    alignItems: 'flex-end',
  },
  date: {
    // fontFamily: 'IBM-Medium',
    fontSize: 12,
    lineHeight: 16,
    color: MyTheme.grey,
    marginBottom: 10,
  },
  wrapper: {
    width: 17,
    height: 17,
    backgroundColor: MyTheme.blue,
    borderRadius: 9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantity: {
    // fontFamily: 'IBM-Medium',
    fontSize: 12,
    lineHeight: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});

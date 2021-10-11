import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import MessageItem from '../../components/messagesElements/MessageItem';
import {messages} from '../../../assets/allData/profileData';
export default function ContactScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        renderItem={({item}) => (
          <MessageItem
            img={item.img}
            userName={item.userName}
            text={item.text}
            createdAtt={item.createdAtt}
            newMessage={item.newMessage}
          />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
});

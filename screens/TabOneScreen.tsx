import React, { useState, useEffect } from 'react';
import {  
  Text,  
  StyleSheet,  
  View,  
  FlatList,
  Image,
  TouchableOpacity
} from 'react-native';  

import { FruitsList } from './utils/FruitsList';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {

  return (
    <View style={styles.container}>
    <Text style={styles.text}>Produtos</Text>   
    <FlatList
    horizontal={true}
    data={FruitsList}
    keyExtractor={item => item.id}
    ItemSeparatorComponent={() => {
      return (
        <View
          style={{
            height: "90%",
            width: 5,
          }}
        />
      );
    }}
    renderItem={({ item }) => (
      <TouchableOpacity onPress={() => navigation.navigate('FruitDetails')}>
      <View style={styles.listItem}>
        <View style={styles.metaInfo}>
         <Text style={styles.title}>{`${item.title}`}</Text>  
         <Image source={{ uri: item.picture.thumbnail}} style={styles.coverImage} />
        </View>  
      </View>
      </TouchableOpacity>
    )}
  />

 </View>  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  separator: {
    height: "90%",
    width: 5,
  },
  text: {
    fontSize: 20,
    color: '#101010',
    marginTop: 20,
    fontWeight: '700'
  },
  listItem: {
    marginTop: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: '#DCDCDC',
    flexDirection: 'row',
    height: 190,
    width: 290,
    borderRadius:15
  },
  coverImage: {
    width: 100,
    height: 100,
    borderRadius: 8
  },
  metaInfo: {
    marginLeft: 10
  },
  title: {
    fontSize: 18,
    width: 200,
    padding: 10
  }
});

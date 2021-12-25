import React, { useState } from 'react';

import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];


const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Image style={styles.image} source={{ uri: item.imageUrl }} />
    <Text style={[styles.title, textColor]}>{item.description}</Text>
  </TouchableOpacity>
);

const TagCarousel = ({data}) => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#008080" : "transparent";
    const color = item.id === selectedId ? 'white' : 'black';
    const borderColor = item.id === selectedId ? 'black' : 'black';
    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
        borderColor={{ borderColor}}
      />
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
        horizontal={true}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    height: 300
  },
  item: {
    padding: 20,
    height: 300,
    alignItems: 'center'
  },
  title: {
    fontSize: 18,
  },
  image: {
    width: 150,
    height: 210,
  }
});

export default TagCarousel;

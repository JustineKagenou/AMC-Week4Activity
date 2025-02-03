import React, { useState } from 'react';
import { View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const DATA = [
 {  title: 'To do list :',
  },
  {
    title: ' 1.Taking a bath ',
  },
  {
    title: ' 2.Eat Breakfast',
  },
  {
    title: ' 3.Tooth Brush',
  },
  {
    title: ' 4.Prepare for school',
  },
  {
    title: ' 5.Learn in school',
  },
    {
    title: ' 6.Coding',
  },
    {
    title: ' 7.Eat with my calssmates',
  },
    {
    title: ' 8.Ride with my classmates',
  },
  {
    title: ' 9.Hangout with friends',
  },
    {
    title: ' 10.Shopping alone',
  },
    {
    title: ' 11.Coffee',
  },
  {
    title: ' 12.Eat in Jollibee',
  },
    {
    title: ' 13.Play in computershop',
  },
    {
    title: ' 14.Going to home',
  },
    {
    title: ' 15.Eat',
  },
  {
    title: ' 16.Taking a bath',
  },
    {
    title: ' 17.Netflix',
  },
  {
    title: ' 18.Watch anime',
  },
    {
    title: ' 19.Play Games',
  },
    {
    title: ' 20.Tiktok',
  },
    {
    title: ' 21.Eat again',
  },
    {
    title: ' 22.Milk to have a better sleep',
  },
    {
    title: ' 23.Skin care',
  },
    {
    title: ' 24.Pray',
  },
  {
    title: ' 25.Sleep',
  },
];

type ItemProps = { title: string; backgroundColor: string; textColor: string };

const COLORS = ['red', '#af97ec', '#c9bfe2', '#bfe2db', '#30d0b0', '#b9fef0'];

const Item = ({ title, backgroundColor, textColor }: ItemProps) => (
  <View style={styles.item}>
    <TouchableOpacity style={[styles.button, { backgroundColor }]}>
      <Text style={[styles.title, { color: textColor }]}>{title}</Text>
    </TouchableOpacity>
  </View>
);

const App = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item, index }: { item: any; index: number }) => {
   
   
    const backgroundColor = item.id === selectedId ? '#6e3b6e' : COLORS[index % COLORS.length];
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        title={item.title}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          extraData={selectedId}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 1,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 25,
  },
  button: {
    padding: 10,
    borderRadius: 5,
  },
});

export default App;
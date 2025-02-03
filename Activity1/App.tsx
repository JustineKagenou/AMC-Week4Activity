import {View, FlatList, StyleSheet, Text, StatusBar} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

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

type ItemProps = {title: string};

const Item = ({title}: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const App = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;
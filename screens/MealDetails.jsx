import {useLayoutEffect, useContext} from 'react';
import {View, Text, StyleSheet, Image, ScrollView, Button} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {MEALS} from '../data/dummydata';
import MealDetailsC from '../components/MealDetailsC';
import Subtitle from '../components/Subtitle';
import List from '../components/List';
import {addFavorite, removeFavorite} from '../store/redux/favslice';
import {useSelector, useDispatch} from 'react-redux';
import IconButton from '../components/IconButton';

function MealDetails({navigation}) {
  const route = useRoute();
  const dispatch = useDispatch();
  const favmealId = useSelector(state => state.fav.ids);
  const mealId = route.params.mealId;
  console.log(mealId);
  const selectedMeal = MEALS.find(meal => meal.id === mealId);

  console.log(favmealId);
  const mealisfav = favmealId.includes(mealId);

  function favmealstat() {
    if (mealisfav) {
      dispatch(removeFavorite({id: mealId}));
    } else {
      dispatch(addFavorite({id: mealId}));
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <IconButton onPress={favmealstat} mealstat={mealisfav} />;
      },
    });
  }, [navigation, favmealstat]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image source={{uri: selectedMeal.imageUrl}} style={styles.image} />
      <Text style={styles.title}> {selectedMeal.title} </Text>
      <MealDetailsC
        duration={selectedMeal.duration}
        affordability={selectedMeal.affordability}
        complexity={selectedMeal.complexity}
        textStyle={styles.detailsText}
      />
      <View style={styles.listContainerOut}>
        <View style={styles.listContainer}>
          <Subtitle> Ingredients </Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle> Steps </Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDetails;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: '100%',
    height: 300,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: '#fff',
  },
  detailsText: {
    color: '#fff',
  },
  listContainer: {
    width: '80%',
  },
  listContainerOut: {
    alignItems: 'center',
  },
});

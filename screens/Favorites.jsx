import {View, Text, StyleSheet} from 'react-native';
import MealsList from '../components/MealsList/MealsList';
import {useSelector, useDispatch} from 'react-redux';
import {MEALS} from '../data/dummydata';

function Favorites() {
  const favmealId = useSelector(state => state.fav.ids);
  const favmeals = MEALS.filter(meal => favmealId.includes(meal.id));
  if (favmeals.length !== 0) {
    return <MealsList items={favmeals} />;
  } else {
    return (
      <View style={styles.rootContainer}>
        <View style={styles.textcontainer}>
          <Text style={styles.text}>You have no Favorites Yet.</Text>
        </View>
      </View>
    );
  }
}
export default Favorites;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  textcontainer: {
    backgroundColor: '#351411',
    padding: 20,
    elevation: 3,
    borderRadius: 5,
  },
});

import {View, Pressable, Text, Image, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import MealDetailsC from '../MealDetailsC';

function MealItem({title, imageUrl, duration, complexity, affordability, id}) {
  const navigation = useNavigation();

  function onPressHandler() {
    navigation.navigate('Meal Details', {
      mealId: id,
    });
  }
  return (
    <View style={styles.mealItem}>
      <Pressable android_ripple={{color: '#ccc'}} onPress={onPressHandler}>
        <View>
          <Image source={{uri: imageUrl}} style={styles.image} />
          <Text style={styles.title}> {title} </Text>
        </View>
        <MealDetailsC
          duration={duration}
          complexity={complexity}
          affordability={affordability}
        />
      </Pressable>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 4,
  },

  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    margin: 8,
  },
});

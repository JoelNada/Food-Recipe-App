import {useLayoutEffect} from 'react';
import MealsList from '../components/MealsList/MealsList';
import {useRoute} from '@react-navigation/native';
import {MEALS, CATEGORIES} from '../data/dummydata';

function MealsView({navigation}) {
  const route = useRoute();
  const catId = route.params.categoryId;
  const displayedmeals = MEALS.filter(mealItem => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const catTitle = CATEGORIES.find(category => category.id === catId).title;
    navigation.setOptions({
      title: catTitle,
    });
  }, [catId, navigation]);
  return <MealsList items={displayedmeals} />;
}

export default MealsView;

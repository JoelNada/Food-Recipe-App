import {View, FlatList, StyleSheet, Button} from 'react-native';
import {useLayoutEffect} from 'react';
import {logout} from '../store/redux/logslice';
import {useDispatch} from 'react-redux';
import CategoryGridTile from '../components/CategoryGridTile';
import {CATEGORIES} from '../data/dummydata';

function Categories({navigation}) {
  function renderCategory(itemData) {
    function PressHandler() {
      navigation.navigate('Meals Here', {
        categoryId: itemData.item.id,
      });
    }
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={PressHandler}
      />
    );
  }

  const dispatch = useDispatch();

  function logoutfun() {
    dispatch(logout());
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <Button
            title="Logout"
            style={{marginRight: 5}}
            onPress={logoutfun}
            color="#3f2f25"
          />
        );
      },
    });
  }, [navigation, logoutfun]);

  return (
    <View>
      <FlatList
        data={CATEGORIES}
        keyExtractor={item => item.id}
        renderItem={renderCategory}
        numColumns={2}
      />
    </View>
  );
}

export default Categories;

const styles = StyleSheet.create({});

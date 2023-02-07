import {Pressable, StyleSheet, ToastAndroid} from 'react-native';
import {useState} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';

function IconButton({onPress, mealstat}) {
  function statHandler() {
    onPress();
    if (!mealstat) {
      ToastAndroid.show('Added to Favorites', ToastAndroid.SHORT);
    } else {
      ToastAndroid.show('Removed from Favorites', ToastAndroid.SHORT);
    }
  }
  return (
    <Pressable
      onPress={statHandler}
      style={({pressed}) => pressed && styles.pressed}>
      <Entypo
        name={mealstat ? 'heart' : 'heart-outlined'}
        style={{color: '#fff', fontSize: 30, marginRight: 4}}
      />
    </Pressable>
  );
}

export default IconButton;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});

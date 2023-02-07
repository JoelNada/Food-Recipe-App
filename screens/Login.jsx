import {View, Text, StyleSheet, Button, TextInput, Alert} from 'react-native';
import {login} from '../store/redux/logslice';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
function Login() {
  const [uname, setUname] = useState('');
  const [pname, setPname] = useState('');
  const dispatch = useDispatch();
  const unameset = nentered => {
    setUname(nentered);
  };

  const passwset = pentered => {
    setPname(pentered);
  };

  function logfun() {
    if (uname && pname) {
      if (uname === 'Joel' && pname === 'Joel') {
        dispatch(login());
      } else {
        Alert.alert('Error', 'Invalid Credentials !', [
          {text: 'Okay', style: 'cancel'},
        ]);
      }
    } else {
      Alert.alert('Alert', 'Please Input your Name and Password to login !', [
        {text: 'Okay', style: 'cancel'},
      ]);
    }
  }
  return (
    <View style={styles.root}>
      <View style={styles.textcontainer}>
        <Text style={styles.text}>Sign In</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Username"
          placeholderTextColor="#ccc"
          value={uname}
          onChangeText={unameset}
        />
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder="Enter Password"
          placeholderTextColor="#ccc"
          value={pname}
          onChangeText={passwset}
        />
        <Button title="login" onPress={logfun} color="#3f2f25" />
      </View>
    </View>
  );
}

export default Login;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'left',
  },
  input: {
    backgroundColor: '#3f2f25',
    width: 250,
    margin: 10,
    padding: 12,
    borderRadius: 2,
    fontSize: 16,
    color: '#ccc',
    elevation: 4,
  },
  textcontainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#111',
    padding: 20,
    elevation: 4,
    borderRadius: 5,
  },
});

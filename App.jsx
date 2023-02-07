import {StyleSheet} from 'react-native';
import Login from './screens/Login';
import {Provider, useSelector} from 'react-redux';
import {store} from './store/redux/store';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Categories from './screens/Categories';
import MealsView from './screens/MealsView';
import MealDetails from './screens/MealDetails';
import Favorites from './screens/Favorites';
import {createDrawerNavigator} from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import IconButton2 from './components/IconButton2';
import IconButton3 from './components/IconButton3';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function DrawNavigateComponent() {    
  const islogged = useSelector(state => state.log.isClicked);
  if (!islogged) {
    return <Login />;
  } else {
    return (
      <Drawer.Navigator
        screenOptions={{
          headerTintColor: '#fff',
          headerStyle: {backgroundColor: '#351400'},
          sceneContainerStyle: {backgroundColor: '#3f2f20'},
          drawerContentStyle: {backgroundColor: '#351400'},
          drawerInactiveTintColor: 'white',
          drawerActiveTintColor: '#351401 ',
          drawerActiveBackgroundColor: '#e4baa1',
        }}>
        <Drawer.Screen
          name="Categories"
          component={Categories}
          options={{
            title: 'All Categories',
            drawerIcon: () => <IconButton2 />,
          }}
        />
        <Drawer.Screen
          name="Favorite"
          component={Favorites}
          options={{
            title: 'Favorites',
            drawerIcon: () => <IconButton3 />,
          }}
        />
      </Drawer.Navigator>
    );
  }
}
function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerTintColor: '#fff',
            headerStyle: {backgroundColor: '#351401'},
            cardStyle: {backgroundColor: '#3f2f25'},
          }}>
          <Stack.Screen
            name="Drawer"
            component={DrawNavigateComponent}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="Meals Here" component={MealsView} />
          <Stack.Screen name="Meal Details" component={MealDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#24180f',
  },
});

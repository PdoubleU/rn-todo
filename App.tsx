import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import React from 'react';

import {HomeStack} from './src/pages/Home';
import {NewTask, NewTaskHeader} from './src/pages/NewTask';
import {Edit, EditHeader} from './src/pages/Edit';

import TaskContextProvider from './src/context/TaskContextProvider';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <TaskContextProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="HomeStack"
            component={HomeStack}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="New Task"
            component={NewTask}
            options={{header: () => <NewTaskHeader />}}
          />

          <Stack.Screen
            name="Edit Task"
            component={Edit}
            options={{
              header: ({navigation}) => {
                return <EditHeader />;
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </TaskContextProvider>
  );
};

export default App;

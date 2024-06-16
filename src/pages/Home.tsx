import React from 'react';
import {View, Text, Pressable, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useContext} from 'react';

import {TodoItem} from './TodoItem';
import {CompHeader, Completed, TabIconCompleted} from './Completed';
import TaskContext from '../context/TaskContext';

import {styles} from '../styles';
import taskInterface from '../helpers/interface';

const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: styles.TabMenuText,
        tabBarActiveTintColor: '#293132',
        tabBarStyle: {height: 70},
        tabBarItemStyle: {paddingVertical: 10},
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          header: () => <HomeHeader />,
          tabBarIcon: ({focused}) => {
            return <TabIconHome focused={focused} />;
          },
        }}
      />
      <Tab.Screen
        name="Completed"
        component={Completed}
        options={{
          header: () => <CompHeader />,
          tabBarIcon: ({focused}) => {
            return <TabIconCompleted focused={focused} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

const Home = (props: {navigation: any}) => {
  const {navigation} = props;
  const {tasksFromContext} = useContext(TaskContext);

  let unCompleted = tasksFromContext.map(
    (task: Readonly<taskInterface>, index: number) => {
      if (task.status == false) {
        return <TodoItem task={task} id={index} key={index} />;
      }
    },
  );

  return (
    <View style={{...styles.container, flex: 1}}>
      <View style={styles.body}>{unCompleted}</View>

      <Pressable
        style={styles.fab}
        onPress={() => {
          navigation.navigate('New Task');
        }}>
        <Image source={require('../../assets/primary.png')} />
      </Pressable>
    </View>
  );
};

const HomeHeader = () => {
  return (
    <View style={[styles.header, {justifyContent: 'space-between'}]}>
      <Text style={[styles.heading, {fontSize: 24, color: '#fff'}]}>
        TODO APP
      </Text>

      <Image source={require('../../assets/cal.png')} />
    </View>
  );
};

const TabIconHome = (props: {focused: boolean}) => {
  const {focused} = props;

  return (
    <Image
      source={
        focused
          ? require('../../assets/Playlistactive.png')
          : require('../../assets/Playlist.png')
      }
    />
  );
};

export {HomeStack, HomeHeader};

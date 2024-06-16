import React, {useContext} from 'react';

import {View, Text, Pressable, Image} from 'react-native';
import {TodoItem} from './TodoItem';
import {styles} from '../styles';
import {useNavigation} from '@react-navigation/native';

import TaskContext from '../context/TaskContext';

import taskInterface from '../helpers/interface';

const Completed = () => {
  let {tasksFromContext} = useContext(TaskContext);

  let completed = tasksFromContext.map(
    (task: Readonly<taskInterface>, index: number) => {
      if (task.status != false) {
        return <TodoItem task={task} id={index} key={index} />;
      }
    },
  );

  return (
    <View style={[styles.container, {flex: 1}]}>
      <View style={styles.body}>{completed}</View>
    </View>
  );
};

const CompHeader = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.header, {gap: 40}]}>
      <Pressable onPress={() => navigation.goBack()}>
        <Image source={require('../../assets/Back.png')} />
      </Pressable>

      <Text style={[styles.heading, {fontSize: 24, color: '#fff'}]}>
        Completed Task
      </Text>
    </View>
  );
};

const TabIconCompleted = (props: {focused: boolean}) => {
  const {focused} = props;

  return (
    <Image
      source={
        focused
          ? require('../../assets/Tickactive.png')
          : require('../../assets/Tick.png')
      }
    />
  );
};

export {Completed, CompHeader, TabIconCompleted};

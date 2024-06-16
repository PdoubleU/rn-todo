import React, {useEffect, useState, useContext} from 'react';

import {View, Text, TextInput, Pressable, Image} from 'react-native';

import {styles} from '../styles';
import {useNavigation} from '@react-navigation/native';

import taskInterface from '../helpers/interface';
import {storeData} from '../helpers/storage';
import TaskContext from '../context/TaskContext';

const defaultTask: taskInterface = {title: '', subtitle: '', status: false};

const NewTask = (props: {navigation: any}) => {
  const {navigation} = props;
  const [newTask, setTask] = useState(defaultTask);

  const [buttonDisabled, setButton] = useState(true);

  const {setIsTasksInStorage, isTasksInStorage} = useContext(TaskContext);

  const {updateTasks} = useContext(TaskContext);

  useEffect(() => {
    newTask.title ? setButton(false) : setButton(true);
  }, [newTask]);

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.textInput}
        placeholder="Title"
        placeholderTextColor={'#fff'}
        onChangeText={text => {
          setTask({...newTask, title: text});
        }}
        value={newTask.title}
      />
      <TextInput
        style={styles.textInput}
        placeholderTextColor={'#fff'}
        onChangeText={text => {
          setTask({...newTask, subtitle: text});
        }}
        value={newTask.subtitle}
        placeholder="Detail"
      />
      <Pressable
        style={styles.btn}
        disabled={buttonDisabled}
        onPress={async () => {
          await storeData(
            newTask,
            updateTasks,
            setIsTasksInStorage,
            isTasksInStorage,
          );

          setTask(defaultTask);
          navigation.navigate('Home');
        }}>
        <Text style={styles.btnText}>ADD</Text>
      </Pressable>
    </View>
  );
};

const NewTaskHeader = () => {
  const navigation = useNavigation();
  return (
    <View style={[styles.header, {gap: 40}]}>
      <Pressable onPress={() => navigation.goBack()}>
        <Image source={require('../../assets/Back.png')} />
      </Pressable>

      <Text style={[styles.heading, {fontSize: 24, color: '#fff'}]}>
        Add Task
      </Text>
    </View>
  );
};

export {NewTask, NewTaskHeader};

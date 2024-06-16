import React, {useContext, useState} from 'react';

import {View, Text, TextInput, Pressable, Image} from 'react-native';

import {styles} from '../styles';
import {useNavigation, useRoute} from '@react-navigation/native';
import TaskContext from '../context/TaskContext';
import {createNewStorageEntry} from '../helpers/storage';

const Edit = (props: {navigation: any}) => {
  const {params}: any = useRoute();
  const {navigation} = props;

  const id = params.itemId;

  const {tasksFromContext, updateTasks} = useContext(TaskContext);

  const [task, setTask] = useState(tasksFromContext[id]);

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.textInput}
        placeholderTextColor={'#fff'}
        value={task.title}
        placeholder="Title"
        onChangeText={text => {
          setTask({...task, title: text});
        }}
      />
      <TextInput
        style={styles.textInput}
        placeholderTextColor={'#fff'}
        value={task.subtitle}
        placeholder="Detail"
        onChangeText={text => {
          setTask({...task, subtitle: text});
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          gap: 46,
          marginTop: 20,
        }}>
        <Pressable
          style={[styles.btn, {paddingVertical: 24, flex: 1}]}
          onPress={async () => {
            tasksFromContext[id] = task;
            let newArray = JSON.parse(JSON.stringify(tasksFromContext));
            await createNewStorageEntry(newArray);
            navigation.navigate('Home');
            updateTasks(newArray);
          }}>
          <Text style={styles.btnText2}>Update</Text>
        </Pressable>
        <Pressable
          style={[styles.btn, {paddingVertical: 24, flex: 1}]}
          onPress={() => console.log('Button Pressed')}>
          <Text style={styles.btnText2}>Cancel</Text>
        </Pressable>
      </View>
    </View>
  );
};

const EditHeader = () => {
  const navigation = useNavigation();
  return (
    <View style={[styles.header, {gap: 40}]}>
      <Pressable onPress={() => navigation.goBack()}>
        <Image source={require('../../assets/Back.png')} />
      </Pressable>
      <Text style={[styles.heading, {fontSize: 24, color: '#fff'}]}>
        Edit Task
      </Text>
    </View>
  );
};
export {Edit, EditHeader};

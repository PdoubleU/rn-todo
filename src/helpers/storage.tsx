import AsyncStorage from '@react-native-async-storage/async-storage';
import taskInterface from './interface';

async function storeData(
  newTask: taskInterface,
  updateTasks: Function,
  setIsTasksInStorage: Function,
  isTasksInStorage: boolean,
) {
  try {
    if (isTasksInStorage) {
      let tasks = await getData();

      tasks.push(newTask);

      createNewStorageEntry(tasks);

      updateTasks(tasks);
    } else {
      let tasks = [];

      tasks.push(newTask);

      createNewStorageEntry(tasks);

      updateTasks(tasks);

      setIsTasksInStorage(true);
    }
  } catch (e) {
    console.log(e);
  }
}

async function getData() {
  try {
    let value: any = await AsyncStorage.getItem('tasks');

    let jsonValue = JSON.parse(value);

    return jsonValue;
  } catch (e) {
    console.log(e);
  }
}

async function createNewStorageEntry(tasks: taskInterface[]) {
  try {
    await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
  } catch (error) {
    console.log(error);
  }
}

export {storeData, getData, createNewStorageEntry};

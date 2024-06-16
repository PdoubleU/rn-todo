import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4F5165',
    color: '#fff',
    paddingBottom: 100,
  },
  header: {
    backgroundColor: '#4F5165',
    color: '#fff',
    flexDirection: 'row',
    paddingTop: 45,
    paddingBottom: 25,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  heading: {
    fontFamily: 'Jost-600-Semi',
  },
  text: {
    fontFamily: 'Jost-400-Book',
    color: '#fff',
  },
  body: {
    marginTop: 24,
    marginHorizontal: 8,
    color: '#fff',
    gap: 20,
  },
  todo: {
    backgroundColor: '#547AA5',
    flexDirection: 'row',
    paddingRight: 24,
    paddingLeft: 20,
    justifyContent: 'space-between',
    paddingVertical: 22,
    alignItems: 'center',
    borderRadius: 15,
    elevation: 12,
  },
  todoImgs: {
    width: 25,
    height: 25,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    gap: 20,
  },
  fab: {
    height: 70,
    width: 70,
    backgroundColor: '#547AA5',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 16,
    borderRadius: 50,
    position: 'absolute',
    bottom: 20,
    right: 10,
  },

  TabMenu: {
    paddingVertical: 10,
  },
  TabMenuText: {
    fontSize: 10,
    fontFamily: 'Jost-400-Book',
  },
  textInput: {
    fontFamily: 'Jost-400-Book',
    borderColor: '#fff',
    borderBottomWidth: 1,
    color: '#fff',
  },
  form: {
    flex: 1,
    gap: 40,
    paddingHorizontal: 40,
    paddingVertical: 20,
    backgroundColor: '#4F5165',
    color: '#fff',
  },
  btn: {
    backgroundColor: '#547AA5',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 16,
    borderRadius: 15,
    elevation: 9,
  },
  btnText: {
    fontSize: 12,
    color: '#fff',
    fontFamily: 'Jost-600-Semi',
  },
  btn2: {
    paddingVertical: 24,
    backgroundColor: '#547AA5',
    color: '#fff',
    flex: 1,
  },
  btnText2: {
    fontSize: 12,
    color: '#fff',
    fontFamily: 'Jost-400-Book',
  },
});

export {styles};

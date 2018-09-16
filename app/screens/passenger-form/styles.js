import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  headerRightText: {
    fontSize: 17,
    color: '#fff',
    paddingHorizontal: 16,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingLeft: 16,
    paddingRight: 24,
  },
  titleText: {
    marginTop: 16,
    fontWeight: 'bold',
  },
  inputContainer: {
    width: '100%',
    borderRadius: 4,
    backgroundColor: 'rgb(240, 240, 240)',
    marginLeft: 0,
    marginRight: 0,
    borderBottomWidth: 0,
    paddingVertical: 16,
    marginTop: 16,
  },
  inputText: {
    fontSize: 14,
    paddingLeft: 16,
    color: '#000',
    minHeight: 0,
  },
  placeholder: {
    fontSize: 14,
    paddingLeft: 16,
    color: 'rgb(120, 120, 120)',
  },
  picker: {
    width: '100%',
    height: 184,
  },
  dateModal: {
    height: 200,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

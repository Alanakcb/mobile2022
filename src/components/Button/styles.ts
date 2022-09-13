import { StyleSheet } from 'react-native'
import colors from '../../styles/colors'

const styles = StyleSheet.create({
  buttonprimary: {
    backgroundColor: colors.primary,
    borderRadius: 5,
    margin: 10,
    width: '90%'
  },
  buttonSecondary: {
    backgroundColor: colors.primaryLight,
    borderRadius: 5,
    margin: 10,
    width: '90%'
  },
  buttonThird: {
    backgroundColor: colors.third,
    borderRadius: 5,
    margin: 10,
    width: '90%'
  },
  text: {
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
    fontSize: 18
  }
})

export default styles
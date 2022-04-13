import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.pinkLight,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: colors.pink,
    marginBottom: 20,
  },
  formRow: {
    margin: 10,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.pink,
    borderRadius: 5,
  },
  label: {
    fontSize: 18,
    color: colors.black,
    padding: 5
  },
  input: {
    fontSize: 18,
    padding: 5,
    width: "80%"
  },
  icon: {
    fontSize: 24,
    color: colors.pink,
    padding: 10
  }
})

export default styles;
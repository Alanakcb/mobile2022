import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    alignItems: "center",
    backgroundColor: colors.primaryLight,
  },
  rowSearch: {
    flexDirection: "row",
    backgroundColor: colors.third,
    borderRadius: 10,
    margin: 10,
    alignItems: "center",
    width: "100%",
    height: 45
  },
  icon: {
    fontSize: 24,
    padding: 5
  },
  input: {
    width: "50%"
  },
  list: {
    marginBottom: 10
  },
  img: {
    width: 100,
    height: 100,
  },
  button: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor:
    colors.primary,
    width: 50,
    height: 50,
    borderRadius: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    },
    buttonText: {
    color: colors.white,
    fontSize: 28,
    fontWeight: "bold",
    }
});

export default styles
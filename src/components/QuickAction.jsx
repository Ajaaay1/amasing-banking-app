import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function QuickAction({ icon, title, description, onPress }) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <View style={styles.iconContainer}>
        <Ionicons name={icon} size={28} color="forestgreen" />
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "48%",
    backgroundColor: "white",
    borderRadius: 16,
    padding: 18,
    marginBottom: 12,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "whitesmoke",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  title: { color: "black", fontSize: 15, fontWeight: "bold" },
  description: { color: "gray", fontSize: 11, marginTop: 3 },
});

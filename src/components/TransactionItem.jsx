import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function TransactionItem({
  title,
  description,
  date,
  amount,
  icon,
  type,
  onPress,
}) {
  const isIncome = type === "income";

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={onPress ? 0.7 : 1}
    >
      <View style={styles.iconContainer}>
        <Ionicons
          name={icon || "receipt"}
          size={25}
          color={isIncome ? "forestgreen" : "red"}
        />
      </View>
      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
      <Text
        style={[styles.amount, { color: isIncome ? "forestgreen" : "red" }]}
      >
        {amount}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
  },
  iconContainer: {
    width: 45,
    height: 45,
    borderRadius: 25,
    backgroundColor: "whitesmoke",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  info: { flex: 1 },
  title: { color: "black", fontSize: 14, fontWeight: "bold" },
  description: { color: "gray", fontSize: 11, marginTop: 2 },
  date: { color: "gray", fontSize: 10, marginTop: 2 },
  amount: { fontSize: 13, fontWeight: "bold" },
});

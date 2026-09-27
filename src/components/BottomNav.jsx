import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function BottomNav({
  active,
  onHome,
  onTransactions,
  onProfile,
  onLogout,
}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.item} onPress={onHome}>
        <Ionicons
          name={active === "home" ? "home" : "home-outline"}
          size={24}
          color={active === "home" ? "forestgreen" : "dimgray"}
        />
        <Text style={active === "home" ? styles.activeText : styles.text}>
          Home
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item} onPress={onTransactions}>
        <Ionicons
          name={active === "transactions" ? "receipt" : "receipt-outline"}
          size={24}
          color={active === "transactions" ? "forestgreen" : "dimgray"}
        />
        <Text
          style={active === "transactions" ? styles.activeText : styles.text}
        >
          Transactions
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item} onPress={onProfile}>
        <Ionicons
          name={active === "profile" ? "person" : "person-outline"}
          size={24}
          color={active === "profile" ? "forestgreen" : "dimgray"}
        />
        <Text style={active === "profile" ? styles.activeText : styles.text}>
          Profile
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item} onPress={onLogout}>
        <Ionicons name="log-out-outline" size={24} color="dimgray" />
        <Text style={styles.text}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 10,
  },
  item: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: { color: "dimgray", fontSize: 10, marginTop: 4 },
  activeText: {
    color: "forestgreen",
    fontSize: 10,
    fontWeight: "bold",
    marginTop: 4,
  },
});

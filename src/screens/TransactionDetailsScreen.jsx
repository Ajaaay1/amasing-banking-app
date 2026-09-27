import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useContext } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { BankingContext } from "../context/BankingContext";

export default function TransactionDetailsScreen({ id }) {
  const router = useRouter();
  const { transactions } = useContext(BankingContext);

  const item = transactions.find((tx) => tx.id === id);

  if (!item) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.notFoundText}>Transaction record not found.</Text>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Text style={styles.backButtonText}>Go Back</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.receiptWrapper}>
        <View style={styles.receiptCard}>
          <View style={styles.iconCircle}>
            <Ionicons name="checkmark-done" size={32} color="#004d40" />
          </View>
          <Text style={styles.statusText}>{item.status}</Text>
          <Text style={styles.amountDisplay}>{item.amount}</Text>
          <Text style={styles.merchantName}>{item.merchant}</Text>

          <View style={styles.divider} />

          <View style={styles.row}>
            <Text style={styles.label}>Transaction ID</Text>
            <Text style={styles.value}>{item.id}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Category</Text>
            <Text style={styles.value}>{item.category}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Timestamp</Text>
            <Text style={styles.value}>{item.date}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Reference No.</Text>
            <Text style={styles.value}>{item.referenceNumber}</Text>
          </View>

          <View style={styles.divider} />

          <Text style={styles.descriptionLabel}>Notes / Memo</Text>
          <Text style={styles.descriptionText}>{item.description}</Text>
        </View>

        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Ionicons
            name="arrow-back"
            size={18}
            color="white"
            style={{ marginRight: 8 }}
          />
          <Text style={styles.backButtonText}>Back to Dashboard</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f4f6f8", justifyContent: "center" },
  receiptWrapper: { padding: 20 },
  receiptCard: {
    backgroundColor: "white",
    borderRadius: 16,
    padding: 24,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 4,
  },
  iconCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#e0f2f1",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  statusText: {
    fontSize: 13,
    color: "#004d40",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  amountDisplay: {
    fontSize: 32,
    fontWeight: "bold",
    marginVertical: 6,
    color: "#212121",
  },
  merchantName: { fontSize: 16, color: "gray", marginBottom: 16 },
  divider: {
    height: 1,
    width: "100%",
    backgroundColor: "#eeeeee",
    marginVertical: 14,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 12,
  },
  label: { fontSize: 13, color: "gray" },
  value: { fontSize: 13, fontWeight: "600", color: "#212121" },
  descriptionLabel: {
    alignSelf: "flex-start",
    fontSize: 12,
    color: "gray",
    marginBottom: 4,
  },
  descriptionText: {
    alignSelf: "flex-start",
    fontSize: 13,
    color: "#424242",
    lineHeight: 18,
  },
  backButton: {
    backgroundColor: "#004d40",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    borderRadius: 12,
    marginTop: 20,
  },
  backButtonText: { color: "white", fontWeight: "bold", fontSize: 16 },
  notFoundText: {
    textAlign: "center",
    fontSize: 16,
    color: "gray",
    marginBottom: 20,
  },
});

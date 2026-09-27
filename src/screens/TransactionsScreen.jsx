import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { useContext } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

import BottomNav from "../components/BottomNav";
import TransactionItem from "../components/TransactionItem";
import { BankingContext } from "../context/BankingContext";

export default function TransactionsScreen() {
  const router = useRouter();
  const { balance, transactions } = useContext(BankingContext);

  const getIconForCategory = (category) => {
    switch (category) {
      case "Income":
        return "arrow-down-circle";
      case "Groceries":
        return "cart";
      case "Utilities":
        return "flash";
      case "Transfer":
        return "arrow-up-circle";
      default:
        return "receipt";
    }
  };

  return (
    <LinearGradient colors={["black", "teal"]} style={styles.gradient}>
      <SafeAreaView style={styles.container}>
        {/* HEADER */}
        <View style={styles.header}>
          <View>
            <Text style={styles.headerTitle}>Transactions</Text>
            <Text style={styles.headerSubtitle}>Your recent activity</Text>
          </View>
          <View style={styles.headerIcon}>
            <Ionicons name="receipt" size={27} color="white" />
          </View>
        </View>

        {/* CONTENT */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.content}
        >
          {/* SUMMARY CARD */}
          <View style={styles.summaryCard}>
            <Text style={styles.summaryLabel}>Total Balance</Text>
            <Text style={styles.summaryAmount}>{balance}</Text>
            <View style={styles.summaryRow}>
              <View>
                <Text style={styles.summarySmall}>Money In</Text>
                <Text style={styles.incomeSummary}>+₱3,500.00</Text>
              </View>
              <View>
                <Text style={styles.summarySmall}>Money Out</Text>
                <Text style={styles.expenseSummary}>-₱2,500.00</Text>
              </View>
            </View>
          </View>

          {/* ALL TRANSACTIONS CARD */}
          <View style={styles.card}>
            <Text style={styles.sectionTitle}>All Transactions</Text>

            {transactions.map((item, index) => (
              <View
                key={item.id}
                style={[
                  styles.transaction,
                  index === transactions.length - 1 && styles.lastTransaction,
                ]}
              >
                <TransactionItem
                  title={item.title || item.category}
                  description={item.merchant}
                  date={item.date.split(",")[0]}
                  amount={item.amount}
                  icon={getIconForCategory(item.category)}
                  type={item.type === "credit" ? "income" : "expense"}
                  onPress={() => router.push(`/details/${item.id}`)}
                />
              </View>
            ))}
          </View>
        </ScrollView>

        {/* BOTTOM NAVIGATION */}
        <BottomNav
          active="home"
          onHome={() => router.replace("/home")}
          onTransactions={() => router.replace("/transactions")}
          onProfile={() => router.replace("/profile")}
          onLogout={() => router.replace("/")}
        />
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: { flex: 1 },
  container: { flex: 1 },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 15,
  },
  headerTitle: { color: "white", fontSize: 25, fontWeight: "bold" },
  headerSubtitle: { color: "lightgray", fontSize: 13, marginTop: 4 },
  headerIcon: {
    width: 45,
    height: 45,
    borderRadius: 25,
    backgroundColor: "rgba(255,255,255,0.15)",
    alignItems: "center",
    justifyContent: "center",
  },
  content: { padding: 20, paddingBottom: 30 },
  summaryCard: {
    backgroundColor: "white",
    borderRadius: 18,
    padding: 20,
    marginBottom: 20,
  },
  summaryLabel: { color: "gray", fontSize: 12 },
  summaryAmount: {
    color: "black",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 5,
    marginBottom: 18,
  },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 1,
    borderTopColor: "lightgray",
    paddingTop: 15,
  },
  summarySmall: { color: "gray", fontSize: 11, marginBottom: 3 },
  incomeSummary: { color: "forestgreen", fontSize: 14, fontWeight: "bold" },
  expenseSummary: { color: "red", fontSize: 14, fontWeight: "bold" },
  card: {
    backgroundColor: "white",
    borderRadius: 15,
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  sectionTitle: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  transaction: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
  },
  lastTransaction: { borderBottomWidth: 0, paddingBottom: 15 },
});

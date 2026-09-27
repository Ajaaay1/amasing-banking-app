import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { useContext } from "react";
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import BottomNav from "../components/BottomNav";
import Card from "../components/Card";
import TransactionItem from "../components/TransactionItem";
import { BankingContext } from "../context/BankingContext";

export default function HomeScreen() {
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
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {/* HEADER */}
          <View style={styles.header}>
            <View>
              <Text style={styles.welcomeText}>Welcome back!</Text>
              <Text style={styles.userText}>User</Text>
            </View>
            <TouchableOpacity
              style={styles.notificationButton}
              onPress={() =>
                Alert.alert("Notifications", "No new notifications.")
              }
            >
              <Ionicons name="notifications-outline" size={25} color="white" />
            </TouchableOpacity>
          </View>

          {/* BALANCE CARD */}
          <Card style={styles.balanceCard}>
            <Text style={styles.balanceLabel}>Available Balance</Text>
            <Text style={styles.balance}>{balance}</Text>
            <View style={styles.balanceBottom}>
              <View>
                <Text style={styles.smallLabel}>Account</Text>
                <Text style={styles.accountNumber}>**** 1234</Text>
              </View>
              <Ionicons name="wallet-outline" size={35} color="forestgreen" />
            </View>
          </Card>

          {/* RECENT TRANSACTIONS */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Recent Transactions</Text>
            <TouchableOpacity onPress={() => router.replace("/transactions")}>
              <Text style={styles.seeAll}>See All</Text>
            </TouchableOpacity>
          </View>

          <Card style={styles.transactionCard}>
            {transactions.slice(0, 3).map((item, index) => (
              <View
                key={item.id}
                style={
                  index === 2 ? styles.lastTransaction : styles.transaction
                }
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
          </Card>
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
  scrollContent: { padding: 20, paddingBottom: 30 },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  welcomeText: { color: "white", fontSize: 15 },
  userText: { color: "white", fontSize: 25, fontWeight: "bold", marginTop: 3 },
  notificationButton: {
    width: 45,
    height: 45,
    borderRadius: 25,
    backgroundColor: "rgba(255,255,255,0.15)",
    alignItems: "center",
    justifyContent: "center",
  },
  balanceCard: { marginBottom: 25 },
  balanceLabel: { color: "gray", fontSize: 13 },
  balance: {
    color: "black",
    fontSize: 32,
    fontWeight: "bold",
    marginTop: 5,
    marginBottom: 20,
  },
  balanceBottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "lightgray",
    paddingTop: 15,
  },
  smallLabel: { color: "gray", fontSize: 11 },
  accountNumber: {
    color: "black",
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 3,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sectionTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
  },
  seeAll: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 12,
  },
  actionGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 25,
  },
  transactionCard: { paddingHorizontal: 15, paddingTop: 10, paddingBottom: 10 },
  transaction: { borderBottomWidth: 1, borderBottomColor: "lightgray" },
  lastTransaction: { borderBottomWidth: 0 },
});

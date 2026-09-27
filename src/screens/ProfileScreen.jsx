import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
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

export default function ProfileScreen() {
  const router = useRouter();

  return (
    <LinearGradient colors={["black", "teal"]} style={styles.gradient}>
      <SafeAreaView style={styles.container}>
        {/* HEADER */}
        <View style={styles.header}>
          <View>
            <Text style={styles.headerTitle}>Profile</Text>
            <Text style={styles.headerSubtitle}>Manage your account</Text>
          </View>
          <Ionicons name="person-circle" size={42} color="white" />
        </View>

        {/* CONTENT */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.content}
        >
          {/* PROFILE CARD */}
          <View style={styles.profileCard}>
            <View style={styles.avatar}>
              <Ionicons name="person" size={45} color="forestgreen" />
            </View>
            <Text style={styles.name}>User</Text>
            <Text style={styles.email}>user@example.com</Text>
            <View style={styles.memberBadge}>
              <Text style={styles.memberText}>Basic Account</Text>
            </View>
          </View>

          {/* ACCOUNT SETTINGS */}
          <View style={styles.card}>
            <Text style={styles.sectionTitle}>Account Settings</Text>
            <TouchableOpacity
              style={styles.option}
              onPress={() =>
                Alert.alert("Personal Information", "Settings coming soon.")
              }
            >
              <View style={styles.optionIcon}>
                <Ionicons name="person-outline" size={22} color="forestgreen" />
              </View>
              <View style={styles.optionInfo}>
                <Text style={styles.optionText}>Personal Information</Text>
                <Text style={styles.optionDescription}>
                  Manage your personal details
                </Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="gray" />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.option}
              onPress={() => Alert.alert("Security", "Settings coming soon.")}
            >
              <View style={styles.optionIcon}>
                <Ionicons
                  name="lock-closed-outline"
                  size={22}
                  color="forestgreen"
                />
              </View>
              <View style={styles.optionInfo}>
                <Text style={styles.optionText}>Security</Text>
                <Text style={styles.optionDescription}>
                  Manage your MPIN and security
                </Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="gray" />
            </TouchableOpacity>
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
  content: { padding: 20, paddingBottom: 30 },
  profileCard: {
    backgroundColor: "white",
    borderRadius: 18,
    padding: 25,
    alignItems: "center",
    marginBottom: 20,
  },
  avatar: {
    width: 85,
    height: 85,
    borderRadius: 45,
    backgroundColor: "whitesmoke",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  name: { fontSize: 21, fontWeight: "bold", color: "black" },
  email: { fontSize: 13, color: "gray", marginTop: 5 },
  memberBadge: {
    backgroundColor: "honeydew",
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 15,
    marginTop: 12,
  },
  memberText: { color: "forestgreen", fontSize: 11, fontWeight: "bold" },
  card: {
    backgroundColor: "white",
    borderRadius: 15,
    paddingHorizontal: 18,
    paddingTop: 18,
    marginBottom: 20,
  },
  sectionTitle: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
  },
  optionIcon: {
    width: 42,
    height: 42,
    borderRadius: 22,
    backgroundColor: "whitesmoke",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  optionInfo: { flex: 1 },
  optionText: { fontSize: 14, fontWeight: "bold", color: "black" },
  optionDescription: { fontSize: 11, color: "gray", marginTop: 3 },
});

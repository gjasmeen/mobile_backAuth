import { useRouter } from "expo-router";
import React from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { supabase } from "../../utils/supabase";


export default function Settings() {
  //const navigation = useNavigation();
  const router = useRouter();

 const handleLogout = async () => {
  const { error } = await supabase.auth.signOut();
  
  if (error) {
    console.error("Logout error:", error.message);
  } else {
    router.replace("/screens/signin");
  }
};;


  return (
    <ScrollView style={styles.container}>
        <View style={styles.section}>
            <Text style={styles.title}>Settings!</Text>
            <Text style={styles.subtitle}>This is the settings page.</Text>
        </View>{/* Logout Button */}
        <View style={styles.section}>
            <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
                <Text style={styles.logoutText}>Sign Out</Text>
            </TouchableOpacity>
        </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: "grey",
    },
    section: {
        backgroundColor: "#f4f6f8",
        padding: 20,
        borderRadius: 10,
        marginBottom: 15,
    },

    logoutButton: {
        backgroundColor: "#dc2626", // Red for destructive actions
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: "center",
  },
  logoutText: {
        color: "#fff",
        fontWeight: "700",
        fontSize: 16,
  },
    
});
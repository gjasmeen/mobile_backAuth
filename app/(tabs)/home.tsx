import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function Home() {
  //const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
        <View style={styles.section}>
            <Text style={styles.title}>Welcome to the Home Screen!</Text>
            <Text style={styles.subtitle}>This is the main landing page of the app.</Text>
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
    
});
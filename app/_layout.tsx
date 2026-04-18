import { Stack, useRouter, useSegments } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import { supabase } from "../utils/supabase";

export default function RootLayout() {
  const [initializing, setInitializing] = useState(true);
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      const inAuthGroup = segments[0] === "(tabs)";
      //if loggedin
      if (session && !inAuthGroup) {
        router.replace("/(tabs)/home");
        //not logged in
      } else if (!session && inAuthGroup) { 
        router.replace("/screens/signin");
      }
      setInitializing(false);
    };
     checkSession();

    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN') router.replace("/(tabs)/home");
      if (event === 'SIGNED_OUT') router.replace("/screens/signin");
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [segments]);

  if (initializing) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#f4f6f8" }}>
        <ActivityIndicator size="large" color="#2563eb" />
      </View>
    );
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" /> 
      <Stack.Screen name="screens/signin" />
      <Stack.Screen name="screens/signup" />
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}
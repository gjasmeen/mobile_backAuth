import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "expo-router";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import {
  ActivityIndicator,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { supabase } from "../../utils/supabase";
import { SignInFormData, signInSchema } from "../../validation/signInSchema";


export default function SignIn() {
  console.log(supabase);
  //const navigation = useNavigation<any>();
  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    reset,
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

   const onInvalid = (formErrors: any) => {
  if (formErrors.email) {
    Alert.alert("Input Error", formErrors.email.message);
  } else if (formErrors.password) {
    Alert.alert("Input Error", formErrors.password.message);
  }
};


const onSubmit = async (data: SignInFormData) => {
  const { error } = await supabase.auth.signInWithPassword({
    email: data.email,
    password: data.password,
  });

  if (error) {
    Alert.alert(
      "Account Not Found", 
      "We couldn't find an account with this email. Would you like to sign up instead?", 
      [
        { text: "Try Again", style: "cancel" },
        { 
          text: "Sign Up", 
          onPress: () => router.push("/screens/signup") 
        }
      ]
    );
    return; 
  }
  router.replace("/(tabs)/home");
};


  return (
    <KeyboardAvoidingView
      style={styles.flex}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Sign In</Text>
        <Text style={styles.subtitle}>Access your account</Text>

        {/* Email */}
        <View style={styles.formGroup}>
          <Text style={styles.label}>Email</Text>

          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder="Enter email"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                keyboardType="email-address"
                autoCapitalize="none"
                style={[styles.input, errors.email && styles.inputError]}
              />
            )}
          />

          {errors.email && (
            <Text style={styles.errorText}>{errors.email.message}</Text>
          )}
        </View>

        {/* Password */}
        <View style={styles.formGroup}>
          <Text style={styles.label}>Password</Text>

          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder="Enter password"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                secureTextEntry
                style={[styles.input, errors.password && styles.inputError]}
              />
            )}
          />

          {errors.password && (
            <Text style={styles.errorText}>{errors.password.message}</Text>
          )}
        </View>

        {/* Submit Button */}
        <TouchableOpacity
          style={[
            styles.button,
            //!isValid || isSubmitting ? styles.buttonDisabled : null,
            isSubmitting ? styles.buttonDisabled:null,
          ]}
          onPress={handleSubmit(onSubmit, onInvalid)}
          //disabled={!isValid || isSubmitting}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <ActivityIndicator color="#746f6f22" />
          ) : (
            <Text style={styles.buttonText}>Sign In</Text>
          )}
        </TouchableOpacity>

            {/* Button to redriect signup */}
        <View style={styles.bottomContainer}>
  
          <TouchableOpacity
            style={[styles.button, { backgroundColor: "#6d28d9", marginTop: 10 }]}  
            onPress={() => router.push("/screens/signup")}
            >
              <Text style={styles.buttonText}>Don't have an account? Sign Up</Text>
            </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor: "#f4f6f8",
  },
  container: {
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#1f2937",
    textAlign: "center",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 15,
    color: "#6b7280",
    textAlign: "center",
    marginBottom: 24,
  },
  formGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 15,
    fontWeight: "600",
    color: "#374151",
    marginBottom: 6,
  },
  input: {
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#d1d5db",
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 15,
  },
  inputError: {
    borderColor: "#dc2626",
    backgroundColor: "#fef2f2",
  },
  errorText: {
    color: "#dc2626",
    fontSize: 13,
    marginTop: 5,
  },
  button: {
    backgroundColor: "#eb25d7",
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: "center",
    marginTop: 10,
  },
  buttonDisabled: {
    backgroundColor: "#e193fd",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "700",
  },
  bottomContainer:{
    marginTop: 20,
  },
  bottomText: {
    fontSize: 15,
    color: "#6b7280",
    marginBottom: 8,
  }
});
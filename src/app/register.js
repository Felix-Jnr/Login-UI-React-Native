import { Text, View, StyleSheet, TextInput, Pressable, ScrollView} from "react-native";
import { Link } from "expo-router";
import { colors, spacing, radius, fontSize } from "./theme";
import Card from "../../components/Card";
import FormHeader from "../../components/FormHeader";
import AppInput from "../../components/AppInput";
import AppButton from "../../components/AppButton";

export default function Register() {
  return (
    <View style={styles.outerView}>
      <FormHeader title="Create Account" subtitle="Sign up to get started" />
      <Card>
        <AppInput label="Name" placeholder="John Doe" autoCapitalize="words" />
        <AppInput label="Email" placeholder="you@example.com" keyboardType="email-address" autoCapitalize="none" />
        <AppInput label="Password" placeholder="Create a password" secureTextEntry />
        <AppButton title="Sign up" variant="primary" onPress={() => console.log("Register pressed!")} />
      </Card>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Already have an account?</Text>
        <Link href="/" style={styles.footerLink}>
          Log in
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outerView: {
    flexGrow: 1,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 24,
    gap: 4,
  },

  footerText: {
    color: colors.MutedText
  },

  footerLink: {
    color: colors.primary,
    fontWeight: '600',
  },
  nameColumn: {
    flex: 1,
  },
  

});

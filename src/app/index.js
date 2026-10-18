import { Text, View, StyleSheet, TextInput, Pressable} from "react-native";
import { Link } from "expo-router";
import { colors, spacing, radius, fontSize } from "./theme";
import AppInput from "../../components/AppInput";
import AppButton from "../../components/AppButton";
import Card from "../../components/Card";
import FormHeader from "../../components/FormHeader";

export default function Login() {
  return (
    <View style={styles.outerView}>
      <FormHeader title ="Welcome back!" subtitle="Log in to your account" />
      <Card>
        <AppInput label="Email" placeholder="you@example.com" keyboardType="email-address" autoCapitalize="none" />
        <AppInput label="Password" placeholder="Enter your password" secureTextEntry />
        <Text style={styles.forgotPassword}>Forgot password?</Text>
        <AppButton title="Log in" variant="primary" onPress={() => console.log('Login pressed!')} />
      </Card>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Don't have an account?</Text>
        <Link href="/register" style={styles.footerLink}>
          Sign up
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outerView: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  headerView: {
    alignItems: "center",
    marginBottom: 32,
  },
  title: {
    fontSize: fontSize.title,
    fontWeight: '700',
  },
  subtitle: {
    fontSize: fontSize.body,
    fontWeight: "400",
  },


  forgotPassword: {
    color: colors.primary,
    fontSize: fontSize.label,
    fontWeight: '600',
    alignSelf: 'flex-end',
    marginTop: spacing.sm,
    marginBottom: spacing.md,
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





});

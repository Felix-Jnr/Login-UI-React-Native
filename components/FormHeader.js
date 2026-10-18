import { View, Text, StyleSheet } from "react-native";
import { colors, spacing, radius, fontSize } from "../src/app/theme";

export default function FormHeader({ title, subtitle = "Welcome back" }) {
  return (
    <View style= {styles.headerView}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
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
});

      

import { View, Text, TextInput, StyleSheet } from 'react-native';
import { colors, spacing, radius, fontSize } from '../src/app/theme';

export default function AppInput ({ label, ...rest }) {
    return (
        <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
        <TextInput style={styles.input} placeholderTextColor={colors.MutedText} {...rest} />
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        marginBottom: spacing.md,
    },
    label: {
        fontSize: fontSize.label,
        fontWeight: '500',
        color: colors.heading,
        marginBottom: spacing.md,
    },
    input: {
        fontSize: fontSize.body,
        height: 52,
        width: '100%',
        borderWidth: 1,
        borderColor: colors.InputBorder,
        backgroundColor: colors.InputBackground,
        paddingHorizontal: spacing.md,
        color: colors.heading,
        borderRadius: radius.md,
    },
});
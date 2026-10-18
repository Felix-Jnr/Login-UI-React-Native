import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors, spacing, radius, fontSize } from '../src/app/theme';

export default function AppButton({ title, onPress, variant = 'primary', disabled = false }) {

    const isPrimary = variant === 'primary';

    return (
        <TouchableOpacity
            onPress={disabled ? undefined : onPress}
            disabled={disabled}
            style={[styles.button, {
                backgroundColor: disabled ? colors.MutedText : (isPrimary ? colors.primary : colors.surface),
                borderWidth: isPrimary ? 0 : 1,
                borderColor: colors.primary,
                borderRadius: radius.md,
                paddingVertical: spacing.sm,
                alignItems: 'center',

                }
            ]}
            >
            <Text style={[styles.buttonText, { color: isPrimary ? colors.white : colors.primary }]}>
                {title}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        width: '100%',
        height: 52,
        borderRadius: radius.md,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: fontSize.body,
        fontWeight: '600',
    },

});

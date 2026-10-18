import { View, StyleSheet } from 'react-native';
import { colors } from '../src/app/theme';

export default function Card({ children }) {
    return (
        <View style={styles.card}>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "white",
        width: "100%",
        borderRadius: 20,
        padding: 24,
        gap: 8,
        elevation: 3,
        shadowColor: colors.shadow,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 8,
    },
}); 

import VennorIcons from '@vennor-technologies/vennor-icons';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const allIcons = [
  'calender-medium-outline',
  'calender-medium-solid',
  'clock-medium-outline',
  'giftbox',
  'house-medium-outline',
  'house-medium-solid',
  'inbox-medium-outline',
  'inbox-medium-solid',
  'key-medium-outlin',
  'lock-medium-solid',
  'people-medium-outline',
  'people-medium-solid',
  'person-medium-outline',
  'person-medium-solid',
  'person-minus-medium-outline',
  'person-plus-medium-outline',
  'person-star-medium-outline',
  'qrcode-medium-outline',
  'search-medium-outline',
  'search-medium-solid',
  'settings-medium-outline',
  'wallet-medium-outline',
];

export default function AllIconsDemo() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Vennor Icons Library</Text>
        <View style={styles.grid}>
          {allIcons.map((iconName, index) => (
            <View key={index} style={styles.iconCard}>
              <VennorIcons name={iconName} size={32} color="#000" />
              <Text style={styles.iconName} numberOfLines={2}>
                {iconName}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  iconCard: {
    width: '23%',
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
    padding: 8,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
  },
  iconName: {
    fontSize: 8,
    marginTop: 4,
    textAlign: 'center',
    color: '#666',
  },
});

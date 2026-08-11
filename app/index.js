import { Ionicons } from '@expo/vector-icons';
import {
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';


const categories = [
  { id: '1', title: 'Exercise', taskCount: '12 Tasks', image: require('../assets/images/exercise.jpg') },
  { id: '2', title: 'Study', taskCount: '12 Tasks', image: require('../assets/images/study.jpg') },
  { id: '3', title: 'Code', taskCount: '8 Tasks', image: require('../assets/images/coding.jpg') },
  { id: '4', title: 'Cook', taskCount: '5 Tasks', image: require('../assets/images/cooking.avif') },
  { id: '5', title: 'Read', taskCount: '4 Tasks', image: require('../assets/images/reading.webp') },
  { id: '6', title: 'Design', taskCount: '6 Tasks', image: require('../assets/images/art.webp') },
  { id: '7', title: 'Gaming', taskCount: '15 Tasks', image: require('../assets/images/gaming.jpg') },
];

const ongoingTasks = [
  { id: '1', title: 'Mobile App Development' },
  { id: '2', title: 'Web Development' },
  { id: '3', title: 'Push Ups' },
  { id: '4', title: 'Data Structures Practice' },
  { id: '5', title: 'UI/UX Wireframing' },
  { id: '6', title: 'Linear Algebra Homework' },
  { id: '7', title: 'System Architecture Review' },
  { id: '8', title: 'Database Optimization' },
];

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        
        <View style={styles.header}>
          <View>
            <Text style={styles.headerTitle}>Hello , Devs</Text>
            <Text style={styles.headerSubtitle}>14 tasks today</Text>
          </View>
          <View style={styles.profileContainer}>
            <Image
              source={require('../assets/images/profile.jpg')}
              style={styles.profileImage}
            />
          </View>
        </View>

      
        <View style={styles.searchContainer}>
          <View style={styles.searchBar}>
            <Ionicons name="search-outline" size={20} color="#000" style={styles.searchIcon} />
            <TextInput
              placeholder="Search"
              style={styles.searchInput}
              placeholderTextColor="#000"
            />
          </View>
          <TouchableOpacity style={styles.filterButton} activeOpacity={0.8}>
            <Ionicons name="options-outline" size={26} color="#FFF" />
          </TouchableOpacity>
        </View>

        
        <Text style={styles.sectionTitle}>Categories</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoriesList}
        >
          {categories.map((item) => (
            <TouchableOpacity key={item.id} style={styles.categoryCard} activeOpacity={0.9}>
              <Text style={styles.categoryTitle}>{item.title}</Text>
              <Text style={styles.categoryTasks}>{item.taskCount}</Text>
              <Image source={item.image} style={styles.categoryImage} resizeMode="contain" />
            </TouchableOpacity>
          ))}
        </ScrollView>

        
        <Text style={styles.sectionTitle}>Ongoing Task</Text>
        <View style={styles.taskList}>
          {ongoingTasks.map((item) => (
            <TouchableOpacity key={item.id} style={styles.taskCard} activeOpacity={0.9}>
              <Text style={styles.taskTitle}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F0E8',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  scrollContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
  },
  headerSubtitle: {
    fontSize: 12,
    fontWeight: '600',
    color: '#000',
    marginTop: 2,
  },
  profileContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#FFF',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#FFF',
    borderRadius: 14,
    alignItems: 'center',
    paddingHorizontal: 15,
    height: 50,
    marginRight: 15,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  filterButton: {
    width: 50,
    height: 50,
    backgroundColor: '#F05238',
    borderRadius: 14,
    justifycontent: 'center',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 15,
  },
  categoriesList: {
    paddingRight: 10,
    marginBottom: 25,
  },
  categoryCard: {
    backgroundColor: '#FFF',
    width: 170,
    height: 190,
    borderRadius: 18,
    padding: 16,
    marginRight: 15,
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  categoryTasks: {
    fontSize: 12,
    color: '#000',
    marginTop: 2,
    marginBottom: 10,
  },
  categoryImage: {
    width: '100%',
    height: 110,
    alignSelf: 'center',
  },
  taskList: {
    gap: 15,
  },
  taskCard: {
    backgroundColor: '#FFF8F0',
    height: 120,
    borderRadius: 18,
    paddingHorizontal: 20,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#EADBC8',
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
});
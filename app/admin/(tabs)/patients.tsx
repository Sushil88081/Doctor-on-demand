import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const RegisteredPatients = () => {
  // Sample patient data - replace with your actual data
  const patients = [
    {
      id: '1',
      name: 'Rahul Sharma',
      age: 35,
      gender: 'Male',
      bloodGroup: 'B+',
      lastVisit: '2023-05-15',
      conditions: ['Hypertension', 'Diabetes'],
      image: require('../../../assets/images/login.jpg')
    },
    {
      id: '2',
      name: 'Priya Patel',
      age: 28,
      gender: 'Female',
      bloodGroup: 'O+',
      lastVisit: '2023-05-10',
      conditions: ['Asthma'],
      image: require('../../../assets/images/login.jpg')
    },
    {
      id: '3',
      name: 'Amit Kumar',
      age: 45,
      gender: 'Male',
      bloodGroup: 'A-',
      lastVisit: '2023-05-05',
      conditions: ['Arthritis', 'High Cholesterol'],
      image: require('../../../assets/images/login.jpg')
    },
    {
      id: '4',
      name: 'Sneha Gupta',
      age: 32,
      gender: 'Female',
      bloodGroup: 'AB+',
      lastVisit: '2023-04-28',
      conditions: ['Migraine'],
      image: require('../../../assets/images/login.jpg')
    },
    {
      id: '5',
      name: 'Vikram Singh',
      age: 50,
      gender: 'Male',
      bloodGroup: 'B-',
      lastVisit: '2023-04-20',
      conditions: ['Diabetes', 'Heart Disease'],
      image: require('../../../assets/images/login.jpg')
    }
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Registered Patients</Text>
      <Text style={styles.subHeader}>{patients.length} patients in records</Text>
      
      {patients.map((patient) => (
        <TouchableOpacity key={patient.id} style={styles.patientCard}>
          <Image source={patient.image} style={styles.patientImage} />
          
          <View style={styles.patientInfo}>
            <Text style={styles.patientName}>{patient.name}</Text>
            
            <View style={styles.detailsRow}>
              <Text style={styles.detailText}>{patient.age} years</Text>
              <Text style={styles.detailText}>•</Text>
              <Text style={styles.detailText}>{patient.gender}</Text>
              <Text style={styles.detailText}>•</Text>
              <Text style={styles.detailText}>{patient.bloodGroup}</Text>
            </View>
            
            <Text style={styles.lastVisit}>
              Last visit: {patient.lastVisit}
            </Text>
            
            <View style={styles.conditionsContainer}>
              {patient.conditions.map((condition, index) => (
                <View key={index} style={styles.conditionTag}>
                  <Text style={styles.conditionText}>{condition}</Text>
                </View>
              ))}
            </View>
          </View>
          
          <Ionicons name="chevron-forward" size={20} color="#999" />
        </TouchableOpacity>
      ))}
      
      <TouchableOpacity style={styles.addButton}>
        <Ionicons name="add-circle" size={24} color="#4b6cb7" />
        <Text style={styles.addButtonText}>Add New Patient</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingBottom: 30,
    backgroundColor: '#f5f7fa'
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5
  },
  subHeader: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20
  },
  patientCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3
  },
  patientImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15
  },
  patientInfo: {
    flex: 1
  },
  patientName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5
  },
  detailsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5
  },
  detailText: {
    fontSize: 14,
    color: '#666',
    marginRight: 5
  },
  lastVisit: {
    fontSize: 13,
    color: '#666',
    marginBottom: 8
  },
  conditionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  conditionTag: {
    backgroundColor: '#E3F2FD',
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 8,
    marginBottom: 5
  },
  conditionText: {
    fontSize: 12,
    color: '#1976D2'
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    marginTop: 10
  },
  addButtonText: {
    color: '#4b6cb7',
    fontWeight: 'bold',
    marginLeft: 8
  }
});

export default RegisteredPatients;
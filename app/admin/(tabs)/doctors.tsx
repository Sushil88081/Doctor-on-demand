import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const DoctorsActiveToday = () => {
  // Sample data - replace with your actual data
  const activeDoctors = [
    {
      id: '1',
      name: 'Dr. Sarah Johnson',
      specialization: 'Cardiologist',
      availability: 'Available',
      nextAvailableSlot: '10:30 AM',
      image: require('../../../assets/images/notification.png'),
      rating: 4.8,
      patientsWaiting: 2
    },
    {
      id: '2',
      name: 'Dr. Michael Chen',
      specialization: 'Neurologist',
      availability: 'In Consultation',
      nextAvailableSlot: '11:45 AM',
      image: require('../../../assets/images/notification.png'),
      rating: 4.6,
      patientsWaiting: 3
    },
    {
      id: '3',
      name: 'Dr. Priya Patel',
      specialization: 'Pediatrician',
      availability: 'Available',
      nextAvailableSlot: 'Now',
      image: require('../../../assets/images/notification.png'),
      rating: 4.9,
      patientsWaiting: 0
    },
    {
      id: '4',
      name: 'Dr. Robert Williams',
      specialization: 'Orthopedic Surgeon',
      availability: 'On Break',
      nextAvailableSlot: '2:15 PM',
      image: require('../../../assets/images/notification.png'),
      rating: 4.7,
      patientsWaiting: 1
    },
    {
      id: '5',
      name: 'Dr. Emily Zhang',
      specialization: 'Dermatologist',
      availability: 'Available',
      nextAvailableSlot: 'Now',
      image: require('../../../assets/images/notification.png'),
      rating: 4.8,
      patientsWaiting: 0
    }
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Active Doctors Today</Text>
      <Text style={styles.subHeader}>{activeDoctors.length} doctors available</Text>
      
      {activeDoctors.map((doctor) => (
        <View key={doctor.id} style={styles.doctorCard}>
          <Image source={doctor.image} style={styles.doctorImage} />
          
          <View style={styles.doctorInfo}>
            <Text style={styles.doctorName}>{doctor.name}</Text>
            <Text style={styles.specialization}>{doctor.specialization}</Text>
            
            <View style={styles.ratingContainer}>
              <Ionicons name="star" size={16} color="#FFD700" />
              <Text style={styles.ratingText}>{doctor.rating}</Text>
            </View>
          </View>
          
          <View style={styles.availabilityContainer}>
            <View style={[
              styles.availabilityBadge,
              doctor.availability === 'Available' && styles.availableBadge,
              doctor.availability === 'In Consultation' && styles.consultationBadge,
              doctor.availability === 'On Break' && styles.breakBadge
            ]}>
              <Text style={styles.availabilityText}>{doctor.availability}</Text>
            </View>
            
            <Text style={styles.slotText}>
              Next slot: {doctor.nextAvailableSlot}
            </Text>
            
            {doctor.patientsWaiting > 0 && (
              <Text style={styles.waitingText}>
                {doctor.patientsWaiting} {doctor.patientsWaiting === 1 ? 'patient' : 'patients'} waiting
              </Text>
            )}
          </View>
        </View>
      ))}
      
      <TouchableOpacity style={styles.viewAllButton}>
        <Text style={styles.viewAllText}>View All Doctors</Text>
        <Ionicons name="arrow-forward" size={18} color="#4b6cb7" />
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
  doctorCard: {
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
  doctorImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15
  },
  doctorInfo: {
    flex: 1
  },
  doctorName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 3
  },
  specialization: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  ratingText: {
    fontSize: 14,
    color: '#666',
    marginLeft: 5
  },
  availabilityContainer: {
    alignItems: 'flex-end'
  },
  availabilityBadge: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
    marginBottom: 5
  },
  availableBadge: {
    backgroundColor: '#E8F5E9'
  },
  consultationBadge: {
    backgroundColor: '#FFF8E1'
  },
  breakBadge: {
    backgroundColor: '#EFEBE9'
  },
  availabilityText: {
    fontSize: 12,
    fontWeight: '500'
  },
  slotText: {
    fontSize: 12,
    color: '#666',
    marginBottom: 3
  },
  waitingText: {
    fontSize: 11,
    color: '#E53935',
    fontStyle: 'italic'
  },
  viewAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    marginTop: 10
  },
  viewAllText: {
    color: '#4b6cb7',
    fontWeight: 'bold',
    marginRight: 5
  }
});

export default DoctorsActiveToday;
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const AppointmentScreen = () => {
  // Sample appointment data
  const appointments = [
    {
      id: '1',
      patientName: 'Rahul Sharma',
      doctorName: 'Dr. Priya Patel',
      date: '2023-06-15',
      time: '10:30 AM',
      status: 'Confirmed',
      type: 'Follow-up',
      reason: 'Diabetes checkup'
    },
    {
      id: '2',
      patientName: 'Neha Gupta',
      doctorName: 'Dr. Amit Kumar',
      date: '2023-06-15',
      time: '11:45 AM',
      status: 'Pending',
      type: 'New Patient',
      reason: 'Back pain consultation'
    },
    {
      id: '3',
      patientName: 'Vikram Singh',
      doctorName: 'Dr. Sarah Johnson',
      date: '2023-06-16',
      time: '02:15 PM',
      status: 'Completed',
      type: 'Routine Checkup',
      reason: 'Annual physical examination'
    },
    {
      id: '4',
      patientName: 'Ananya Reddy',
      doctorName: 'Dr. Michael Chen',
      date: '2023-06-17',
      time: '09:00 AM',
      status: 'Cancelled',
      type: 'Consultation',
      reason: 'Migraine treatment'
    },
    {
      id: '5',
      patientName: 'Arjun Kapoor',
      doctorName: 'Dr. Emily Zhang',
      date: '2023-06-17',
      time: '04:30 PM',
      status: 'Confirmed',
      type: 'Follow-up',
      reason: 'Blood test results'
    }
  ];

  // Group appointments by date
  const groupedAppointments = appointments.reduce((acc, appointment) => {
    if (!acc[appointment.date]) {
      acc[appointment.date] = [];
    }
    acc[appointment.date].push(appointment);
    return acc;
  }, {});

  const renderAppointmentItem = ({ item }) => (
    <TouchableOpacity style={[
      styles.appointmentCard,
      item.status === 'Completed' && styles.completedCard,
      item.status === 'Cancelled' && styles.cancelledCard
    ]}>
      <View style={styles.appointmentHeader}>
        <Text style={styles.timeText}>{item.time}</Text>
        <View style={[
          styles.statusBadge,
          item.status === 'Confirmed' && styles.confirmedBadge,
          item.status === 'Pending' && styles.pendingBadge,
          item.status === 'Completed' && styles.completedBadge,
          item.status === 'Cancelled' && styles.cancelledBadge
        ]}>
          <Text style={styles.statusText}>{item.status}</Text>
        </View>
      </View>
      
      <Text style={styles.patientName}>{item.patientName}</Text>
      <Text style={styles.doctorName}>With {item.doctorName}</Text>
      
      <View style={styles.appointmentDetails}>
        <View style={styles.detailRow}>
          <Ionicons name="medical" size={16} color="#666" />
          <Text style={styles.detailText}>{item.type}</Text>
        </View>
        <View style={styles.detailRow}>
          <Ionicons name="document-text" size={16} color="#666" />
          <Text style={styles.detailText}>{item.reason}</Text>
        </View>
      </View>
      
      <View style={styles.actionButtons}>
        {item.status === 'Pending' && (
          <>
            <TouchableOpacity style={styles.confirmButton}>
              <Text style={styles.buttonText}>Confirm</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.rescheduleButton}>
              <Text style={styles.buttonText}>Reschedule</Text>
            </TouchableOpacity>
          </>
        )}
        {item.status === 'Confirmed' && (
          <TouchableOpacity style={styles.startButton}>
            <Text style={styles.buttonText}>Start Consultation</Text>
          </TouchableOpacity>
        )}
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Appointments</Text>
        <TouchableOpacity style={styles.addButton}>
          <Ionicons name="add" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
      
      <FlatList
        data={Object.entries(groupedAppointments)}
        keyExtractor={(item) => item[0]}
        renderItem={({ item: [date, appointments] }) => (
          <View style={styles.dateSection}>
            <Text style={styles.dateHeader}>{new Date(date).toDateString()}</Text>
            <FlatList
              data={appointments}
              renderItem={renderAppointmentItem}
              keyExtractor={(item) => item.id}
              contentContainerStyle={styles.appointmentsList}
            />
          </View>
        )}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f7fa',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#4b6cb7',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  addButton: {
    backgroundColor: '#3a5a9a',
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContainer: {
    paddingBottom: 20,
  },
  dateSection: {
    marginTop: 16,
  },
  dateHeader: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#e3f2fd',
  },
  appointmentsList: {
    paddingHorizontal: 16,
  },
  appointmentCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  completedCard: {
    opacity: 0.8,
    backgroundColor: '#f5f5f5',
  },
  cancelledCard: {
    backgroundColor: '#ffebee',
  },
  appointmentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  timeText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  statusBadge: {
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 4,
    alignSelf: 'flex-start',
  },
  confirmedBadge: {
    backgroundColor: '#e8f5e9',
  },
  pendingBadge: {
    backgroundColor: '#fff8e1',
  },
  completedBadge: {
    backgroundColor: '#e3f2fd',
  },
  cancelledBadge: {
    backgroundColor: '#ffcdd2',
  },
  statusText: {
    fontSize: 12,
    fontWeight: '500',
  },
  patientName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  doctorName: {
    fontSize: 14,
    color: '#666',
    marginBottom: 12,
  },
  appointmentDetails: {
    marginBottom: 12,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  detailText: {
    fontSize: 14,
    color: '#666',
    marginLeft: 8,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  confirmButton: {
    backgroundColor: '#4caf50',
    borderRadius: 8,
    padding: 10,
    flex: 1,
    marginRight: 8,
    alignItems: 'center',
  },
  rescheduleButton: {
    backgroundColor: '#ff9800',
    borderRadius: 8,
    padding: 10,
    flex: 1,
    alignItems: 'center',
  },
  startButton: {
    backgroundColor: '#4b6cb7',
    borderRadius: 8,
    padding: 10,
    flex: 1,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '500',
  },
});

export default AppointmentScreen;
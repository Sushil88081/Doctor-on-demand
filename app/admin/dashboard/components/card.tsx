import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

const AdminPanel = () => {
  // Sample data - replace with your actual data
  const stats = {
    doctors: 12,
    patients: 245,
    appointments: 48,
    revenue: '₹1,24,568'
  };

  const recentActivities = [
    { id: '1', action: 'New doctor added', time: '2 hours ago', by: 'Admin' },
    { id: '2', action: 'Appointment cancelled', time: '5 hours ago', by: 'Patient' },
    { id: '3', action: 'Prescription updated', time: '1 day ago', by: 'Dr. Sharma' },
    { id: '4', action: 'System maintenance', time: '2 days ago', by: 'Admin' }
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Admin Dashboard</Text>
        <View style={styles.userInfo}>
          <Ionicons name="person-circle" size={32} color="#4b6cb7" />
          <Text style={styles.userName}>Admin User</Text>
        </View>
      </View>

      {/* Stats Cards */}
      <View style={styles.statsContainer}>
        <View style={[styles.statCard, styles.doctorCard]}>
          <MaterialIcons name="medical-services" size={28} color="#4b6cb7" />
          <Text style={styles.statNumber}>{stats.doctors}</Text>
          <Text style={styles.statLabel}>Doctors</Text>
        </View>

        <View style={[styles.statCard, styles.patientCard]}>
          <Ionicons name="people" size={28} color="#4CAF50" />
          <Text style={styles.statNumber}>{stats.patients}</Text>
          <Text style={styles.statLabel}>Patients</Text>
        </View>

        <View style={[styles.statCard, styles.appointmentCard]}>
          <MaterialIcons name="event" size={28} color="#FF9800" />
          <Text style={styles.statNumber}>{stats.appointments}</Text>
          <Text style={styles.statLabel}>Today's Appointments</Text>
        </View>

        <View style={[styles.statCard, styles.revenueCard]}>
          <MaterialIcons name="attach-money" size={28} color="#9C27B0" />
          <Text style={styles.statNumber}>{stats.revenue}</Text>
          <Text style={styles.statLabel}>Monthly Revenue</Text>
        </View>
      </View>

      {/* Quick Actions */}
      <Text style={styles.sectionTitle}>Quick Actions</Text>
      <View style={styles.actionsContainer}>
        <TouchableOpacity style={styles.actionButton}>
          <View style={[styles.actionIcon, { backgroundColor: '#E3F2FD' }]}>
            <Ionicons name="add" size={24} color="#4b6cb7" />
          </View>
          <Text style={styles.actionText}>Add Doctor</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
          <View style={[styles.actionIcon, { backgroundColor: '#E8F5E9' }]}>
            <Ionicons name="person-add" size={24} color="#4CAF50" />
          </View>
          <Text style={styles.actionText}>Add Patient</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
          <View style={[styles.actionIcon, { backgroundColor: '#FFF8E1' }]}>
            <MaterialIcons name="event" size={24} color="#FF9800" />
          </View>
          <Text style={styles.actionText}>Manage Appointments</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
          <View style={[styles.actionIcon, { backgroundColor: '#F3E5F5' }]}>
            <MaterialIcons name="payment" size={24} color="#9C27B0" />
          </View>
          <Text style={styles.actionText}>View Payments</Text>
        </TouchableOpacity>
      </View>

      {/* Recent Activities */}
      <Text style={styles.sectionTitle}>Recent Activities</Text>
      <View style={styles.activitiesContainer}>
        {recentActivities.map((activity) => (
          <View key={activity.id} style={styles.activityItem}>
            <View style={styles.activityIcon}>
              <Ionicons name="time" size={20} color="#666" />
            </View>
            <View style={styles.activityDetails}>
              <Text style={styles.activityAction}>{activity.action}</Text>
              <Text style={styles.activityMeta}>
                {activity.time} • By {activity.by}
              </Text>
            </View>
          </View>
        ))}
      </View>

      {/* Admin Modules */}
      <Text style={styles.sectionTitle}>Admin Modules</Text>
      <View style={styles.modulesContainer}>
        <TouchableOpacity style={styles.moduleButton}>
          <Ionicons name="settings" size={24} color="#4b6cb7" />
          <Text style={styles.moduleText}>System Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.moduleButton}>
          <Ionicons name="shield-checkmark" size={24} color="#4CAF50" />
          <Text style={styles.moduleText}>User Permissions</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.moduleButton}>
          <MaterialIcons name="report" size={24} color="#FF9800" />
          <Text style={styles.moduleText}>Reports</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.moduleButton}>
          <Ionicons name="notifications" size={24} color="#9C27B0" />
          <Text style={styles.moduleText}>Notifications</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingBottom: 30,
    backgroundColor: '#f5f7fa',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userName: {
    marginLeft: 8,
    fontWeight: '500',
  },
  statsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  statCard: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  doctorCard: {
    borderTopWidth: 4,
    borderTopColor: '#4b6cb7',
  },
  patientCard: {
    borderTopWidth: 4,
    borderTopColor: '#4CAF50',
  },
  appointmentCard: {
    borderTopWidth: 4,
    borderTopColor: '#FF9800',
  },
  revenueCard: {
    borderTopWidth: 4,
    borderTopColor: '#9C27B0',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 8,
    color: '#333',
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
  actionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  actionButton: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  actionIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  actionText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
    textAlign: 'center',
  },
  activitiesContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  activityItem: {
    flexDirection: 'row',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  activityIcon: {
    marginRight: 12,
  },
  activityDetails: {
    flex: 1,
  },
  activityAction: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
    marginBottom: 4,
  },
  activityMeta: {
    fontSize: 12,
    color: '#666',
  },
  modulesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  moduleButton: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  moduleText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
    marginLeft: 10,
  },
});

export default AdminPanel;
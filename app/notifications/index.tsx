import { 
  View, 
  Text, 
  Image, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity, 
  Platform,
  SafeAreaView,
  StatusBar
} from "react-native";
import { Ionicons } from '@expo/vector-icons';

const NotificationScreen = () => {
  // Sample notification data
  const notifications = [
    {
      id: '1',
      type: 'appointment',
      title: 'Appointment Confirmed',
      message: 'Your appointment with Dr. Sharma is confirmed for tomorrow at 10:30 AM',
      time: '2 hours ago',
      read: false,
      icon: 'calendar'
    },
    {
      id: '2',
      type: 'prescription',
      title: 'New Prescription',
      message: 'Dr. Patel has added a new prescription for your treatment',
      time: '1 day ago',
      read: true,
      icon: 'document-text'
    },
    {
      id: '3',
      type: 'payment',
      title: 'Payment Successful',
      message: 'Your payment of ₹750 for consultation has been processed',
      time: '2 days ago',
      read: true,
      icon: 'wallet'
    },
    {
      id: '4',
      type: 'reminder',
      title: 'Medicine Reminder',
      message: 'Time to take your prescribed Paracetamol 500mg',
      time: '3 days ago',
      read: true,
      icon: 'notifications'
    }
  ];

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar 
        barStyle={Platform.OS === 'android' ? 'light-content' : 'dark-content'}
        backgroundColor={Platform.OS === 'android' ? '#4b6cb7' : '#fff'}
      />
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Notifications</Text>
          {unreadCount > 0 && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{unreadCount}</Text>
            </View>
          )}
        </View>

        {notifications.length > 0 ? (
          <ScrollView 
            contentContainerStyle={styles.notificationsContainer}
            showsVerticalScrollIndicator={false}
          >
            {notifications.map((notification) => (
              <TouchableOpacity 
                key={notification.id} 
                style={[
                  styles.notificationCard,
                  !notification.read && styles.unreadCard
                ]}
                activeOpacity={0.7}
              >
                <View style={styles.iconContainer}>
                  <Ionicons 
                    name={notification.icon} 
                    size={24} 
                    color={
                      notification.type === 'appointment' ? '#4b6cb7' :
                      notification.type === 'prescription' ? '#4CAF50' :
                      notification.type === 'payment' ? '#9C27B0' : '#FF9800'
                    } 
                  />
                </View>
                <View style={styles.notificationContent}>
                  <Text style={styles.notificationTitle}>{notification.title}</Text>
                  <Text style={styles.notificationMessage}>{notification.message}</Text>
                  <Text style={styles.notificationTime}>{notification.time}</Text>
                </View>
                {!notification.read && <View style={styles.unreadDot} />}
              </TouchableOpacity>
            ))}
          </ScrollView>
        ) : (
          <View style={styles.emptyContainer}>
            <Image
              source={require("@/assets/images/notification.png")}
              style={styles.emptyImage}
            />
            <Text style={styles.emptyTitle}>No new notifications</Text>
            <Text style={styles.emptyText}>You're all caught up!</Text>
          </View>
        )}

        {/* Bottom Actions */}
        <View style={styles.actionsContainer}>
          <TouchableOpacity 
            style={styles.actionButton}
            activeOpacity={0.7}
          >
            <Ionicons name="checkmark-done" size={20} color="#4b6cb7" />
            <Text style={styles.actionText}>Mark all as read</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.actionButton}
            activeOpacity={0.7}
          >
            <Ionicons name="trash" size={20} color="#F44336" />
            <Text style={styles.actionText}>Clear all</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#f5f7fa',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    paddingTop: Platform.OS === 'android' ? 10 : 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    backgroundColor: '#fff',
    ...Platform.select({
      android: {
        elevation: 3,
      },
    }),
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    ...Platform.select({
      android: {
        fontFamily: 'Roboto',
      },
    }),
  },
  badge: {
    backgroundColor: '#F44336',
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 2,
    marginLeft: 8,
    ...Platform.select({
      android: {
        marginTop: 2,
      },
    }),
  },
  badgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  notificationsContainer: {
    padding: 16,
    paddingBottom: Platform.OS === 'android' ? 80 : 16,
  },
  notificationCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'flex-start',
    ...Platform.select({
      android: {
        elevation: 2,
        borderWidth: 0.5,
        borderColor: '#e0e0e0',
      },
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
    }),
  },
  unreadCard: {
    borderLeftWidth: 4,
    borderLeftColor: '#4b6cb7',
  },
  iconContainer: {
    marginRight: 16,
  },
  notificationContent: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
    ...Platform.select({
      android: {
        fontFamily: 'Roboto',
      },
    }),
  },
  notificationMessage: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
    ...Platform.select({
      android: {
        fontFamily: 'Roboto',
        lineHeight: 20,
      },
    }),
  },
  notificationTime: {
    fontSize: 12,
    color: '#999',
    ...Platform.select({
      android: {
        fontFamily: 'Roboto',
      },
    }),
  },
  unreadDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#F44336',
    marginLeft: 8,
    marginTop: Platform.OS === 'android' ? 4 : 0,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
  },
  emptyImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 24,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
    ...Platform.select({
      android: {
        fontFamily: 'Roboto',
      },
    }),
  },
  emptyText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    ...Platform.select({
      android: {
        fontFamily: 'Roboto',
      },
    }),
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    backgroundColor: '#fff',
    ...Platform.select({
      android: {
        elevation: 8,
        paddingBottom: 20,
      },
    }),
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
  },
  actionText: {
    marginLeft: 8,
    color: '#333',
    ...Platform.select({
      android: {
        fontFamily: 'Roboto',
      },
    }),
  },
});

export default NotificationScreen;
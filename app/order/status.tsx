import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { router } from 'expo-router';

const OrderTrackingScreen = () => {
  // Sample tracking data - replace with your actual data
  const orderData = {
    orderId: 'ORD-123456',
    status: 'In Transit',
    estimatedDelivery: 'Today by 7 PM',
    items: [
      {
        id: '1',
        name: 'Paracetamol 500mg',
        quantity: 2,
        image: require('../../assets/images/bookmedicine.jpg')
      },
      {
        id: '2',
        name: 'Azithromycin 250mg',
        quantity: 1,
        image: require('../../assets/images/bookmedicine.jpg')
      }
    ],
    tracking: [
      {
        id: '1',
        status: 'Order Placed',
        time: '10:30 AM',
        date: 'May 15',
        completed: true
      },
      {
        id: '2',
        status: 'Processing',
        time: '11:45 AM',
        date: 'May 15',
        completed: true
      },
      {
        id: '3',
        status: 'Dispatched',
        time: '2:15 PM',
        date: 'May 15',
        completed: true
      },
      {
        id: '4',
        status: 'In Transit',
        time: '3:30 PM',
        date: 'May 15',
        completed: false,
        current: true
      },
      {
        id: '5',
        status: 'Delivered',
        time: 'Estimated 7 PM',
        date: 'May 15',
        completed: false
      }
    ],
    deliveryPartner: {
      name: 'MediFast Delivery',
      contact: '+91 98765 43210',
      vehicle: 'Bike (DL 4C AB 1234)'
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Order Summary Header */}
      <View style={styles.header}>
        <Text style={styles.orderId}>Order #{orderData.orderId}</Text>
        <Text style={styles.status}>{orderData.status}</Text>
        <Text style={styles.estimatedDelivery}>
          Estimated delivery: {orderData.estimatedDelivery}
        </Text>
      </View>

      {/* Tracking Timeline */}
      <View style={styles.timelineContainer}>
        <Text style={styles.sectionTitle}>Order Status</Text>
        {orderData.tracking.map((step, index) => (
          <View key={step.id} style={styles.timelineStep}>
            {/* Timeline Dot and Line */}
            <View style={styles.timelineLeft}>
              <View
                style={[
                  styles.timelineDot,
                  step.completed && styles.completedDot,
                  step.current && styles.currentDot
                ]}
              >
                {step.completed && (
                  <Text style={styles.checkmark}>✓</Text>
                )}
              </View>
              {index !== orderData.tracking.length - 1 && (
                <View
                  style={[
                    styles.timelineLine,
                    step.completed && styles.completedLine
                  ]}
                />
              )}
            </View>

            {/* Timeline Content */}
            <View style={styles.timelineRight}>
              <Text
                style={[
                  styles.timelineStatus,
                  step.current && styles.currentStatus
                ]}
              >
                {step.status}
              </Text>
              <Text style={styles.timelineTime}>
                {step.time} • {step.date}
              </Text>
            </View>
          </View>
        ))}
      </View>

      {/* Ordered Medicines */}
      <View style={styles.itemsContainer}>
        <Text style={styles.sectionTitle}>Your Medicines</Text>
        {orderData.items.map((item) => (
          <View key={item.id} style={styles.itemCard}>
            <Image source={item.image} style={styles.itemImage} />
            <View style={styles.itemDetails}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemQuantity}>Quantity: {item.quantity}</Text>
            </View>
          </View>
        ))}
      </View>

      {/* Delivery Partner Info */}
      <View style={styles.deliveryContainer}>
        <Text style={styles.sectionTitle}>Delivery Partner</Text>
        <View style={styles.deliveryCard}>
          <Text style={styles.deliveryName}>{orderData.deliveryPartner.name}</Text>
          <Text style={styles.deliveryText}>
            Contact: {orderData.deliveryPartner.contact}
          </Text>
          <Text style={styles.deliveryText}>
            Vehicle: {orderData.deliveryPartner.vehicle}
          </Text>
        </View>
      </View>

      {/* Help Section */}
      <View style={styles.helpContainer}>
        <Text style={styles.sectionTitle}>Need Help?</Text>
        <Text style={styles.helpText}>
          If you have any questions about your delivery, contact our support team.
        </Text>
        <View style={styles.helpButtons}>
          <View style={[styles.helpButton, styles.callButton]}>
            <Text style={styles.helpButtonText}>Call Support</Text>
          </View>
          <View style={[styles.helpButton, styles.chatButton]}>
            <Text style={styles.helpButtonText}>Chat with Us</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingBottom: 40,
    backgroundColor: '#f5f7fa',
  },
  header: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  orderId: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  status: {
    fontSize: 16,
    color: '#4b6cb7',
    fontWeight: '600',
    marginBottom: 4,
  },
  estimatedDelivery: {
    fontSize: 14,
    color: '#666',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
  timelineContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  timelineStep: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  timelineLeft: {
    width: 40,
    alignItems: 'center',
  },
  timelineDot: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  completedDot: {
    backgroundColor: '#4CAF50',
    borderColor: '#4CAF50',
  },
  currentDot: {
    borderColor: '#4b6cb7',
    borderWidth: 3,
  },
  checkmark: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
  timelineLine: {
    width: 2,
    flex: 1,
    backgroundColor: '#ccc',
    marginVertical: 4,
  },
  completedLine: {
    backgroundColor: '#4CAF50',
  },
  timelineRight: {
    flex: 1,
    paddingLeft: 10,
  },
  timelineStatus: {
    fontSize: 16,
    color: '#666',
    marginBottom: 4,
  },
  currentStatus: {
    color: '#4b6cb7',
    fontWeight: '600',
  },
  timelineTime: {
    fontSize: 14,
    color: '#999',
  },
  itemsContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  itemCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  itemImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 16,
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    color: '#333',
    marginBottom: 4,
  },
  itemQuantity: {
    fontSize: 14,
    color: '#666',
  },
  deliveryContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  deliveryCard: {
    backgroundColor: '#f5f7fa',
    borderRadius: 8,
    padding: 16,
  },
  deliveryName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  deliveryText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  helpContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  helpText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 16,
  },
  helpButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  helpButton: {
    borderRadius: 8,
    padding: 12,
    width: '48%',
    alignItems: 'center',
  },
  callButton: {
    backgroundColor: '#4CAF50',
  },
  chatButton: {
    backgroundColor: '#4b6cb7',
  },
  helpButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
});

export default OrderTrackingScreen;
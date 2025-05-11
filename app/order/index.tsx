import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { router } from 'expo-router';
import { FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons';

const OrderConfirmationScreen = () => {
  // Sample data - replace with your actual order data
  const orderDetails = {
    orderId: 'ORD-123456',
    deliveryDate: 'Tomorrow by 7 PM',
    paymentMethod: 'Credit Card (•••• 4242)',
    items: [
      {
        id: '1',
        name: 'Paracetamol 500mg',
        quantity: 2,
        price: 15,
        image: require('../../assets/images/welcome.png')
      },
      {
        id: '2',
        name: 'Azithromycin 250mg',
        quantity: 1,
        price: 45,
        image: require('../../assets/images/welcome.png')
      }
    ],
    address: {
      name: 'Home',
      fullAddress: '123 Main St, Apartment 4B, Mumbai, Maharashtra',
      phone: '+91 9876543210'
    },
    total: 75,
    deliveryFee: 10,
    discount: 5,
    grandTotal: 80
  };

  const handleTrackOrder = () => {
    router.push('/order/status');
  };

  const handleBackToHome = () => {
    router.push('/(tabs)');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Success Header */}
      <View style={styles.successHeader}>
        <View style={styles.successIcon}>
          
         
          <Ionicons name="checkmark-circle" size={60} color="#4CAF50" />
        </View>
        <Text style={styles.successTitle}>Order Confirmed!</Text>
        <Text style={styles.successSubtitle}>
          Your order #{orderDetails.orderId} has been placed successfully
        </Text>
      </View>

      {/* Delivery Info */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Delivery Information</Text>
        <View style={styles.infoCard}>
          <View style={styles.infoRow}>
          
          <MaterialIcons name="date-range" size={20} color="#4b6cb7" />
            <Text style={styles.infoText}>
              Expected delivery: {orderDetails.deliveryDate}
            </Text>
          </View>
          <View style={styles.infoRow}>
           
           
          <Ionicons name="location" size={20} color="#4b6cb7" />
            <View>
              <Text style={styles.infoText}>{orderDetails.address.name}</Text>
              <Text style={styles.addressText}>
                {orderDetails.address.fullAddress}
              </Text>
              <Text style={styles.phoneText}>
                Phone: {orderDetails.address.phone}
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* Order Summary */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Order Summary</Text>
        <View style={styles.itemsContainer}>
          {orderDetails.items.map((item) => (
            <View key={item.id} style={styles.itemRow}>
              <Image source={item.image} style={styles.itemImage} />
              <View style={styles.itemDetails}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemQuantity}>Qty: {item.quantity}</Text>
              </View>
              <Text style={styles.itemPrice}>₹{item.price * item.quantity}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Payment Summary */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Payment Summary</Text>
        <View style={styles.paymentCard}>
          <View style={styles.paymentRow}>
            <Text style={styles.paymentLabel}>Subtotal</Text>
            <Text style={styles.paymentValue}>₹{orderDetails.total}</Text>
          </View>
          <View style={styles.paymentRow}>
            <Text style={styles.paymentLabel}>Delivery Fee</Text>
            <Text style={styles.paymentValue}>₹{orderDetails.deliveryFee}</Text>
          </View>
          <View style={styles.paymentRow}>
            <Text style={styles.paymentLabel}>Discount</Text>
            <Text style={styles.discountValue}>-₹{orderDetails.discount}</Text>
          </View>
          <View style={styles.divider} />
          <View style={[styles.paymentRow, styles.grandTotalRow]}>
            <Text style={styles.grandTotalLabel}>Grand Total</Text>
            <Text style={styles.grandTotalValue}>₹{orderDetails.grandTotal}</Text>
          </View>
          <View style={styles.paymentRow}>
            <Text style={styles.paymentLabel}>Payment Method</Text>
            <Text style={styles.paymentValue}>{orderDetails.paymentMethod}</Text>
          </View>
        </View>
      </View>

      {/* Action Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.trackButton]}
          onPress={handleTrackOrder}
        >
         
         <Ionicons name="navigate-circle" size={20} color="#fff" />
          <Text style={styles.buttonText}>Track Your Order</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.homeButton]}
          onPress={handleBackToHome}
        >
          <Ionicons name="home" size={20} color="#4b6cb7" />
          {/* <FontAwesome size={28} name="home"  color="#4b6cb7" /> */}
          <Text style={[styles.buttonText, styles.homeButtonText]}>
            Back to Home
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 40,
    backgroundColor: '#f5f7fa',
  },
  successHeader: {
    alignItems: 'center',
    paddingVertical: 30,
  },
  successIcon: {
    marginBottom: 15,
  },
  successTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 8,
  },
  successSubtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    maxWidth: '80%',
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  infoCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 15,
  },
  infoText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#333',
  },
  addressText: {
    marginLeft: 10,
    fontSize: 14,
    color: '#666',
    marginTop: 3,
  },
  phoneText: {
    marginLeft: 10,
    fontSize: 14,
    color: '#666',
    marginTop: 3,
  },
  itemsContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  itemImage: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 15,
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  itemQuantity: {
    fontSize: 14,
    color: '#666',
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  paymentCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  paymentRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  paymentLabel: {
    fontSize: 16,
    color: '#666',
  },
  paymentValue: {
    fontSize: 16,
    color: '#333',
  },
  discountValue: {
    fontSize: 16,
    color: '#4CAF50',
  },
  divider: {
    height: 1,
    backgroundColor: '#eee',
    marginVertical: 10,
  },
  grandTotalRow: {
    marginTop: 5,
  },
  grandTotalLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  grandTotalValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4b6cb7',
  },
  buttonContainer: {
    marginTop: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 10,
    marginBottom: 15,
  },
  trackButton: {
    backgroundColor: '#4b6cb7',
  },
  homeButton: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#4b6cb7',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#fff',
  },
  homeButtonText: {
    color: '#4b6cb7',
  },
});

export default OrderConfirmationScreen;
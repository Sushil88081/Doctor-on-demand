// import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    Alert,
  } from 'react-native';
  import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
  
  type AddressType = 'home' | 'work' | 'other';
  
  export interface AddressFormData {
    name: string;
    addressLine1: string;
    addressLine2: string;
    city: string;
    state: string;
    pincode: string;
    phone: string;
    type: AddressType;
    landmark: string;
    isDefault: boolean;
  }
  
  const AddressForm = ({ onSubmit }: { onSubmit: (data: AddressFormData) => void }) => {
    const [formData, setFormData] = useState<AddressFormData>({
      name: '',
      addressLine1: '',
      addressLine2: '',
      city: '',
      state: '',
      pincode: '',
      phone: '',
      type: 'home',
      landmark: '',
      isDefault: false,
    });
  
    const handleSubmit = () => {
      // Basic validation
      if (!formData.name || !formData.addressLine1 || !formData.city || 
          !formData.state || !formData.pincode || !formData.phone) {
        alert('Please fill all required fields');
        return;
      }
  
      // if (!/^\d{6}$/.test(formData.pincode)) {
      //   Alert.alert('Error', 'Please enter a valid 6-digit pincode');
      //   return;
      // }
  
      // if (!/^\d{10}$/.test(formData.phone)) {
      //   Alert.alert('Error', 'Please enter a valid 10-digit phone number');
      //   return;
      // }
  
      onSubmit(formData);
      console.log('Form submitted:', formData);
    //   try {
    //     await dispatch(createPrescription(newPrescription)).unwrap();
    //     Alert.alert("Success", "Prescription created successfully!");
    //     setPatientName("");
    //     setDoctorName("");
    //     setSymptoms("");
    //     setDiagnosis("");
    //     setMedicine("");
    //     setNotes("");
    //   } catch (error: any) {
    //     Alert.alert("Error", error.message || "Failed to create prescription");
    //   }
    };
  
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Add Delivery Address</Text>
  
        {/* Address Type Selector */}
        <View style={styles.typeContainer}>
          {(['home', 'work', 'other'] as AddressType[]).map((type) => (
            <TouchableOpacity
              key={type}
              style={[
                styles.typeButton,
                formData.type === type && styles.typeButtonActive,
              ]}
              onPress={() => setFormData({ ...formData, type })}
            >
              <Ionicons
                name={
                  type === 'home' ? 'home' : 
                  type === 'work' ? 'briefcase' : 'location'
                }
                size={20}
                color={formData.type === type ? '#fff' : '#4b6cb7'}
              />
              <Text style={[
                styles.typeText,
                formData.type === type && styles.typeTextActive
              ]}>
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
  
        {/* Name for Address */}
        <Text style={styles.label}>Name for Address*</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g. Home, Work"
          value={formData.name}
          onChangeText={(text) => setFormData({ ...formData, name: text })}
        />
  
        {/* Address Line 1 */}
        <Text style={styles.label}>Complete Address*</Text>
        <TextInput
          style={styles.input}
          placeholder="House No., Building, Street, Area"
          value={formData.addressLine1}
          onChangeText={(text) => setFormData({ ...formData, addressLine1: text })}
        />
  
        {/* Address Line 2 */}
        <Text style={styles.label}>Apartment/Floor (Optional)</Text>
        <TextInput
          style={styles.input}
          placeholder="Apartment, floor, suite etc."
          value={formData.addressLine2}
          onChangeText={(text) => setFormData({ ...formData, addressLine2: text })}
        />
  
        {/* Landmark */}
        <Text style={styles.label}>Landmark (Optional)</Text>
        <TextInput
          style={styles.input}
          placeholder="Nearby famous place"
          value={formData.landmark}
          onChangeText={(text) => setFormData({ ...formData, landmark: text })}
        />
  
        {/* City */}
        <Text style={styles.label}>City*</Text>
        <TextInput
          style={styles.input}
          placeholder="City"
          value={formData.city}
          onChangeText={(text) => setFormData({ ...formData, city: text })}
        />
  
        {/* State */}
        <Text style={styles.label}>State*</Text>
        <TextInput
          style={styles.input}
          placeholder="State"
          value={formData.state}
          onChangeText={(text) => setFormData({ ...formData, state: text })}
        />
  
        {/* Pincode */}
        <Text style={styles.label}>Pincode*</Text>
        <TextInput
          style={styles.input}
          placeholder="6-digit pincode"
          value={formData.pincode}
          onChangeText={(text) => setFormData({ ...formData, pincode: text })}
          keyboardType="number-pad"
          maxLength={6}
        />
  
        {/* Phone Number */}
        <Text style={styles.label}>Phone Number*</Text>
        <TextInput
          style={styles.input}
          placeholder="10-digit mobile number"
          value={formData.phone}
          onChangeText={(text) => setFormData({ ...formData, phone: text })}
          keyboardType="phone-pad"
          maxLength={10}
        />
  
        {/* Default Address Toggle */}
        <TouchableOpacity
          style={styles.defaultContainer}
          onPress={() => setFormData({ ...formData, isDefault: !formData.isDefault })}
        >
          <Ionicons
            name={formData.isDefault ? "checkbox" : "checkbox-outline"}
            size={24}
            color="#4b6cb7"
          />
          <Text style={styles.defaultText}>Set as default address</Text>
        </TouchableOpacity>
  
        {/* Submit Button */}
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitText}>Save Address</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      padding: 16,
      paddingBottom: 32,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 20,
      color: '#333',
      textAlign: 'center',
    },
    typeContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 20,
    },
    typeButton: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 12,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: '#4b6cb7',
      width: '30%',
      justifyContent: 'center',
    },
    typeButtonActive: {
      backgroundColor: '#4b6cb7',
    },
    typeText: {
      marginLeft: 6,
      color: '#4b6cb7',
      fontWeight: '500',
    },
    typeTextActive: {
      color: '#fff',
    },
    label: {
      fontSize: 14,
      color: '#555',
      marginBottom: 8,
      fontWeight: '500',
    },
    input: {
      backgroundColor: '#f5f7fa',
      padding: 14,
      borderRadius: 8,
      marginBottom: 16,
      fontSize: 16,
      borderWidth: 1,
      borderColor: '#e1e5eb',
    },
    defaultContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 10,
      marginBottom: 20,
    },
    defaultText: {
      marginLeft: 10,
      color: '#555',
      fontSize: 14,
    },
    submitButton: {
      backgroundColor: '#4b6cb7',
      padding: 16,
      borderRadius: 8,
      alignItems: 'center',
    },
    submitText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });
  
  export default AddressForm;
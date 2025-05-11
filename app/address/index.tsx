import { View, Text, ScrollView, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import AddressForm from './address'
import { router } from 'expo-router';
import { AddressFormData } from './address'; // Make sure to export this type from your address component

const MedicineOrderAddressScreen = () => {
    const handleAddressSubmit = (addressData: AddressFormData) => {
        console.log('Address submitted:', addressData);
        // Here you would typically:
        // 1. Save the address to your state/API
        // 2. Navigate to payment or order confirmation
        router.push("/order");
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView 
                contentContainerStyle={styles.scrollContainer}
                keyboardShouldPersistTaps="handled"
            >
                <View style={styles.header}>
                    <Text style={styles.headerText}>Delivery Address</Text>
                    <Text style={styles.subHeader}>Where should we deliver your medicines?</Text>
                </View>
                
                <View style={styles.formContainer}>
                    <AddressForm onSubmit={handleAddressSubmit}/>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#f5f7fa'
    },
    scrollContainer: {
        flexGrow: 1,
        paddingBottom: 30
    },
    header: {
        padding: 20,
        paddingBottom: 10,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#e1e5eb'
    },
    headerText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5
    },
    subHeader: {
        fontSize: 14,
        color: '#666'
    },
    formContainer: {
        paddingHorizontal: 15,
        paddingTop: 20
    }
});

export default MedicineOrderAddressScreen
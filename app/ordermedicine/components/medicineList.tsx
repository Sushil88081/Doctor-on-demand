import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

const medicines = [
  { id: "1", name: "Paracetamol", type: "Tablet", price: 25, stock: true },
  { id: "2", name: "Ibuprofen", type: "Tablet", price: 40, stock: true },
  { id: "3", name: "Amoxicillin", type: "Capsule", price: 60, stock: false },
  { id: "4", name: "Cetirizine", type: "Tablet", price: 30, stock: true },
  { id: "5", name: "Azithromycin", type: "Tablet", price: 80, stock: true },
  { id: "6", name: "Pantoprazole", type: "Capsule", price: 50, stock: true },
  { id: "7", name: "Montelukast", type: "Tablet", price: 70, stock: false },
  { id: "8", name: "Diclofenac", type: "Gel", price: 90, stock: true },
  { id: "9", name: "Ranitidine", type: "Tablet", price: 35, stock: true },
  { id: "10", name: "Dextromethorphan", type: "Syrup", price: 55, stock: true },
];

const MedicineList = () => {
  const [cart, setCart] = useState<string[]>([]);

  const handleOrder = (medicine: any) => {
    if (!medicine.stock) {
      Alert.alert(
        "Out of Stock",
        `${medicine.name} is not available right now.`
      );
      return;
    }

    setCart([...cart, medicine.id]);
    Alert.alert(
      "Order Placed",
      `You ordered ${medicine.name} for ₹${medicine.price}`
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Medicine List</Text>
      <FlatList
        data={medicines}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.item}>
              {item.name} ({item.type}) - ₹{item.price}
            </Text>
            <TouchableOpacity
              style={[styles.button, !item.stock && styles.outOfStockButton]}
              onPress={() => handleOrder(item)}
              disabled={!item.stock}
            >
              <Text style={styles.buttonText}>
                {item.stock ? "Order" : "Out of Stock"}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  heading: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  item: { fontSize: 16 },
  button: { backgroundColor: "#28a745", padding: 8, borderRadius: 5 },
  outOfStockButton: { backgroundColor: "#d9534f" },
  buttonText: { color: "#fff", fontSize: 14, fontWeight: "bold" },
});

export default MedicineList;

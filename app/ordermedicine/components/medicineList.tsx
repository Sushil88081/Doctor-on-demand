import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
} from "react-native";

const medicines = [
  {
    id: "1",
    name: "Paracetamol",
    type: "Tablet",
    price: 25,
    stock: true,
    image: "https://via.placeholder.com/100",
    quantity: 10,
  },
  {
    id: "2",
    name: "Ibuprofen",
    type: "Tablet",
    price: 40,
    stock: true,
    image: "https://via.placeholder.com/100",
    quantity: 5,
  },
  {
    id: "3",
    name: "Amoxicillin",
    type: "Capsule",
    price: 60,
    stock: false,
    image: "https://via.placeholder.com/100",
    quantity: 0,
  },
  // ... add similar entries for the rest
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
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.cardContent}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.details}>Type: {item.type}</Text>
              <Text style={styles.details}>Price: ₹{item.price}</Text>
              <Text style={styles.details}>Quantity: {item.quantity}</Text>
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
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f2f2f2",
    width: "100%",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    alignSelf: "center",
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 12,
    marginBottom: 15,
    padding: 12,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 12,
  },
  cardContent: {
    flex: 1,
    justifyContent: "space-between",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  details: {
    fontSize: 14,
    color: "#555",
    marginBottom: 2,
  },
  button: {
    marginTop: 8,
    backgroundColor: "indigo",
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 6,
    alignSelf: "flex-start",
  },
  outOfStockButton: {
    backgroundColor: "#d9534f",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
  },
});

export default MedicineList;

import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  SafeAreaView,
  RefreshControl,
  ScrollView,
} from "react-native";
import { FontAwesome5, MaterialIcons, Feather } from "@expo/vector-icons";

type ReportItem = {
  id: string;
  title: string;
  date: string;
  type: "PDF" | "Image" | "Lab";
  category: string;
  size: string;
  isNew?: boolean;
};

const ReportScreen = () => {
  const [reports, setReports] = useState<ReportItem[]>([
    { 
      id: "1", 
      title: "Complete Blood Count", 
      date: "Today, 10:30 AM", 
      type: "PDF", 
      category: "Hematology",
      size: "2.4 MB",
      isNew: true
    },
    { 
      id: "2", 
      title: "Chest X-Ray Report", 
      date: "Yesterday, 2:15 PM", 
      type: "Image", 
      category: "Radiology",
      size: "4.1 MB"
    },
    { 
      id: "3", 
      title: "MRI Scan Results", 
      date: "March 15, 2024", 
      type: "Lab", 
      category: "Neurology",
      size: "8.7 MB"
    },
    { 
      id: "4", 
      title: "Thyroid Function Test", 
      date: "March 10, 2024", 
      type: "PDF", 
      category: "Endocrinology",
      size: "1.2 MB"
    },
  ]);

  const [refreshing, setRefreshing] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Hematology", "Radiology", "Neurology", "Endocrinology"];

  const onRefresh = () => {
    setRefreshing(true);
    // Simulate data refresh
    setTimeout(() => {
      setRefreshing(false);
    }, 1500);
  };

  const filteredReports = selectedCategory === "All" 
    ? reports 
    : reports.filter(report => report.category === selectedCategory);

  const getIcon = (type: string) => {
    switch(type) {
      case "PDF": return <FontAwesome5 name="file-pdf" size={24} color="#E53935" />;
      case "Image": return <FontAwesome5 name="file-image" size={24} color="#43A047" />;
      case "Lab": return <FontAwesome5 name="flask" size={24} color="#5E35B1" />;
      default: return <FontAwesome5 name="file-medical" size={24} color="#4a90e2" />;
    }
  };

  const renderItem = ({ item }: { item: ReportItem }) => (
    <TouchableOpacity 
      style={[
        styles.card,
        item.isNew && styles.newCard
      ]}
      onPress={() => console.log("Viewing:", item.title)}
    >
      <View style={styles.iconContainer}>
        {getIcon(item.type)}
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{item.title}</Text>
          {item.isNew && (
            <View style={styles.newBadge}>
              <Text style={styles.newBadgeText}>NEW</Text>
            </View>
          )}
        </View>
        <Text style={styles.category}>{item.category}</Text>
        <View style={styles.metaContainer}>
          <Text style={styles.date}>{item.date}</Text>
          <Text style={styles.size}>• {item.size}</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => console.log("Viewing:", item.title)}
      >
        <Feather name="download" size={20} color="#fff" />
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Health Reports</Text>
          <TouchableOpacity style={styles.searchButton}>
            <Feather name="search" size={22} color="#4a90e2" />
          </TouchableOpacity>
        </View>

        {/* Category Filter */}
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={[
            styles.categoryContainer,
            { maxHeight: 50 } // Add this
          ]}
        >
          {categories.map(category => (
            <TouchableOpacity
              key={category}
              style={[
                styles.categoryButton,
                selectedCategory === category && styles.selectedCategoryButton
              ]}
              onPress={() => setSelectedCategory(category)}
            >
              <Text 
                style={[
                  styles.categoryText,
                  selectedCategory === category && styles.selectedCategoryText
                ]}
              >
                {category}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {filteredReports.length > 0 ? (
          <FlatList
            data={filteredReports}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.listContainer}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
                colors={["#4a90e2"]}
              />
            }
          />
        ) : (
          <View style={styles.emptyContainer}>
            <Image
              source={require("../../assets/images/bookmedicine.jpg")}
              style={styles.emptyImage}
              resizeMode="contain"
            />
            <Text style={styles.emptyTitle}>No Reports Found</Text>
            <Text style={styles.emptyText}>
              {selectedCategory === "All" 
                ? "You don't have any medical reports yet." 
                : `No reports in ${selectedCategory} category.`}
            </Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
    backgroundColor: "#f8f9fa",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#2c3e50",
  },
  searchButton: {
    padding: 8,
  },
  categoryContainer: {
    paddingBottom: 10,
    marginBottom: 15,
  },
  categoryButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
    backgroundColor: "#e9ecef",
  },
  selectedCategoryButton: {
    backgroundColor: "#4a90e2",
  },
  categoryText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#495057",
  },
  selectedCategoryText: {
    color: "#fff",
  },
  listContainer: {
    paddingBottom: 20,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  newCard: {
    borderLeftWidth: 4,
    borderLeftColor: "#4a90e2",
  },
  iconContainer: {
    marginRight: 16,
  },
  infoContainer: {
    flex: 1,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#2c3e50",
    marginRight: 8,
  },
  newBadge: {
    backgroundColor: "#e3f2fd",
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  newBadgeText: {
    fontSize: 10,
    fontWeight: "700",
    color: "#4a90e2",
  },
  category: {
    fontSize: 13,
    color: "#6c757d",
    marginBottom: 4,
  },
  metaContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  date: {
    fontSize: 12,
    color: "#adb5bd",
  },
  size: {
    fontSize: 12,
    color: "#adb5bd",
    marginLeft: 8,
  },
  button: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#4a90e2",
    justifyContent: "center",
    alignItems: "center",
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 40,
  },
  emptyImage: {
    width: 200,
    height: 200,
    marginBottom: 24,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#2c3e50",
    marginBottom: 8,
  },
  emptyText: {
    fontSize: 14,
    color: "#6c757d",
    textAlign: "center",
    maxWidth: "80%",
  },
});

export default ReportScreen;
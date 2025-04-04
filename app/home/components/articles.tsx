import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { Feather } from "@expo/vector-icons";

type Article = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  pinned: boolean;
};

const sampleArticles: Article[] = [
  {
    id: "1",
    title: "5 Tips for a Healthy Heart",
    description: "Simple ways to keep your heart in great shape.",
    imageUrl: "https://via.placeholder.com/150",
    pinned: false,
  },
  {
    id: "2",
    title: "Boost Immunity Naturally",
    description: "Discover natural ways to strengthen your immune system.",
    imageUrl: "https://via.placeholder.com/150",
    pinned: true,
  },
  {
    id: "3",
    title: "Daily Yoga Routine",
    description: "Stretch and strengthen with this simple routine.",
    imageUrl: "https://via.placeholder.com/150",
    pinned: false,
  },
  {
    id: "4",
    title: "Hydration Matters",
    description: "Why drinking water is more important than you think.",
    imageUrl: "https://via.placeholder.com/150",
    pinned: false,
  },
  {
    id: "5",
    title: "Mindful Eating",
    description: "Improve digestion with mindfulness techniques.",
    imageUrl: "https://via.placeholder.com/150",
    pinned: false,
  },
];

const HealthArticles: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>(sampleArticles);

  const togglePin = (id: string) => {
    const updated = articles.map((article) =>
      article.id === id ? { ...article, pinned: !article.pinned } : article
    );
    setArticles(updated);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Latest Articles</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See All</Text>
        </TouchableOpacity>
      </View>

      {/* Articles List */}
      <FlatList
        data={articles}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.imageUrl }} style={styles.image} />
            <View style={styles.content}>
              <Text style={styles.articleTitle}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
            <TouchableOpacity onPress={() => togglePin(item.id)}>
              <Feather
                name={item.pinned ? "bookmark" : "bookmark"}
                size={22}
                color={item.pinned ? "#4a90e2" : "#ccc"}
              />
            </TouchableOpacity>
          </View>
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
};

export default HealthArticles;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
  },
  header: {
    marginTop: 20,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#333",
  },
  seeAll: {
    fontSize: 14,
    color: "#4a90e2",
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    padding: 10,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 10,
  },
  content: {
    flex: 1,
  },
  articleTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  description: {
    fontSize: 13,
    color: "#666",
    marginTop: 2,
  },
});

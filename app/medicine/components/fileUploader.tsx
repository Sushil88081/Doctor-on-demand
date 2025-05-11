import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet, ActivityIndicator } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { MaterialIcons } from "@expo/vector-icons";

const FileUploader = ({
  onFileSelected,
}: {
  onFileSelected: (uri: string) => void;
}) => {
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const pickDocument = async () => {
    setIsLoading(true);
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 0.8,
      });

      if (!result.canceled) {
        setSelectedFile(result.assets[0].uri);
        onFileSelected(result.assets[0].uri);
      }
    } catch (error) {
      console.error("Error picking image:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const removeFile = () => {
    setSelectedFile(null);
    onFileSelected("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.uploadArea}>
        {selectedFile ? (
          <View style={styles.imageContainer}>
            <Image source={{ uri: selectedFile }} style={styles.imagePreview} />
            <TouchableOpacity style={styles.removeButton} onPress={removeFile}>
              <MaterialIcons name="delete" size={24} color="white" />
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.placeholderContainer}>
            <MaterialIcons name="cloud-upload" size={48} color="#6b46c1" />
            <Text style={styles.placeholderText}>Upload Prescription</Text>
            <Text style={styles.helperText}>JPG, PNG (Max 5MB)</Text>
          </View>
        )}
      </View>

      <TouchableOpacity 
        style={[
          styles.uploadButton, 
          selectedFile && styles.changeButton
        ]} 
        onPress={pickDocument}
        disabled={isLoading}
      >
        {isLoading ? (
          <ActivityIndicator color="white" />
        ) : (
          <Text style={styles.uploadText}>
            {selectedFile ? "Change Prescription" : "Select Prescription"}
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 20,
    width: "100%",
  },
  uploadArea: {
    width: "100%",
    height: 250,
    borderWidth: 2,
    borderColor: "#e2e8f0",
    borderStyle: "dashed",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8fafc",
    marginBottom: 16,
    overflow: "hidden",
  },
  imageContainer: {
    position: "relative",
    width: "100%",
    height: "100%",
  },
  imagePreview: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    backgroundColor: "#f1f5f9",
  },
  removeButton: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: 20,
    padding: 6,
  },
  placeholderContainer: {
    alignItems: "center",
    padding: 20,
  },
  placeholderText: {
    fontSize: 16,
    color: "#334155",
    marginTop: 8,
    fontWeight: "500",
  },
  helperText: {
    fontSize: 12,
    color: "#64748b",
    marginTop: 4,
  },
  uploadButton: {
    backgroundColor: "#6b46c1",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
    elevation: 2,
  },
  changeButton: {
    backgroundColor: "#7c3aed",
  },
  uploadText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default FileUploader;
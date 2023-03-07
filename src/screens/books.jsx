import React from "react";

import { View, TouchableOpacity, Text, FlatList } from "react-native";

const BooksData = [
  { title: "My Book 1", subtitle: "Subtitle 1" },
  { title: "My Book 2", subtitle: "Subtitle 2" },
  { title: "My Book 3", subtitle: "Subtitle 3" },
  { title: "My Book 4", subtitle: "Subtitle 4" },
  { title: "My Book 5", subtitle: "Subtitle 5" },
  { title: "My Book 6", subtitle: "Subtitle 6" },
  { title: "My Book 7", subtitle: "Subtitle 7" },
  { title: "My Book 8", subtitle: "Subtitle 8" },
];

function Books({ navigation }) {
  const __renderItem = ({ item }) => (
    <TouchableOpacity
      style={{
        margin: 10,
        padding: 10,
        backgroundColor: "rgba(212, 22, 240, 0.5)",
        borderRadius: 10,
      }}
      onPress={() => alert(item.title)}
    >
      <Text style={{ fontSize: 24, fontWeight: "bold", color: "white" }}>
        {item.title}
      </Text>
      <Text style={{ fontSize: 22, fontWeight: "medium", color: "white" }}>
        {item.subtitle}
      </Text>
    </TouchableOpacity>
  );
  return <FlatList data={BooksData} renderItem={__renderItem}></FlatList>;
}

export { Books };

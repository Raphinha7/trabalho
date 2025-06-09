import React from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import useCustomFetch from '../hooks/useCustomFetch';

export default function DashboardScreen({ navigation }) {
  const { data, loading } = useCustomFetch('https://jsonplaceholder.typicode.com/posts');

  if (loading) return <ActivityIndicator size="large" color="#0000ff" />;

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item }) => (
        <Text onPress={() => navigation.navigate('Details', { post: item })}>
          {item.title}
        </Text>
      )}
    />
  );
}

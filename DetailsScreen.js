import React from 'react';
import { View, Text } from 'react-native';

export default function DetailsScreen({ route }) {
  const { post } = route.params;

  return (
    <View>
      <Text>Título: {post.title}</Text>
      <Text>Corpo: {post.body}</Text>
    </View>
  );
}

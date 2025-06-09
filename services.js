import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { auth, db } from '../services/firebaseConfig';

export default function ProfileScreen() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const uid = auth.currentUser?.uid;
    db.collection('users').doc(uid).get()
      .then(doc => setProfile(doc.data()))
      .catch(err => console.error(err));
  }, []);

  if (!profile) return <Text>Carregando...</Text>;

  return (
    <View>
      <Text>Nome: {profile.name}</Text>
      <Text>Email: {auth.currentUser?.email}</Text>
    </View>
  );
}

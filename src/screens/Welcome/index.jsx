import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useAuth } from '../../contexts';
// import { Container } from './styles';

const Welcome = () => {
  const { signIn } = useAuth();
  return (
    <View>
      <Text>Welcome</Text>
      <TouchableOpacity
        onPress={() => signIn('test@gmail.com', '123456')}
        style={{
          backgroundColor: "#000",
          padding: 10,
          borderRadius: 5,
          marginTop: 10,
        }}
      >
        <Text style={{fontWeight: 'bold', color:'#fff'}}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Welcome;
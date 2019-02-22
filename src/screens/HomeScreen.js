import React from 'react'
import { Button, View, Text } from 'react-native'

export default function HomeScreen({ navigation }) {
  const navigateToSRP = () => {
    navigation.navigate('SRP')
  }

  return (
    <View>
      <Text>Home</Text>
      <Button title="Navigate to SRP" onPress={navigateToSRP} />
    </View>
  )
}

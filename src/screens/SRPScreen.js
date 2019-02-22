import React from 'react'
import { Button, View, Text } from 'react-native'

export default function SRPScreen({ navigation }) {
  const navigateToMakesFilter = () => {
    navigation.navigate('MakesFilter')
  }

  return (
    <View>
      <Text>
        TODO: Simulate making a network car to retrieve list of vehicles, stash
        in store
      </Text>
      <Button title="Filter by Makes" onPress={navigateToMakesFilter} />
    </View>
  )
}

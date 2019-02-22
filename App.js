import React, { useEffect } from 'react'
import { ActivityIndicator, AsyncStorage, StatusBar, View } from 'react-native'
import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer
} from 'react-navigation'
import HomeScreen from './src/screens/HomeScreen'
import MakesFilterScreen from './src/screens/MakesFilterScreen'
import SRPScreen from './src/screens/SRPScreen'
import VDPScreen from './src/screens/VDPScreen'

function DashboardLoadingScreen({ navigation }) {
  useEffect(() => {
    navigation.navigate('Home')
  }, [])

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ActivityIndicator />
      <StatusBar barStyle="default" />
    </View>
  )
}

const AppStack = createStackNavigator({
  Home: HomeScreen,
  SRP: SRPScreen,
  MakesFilter: MakesFilterScreen,
  VDP: VDPScreen
})

const AppNavigator = createSwitchNavigator(
  {
    DashboardLoading: DashboardLoadingScreen,
    App: AppStack
  },
  {
    initialRouteName: 'DashboardLoading'
  }
)

export default createAppContainer(AppNavigator)

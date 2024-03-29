// import { Provider } from 'app/provider'
// import { Stack } from 'expo-router'
//
// export default function Root() {
//   return (
//     <Provider>
//       <Stack />
//     </Provider>
//   )
// }

// ---- new 
import { Provider } from 'app/provider'
import { StatusBar } from 'expo-status-bar'
import { Tabs } from 'expo-router'
import { useDripsyTheme } from 'dripsy'
import { Ionicons } from '@expo/vector-icons'
import { useAuth } from 'app/features/auth/context'

function MyTabs() {
  const { colors } = useDripsyTheme().theme
  const auth = useAuth()

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.$background2,
          borderTopWidth: 0,
        },
        tabBarActiveTintColor: '#F65CB6',
      }}
    >
      <Tabs.Screen
        name="(home)/index"
        options={{
          title: 'Home',
          tabBarIcon({ color, size, focused }) {
            return (
              <Ionicons
                name={focused ? 'home' : 'home-outline'}
                size={size}
                color={color}
              />
            )
          },
        }}
      />
      <Tabs.Screen
        name="goals"
        options={{
          title: 'Goals',
          tabBarIcon({ color, size, focused }) {
            return (
              <Ionicons
                name={focused ? 'list' : 'list-outline'}
                size={size}
                color={color}
              />
            )
          },
          tabBarButton: auth ? undefined : () => null,
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: 'My Account',
          tabBarIcon({ color, size, focused }) {
            return (
              <Ionicons
                name={focused ? 'person' : 'person-outline'}
                size={size}
                color={color}
              />
            )
          },
        }}
      />
    </Tabs>
  )
}

export default function Root() {
  return (
    <Provider>
      <MyTabs />
      <StatusBar style="light" />
    </Provider>
  )
}


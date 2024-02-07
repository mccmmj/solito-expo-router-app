// import { useDripsyTheme } from 'dripsy'
// import { Stack } from '../../src/stack'
//
// export default function HomeTab({ children }) {
//   return (
//     <Stack>
//       <Stack.Screen
//         name="index"
//         options={{
//           title: 'Home',
//         }}
//       />
//     </Stack>
//   )
// }

import { useDripsyTheme } from 'dripsy'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../(home)';

const Stack = createNativeStackNavigator();

export default function HomeTab() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="index"
        options={{
          title: 'Home'
        }}
        component={Home} />
    </Stack.Navigator>
  );
}

import { Text, View } from 'dripsy';
import { Button } from 'react-native';
import { useAuth } from '../context';
import { signInAnonymously } from '../firebase';

export function AuthGate({
  children,
}: {
  children: React.ReactNode | ((user: { uid: string }) => React.ReactNode)
}) {
  console.log("In AuthGate");
  const auth = useAuth();

  if (!auth) {
    console.log("AUTH IS UNDEFINED");

    return (
      <>
        <View
          sx={{
            bg: '$background',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text onPress={signInAnonymously}>Sign In</Text>

        </View>
      </>
    )
  }

  console.log("HAVE AUTH: ", auth);
  return <>{typeof children == 'function' ? children(auth) : children}</>
}

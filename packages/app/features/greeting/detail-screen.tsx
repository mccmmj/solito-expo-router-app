import { View, Text } from 'dripsy'
import { createParam } from 'solito'
import { TextLink } from 'solito/link'

const { useParam } = createParam<{ id: string }>()

export function GreetingDetailScreen() {
  const [id] = useParam('id')

  return (
    <View sx={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text
        sx={{ textAlign: 'center', mb: 16, fontWeight: 'bold' }}
      >{`Hello ${id}`}</Text>

      <TextLink href="/">👈 Go Home</TextLink>
    </View>
  )
}

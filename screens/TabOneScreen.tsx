import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import tailwind from 'tailwind-rn'
import {TextInput,Button} from "react-native-paper"
export default function TabOneScreen() {
  const [text, setText] = React.useState('');

  return (
    <View style={tailwind('flex-1 items-center justify-center')}>
          <TextInput
      label="Email"
      value={text}
      onChangeText={text => setText(text)}
    />
      <TextInput
      style={tailwind('mt-5')}
      label="password"
      value={text}
      onChangeText={text => setText(text)}
    />
      <Button icon="lock" mode="contained" style={tailwind('mt-5 p-8 bg-green-400 py-2')} onPress={() => console.log('Pressed')}>
    Press me
  </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

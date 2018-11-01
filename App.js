import React, {Component} from 'react';
import {Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import ImagePicker from 'react-native-image-picker';

type Props = {};
export default class App extends Component<Props> {
  openPicker = () => {
    ImagePicker.showImagePicker({}, res => console.log(res));
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.openPicker}>
          <Text>Open</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

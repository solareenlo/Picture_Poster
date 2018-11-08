import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image
} from 'react-native';
import Firebase from 'react-native-firebase';

class Home extends React.Component {
  state = {
    data: [],
  }

  componentDidMount() {
    Firebase.database()
      .ref("images")
      .on("value", d => {
      console.log(Object.values(d.toJSON()));
      });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('NewPost')}
          style={{
            position: 'absolute',
            bottom: 20,
            right: 20,
            height: 80,
            width: 80,
            borderRadius: 40,
            backgroundColor: '#333',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Text style={{ color: '#FFF' }}>New</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Home;

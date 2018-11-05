import React, {Component} from 'react';
import { 
  AppRegistry, 
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import { increment, decrement, zero}  from './src/actions';
import store from './src/store';


export default class App extends Component {

  constructor(props) {
    super(props);
    this.updateState = this.updateState.bind(this);
    this.state = {
      tally: store.getState(),
      unsubscribe: store.subscribe(this.updateState)
    };
  }

  componentWillUnmount() {
    this.state.unsubscribe();
  }

  updateState() {
    this.setState({
      tally: store.getState()
    });
  }



  render() {
    return (
      <View style={styles.container}>
        <Text Style={styles.appName}>
          Countly
        </Text>
        <Text Style={styles.tally}>
          Tally: {this.state.tally.count}
          </Text>
        <TouchableOpacity onPress={() => store.dispatch(increment())} style={styles.button}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => store.dispatch(decrement())} style={styles.button}>
          <Text style={styles.buttonText}>
            -
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => store.dispatch(zero())} style={styles.button}>
          <Text style={styles.buttonText}>
            0
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  appName: {
    fontSize:20,
    alignItems: 'center',
    margin: 10
  },
  tally: {
    textAlign: 'center',
    color: '#333',
    marginBottom: 20,
    fontSize: 25
  },
  button: {    
    backgroundColor: 'skyblue',    
    width: 100,
    marginBottom: 20,
    padding: 20
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20
  },
});

 AppRegistry.registerComponent('Countly', () => Countly);
 
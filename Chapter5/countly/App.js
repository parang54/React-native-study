import React, {Component} from 'react';
import { 
  AppRegistry, 
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import { increment, decrement, zero}  from './src/actions';
import TallyStore from './src/TallyStore';


export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tally: TallyStore.getTally()
    };
    this.updateState = this.updateState.bind(this);
  }
  
  //TallyStore의 변경 사항 구독 취소
  componentWillUnmount() {
    TallyStore.removeChangeListener(this.updateState);
  }
  //TallyStore의 변경 사항 구독 시작
  componentDidMount() {
    TallyStore.addChangeListener(this.updateState);
  }



  updateState() {
    this.setState({
      tally: TallyStore.getTally()
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
        <TouchableOpacity onPress={increment} style={styles.button}>
          <Text Style={styles.buttonText}>
           +
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={decrement} style={styles.button}>
          <Text Style={styles.buttonText}>
           -
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={zero} style={styles.button}>
          <Text Style={styles.buttonText}>
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
 
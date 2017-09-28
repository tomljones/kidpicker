import React from 'react';
import { Alert, AppRegistry, FlatList, Text, StyleSheet, View } from 'react-native';
import Button from 'apsl-react-native-button';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      assignments: new Array(),
    };
    // this.assignJobs=this.assignJobs.bind(this);
  }

  assignJobs =() => {
    var assignments = [];
    var allKids = ['', 'Ana Elise', 'Tommy', 'Elizabeth'];

    // Generate a random number between 1 and 3
    var randomSelection = numberPicker(3);

    assignments.push({key:1,job:'Clear the table',kid:allKids[randomSelection]});

    // Get a new list of the kids who have not been selected
    var remainingKids = allKids.filter(function(i){
        return i != allKids[randomSelection];
    })

    // Select a random kid to wipe the table
    randomSelection = numberPicker(2);
    assignments.push({key:2,job:'Sink',kid:remainingKids[randomSelection]});

    // Get a new list of the last kid who has not been chosen for anything yet
    var lastKids = remainingKids.filter(function(i){
        return i != remainingKids[randomSelection];
    })

    assignments.push({key:3,job:'Dishwasher',kid:lastKids[1]});

    // Generate a random number between 1 and 3 for wash the first pot
    var randomSelection = numberPicker(3);
    assignments.push({key:4,job:'Wash the pot (1)',kid:allKids[randomSelection]});

    // Generate a random number between 1 and 3 for wash the second pot
    var randomSelection = numberPicker(3);
    assignments.push({key:5,job:'Wash the pot (2)',kid:allKids[randomSelection]});

    this.setState({
      assignments: assignments
    });

  }

  clear =() => {
    this.setState({
      assignments: ''
    });
  }

  render() {
    const assignments = this.state.assignments;
    return (
      <View style={styles.container}>
        <Button
          style={styles.buttonContainer}
          textStyle={styles.textStyle}
          onPress={this.assignJobs}
          title="Assign Jobs"
        >
        Assign Jobs
        </Button>
        <Button
          style={styles.buttonContainer2}
          textStyle={styles.textStyle2}
          onPress={this.clear}
        >
        Clear
        </Button>
        <View style={styles.container}>
          <FlatList
            data={assignments}
            renderItem={({item}) => <Text style={styles.item}>{item.job}: {item.kid}</Text>}
          />
        </View>

      </View>
    );
  }
}

function numberPicker(maxNumber){
  return Math.floor((Math.random() *maxNumber) + 1)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    marginLeft: 20,
    marginRight: 20,
  },
  textStyle: {
    color: 'white'
  },
  textStyle2: {
    color: 'black'
  },
  buttonContainer: {
    borderColor: '#3498db',
    backgroundColor: '#3498db',
    borderWidth: 2,
    borderRadius: 22,
  },
  buttonContainer2: {
    backgroundColor: 'white',
    borderColor: '#333',
    borderWidth: 2,
    borderRadius: 22,
  },
  textStyle8: {
    width: 200,
    fontFamily: 'Avenir Next',
    fontWeight: '500',
    color: '#FFFFFF',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    borderWidth:1,
  }
});

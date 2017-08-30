import React from 'react';
import { Alert, AppRegistry, FlatList, Text, Button, StyleSheet, View } from 'react-native';

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

    // Generate a random number between 1 and 3 for the final chore
    var randomSelection = numberPicker(3);
    assignments.push({key:4,job:'Wash the pot',kid:allKids[randomSelection]});

    this.setState({
      assignments: assignments
    });

  }

  render() {
    const assignments = this.state.assignments;
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this.assignJobs}
            title="Assign Jobs"
          />
        </View>
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
    marginTop: 25,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  buttonContainer: {
    margin: 20,
    width: 200,
    height: 50,
    color: 'white',
    backgroundColor: 'steelblue'
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    borderWidth:1,
  }
});

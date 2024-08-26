import { Button, StyleSheet, View, FlatList } from 'react-native';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  function addGoal(goalName) {
    console.log(goalName);
    setCourseGoals(currentCourseGoals => [...currentCourseGoals, { text: goalName, id: Math.random().toString() }]);
    endAddGoalHandler();
  }

  function deleteGoalHandler(id) {
    console.log('DELETE');
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <>
    <StatusBar style='light' />
      <View style={styles.appContainer}>
        <Button title='Add new Goal' color='#5e0acc' onPress={startAddGoalHandler} />
        <GoalInput onButtonPress={addGoal} visible={modalIsVisible} closeModal={endAddGoalHandler} />
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            alwaysBounceVertical={false}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  onDeleteItem={deleteGoalHandler}
                  text={itemData.item.text}
                  id={itemData.item.id}
                />);
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5
  }
});

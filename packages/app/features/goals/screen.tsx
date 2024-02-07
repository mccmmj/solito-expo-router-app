import { useState } from 'react';
import { View, FlatList } from 'dripsy';
import { StyleSheet, Button } from 'react-native';
import { TextLink } from 'solito/link'
import { AuthGate } from '../auth/gate';


import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

interface TextItem {
  id: string,
  text: string
}

export function GoalsScreen() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState<TextItem[]>([]);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText: string) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() }
    ]);
    setModalIsVisible(false);
  }

  function deleteGoalHandler(id: string) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id != id);
    });
  }

  return (
    <AuthGate>
      <View sx={styles.appContainer}>
        <Button
          title='Add New Goal'
          color="#5e0acc"
          onPress={startAddGoalHandler}
        />
        <GoalInput
          onAddGoal={addGoalHandler}
          onCancel={endAddGoalHandler}
          visible={modalIsVisible} />
        <View sx={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData: any) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteItem={deleteGoalHandler}
                />
              )
            }}
            keyExtractor={(item: TextItem, _ndx: any) => { return item.id }}
            alwaysBounceVertical={false}
          />
        </View>
        <View sx={styles.extLinkContainer}>
          <TextLink href="/webview">👈 Webview</TextLink>
        </View>
        <View sx={styles.homeLinkContainer}>
          <TextLink href="/">👈 Go Home</TextLink>
        </View>
      </View>
    </AuthGate>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingtop: 50,
    paddingHorizontal: 16
  },
  goalsContainer: {
    flex: 8
  },
  homeLinkContainer: {
    flex: 1,
    margin: 8,
    alignItems: 'center'
  },
  extLinkContainer: {
    flex: 1,
    margin: 8,
    alignItems: 'center'
  },
})

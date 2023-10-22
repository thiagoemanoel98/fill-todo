import { Task } from '@models';
import { useNavigation } from '@react-navigation/native';
import { AppStackNavigatorRoutesProps } from '@routes';
import { useTaskStore } from '@store';
import { Alert } from 'react-native';
import { useToast } from 'react-native-toast-notifications';

export const useShowTaskData = () => {
  const toast = useToast();
  const { goBack } = useNavigation<AppStackNavigatorRoutesProps>();

  const [updateTask, removeTask] = useTaskStore((state) => [
    state.updateTask,
    state.removeTask
  ]);

  function handleMarkDone(task: Task) {
    task.done = true;
    updateTask(task);
  }

  function handleUnmarkDone(task: Task) {
    task.done = false;
    updateTask(task);
  }

  function handleRemoveTask(task: Task) {
    Alert.alert('Warning', 'Are you sure you want to remove this task?', [
      {
        text: 'Cancel',
        onPress: () => {},
        style: 'cancel'
      },
      {
        text: 'OK',
        onPress: () => {
          removeTask(task);
          toast.show('Task removed successfully!', {
            type: 'success'
          });
          goBack();
        }
      }
    ]);
  }

  return {
    handleMarkDone,
    handleUnmarkDone,
    handleRemoveTask
  };
};

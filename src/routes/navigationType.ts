import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AppRoutesList } from './app.routes';

export type AppScreenProps<RouteName extends keyof AppRoutesList> =
  NativeStackScreenProps<AppRoutesList, RouteName>;

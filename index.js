/**
 * @format
 */

import {AppRegistry} from 'react-native';
import { Provider } from 'react-redux';
import { Provider as PaperProvider} from 'react-native-paper';
import App from './App';
import {name as appName} from './app.json';
import {store} from './src/app/store';

const AppRedux = () => {
   return (
      <Provider store={store}>
         <PaperProvider>
            <App />
         </PaperProvider>
      </Provider>
   );
};

AppRegistry.registerComponent(appName, () => AppRedux);

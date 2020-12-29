import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings188729Navigator from '../features/Settings188729/navigator';
import UserProfile188722Navigator from '../features/UserProfile188722/navigator';
import Settings188721Navigator from '../features/Settings188721/navigator';
import Settings188719Navigator from '../features/Settings188719/navigator';
import SignIn2188717Navigator from '../features/SignIn2188717/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings188729: { screen: Settings188729Navigator },
UserProfile188722: { screen: UserProfile188722Navigator },
Settings188721: { screen: Settings188721Navigator },
Settings188719: { screen: Settings188719Navigator },
SignIn2188717: { screen: SignIn2188717Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;

import React from 'react';

export const PreferencesContext = React.createContext({
    toggleTheme: () => {},
    isThemeDark: false
})

// import React, {useState, useCallback, useMemo} from 'react';
// import { Text, View, } from 'react-native';
// import { NavigationContainer, DefaultTheme as NavigationDefaultTheme, DarkTheme as NavigationDarkTheme} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack'
// import {createDrawerNavigator} from '@react-navigation/drawer'
// import {
//   DarkTheme as PaperDarkTheme,
//   DefaultTheme as PaperDefaultTheme,
//   Provider as PaperProvider,
// } from 'react-native-paper';
// import merge from 'deepmerge';
// import {PreferencesContext} from './perfrencesContext';
// import BottomNavigationBar from './BottomNavigationBar';

// const CombinedDefaultTheme = merge(PaperDefaultTheme, NavigationDefaultTheme);
// const CombinedDarkTheme = merge(PaperDarkTheme, NavigationDarkTheme);

// function App() {

//   const [isThemeDark, setIsThemeDark] = useState(false);

//   let theme = isThemeDark ? CombinedDarkTheme : CombinedDefaultTheme

//   const toggleTheme = useCallback(() => {
//     return setIsThemeDark(!isThemeDark);
//   }, [isThemeDark])

//   const prefrences = useMemo(() => ({
//     toggleTheme,
//     isThemeDark
//   })[toggleTheme,isThemeDark])

//   return (
//     <PreferencesContext.Provider value={prefrences}>
//       <PaperProvider theme={theme}>
//         <NavigationContainer theme={theme}>
//         </NavigationContainer>
//       </PaperProvider>
//     </PreferencesContext.Provider>
//   );
// }
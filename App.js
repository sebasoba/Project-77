function App() {
    return (
        <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" component={HomeScreen} />
        <Stack.Navigator initialRouteName="SpaceCrafts" component={SpaceCraft} />
        <Stack.Navigator initialRouteName="DailyPic" component={DailyPicScreen} />
        <Stack.Navigator initialRouteName="StarMap" component={StarMapScreen} />
        </NavigationContainer>
    )
}
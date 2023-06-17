To create a bottom navigation with Jetpack Compose, follow these steps:





1.Add Dependecies
Add the required dependencies in your app level build.gradle file:

        implementation "androidx.navigation:navigation-compose:2.4.0-beta02"
        implementation "androidx.compose.ui:ui:1.0.5"
        implementation "androidx.compose.material:material:1.0.5"
        implementation "androidx.compose.ui:ui-tooling:1.0.5"
        implementation "androidx.compose.runtime:runtime-livedata:1.0.5"
        implementation "androidx.navigation:navigation-compose:2.4.0-beta02"





2.Add Seald class
  Create a sealed class that represents your bottom navigation items. 
  This class should include the title, icon, and route for each item:

sealed class BottomBarScreen(
    val route: String,
    val title: String,
    val icon: ImageVector
) {
    object Home : BottomBarScreen(
        route = "home",
        title = "Home",
        icon = Icons.Default.Home
    )

    object Profile : BottomBarScreen(
        route = "profile",
        title = "Profile",
        icon = Icons.Default.Person
    )

    object Settings : BottomBarScreen(
        route = "settings",
        title = "Settings",
        icon = Icons.Default.Settings
    )
}





3.Create Mainscreen Composable
Create a MainScreenView composable function that uses Scaffold to define the bottom navigation bar location. 
The NavigationGraph function will handle the navigation graph, and the BottomNavigation function will define the bottom navigation items:


@Composable
fun MainScreen() {
    val navController = rememberNavController()
    Scaffold(
        bottomBar = { BottomBar(navController = navController) }
    ) {
        BottomNavGraph(navController = navController)
    }
}



4.Create BottomBar function
Inside the BottomNavigation function, loop through the bottom navigation items and 
create a BottomNavigationItem for each item:

@Composable
fun BottomBar(navController: NavHostController) {
    val screens = listOf(
        BottomBarScreen.Home,
        BottomBarScreen.Profile,
        BottomBarScreen.Settings,
    )
    val navBackStackEntry by navController.currentBackStackEntryAsState()
    val currentDestination = navBackStackEntry?.destination

    BottomNavigation {
        screens.forEach { screen ->
            AddItem(
                screen = screen,
                currentDestination = currentDestination,
                navController = navController
            )
        }
    }
}

@Composable
fun RowScope.AddItem(
    screen: BottomBarScreen,
    currentDestination: NavDestination?,
    navController: NavHostController
) {
    BottomNavigationItem(
        label = {
            Text(text = screen.title)
        },
        icon = {
            Icon(
                imageVector = screen.icon,
                contentDescription = "Navigation Icon"
            )
        },
        selected = currentDestination?.hierarchy?.any {
            it.route == screen.route
        } == true,
        unselectedContentColor = LocalContentColor.current.copy(alpha = ContentAlpha.disabled),
        onClick = {
            navController.navigate(screen.route) {
                popUpTo(navController.graph.findStartDestination().id)
                launchSingleTop = true
            }
        }
    )
}







5.Create The screens

@Composable
fun HomeScreen() {
    Box(
        modifier = Modifier
            .fillMaxSize()
            .background(Color.Magenta),
        contentAlignment = Alignment.Center
    ) {
        Text(
            text = "HOME",
            fontSize = MaterialTheme.typography.h3.fontSize,
            fontWeight = FontWeight.Bold,
            color = Color.White
        )
    }
}


@Composable
fun ProfileScreen() {
    Box(
        modifier = Modifier
            .fillMaxSize()
            .background(Color.Blue),
        contentAlignment = Alignment.Center
    ) {
        Text(
            text = "PROFILE",
            fontSize = MaterialTheme.typography.h3.fontSize,
            fontWeight = FontWeight.Bold,
            color = Color.White
        )
    }
}


@Composable
fun SettingsScreen() {
    Box(
        modifier = Modifier
            .fillMaxSize()
            .background(Color.Red),
        contentAlignment = Alignment.Center
    ) {
        Text(
            text = "SETTINGS",
            fontSize = MaterialTheme.typography.h3.fontSize,
            fontWeight = FontWeight.Bold,
            color = Color.White
        )
    }
}


6.Implement the  BottomNavGraph function
Implement the NavigationGraph function to handle the navigation between composables:

@Composable
fun BottomNavGraph(navController: NavHostController) {
    NavHost(
        navController = navController,
        startDestination = BottomBarScreen.Home.route
    ) {
        composable(route = BottomBarScreen.Home.route) {
            HomeScreen()
        }
        composable(route = BottomBarScreen.Profile.route) {
            ProfileScreen()
        }
        composable(route = BottomBarScreen.Settings.route) {
            SettingsScreen()
        }
    }
}




7.Finally, call the MainScreen() function from the onCreate method of your activity:

override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)
    setContent {
        MainScreen()
    }
}


Now you have a bottom navigation bar implemented with Jetpack Compose. 
You can modify the HomeScreen, MusicScreen, MoviesScreen, BooksScreen, and ProfileScreen composables to display the content for each screen.



































































































.....

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


        sealed class BottomNavItem(val title: String, val icon: ImageVector, val route: String) {
            object Home : BottomNavItem("Home", Icons.Default.Home, "home")
            object Music : BottomNavItem("Music", Icons.Default.Edit, "music")
            object Movies : BottomNavItem("Movies", Icons.Default.PlayArrow, "movies")
            object Books : BottomNavItem("Books", Icons.Default.Info, "books")
            object Profile : BottomNavItem("Profile", Icons.Default.Person, "profile")
        }






3.Create Mainscreen Composable
Create a MainScreenView composable function that uses Scaffold to define the bottom navigation bar location. 
The NavigationGraph function will handle the navigation graph, and the BottomNavigation function will define the bottom navigation items:


@SuppressLint("UnusedMaterial3ScaffoldPaddingParameter")
@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun MainScreenView() {
    val navController = rememberNavController()
    Scaffold(bottomBar = { BottomNavigation(navController = navController) }) {
        NavigationGraph(navController = navController)
    }
}



4.Create Bottomavigation function
Inside the BottomNavigation function, loop through the bottom navigation items and 
create a BottomNavigationItem for each item:




@Composable
fun BottomNavigation(navController: NavController) {
    val items = listOf(
        BottomNavItem.Home,
        BottomNavItem.Music,
        BottomNavItem.Movies,
        BottomNavItem.Books,
        BottomNavItem.Profile,
    )

    androidx.compose.material.BottomNavigation {
        
        
        val navBackStackEntry by navController.currentBackStackEntryAsState()
        val currentRoute = navBackStackEntry?.destination?.route



        items.forEach { item ->
            BottomNavigationItem(
                icon = { Icon(imageVector = item.icon, contentDescription = item.title) },
                label = { Text(text = item.title) },
                selected = currentRoute == item.route,
                onClick = {
                    navController.navigate(item.route) {
                        popUpTo(navController.graph.startDestinationId)
                        launchSingleTop = true
                    }
                }
            )
        }
    }
}



5.Create The screens


@Composable
fun HomeScreen(navController:NavHostController){
    Box(
        modifier = Modifier.fillMaxSize(),
        contentAlignment = Alignment.Center

    ){

        Text(modifier = Modifier.clickable {
     navController.navigate(route =Screens.Details.passId() ){
         popUpTo(Screens.Home.route){
             inclusive = true
         }
     }
        },
            text = "Home Screen",
            color = MaterialTheme.colorScheme.secondary
            , fontSize = 44.sp

        )

    }
}

@Composable
fun MusicScreen(navController:NavHostController){
    Box(
        modifier = Modifier.fillMaxSize().background(Color.Magenta),
        contentAlignment = Alignment.Center

    ){

        Text(modifier = Modifier.clickable {
            navController.navigate(route =Screens.Details.passId() ){
                popUpTo(Screens.Home.route){
                    inclusive = true
                }
            }
        },
            text = "Music Screen",
            color = MaterialTheme.colorScheme.secondary
            , fontSize = 44.sp

        )

    }
}


@Composable
fun MoviesScreen(navController:NavHostController){
    Box(
        modifier = Modifier.fillMaxSize().background(Color.Cyan),
        contentAlignment = Alignment.Center

    ){

        Text(modifier = Modifier.clickable {
            navController.navigate(route =Screens.Details.passId() ){
                popUpTo(Screens.Home.route){
                    inclusive = true
                }
            }
        },
            text = "Movies Screen",
            color = MaterialTheme.colorScheme.secondary
            , fontSize = 44.sp

        )

    }
}


@Composable
fun BooksScreen(navController:NavHostController){
    Box(
        modifier = Modifier.fillMaxSize().background(Color.Yellow),
        contentAlignment = Alignment.Center

    ){

        Text(modifier = Modifier.clickable {
            navController.navigate(route =Screens.Details.passId() ){
                popUpTo(Screens.Home.route){
                    inclusive = true
                }
            }
        },
            text = "Books Screen",
            color = MaterialTheme.colorScheme.secondary
            , fontSize = 44.sp

        )

    }
}

@Composable
fun ProfileScreen(navController: NavHostController){
    Box(
        modifier = Modifier.fillMaxSize().background(Color.Green),
        contentAlignment = Alignment.Center

    ){

        Text(modifier = Modifier.clickable {
            navController.popBackStack()
        },
            text = "Profile Screen",
            color = MaterialTheme.colorScheme.primary
            , fontSize = 44.sp

        )

    }
}




6.Implement the NavigationGraph function
Implement the NavigationGraph function to handle the navigation between composables:

@Composable
fun NavigationGraph(navController: NavController) {
    NavHost(navController, startDestination = BottomNavItem.Home.route) {
        composable(BottomNavItem.Home.route) { HomeScreen() }
        composable(BottomNavItem.Music.route) { MusicScreen() }
        composable(BottomNavItem.Movies.route) { MoviesScreen() }
        composable(BottomNavItem.Books.route) { BooksScreen() }
        composable(BottomNavItem.Profile.route) { ProfileScreen() }
    }
}




7.Finally, call the MainScreenView() function from the onCreate method of your activity:

override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)
    setContent {
        MainScreenView()
    }
}


Now you have a bottom navigation bar implemented with Jetpack Compose. 
You can modify the HomeScreen, MusicScreen, MoviesScreen, BooksScreen, and ProfileScreen composables to display the content for each screen.



































































































.....

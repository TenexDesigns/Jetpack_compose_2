


1.screens.kt


sealed class Screens(val route:String){


    object Home :Screens(route = "home_screen")
    object Details :Screens(route = "details_screen")

}




2.Navgraph.js


@Composable

fun SetUpGraph(
    navController:NavHostController
){
    NavHost(navController = navController
    , startDestination = Screens.Home.route
    ){

        composable(
            route= Screens.Home.route
        ){
            HomeScreen(navController)
        }

        composable(
            route= Screens.Details.route
        ){
            DetailScreen(navController)
        }




    }
}



3.HomeScreen.js


@Composable
fun HomeScreen(navController:NavHostController){
    Box(
        modifier = Modifier.fillMaxSize(),
        contentAlignment = Alignment.Center

    ){

        Text(modifier = Modifier.clickable {
     navController.navigate(route = Screens.Details.route){
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




4.DetailScreen.js
@Composable
fun DetailScreen(navController: NavHostController){
    Box(
        modifier = Modifier.fillMaxSize(),
        contentAlignment = Alignment.Center

    ){

        Text(modifier = Modifier.clickable {
            navController.popBackStack()
        },
            text = "Detail Screen",
            color = MaterialTheme.colorScheme.primary
            , fontSize = 44.sp

        )

    }
}





5.class MainActivity : ComponentActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            MyApplication3444Theme {
                // A surface container using the 'background' color from the theme
                Surface(
                    modifier = Modifier.fillMaxSize(),
                    color = MaterialTheme.colorScheme.onSurfaceVariant
                ) {
                    val navController = rememberNavController()
                    SetUpGraph(navController = navController)
                }















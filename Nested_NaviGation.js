@Composable

fun SetUpGraph(
    navController:NavHostController
){
    NavHost(navController = navController
    , startDestination = Screens.Home.route
    , route = Root_Route
    ){

      authNavGraph(navController)     -->NESTED NAVIAGTION

        composable(
            route= Screens.Home.route
        ){
            HomeScreen(navController)
        }

        composable(
            route= Screens.Details.route,
            arguments = listOf(
                navArgument("id"){
                    type = NavType.IntType
                    defaultValue =0
            },


            ),

        ){
            Log.d("args",it.arguments?.getInt("id").toString())
            DetailScreen(navController)
        }




    }
}




MESTED NAVIAGIOTN
*******************************************
  
    authNavGraph.JS
  
fun NavGraphBuilder.authNavGraph(navController:NavHostController){
navigation(
        startDestination = Screens.Home.route,
        route = Authentication_Route
    ){
        composable(
            route= Screens.Login.route
        ){
            LoginScreen(navController)
        }

        composable(
            route= Screens.Signup.route
        ){
            SignupScreen(navController)
        }

    }
































..

SINGLE ARGUMENTS
*********************************************************************************

  
  
  
  
  
  
SCREENS.JS
*****************************************************

const val id_param ="id"
sealed class Screens(val route:String){


    object Home :Screens(route = "home_screen")
    object Details :Screens(route = "details_screen/${id_param}"){
        fun passId(id:Int):String{
            return  "details_screen/${id_param}"

        }
    }

}




HOMESCREENS.JS
*****************************************************
@Composable
fun HomeScreen(navController:NavHostController){
    Box(
        modifier = Modifier.fillMaxSize(),
        contentAlignment = Alignment.Center

    ){

        Text(modifier = Modifier.clickable {
     navController.navigate(route =Screens.Details.passId(34) ){
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







DETAILSCREENS.JS
*****************************************************

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









MULTIPLE ARGUMENTS
*********************************************************************************

  
  
  
  SCREENS.JS
*****************************************************

const val id_param ="id"
const val id_params ="ids"
sealed class Screens(val route:String){


    object Home :Screens(route = "home_screen")
    object Details :Screens(route = "details_screen/${id_param}/${id_params}"){
        fun passId(id:Int):String{
            return  "details_screen/${id_param}"

        }

        fun passIdS(id:Int,name:String):String{
            return  "details_screen/${id}/${name}"

        }
    }

}





HOMESCREENS.JS
*****************************************************

  @Composable
fun HomeScreen(navController:NavHostController){
    Box(
        modifier = Modifier.fillMaxSize(),
        contentAlignment = Alignment.Center

    ){

        Text(modifier = Modifier.clickable {
     navController.navigate(route =Screens.Details.passIdS(34,"George") ){
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


DETAILSSCREENS.JS
*****************************************************
  
  
  
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
            route= Screens.Details.route,
            arguments = listOf(
                navArgument(id_param){
                type = NavType.IntType
            },
                navArgument(id_params){
                    type = NavType.StringType

                }


            ),

        ){
            Log.d("args",it.arguments?.getInt("id").toString())
            DetailScreen(navController)
        }




    }
}
  
  
  
  
  
  
  
  
  
  
  
  
  
OPTIONAL ARGUMENTS
*********************************************************************************
  
  
  
  SCREENS.JS
*****************************************************
  
  
  sealed class Screens(val route:String){


    object Home :Screens(route = "home_screen")
    object Details :Screens(route = "details_screen?id={id}"){
        fun passId(id:Int =0):String{
            return  "details_screen?id=$id"

        }
  
  
  
  
      
 NAVGRAPH.JS
*****************************************************
  
  
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
  
  
  
HOMESCREEN.JS
*****************************************************

  @Composable
fun HomeScreen(navController:NavHostController){
    Box(
        modifier = Modifier.fillMaxSize(),
        contentAlignment = Alignment.Center

    ){

        Text(modifier = Modifier.clickable {
     navController.navigate(route =Screens.Details.passId(8) ){
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
  
  
  
  
  
MULTIPLE OPTIONA  ARGUMENTS
*****************************************************
    
1.  Use & sign in the screens fiel
    
    
    
    
    
        object Details :Screens(route = "details_screen?id={id}&name=$name"){
        fun passId(id:Int =0,name:String="George"):String{
            return  "details_screen?id=$id&name=name"

        }
    
    
    
  2. Use default in the Nav Grap file where we ceiveive the value.  
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  


....

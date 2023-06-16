without Arguments


        Text(modifier = Modifier.clickable {
     navController.popbackStack()
     }










With Arguments


        Text(modifier = Modifier.clickable {
     navController.navigate(route = Screens.Details.route){
         popUpTo(Screens.Home.route){
             inclusive = true
         }
     }































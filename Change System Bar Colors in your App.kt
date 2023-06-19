

To change the System Bar colors in your app using Jetpack Compose, you can use the Accompanist library with its System UI Controller. Follow these steps:

1.Add the Accompanist dependency to your apps build.gradle file: 

  implementation "com.google.accompanist:accompanist-systemuicontroller:0.27.0"




2. Create a valiable that checks whether the phone is in dark or light mode
    val darkTheme: Boolean = isSystemInDarkTheme(),



3.You can use the SystemUiController instance created by using remmbeserSystemUIControler() in your Compose app to set the system bar colors. Heres an example:
Here we use Side effect and put that code inside it because sideefeect will be excuted on every recomposition

    val darkTheme: Boolean = isSystemInDarkTheme(),
    val systemController = rememberSystemUiController()
     SideEffect {
        systemController.setSystemBarsColor(
            color = if (darkTheme) Color.Blue else Color.Red
        )
    }


Note--->You can also use, the setStatusBarColor() and setNavigationBarColor() methods instead of setSystemBarsColor to change the colors of the status bar and navigation bar, respectively.
You can pass any Color value to these methods.


5.This code can be put in the theme.kt of the app

theme.kt


@Composable
fun MyApplicationTheme(
    darkTheme: Boolean = isSystemInDarkTheme(),
    content:@Composable () -> Unit
){
  '  val systemController = rememberSystemUiController()
    val darkTheme = isSystemInDarkTheme()
    SideEffect {
        systemController.setSystemBarsColor(
            color = if (darkTheme) Color.Blue else Color.Red
        )
    }'

    val colors = if(darkTheme){
        DarkColorScheme
    }else{
        LightColorScheme
    }
    MaterialTheme(
        colorScheme = colors,
        typography = Typography,
        content = content
    )
}






















..

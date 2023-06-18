To create an animated splash screen with Jetpack Compose, you can use LaunchedEffect and AnimatedVisibility to handle the splash screens visibility and animate it. Here's an example of how to create an animated splash screen:

First, create a SplashScreen composable function:
import androidx.compose.animation.AnimatedVisibility
import androidx.compose.animation.ExperimentalAnimationApi
import androidx.compose.animation.core.tween
import androidx.compose.animation.fadeOut
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.Modifier
import androidx.compose.foundation.Image
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.size
import androidx.compose.ui.Alignment
import androidx.compose.ui.unit.dp
import kotlinx.coroutines.delay

@OptIn(ExperimentalAnimationApi::class)
@Composable
fun SplashScreen(onSplashScreenExit: () -> Unit) {
    var showSplashScreen by remember { mutableStateOf(true) }
    
    LaunchedEffect(Unit) {
        delay(3000) // Delay for 3 seconds
        showSplashScreen = false
        onSplashScreenExit()
    }

    AnimatedVisibility(
        visible = showSplashScreen,
        exit = fadeOut(animationSpec = tween(durationMillis = 300))
    ) {
        Box(modifier = Modifier.fillMaxSize(), contentAlignment = Alignment.Center) {
            Image(
                painter = painterResource(id = R.drawable.your_logo),
                contentDescription = "Splash Screen Logo",
                modifier = Modifier.size(100.dp)
            )
        }
    }
}
In this example, we use LaunchedEffect to delay the splash screen for 3 seconds. After the delay, we set showSplashScreen to false and call onSplashScreenExit to navigate to the next screen. We use AnimatedVisibility to fade out the splash screen when its visibility changes.

Next, create a MainScreen composable function to represent your main screen:
@Composable
fun MainScreen() {
    // Your main screen UI goes here
    Text(text = "Main Screen", Modifier.fillMaxSize())
}
In your main activity, use the SplashScreen and MainScreen composables:
@Composable
fun MyApp() {
    val navController = rememberNavController()
    NavHost(navController, startDestination = "splash") {
        composable("splash") {
            SplashScreen(onSplashScreenExit = {
                navController.navigate("main") {
                    popUpTo("splash") { inclusive = true }
                }
            })
        }
        composable("main") {
            MainScreen()
        }
    }
}
In this example, we use a NavHost with two navigation destinations: the splash screen and the main screen. The onSplashScreenExit function is used to navigate from the splash screen to the main screen after the splash screen's animation is complete.

Make sure to replace R.drawable.your_logo with the appropriate logo resource in your project. geeksforgeeks.org developer.android.com



















....

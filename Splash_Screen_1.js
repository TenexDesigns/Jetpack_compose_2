


1.
@OptIn(ExperimentalAnimationApi::class)
@Composable
fun SplashScreen(onSplashScreenFinished: () -> Unit) {
    Box(
        modifier = Modifier
            .fillMaxSize()
            .background(MaterialTheme.colors.primary),
        contentAlignment = Alignment.Center
    ) {
        val alpha by animateFloatAsState(
            targetValue = 1f,
            animationSpec = tween(durationMillis = 1000, easing = FastOutSlowInEasing)
        )

        Image(
            painter = painterResource(R.drawable.your_splash_image),
            contentDescription = null,
            modifier = Modifier
                .alpha(alpha)
                .fillMaxSize(0.5f)
        )

        LaunchedEffect(Unit) {
            delay(2000)
            onSplashScreenFinished()
        }
    }
}


2.
class SplashScreenActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            SplashScreen(onSplashScreenFinished = ::navigateToMainActivity)
        }
    }

    private fun navigateToMainActivity() {
        val intent = Intent(this, MainActivity::class.java)
        startActivity(intent)
        finish()
    }
}





EXPLANANTION OF THE ABOVE CODE
*********************************************************************************************************************




This code creates a splash screen with Jetpack Compose and navigates to the main activity once the splash screen is finished.
Lets break down the code step by step.




1.SplashScreen composable function:
@OptIn(ExperimentalAnimationApi::class)
@Composable
fun SplashScreen(onSplashScreenFinished: () -> Unit) {
    //...
}
This function takes a lambda function onSplashScreenFinished as an argument, which will be called when the splash screen is finished.







2.Displaying the splash screen:
Box(
    modifier = Modifier
        .fillMaxSize()
        .background(MaterialTheme.colors.primary),
    contentAlignment = Alignment.Center
) {
    //...
}
A Box is used as a container for the splash screen, with a background color set to the primary theme color.






3.Animation state:
val alpha by animateFloatAsState(
    targetValue = 1f,
    animationSpec = tween(durationMillis = 1000, easing = FastOutSlowInEasing)
)
Here, we define an alpha state that holds the current alpha value of the image.
The alpha value is animated from 0 to 1 over 1 second using the FastOutSlowInEasing easing.






4.Displaying the image:
Image(
    painter = painterResource(R.drawable.your_splash_image),
    contentDescription = null,
    modifier = Modifier
        .alpha(alpha)
        .fillMaxSize(0.5f)
)
An Image is used to display the splash screen image, with the specified alpha value and size.







5.Launching the effect:
LaunchedEffect(Unit) {
    delay(2000)
    onSplashScreenFinished()
}
LaunchedEffect is used to wait for 2 seconds before calling the onSplashScreenFinished function to navigate to the main activity.

6.Creating a new splash screen activity:
class SplashScreenActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            SplashScreen(onSplashScreenFinished = ::navigateToMainActivity)
        }
    }

    private fun navigateToMainActivity() {
        val intent = Intent(this, MainActivity::class.java)
        startActivity(intent)
        finish()
    }
}
In this code snippet, a new SplashScreenActivity is created.
The SplashScreen composable is used in this activity, and the navigateToMainActivity function is called when the splash screen is finished.






7.Updating the apps manifest file:
<activity
    android:name=".SplashScreenActivity"
    android:theme="@style/Theme.MyApp.SplashScreen"
    android:screenOrientation="portrait"
    android:windowBackground="@color/splash_background"
    android:configChanges="orientation|screenSize">
    <intent-filter>
        <action android:name="android.intent.action.MAIN" />
        <category android:name="android.intent.category.LAUNCHER" />
    </intent-filter>
</activity>
In this XML snippet, the SplashScreenActivity is added to the manifest file as the launcher activity of the app.
The activitys theme, screen orientation, window background, and configuration changes are set accordingly.

In summary, this code creates a splash screen with Jetpack Compose that displays an image with a fading-in animation. 
After a 2-second delay, the app navigates to the main activity







FOLLOW UP QUESTION
*************************************************************************************************************


  In the code snippet onSplashScreenFinished = ::navigateToMainActivity, the double colons (::) are used to create a reference
  to the navigateToMainActivity function. This is known as a function reference in Kotlin.

When you pass a function reference as an argument, youre essentially passing the function itself, not the result of calling it. 
In this case, onSplashScreenFinished is a lambda function that takes no arguments and returns no value (() -> Unit).
By passing ::navigateToMainActivity, youre providing a reference to the navigateToMainActivity function, 
which will be called later when the splash screen is finished.

This is useful because it allows you to pass a function as an argument without actually invoking it at the time of passing.
The function will be invoked later in the code when needed, in this case, when the splash screen is finished.

Heres a quick example to illustrate function references:

fun main() {
    val numbers = listOf(1, 2, 3, 4, 5)
    val doubledNumbers = numbers.map(::double)
    println(doubledNumbers) // Output: [2, 4, 6, 8, 10]
}

fun double(x: Int): Int {
    return x * 2
}
In this example, the ::double is a reference to the double function, which is passed as an argument to the map function.





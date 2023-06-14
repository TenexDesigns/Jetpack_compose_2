In Jetpack Compose, effects are used to interact with and manage external resources, side effects, and handle app state changes.
Since composables should be side-effect free, you need to use the proper APIs to manage side effects within a composable function developer.android.com.

Here are some common effects in Jetpack Compose:

LaunchedEffect: This effect runs a side effect in a coroutine when the composable enters the composition.
It is useful for performing one-time actions, such as fetching data from a remote server.
   import androidx.compose.runtime.LaunchedEffect

   @Composable
   fun FetchData(viewModel: DataViewModel) {
       LaunchedEffect(Unit) {
           viewModel.fetchData()
       }
   }
DisposableEffect: This effect allows you to perform an action when the composable enters the composition and clean up when it leaves. 
It is useful for managing resources like timers, listeners, or subscriptions.
   import androidx.compose.runtime.DisposableEffect

   @Composable
   fun TimerComposable() {
       val startTime = remember { System.currentTimeMillis() }
       val elapsedTime = remember { mutableStateOf(0L) }

       DisposableEffect(Unit) {
           val timer = Timer(period = 1000) {
               elapsedTime.value = System.currentTimeMillis() - startTime
           }
           onDispose {
               timer.cancel()
           }
       }

       Text("Elapsed time: ${elapsedTime.value / 1000} seconds")
   }
RememberCoroutineScope: This effect provides a CoroutineScope tied to the composables lifecycle.
You can use this scope to launch coroutines that can be canceled when the composable is removed from the composition.
   import androidx.compose.runtime.rememberCoroutineScope

   @Composable
   fun CoroutineScopeExample() {
       val scope = rememberCoroutineScope()

       Button(onClick = {
           scope.launch {
               // Perform some async operation
           }
       }) {
           Text("Launch Coroutine")
       }
   }
When using effects in Jetpack Compose, its crucial to ensure that they run in the correct lifecycle phase, 
  stop when necessary to avoid memory leaks, and run in a CoroutineContext supplied by the effect handler section.io.











































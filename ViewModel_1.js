ViewModel is an architectural component in Android that is designed to store and manage UI-related data in a lifecycle-conscious way. ViewModel allows data to survive configuration changes such as screen rotations, and it helps to separate data handling from the UI components. ViewModel is a part of the MVVM (Model-View-ViewModel) architecture pattern.

Here is a step-by-step guide on how to use ViewModel in an Android app with code samples:

1.Add ViewModel dependencies to your apps build.gradle file:
      dependencies {
          implementation 'androidx.lifecycle:lifecycle-viewmodel-ktx:2.4.1'
          implementation 'androidx.lifecycle:lifecycle-livedata-ktx:2.4.1'
      }


2.Create a ViewModel class that extends ViewModel. In this class, define the data properties and methods required for managing the UI state.

class MyViewModel : ViewModel() {

    private val _text = MutableLiveData("Hello, World!")
    val text: LiveData<String> = _text

    fun updateText(newText: String) {
        _text.value = newText
    }
}

In this example, we have a simple ViewModel that holds a text property as LiveData and a method to update the text.



3.In your activity or fragment, create an instance of the ViewModel using the viewModels() delegate.

class MainActivity : ComponentActivity() {

    private val myViewModel: MyViewModel by viewModels()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            MyScreen(myViewModel = myViewModel)
        }
    }
}






4.In your composable function, use the lifecycleOwner and observeAsState() to convert LiveData to a Compose state:

@Composable
fun MyScreen(myViewModel: MyViewModel) {
    val lifecycleOwner = LocalLifecycleOwner.current
    val text by myViewModel.text.observeAsState(initial = "", lifecycleOwner)

    // You can now use the 'text' property in your UI components
    // and call 'myViewModel.updateText()' to update the text value
}

In this example, we pass the myViewModel instance to the MyScreen composable function and use it to observe the text LiveData property.
The observeAsState() function is used to convert LiveData to a Compose state that can be used in the UI components.





LIVE DATA
__________________________________________________________________________________________________________________________

LiveData is an observable data holder class that is lifecycle-aware. 
This means it respects the lifecycle of other app components, such as activities, fragments, or services.
LiveData updates app components that are in an active lifecycle state and automatically cleans up references when the components are destroyed.
This helps you avoid memory leaks and ensures your app is always displaying the latest data.


Using LiveData in the context of Jetpack Compose allows you to maintain a clean separation between UI components and data,
  enables efficient data updates, and ensures that your app components are always displaying the latest data.

Sources:













is it a must to use the LocalLifecycleOwner.current, 
__________________________________________________________________________________________________________________________


No, it is not a must to use LocalLifecycleOwner.current when working with LiveData in Jetpack Compose.
However, it is recommended because it ensures that the observed LiveData respects the lifecycle of the current composable function, 
  which helps prevent memory leaks and ensures that your app components are always displaying the latest data.

If you dont use LocalLifecycleOwner.current, you would need to provide a different LifecycleOwner instance to the observeAsState() function.
Providing an incorrect or inappropriate LifecycleOwner could lead to issues such as memory leaks or observing LiveData when the composable is not active.


Using LocalLifecycleOwner.current is the best practice because it automatically handles the lifecycle of the composable function and ensures that
LiveData is observed only when the composable is in an active state.

Here is an example of using LocalLifecycleOwner.current with LiveData in a composable function:

import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.livedata.observeAsState
import androidx.compose.ui.platform.LocalLifecycleOwner

@Composable
fun MyScreen(myViewModel: MyViewModel) {
    val lifecycleOwner = LocalLifecycleOwner.current
    val text by myViewModel.text.observeAsState(initial = "", lifecycleOwner)

    // Use the 'text' property in your UI components
}
In this example, using LocalLifecycleOwner.current ensures that the LiveData observation respects the lifecycle of the MyScreen composable function.

Sources:



..

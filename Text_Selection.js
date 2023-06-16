    SelectionContainer() {
        Column{
            Text(text="Helllo George")

            DisableSelection {
                Text(text="Helllo George")


            }
            
            Text(text="Helllo George")

        }


    }



MORE EXPLANANTION
*************************************************************************************************************************************************



Text selection in Jetpack Compose allows users to select and copy text displayed in your application. 
To enable text selection in Jetpack Compose, you need to wrap the text elements inside a SelectionContainer. 
Here is an example of how to use SelectionContainer with a Text composable:

import androidx.compose.foundation.text.selection.SelectionContainer
import androidx.compose.material.Text
import androidx.compose.runtime.Composable

@Composable
fun SelectableText() {
    SelectionContainer {
        Text(text = "This is a selectable text in Jetpack Compose.")
    }
}
By wrapping the Text composable inside the SelectionContainer, you enable the user to select and copy the text displayed on the screen.
The SelectionContainer handles the text selection behavior, such as displaying selection handles and managing the clipboard geeksforgeeks.org.

Here is an example of using SelectionContainer with multiple Text composables:

import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.text.selection.SelectionContainer
import androidx.compose.material.Text
import androidx.compose.runtime.Composable

@Composable
fun MultipleSelectableTexts() {
    SelectionContainer {
        Column {
            Text(text = "This is the first selectable text.")
            Text(text = "This is the second selectable text.")
            Text(text = "This is the third selectable text.")
        }
    }
}
In this example, we have used a Column layout inside the SelectionContainer to arrange multiple Text composables vertically.
Users can now select and copy text from any of these Text composables geeksforgeeks.org.



































































..

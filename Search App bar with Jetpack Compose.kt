
@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun SearchAppBar(onSearchTextChanged: (String) -> Unit, onBackClicked: () -> Unit) {
    var searchText by remember { mutableStateOf("") }

    TopAppBar(
        title = {
            TextField(
                modifier = Modifier.fillMaxWidth(),
                value = searchText,
                onValueChange = { newText -> searchText = newText },
                placeholder = { Text(text = "George") },
                leadingIcon = {
                    IconButton(onClick = onBackClicked) {
                        Icon(imageVector = Icons.Filled.ArrowBack, contentDescription = null)
                    }
                },
                trailingIcon = {
                    IconButton(onClick = {}) {
                        Icon(imageVector = Icons.Filled.Search, contentDescription = null)
                    }
                }
            )
        }
    )
}


To handle the search functionality, you can create a composable function that displays the search results based on the searchText value. 
For example, if you have a list of items, you can filter the list based on the search text and display the filtered items.
Now you have a search app bar with Jetpack Compose that allows users to input search queries and display the results accordingly.



********************************************8


In the code above, we define a SearchAppBar composable function that represents the search widget or app bar. It takes two callbacks as parameters: onSearchTextChanged for handling changes in the search query text, and onBackClicked for handling the back button click.

Inside the TopAppBar, we use the TextField component to display the search input field. The value parameter represents the current text in the field, and onValueChange is called whenever the text changes. We also set the placeholder to display a hint text for the search field.

The leadingIcon is used to display the back button, and we attach the onBackClicked callback to it. The trailingIcon is used to display the search icon, but you can customize it to perform any action you desire.

To preview the SearchAppBar, we use the @Preview annotation along with the PreviewSearchAppBar composable function.

Remember to replace R.string.search_hint with the appropriate resource ID for the search hint text in your project.

Make sure to add the necessary dependencies for Jetpack Compose in your project's build.gradle file.














































































.....


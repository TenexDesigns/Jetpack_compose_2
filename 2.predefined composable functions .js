Jetpack Compose is a declarative UI toolkit for building Android applications. It provides a set of predefined composable functions that you can use to create various UI components. Here are some commonly used predefined functions in Jetpack Compose:

1.Text: Displays a text element.


Text(text = "Hello, Jetpack Compose!")



2.Button: Creates a clickable button.


Button(onClick = { /* Button action */ }) {
    Text(text = "Click Me")
}




3.TextField: Allows the user to enter text.


var text by remember { mutableStateOf("") }
TextField(
    value = text,
    onValueChange = { newText -> text = newText },
    label = { Text("Enter text") }
)

             
4.Image: Displays an image.

Image(
    painter = painterResource(R.drawable.my_image),
    contentDescription = "My Image"
)



5.Column: Arranges children in a vertical column.


Column {
    Text("Item 1")
    Text("Item 2")
    Text("Item 3")
}




6.Row: Arranges children in a horizontal row.


Row {
    Text("Left")
    Text("Right")
}



7.Box: Places children in a rectangular area.


Box(Modifier.size(100.dp).background(Color.Blue)) {
    Text("Inside the box")
}



8.Card: Displays a card-style container.


Card {
    Text("Card content")
}




9.Scaffold: Creates a basic app layout with app bar and content.


Scaffold(
    topBar = {
        TopAppBar(title = { Text("My App") })
    },
    content = {
        Text("App content")
    }
)
          
          
          
10.AlertDialog: Displays an alert dialog.


val openDialog = remember { mutableStateOf(false) }
Button(onClick = { openDialog.value = true }) {
    Text("Open Dialog")
}
if (openDialog.value) {
    AlertDialog(
        onDismissRequest = { openDialog.value = false },
        title = { Text("Alert") },
        text = { Text("This is an alert dialog") },
        confirmButton = {
            Button(
                onClick = { openDialog.value = false }
            ) {
                Text("OK")
            }
        }
    )
}



11.BoxWithConstraints: Provides the constraints of its parent layout to its children.


BoxWithConstraints {
    Text("Max width: ${maxWidth}px, Max height: ${maxHeight}px")
}


12.IconButton: Displays an icon that can be clicked.


IconButton(onClick = { /* Icon button action */ }) {
    Icon(Icons.Filled.Favorite, contentDescription = "Favorite")
}



13.CheckBox: Represents a checkbox that can be checked or unchecked.


var checked by remember { mutableStateOf(false) }
Checkbox(
    checked = checked,
    onCheckedChange = { newChecked -> checked = newChecked },
    label = { Text("Check me") }
)
             
             
             
14.RadioGroup: Represents a group of radio buttons.

val options = listOf("Option 1", "Option 2", "Option 3")
var selectedOption by remember { mutableStateOf(options[0]) }
RadioGroup(
    options = options,
    selectedOption = selectedOption,
    onSelectedChange = { newOption -> selectedOption = newOption }
)




15.Slider: Allows the user to select a value from a range by sliding a thumb.

var sliderValue by remember { mutableStateOf(0f) }
Slider(
    value = sliderValue,
    onValueChange = { newValue -> sliderValue = newValue },
    valueRange = 0f..100f
)


16.ProgressBar: Displays a progress indicator.

CircularProgressIndicator()


17.Surface: Represents a themed surface with elevation and background color.

Surface(
    elevation = 4.dp,
    color = Color.White
) {
    Text("Text on a surface")
}


18.ModalBottomSheetLayout: Displays a modal bottom sheet.

val bottomSheetState = rememberModalBottomSheetState(ModalBottomSheetValue.Hidden)
ModalBottomSheetLayout(
    sheetState = bottomSheetState,
    sheetContent = {
        Text("Bottom sheet content")
    },
    content = {
        Text("App content")
    }
)


19.LazyColumn: Lazily lays out items in a vertical scrolling list.

LazyColumn {
    items(100) { index ->
        Text("Item $index")
    }
}


20.OutlinedTextField: Displays a text input field with an outline border.

var text by remember { mutableStateOf("") }
OutlinedTextField(
    value = text,
    onValueChange = { newText -> text = newText },
    label = { Text("Enter text") }
)





















































































..

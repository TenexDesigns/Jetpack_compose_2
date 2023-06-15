Jetpack Compose is a modern toolkit for building native Android UI. 
It provides a set of predefined composable functions to create UI elements out of the box. 
Here is a list of some common predefined composable functions, their purpose, and how to use them with code samples:


1.Text: 
Displays simple text on the screen.
It can also be used as a child component in other composable functions. kodeco.com

@Composable
fun MyText() {
    Text("Hello, World!")
}


2.Button:
The primary element of your app that handles click events. kodeco.com

@Composable
fun MyButton() {
    Button(onClick = { /* Handle click event */ }) {
        Text("Click me")
    }
}


3.TextField:
Allows you to retrieve input from a user. For more styling options, use OutlinedTextField(). kodeco.com

@Composable
fun MyTextField() {
    var text by remember { mutableStateOf("") }
    TextField(value = text, onValueChange = { text = it })
}



4,RadioButton: 
An element that the user can select. To make a group of radio buttons, you have to write the logic yourself. kodeco.com

@Composable
fun MyRadioButton() {
    val options = listOf("Option 1", "Option 2", "Option 3")
    val selectedOption = remember { mutableStateOf(options[0]) }
    Column {
        options.forEach { option ->
            RadioButton(
                selected = option == selectedOption.value,
                onClick = { selectedOption.value = option }
            )
        }
    }
}


5.FloatingActionButton:
Use it when you need a button that displays above other elements. kodeco.com

@Composable
fun MyFloatingActionButton() {
    FloatingActionButton(onClick = { /* Handle click event */ }) {
        Icon(Icons.Default.Add, contentDescription = "Add")
    }
}


6.CircularProgressIndicator and LinearProgressIndicator:
Allow you to either track progress or show a loading animation. kodeco.com

@Composable
fun MyProgressIndicator() {
    CircularProgressIndicator()
    // or
    LinearProgressIndicator()
}


7.AlertDialog: 
Easy to use but requires state handling to work. kodeco.com

@Composable
fun MyAlertDialog() {
    val showDialog = remember { mutableStateOf(false) }

    if (showDialog.value) {
        AlertDialog(
            onDismissRequest = { showDialog.value = false },
            title = { Text("Alert") },
            text = { Text("This is an alert dialog") },
            confirmButton = {
                Button(onClick = { showDialog.value = false }) {
                    Text("OK")
                }
            }
        )
    }
}






8.Card:
A material design card that can hold content and actions about a single subject. learnenglish.britishcouncil.org

@Composable
fun MyCard() {
    Card(
        modifier = Modifier.padding(16.dp),
        shape = RoundedCornerShape(8.dp)
    ) {
        Column(modifier = Modifier.padding(16.dp)) {
            Text("Card Title")
            Text("Card content goes here")
        }
    }
}


9.Checkbox:
A basic UI element that allows the user to toggle a boolean state. learnenglish.britishcouncil.org

@Composable
fun MyCheckbox() {
    val checked = remember { mutableStateOf(false) }
    Checkbox(
        checked = checked.value,
        onCheckedChange = { checked.value = it }
    )
}


10.Switch:
Similar to a checkbox, but with a different appearance. learnenglish.britishcouncil.org

@Composable
fun MySwitch() {
    val checked = remember { mutableStateOf(false) }
    Switch(
        checked = checked.value,
        onCheckedChange = { checked.value = it }
    )
}



11.Slider:
Allows the user to select a value from a continuous or discrete range. learnenglish.britishcouncil.org

@Composable
fun MySlider() {
    val sliderPosition = remember { mutableStateOf(0f) }
    Slider(
        value = sliderPosition.value,
        onValueChange = { sliderPosition.value = it },
        valueRange = 0f..100f
    )
}


12.Column and Row:
Arrange their children in a vertical or horizontal linear layout, respectively. learnenglish.britishcouncil.org

@Composable
fun MyColumnAndRow() {
    Column {
        Text("Text 1")
        Text("Text 2")
        Text("Text 3")
    }

    Row {
        Text("Text 1")
        Text("Text 2")
        Text("Text 3")
    }
}


13.Box: Positions its children relative to its edges. learnenglish.britishcouncil.org

@Composable
fun MyBox() {
    Box(
        modifier = Modifier
            .fillMaxSize()
            .background(Color.LightGray)
    ) {
        Text("Centered text", modifier = Modifier.align(Alignment.Center))
    }
}


14.LazyColumn and LazyRow: 
Efficiently display large lists or grids by only rendering the visible items. learnenglish.britishcouncil.org

@Composable
fun MyLazyColumn() {
    val items = listOf("Item 1", "Item 2", "Item 3", "Item 4", "Item 5")
    LazyColumn {
        items(items) { item ->
            Text(item, modifier = Modifier.padding(8.dp))
        }
    }
}


15.Scaffold:
A higher-level composable that provides a framework for your apps structure, including top app bar, floating action button, and more. learnenglish.britishcouncil.org

@Composable
fun MyScaffold() {
    Scaffold(
        topBar = { TopAppBar(title = { Text("My App") }) },
        floatingActionButton = { FloatingActionButton(onClick = {}) { Text("FAB") } }
    ) { innerPadding ->
        Column(modifier = Modifier.padding(innerPadding)) {
            Text("Your main content goes here")
        }
    }
}






16.TopAppBar:
A top app bar that provides navigation and status information. medium.com
      
@Composable
fun MyTopAppBar() {
    TopAppBar(
        title = { Text("My App") },
        navigationIcon = {
            IconButton(onClick = { /* Open navigation drawer */ }) {
                Icon(Icons.Default.Menu, contentDescription = "Navigation")
            }
        },
        actions = {
            IconButton(onClick = { /* Perform some action */ }) {
                Icon(Icons.Default.Search, contentDescription = "Search")
            }
        }
    )
}


17.BottomAppBar: 
A bottom app bar that provides navigation and actions at the bottom of the screen. medium.com

@Composable
fun MyBottomAppBar() {
    BottomAppBar {
        IconButton(onClick = { /* Perform some action */ }) {
            Icon(Icons.Default.Home, contentDescription = "Home")
        }
        Spacer(Modifier.weight(1f))
        IconButton(onClick = { /* Perform some action */ }) {
            Icon(Icons.Default.Favorite, contentDescription = "Favorite")
        }
    }
}

18.BottomNavigation: 
A bottom navigation bar that allows switching between top-level destinations in your app. medium.com

@Composable
fun MyBottomNavigation() {
    val items = listOf("Home", "Favorites", "Profile")
    val selectedItem = remember { mutableStateOf(items[0]) }
    BottomNavigation {
        items.forEach { item ->
            BottomNavigationItem(
                icon = { Icon(Icons.Default.Home, contentDescription = item) },
                selected = item == selectedItem.value,
                onClick = { selectedItem.value = item }
            )
        }
    }
}


19.BackdropScaffold:
A higher-level composable that provides a backdrop layout, where a back layer is revealed by moving the front layer. medium.com

@Composable
fun MyBackdropScaffold() {
    val scaffoldState = rememberBackdropScaffoldState(BackdropValue.Concealed)
    BackdropScaffold(
        scaffoldState = scaffoldState,
        appBar = { TopAppBar(title = { Text("My App") }) },
        backLayerContent = { Text("Back layer content") },
        frontLayerContent = { Text("Front layer content") }
    )
}
      
      
20.Divider:
A simple horizontal or vertical line to separate content. medium.com
      
@Composable
fun MyDivider() {
    Column {
        Text("Item 1")
        Divider()
        Text("Item 2")
    }
}
  
  
  
  
21.Surface:
  A composable that applies material design elevation, background color, and shape to its contents. medium.com
  
@Composable
fun MySurface() {
    Surface(
        modifier = Modifier.padding(16.dp),
        elevation = 4.dp,
        shape = RoundedCornerShape(8.dp),
        color = MaterialTheme.colors.primary
    ) {
        Text("Content inside a surface", modifier = Modifier.padding(16.dp))
    }
}
  
  
22.Tabs:
  A component that displays a row of tab items and allows the user to switch between different views. medium.com
    
@Composable
fun MyTabs() {
    val tabs = listOf("Tab 1", "Tab 2", "Tab 3")
    var selectedTabIndex by remember { mutableStateOf(0) }
    val pagerState = rememberPagerState(pageCount = tabs.size)

    Column {
        TabRow(selectedTabIndex = selectedTabIndex) {
            tabs.forEachIndexed { index, title ->
                Tab(
                    text = { Text(title) },
                    selected = index == selectedTabIndex,
                    onClick = {
                        selectedTabIndex = index
                        pagerState.animateScrollToPage(index)
                    }
                )
            }
        }
        HorizontalPager(state = pagerState) { page ->
            Text("Content for ${tabs[page]}")
        }
    }
}




 23.AlertDialog:
  A dialog that presents a message and optional actions. developer.android.com
  
@Composable
fun MyAlertDialog() {
    val showDialog = remember { mutableStateOf(false) }
    if (showDialog.value) {
        AlertDialog(
            onDismissRequest = { showDialog.value = false },
            title = { Text("Alert") },
            text = { Text("This is an alert dialog.") },
            confirmButton = {
                Button(onClick = { showDialog.value = false }) {
                    Text("OK")
                }
            }
        )
    }
}


24.Snackbar:
A temporary message that appears above other content, typically used for brief feedback about an operation. developer.android.com

@Composable
fun MySnackbar() {
    val showSnackbar = remember { mutableStateOf(false) }
    if (showSnackbar.value) {
        Snackbar(
            modifier = Modifier.padding(16.dp),
            action = {
                TextButton(onClick = { showSnackbar.value = false }) {
                    Text("Dismiss")
                }
            }
        ) {
            Text("This is a snackbar.")
        }
    }
}



25.TextField:
A text input field that allows the user to enter and edit text. developer.android.com

@Composable
fun MyTextField() {
    val text = remember { mutableStateOf("") }
    TextField(
        value = text.value,
        onValueChange = { text.value = it },
        label = { Text("Enter text") },
        singleLine = true
    )
}


26.OutlinedTextField: 
A variant of TextField with an outlined appearance. developer.android.com

@Composable
fun MyOutlinedTextField() {
    val text = remember { mutableStateOf("") }
    OutlinedTextField(
        value = text.value,
        onValueChange = { text.value = it },
        label = { Text("Enter text") },
        singleLine = true
    )
}



27.CircularProgressIndicator:
A circular progress indicator that represents an indeterminate amount of progress. developer.android.com

@Composable
fun MyCircularProgressIndicator() {
    CircularProgressIndicator()
}


28.LinearProgressIndicator:
A linear progress indicator that represents an indeterminate amount of progress. developer.android.com

@Composable
fun MyLinearProgressIndicator() {
    LinearProgressIndicator()
}



29.LazyRow:
A horizontally scrolling list that efficiently displays a large number of items by only rendering the visible ones. developer.android.com

@Composable
fun MyLazyRow() {
    val items = listOf("Item 1", "Item 2", "Item 3", "Item 4", "Item 5")
    LazyRow {
        items(items) { item ->
            Text(item, modifier = Modifier.padding(8.dp))
        }
    }
}





30.Image:
A composable that displays an image. developer.android.com

@Composable
fun MyImage() {
    val imageResource = painterResource(R.drawable.my_image)
    Image(
        painter = imageResource,
        contentDescription = "Example image",
        modifier = Modifier.size(100.dp)
    )
}





31.Switch:
A switch component that allows users to toggle between on and off states. medium.com
  
@Composable
fun MySwitch() {
    val isChecked = remember { mutableStateOf(false) }
    Switch(
        checked = isChecked.value,
        onCheckedChange = { isChecked.value = it }
    )
}
    
    
    
    
    
    
    
32.Checkbox:
 A checkbox component that allows users to select or deselect an option. medium.com
    
@Composable
fun MyCheckbox() {
    val isChecked = remember { mutableStateOf(false) }
    Checkbox(
        checked = isChecked.value,
        onCheckedChange = { isChecked.value = it }
    )
}
    
    
    
    
    
33.RadioButton: 
A radio button component that allows users to select one option from a group. medium.com
    
@Composable
fun MyRadioButton() {
    val options = listOf("Option 1", "Option 2", "Option 3")
    val selectedOption = remember { mutableStateOf(options[0]) }
    Column {
        options.forEach { option ->
            Row(
                Modifier
                    .padding(8.dp)
                    .selectable(
                        selected = option == selectedOption.value,
                        onClick = { selectedOption.value = option }
                    )
            ) {
                RadioButton(
                    selected = option == selectedOption.value,
                    onClick = { selectedOption.value = option }
                )
                Text(option, Modifier.padding(start = 8.dp))
            }
        }
    }
}
    
    
    
    
    
34.Slider: 
    A slider component that allows users to select a value from within a range. medium.com
    
@Composable
fun MySlider() {
    val sliderValue = remember { mutableStateOf(0f) }
    Slider(
        value = sliderValue.value,
        onValueChange = { sliderValue.value = it },
        valueRange = 0f..100f
    )
}
    
    
    
    
35.Card: 
    A card component that displays content on an elevated surface. medium.com
    
@Composable
fun MyCard() {
    Card(
        modifier = Modifier
            .padding(16.dp)
            .fillMaxWidth(),
        elevation = 4.dp
    ) {
        Column(
            modifier = Modifier.padding(16.dp)
        ) {
            Text("Card Title", style = MaterialTheme.typography.h6)
            Text("Card content", style = MaterialTheme.typography.body1)
        }
    }
}
    
    
    
    
36.ScrollableColumn: 
    A vertically scrolling column that allows users to scroll through its content. medium.com
    
@Composable
fun MyScrollableColumn() {
    val items = List(50) { "Item $it" }
    ScrollableColumn {
        items.forEach { item ->
            Text(item, modifier = Modifier.padding(8.dp))
        }
    }
}
    
    
    
    
37.ScrollableRow:
    A horizontally scrolling row that allows users to scroll through its content. medium.com
    
    
@Composable
fun MyScrollableRow() {
    val items = List(50) { "Item $it" }
    ScrollableRow {
        items.forEach { item ->
            Text(item, modifier = Modifier.padding(8.dp))
        }
    }
}
    
    
    
38.Box: 
    A simple container that stacks its children on top of each other. medium.com
@Composable
fun MyBox() {
    Box(
        modifier = Modifier
            .background(Color.Green)
            .size(100.dp),
        contentAlignment = Alignment.Center
    ) {
        Text("Content inside a box")
    }
}


    
39.LazyColumnFor:
    A vertically scrolling list that efficiently displays a large number of items by only rendering the visible ones. medium.com
    
@Composable
fun MyLazyColumnFor() {
    val items = List(100) { "Item $it" }
    LazyColumnFor(items) { item ->
        Text(item, modifier = Modifier.padding(8.dp))
    }
}
    
    
    
    
40.LazyRowFor: 
    A horizontally scrolling list that efficiently displays a large number of items by only rendering the visible ones. medium.com
    
@Composable
fun MyLazyRowFor() {
    val items = List(100) { "Item $it" }
    LazyRowFor(items) { item ->
        Text(item, modifier = Modifier.padding(8.dp))
    }
}
    
    
    
    
41.BackdropScaffold:
    A component that provides a backdrop implementation according to the Material Design guidelines. medium.com
    
@Composable
fun MyBackdropScaffold() {
    val scaffoldState = rememberBackdropScaffoldState(BackdropValue.Concealed)
    BackdropScaffold(
        scaffoldState = scaffoldState,
        appBar = {
            TopAppBar(
                title = { Text("My App") },
                navigationIcon = {
                    IconButton(onClick = { scaffoldState.toggle() }) {
                        Icon(Icons.Default.Menu, contentDescription = "Menu")
                    }
                }
            )
        },
        backLayerContent = {
            Column {
                Text("Back Layer Content", Modifier.padding(8.dp))
            }
        },
        frontLayerContent = {
            Column {
                Text("Front Layer Content", Modifier.padding(8.dp))
            }
        }
    )
}



42.BottomSheetScaffold:
A component that provides a bottom sheet implementation according to the Material Design guidelines. medium.com

@Composable
fun MyBottomSheetScaffold() {
    val scaffoldState = rememberBottomSheetScaffoldState(bottomSheetState = BottomSheetState(BottomSheetValue.Collapsed))
    BottomSheetScaffold(
        scaffoldState = scaffoldState,
        sheetContent = {
            Column {
                Text("Sheet Content", Modifier.padding(8.dp))
            }
        },
        topBar = {
            TopAppBar(title = { Text("My App") })
        },
        content = {
            Column {
                Text("Main Content", Modifier.padding(8.dp))
            }
        }
    )
}


43.FlowRow
A row that automatically wraps its content to the next line when it runs out of horizontal space. medium.com

@Composable
fun MyFlowRow() {
    val items = List(20) { "Item $it" }
    FlowRow {
        items.forEach { item ->
            Chip(text = item, modifier = Modifier.padding(4.dp))
        }
    }
}



44.FlowColumn: 
A column that automatically wraps its content to the next column when it runs out of vertical space. medium.com

@Composable
fun MyFlowColumn() {
    val items = List(20) { "Item $it" }
    FlowColumn {
        items.forEach { item ->
            Chip(text = item, modifier = Modifier.padding(4.dp))
        }
    }
}



45.Chip:
A custom composable representing a Material Design chip. medium.com

@Composable
fun Chip(text: String, modifier: Modifier = Modifier) {
    Surface(
        modifier = modifier,
        shape = RoundedCornerShape(16.dp),
        color = MaterialTheme.colors.secondary
    ) {
        Text(
            text = text,
            modifier = Modifier.padding(horizontal = 8.dp, vertical = 4.dp),
            style = MaterialTheme.typography.body2.copy(color = MaterialTheme.colors.onSecondary)
        )
    }
}





46.ExtendedFloatingActionButton:
An extended floating action button with a text label. kodeco.com

@Composable
fun MyExtendedFloatingActionButton() {
    ExtendedFloatingActionButton(
        text = { Text("Extended FAB") },
        onClick = { /* Perform action */ },
        icon = { Icon(Icons.Default.Add, contentDescription = "Add") }
    )
}




47.Custom Composable: 
      A custom composable that combines multiple existing composables to create a reusable component.
      
@Composable
fun MyCustomComposable() {
    Row(
        modifier = Modifier
            .background(MaterialTheme.colors.secondary)
            .padding(16.dp),
        verticalAlignment = Alignment.CenterVertically
    ) {
        Icon(Icons.Default.AccountCircle, contentDescription = "Profile Icon", tint = MaterialTheme.colors.onSecondary)
        Spacer(modifier = Modifier.width(8.dp))
        Column {
            Text("John Doe", style = MaterialTheme.typography.h6.copy(color = MaterialTheme.colors.onSecondary))
            Text("johndoe@example.com", style = MaterialTheme.typography.body2.copy(color = MaterialTheme.colors.onSecondary))
        }
    }
}
  
These are more examples of predefined composable functions and custom composables in Jetpack Compose.
For a comprehensive list and to learn how to use them effectively in your app, you can explore the official documentation and other resources.

These are just a few examples of the predefined functions available in Jetpack Compose. 
The library provides many more functions for building various UI components and layouts.
You can explore the official Jetpack Compose documentation for a comprehensive list of functions, their usage,
  and additional options: Jetpack Compose Documentation.

































































...

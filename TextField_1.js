@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun Text22(){



    Column( modifier = Modifier
        .width(299.dp)
        .height(109.dp)
        .background(Color.Blue),
        horizontalAlignment =  Alignment.CenterHorizontally,
        verticalArrangement =  Arrangement.Center
        ){
    var textstate by remember { mutableStateOf("Thype here ...") }

    OutlinedTextField(
            value = textstate,
            onValueChange = {
                            textstate = it
            },label={
                Text("This is name")
        },
        leadingIcon = {
            IconButton(onClick = {
                Log.d("leading Icon", "The leading Icom has been clicked")
            }) {
        Icon(imageVector = Icons.Filled.Email, contentDescription = "Email Icon")


                
            }

        },
        keyboardOptions = KeyboardOptions(
            keyboardType = KeyboardType.Email,
            imeAction = ImeAction.Search
        ),
        keyboardActions = KeyboardActions(onSearch = {
            Log.d("Searcjh", "The search Icom has be")
        })








            )



    }








}
























....

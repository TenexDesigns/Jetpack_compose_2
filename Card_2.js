@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun Card44(){
    var expandiblestate by remember {mutableStateOf(false)}
    val rotationState by animateFloatAsState(
        targetValue = if (expandiblestate) 180f else 0f
    )


    Card(
        modifier = Modifier
            .fillMaxWidth()
            .animateContentSize(
                animationSpec = tween(
                    durationMillis = 300,
                    easing = LinearOutSlowInEasing
                )
            ),
        shape = RoundedCornerShape(6.dp),
        onClick = {
            expandiblestate = !expandiblestate
        }

    ){

        Column(
            modifier = Modifier
                .fillMaxWidth()
                .padding(12.dp),

        )
        {
            Row(
                verticalAlignment = Alignment.CenterVertically,
            ){


                Text(text = "My title",
                    fontSize = MaterialTheme.typography.displayLarge.fontSize, fontWeight = FontWeight.ExtraBold,
                    modifier = Modifier.weight(6f),
                    maxLines = 1,
                    overflow =  TextOverflow.Ellipsis

                    )

                IconButton(
                    onClick = {
                        expandiblestate = !expandiblestate
                    },
                    modifier = Modifier
                        .weight(1f)
                        .rotate(rotationState))

                {
                    Icon(imageVector = Icons.Default.ArrowDropDown,
                        contentDescription = "Drop Down" )
                }

            }

            if(expandiblestate){
                Text(text="Hello Georgeg Gacau and  Eliud wamnbu " +
                        ", welocme to the 56 state visto f the" +
                        " presidennt , pteeesa fdod w wsddjkdhkfd" +
                        "kfdkfdfksdlfsdkfsdklskjdjldfjdkflskk" +
                        "lvvsnvkflksdjffljffwjwekfwffwlfwfwkkjffdwfndf"

                )
            }

            
        }

    }


}

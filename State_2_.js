State - Is any value that can Change over time

This value can be
e.g 1.A value stored in a room database
    2.A variable in a class
    3.the current value read from your device sensors
   




In Compose , The UI is immutable,
  Meaning There is no way to change the UI after It has been drawn
  
  What You can Controll however, is The state of your UI
  
  

Evevry time the satte of a UI changes, Compose Update or recomposes the part of the UI tree whose state has chaged



COMPOSABLES

They can accept a state and expose eevents


State - Is any value that can Change over time


Event -It notifies a part of the program that something has happened
for example a text field that accepts a value , which is a state,
  This text field exposes a callback which is onValueChange, which represents a event which will be triggered when we type even a single character in our text field
We are able t update our UI only by controlling the state,
  The mustableSateof() function accepts the value of the empty string and convets it into a state, This staate is observed by compose, meaning that when every we change that varauble,
    compose will be notified and the part of our composable will be updated in a proecesss called recomposition

So here you can see the onvalueChange will update the name variable any time we tipe even a singl character, which will then update the value parameter of the text field  during recomposition
    
    
@composable
fun ScreenContent(){
  var nameby remeber{mutableSateOf("")}
  
  TextFiled(
    value = name,
    onValueChange = {name = it}
    label = {Text (Persons Name)}
  
  )


}




STATEFUL AND STATELES COMPOSABLES
******************************************************************************************
So now since you Understand that you can Only change the state of the Ui by using state , let m introduce you to stateful and stales composables

In the previous example we saw that that our composable function has one sate inside i.e(  var nameby remeber{mutableSateOf("")}), and that makes this composable stateful


@composable
fun ScreenContent(){
  var nameby remeber{mutableSateOf("")}
  
  TextFiled(
    value = name,
    onValueChange = {name = it}
    label = {Text ("Persons Name")}
  
  )


}



The oppostie of statful is stateless, which means that our composable wouldnt hold any state inside



So Stateful composables are hard to Use and test, SO TRY TO KEEP ALL YOUR COMPOSABLES SATELESS, To make your composable sateless you can use something called SatteHoisting


State hoisting is a programing patetrn where you move the state of a composable to the caller of that composable
A siple way to do that is by replacing state with a parameter and Using lambdas to represent events
Lets convert our prevoius composable into a stateless composable



Stateful Composable

@composable
fun FirstScreen(){
  var nameby remeber{mutableSateOf("")}
  
ScreenContent(
  name = name,
  onNameChange = (name =it)

)


}




Stateless composable
Here we hoist our state to the callers,,
  Also lamdas are the most common way to describe events, here we describe an event handler OnNameChange

@composable
fun ScreenContent(
  name:String,
  OnNameChange:(String) -> unit

){
  
  TextFiled(
    value = name,
    onValueChange = OnNameChange
    label = {Text ("Persons Name")}
  
  )


}










ALSO LET ME MENTION VIEW MODELS
View models are the recommended way to handle state for composable that are high up in the compose UI tree or compsables that are destinations in the naviagetion tree
View Models survive configuration changes, so they allow you to encapsulate the states and the events, that are related to the UI without having to deal with activity or fragmnent life cycle that hosts your compose code,

Your view models should expose state in an observable holder like live data or stateflow,
  You can have one or more observable satet holders ,each one of them should hold state for the part of your screen that are conceptioally related and that change together
That way you preserve a single source of truth even if the state is used in multple composables

Unidirectional stateflow pattern

view model  
|           ^
|           |
v           |
state       event
firstScreen()
|           ^
|           |
v           |
state       event
ScreenContent()




e.g ViewModel
class MyViewModel:ViewModel(){
    //Livedata holds state which is observed by the UI
    //(State flows down from viewmodel)

    private val _name = MutableLiveDate("")
    val nam:LiveDate<String> = _name
    
    
    //onNameChanged is an event we're defining that the UI can Invoke,
    //(Events flow up from UI)
    
    fun onNameChanged(newName:String){
        _name.value = newNamme
    }
}


Stateles Composaeble


@composale
fun firstScreen(
myViewModel:MyViewModel = ViewModel()
){
    val name:String by myViewModel.name.observeAsState("")
    
    ScrenContent(
        name = name,
        onNameChnage = {
           myViewModel.onNameChnaged(it)
        }
        
    
    )


}



THERE ARE ALSO TIMES WHEN YOU WHISH TO MAKE COMPOSABLES STATEFUL
e.g the expanded state of  a card composable


@Composable
fun ExaplandleCard(){
var expanded y=by remeber {mutableSateof()false}
}

if (expanded){
  contentDescript = "Expand"
}else{
contentDescriptin ="Collapse"}





e.g


















...

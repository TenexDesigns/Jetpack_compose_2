@Composable
fun MainScreen1(){
    Image(painter = painterResource(id = R.drawable.sunset),
        contentDescription = "Sun set",
        modifier = Modifier
            .size(300.dp)
            .clip(RoundedCornerShape(30.dp))
            .border(width = 10.dp, color = Color.Blue, shape = RoundedCornerShape(30.dp))

    )

}














MORE EXPLANANTION
*****************************************************************************************************************


1.Create a composable function that shapes an image based on the desired shape:

@Composable
fun ShapedImage(shape: Shape) {
    Image(
        painter = painterResource(R.drawable.your_image_resource),
        contentDescription = null,
        modifier = Modifier.clip(shape),
        contentScale = ContentScale.Crop
    )
}


2.Use the ShapedImage composable in your UI, specifying the desired shape:

@Composable
fun MyScreen() {
    ShapedImage(shape = CircleShape)
    // or
    ShapedImage(shape = RoundedCornerShape(8.dp))
}


In the ShapedImage composable, we use the Image composable to display the image. 
The modifier parameter is used to apply the shape to the image by using the clip() function with the specified shape. 
You can pass different shapes like CircleShape or RoundedCornerShape to achieve the desired shape for your image.

Remember to replace "your_image_resource" with the actual resource identifier of your image.

Feel free to customize the shape, size, and other properties of the image based on your requirements.






MORE EXPLANANTION
*****************************************************************************************************************


To shape an image in Jetpack Compose, you can use the clip function of the Modifier. For example, to display a circular image, 
you can use the CircleShape with the clip function. Heres a simple example:



@Composable
fun CircularImage() {
    val image = imageResource(id = R.drawable.your_image)
    val imageBitmap = image.asImageBitmap()

    Surface(
        modifier = Modifier.size(100.dp),
        shape = CircleShape,
        elevation = 4.dp
    ) {
        Image(
            bitmap = imageBitmap,
            contentDescription = "Circular Image",
            contentScale = ContentScale.Crop,
            modifier = Modifier
                .size(100.dp)
                .clip(CircleShape)
        )
    }
}
In this example, the CircularImage composable function loads an image resource, converts it to an ImageBitmap, 
and then displays it within a circular shape using the CircleShape and clip function. The Surface composable is used to provide 
elevation and shape to the image. Replace R.drawable.your_image with the appropriate image resource in your project.

You can use this CircularImage composable function in your main screen or wherever you want to display a circular image in your app. 
tutorialkart.com tedblob.com
















...

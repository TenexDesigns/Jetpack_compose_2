
@Composable
fun SuperScript(){

    Text(
        buildAnnotatedString {
            withStyle(
                style =  SpanStyle(
                    fontSize =  23.sp
                )
            ){
                append("J")

            }

            withStyle(
                style =  SpanStyle(
                    fontSize =  13.sp,
                    fontWeight =  FontWeight.Normal,
                    baselineShift =  BaselineShift.Superscript
                )
            ){
                append("Ge")

            }
        }
    )

}








MORE EXPLANANTION
**********************************************************************************************************************************



  Superscript and subscript text can be displayed in Jetpack Compose using the BaselineShift property in a SpanStyle. 
This property allows you to adjust the baseline of the text, making it appear above (superscript) or below (subscript) the normal text.
Heres an example of how to create superscript and subscript text using buildAnnotatedString function:

import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.text.SpanStyle
import androidx.compose.ui.text.buildAnnotatedString
import androidx.compose.ui.text.style.BaselineShift
import androidx.compose.ui.unit.sp

@Composable
fun SuperSubScriptText() {
    val defaultStyle = SpanStyle(fontSize = 20.sp)
    val superscriptStyle = SpanStyle(
        baselineShift = BaselineShift.Superscript,
        fontSize = 12.sp
    )
    val subscriptStyle = SpanStyle(
        baselineShift = BaselineShift.Subscript,
        fontSize = 12.sp
    )

    Text(
        text = buildAnnotatedString {
            append("E = mc")
            withStyle(superscriptStyle) {
                append("2")
            }
            append("\n")
            append("CH")
            withStyle(subscriptStyle) {
                append("4")
            }
            append(" + H")
            withStyle(subscriptStyle) {
                append("2")
            }
            append("O = CO + 3H")
            withStyle(subscriptStyle) {
                append("2")
            }
        }
    )
}
In this example, we have created a Text composable and used buildAnnotatedString to display a mix of normal,
superscript, and subscript text stackoverflow.com. We define separate SpanStyle objects for the default, superscript, 
and subscript text and apply them using the withStyle() function.


































































....

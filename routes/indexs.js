<SCRIPT language="JavaScript">
function Add(){
 document.fm1.C.value =eval(document.fm1.A.value) + eval(document.fm1.B.value)
}
render(){
 
    <FORM name="fm">
  <INPUT size="20" type="text" name="A"/>+
  <INPUT size="20" type="text" name="B"/>
  <INPUT type="button" value="=" onclick="Add()"/>
  <INPUT size="20" type="text" name="C"/>
</FORM>

}

</SCRIPT>
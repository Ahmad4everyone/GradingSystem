function answer(){
    var con = document.getElementById("cont")
    var math = document.getElementById("math").value
    var eng = document.getElementById("eng").value
    var phy = document.getElementById("phy").value
    var chem = document.getElementById("chem").value
    var bio = document.getElementById("bio").value
    var res = document.getElementById("result")

    var ahmad = Number(math) + Number(eng) + Number(phy) + Number(chem) + Number(bio)
    document.getElementById("total").innerHTML="Your total score is: " + ahmad
    var average=(ahmad*100)/500;
    if(math === ''){
        alert('pls fill in your result');
        return;
    }
    res.style.display = 'block', con.style.display = 'none'

    
    document.getElementById("average").innerHTML="You've got an average of: " + average
   
        if(average>=90 && average<=99){
            document.getElementById("grade").innerHTML=" Congratulaions! You've got A1"
        }
        else if(average>=85){
            document.getElementById("grade").innerHTML = " Congratulaions! You've got B2"
        }
        else if(average>=80){
            doocument.getElementById("grade").innerHTML=" Congratulations! You've got B3"
        }
        else if(average>=70){
            document.getElementById("grade").innerHTML=" Congratulatios! You've got C4"
        }
        else if(average>=60){
            document.getElementById("grade").innerHTML="Fair! You've got C5!"
        }
        else if (average>=50){
            document.getElementById("grade").innerHTML="You've got a C6!"
        }
        else if(average>=40){
            document.getElementById("grade").innerHTML="You've got a D7!"
        }
        else if(average>=30){
            document.getElementById("grade").innerHTML = "Congratulations! You've got an E8"
        }
        else {
            document.getElementById("grade").innerHTML="Poor Result! F9"
        }

        res.style.display = 'block'
}
function write(){
    console.log("write");

    var noun=document.getElementById('noun').value;
    var noun1=document.getElementById('noun1').value;
    var noun2=document.getElementById('noun2').value;
    var noun3=document.getElementById('noun3').value;
    var verb=document.getElementById('verb').value;
    var verb1=document.getElementById('verb1').value;
    var verb2=document.getElementById('verb2').value;
    var verb3=document.getElementById('verb3').value;
    var verb4=document.getElementById('verb4').value;

    var game=document.getElementById('game').value;
    
    
    var chc= document.querySelector('input[name="choice"]:checked').value;
    
    var gchoice;

    if(chc=="assign"){
        gchoice=" assignments"
    } else if(chc=="games"){
        gchoice=" Video games!!!"
    }

    console.log(gchoice);

    document.getElementById('output').innerHTML="After getting home, you take a relaxing "+noun+", thinking about your " +noun1+". Hungry, you cook a quick " +noun2+ " and bring it to your "+noun3+". Sitting at your desk, you hesitate doing your " +gchoice+". You decide to unwind with " +game+", using it to release stress instead of diving into " +verb+". As you " +verb1+ " through the thing, the " +verb2+ " melts away, and you find " +verb3+ " in the challenge, pushing your " +verb4+ " aside for a while." ;
} 
    
$(document).ready(function(){
    var date = new Date()
    
    if(localStorage.getItem("jamesBot")!==null){
        console.log("Sauvegarde trouvée")
        alert("Sauvegarde trouvée")
        var james=new Bot(localStorage.getItem("jamesBot"));
    }else{
        alert("Aucune sauvegarde trouvée")
        var james=new Bot();
    }
    $("section").append(james.message("Bonjour. Je suis James un robot !"))
    var waitAnswer=false
    $('#value').keyup(function(e) {  
        var question = $('#value').val().replace(/\n/g, "");;  
        if(e.keyCode == 13) { // KeyCode de la touche entrée
            $("section").append('<div class="container"><img src="./img/user.png" alt="User" class="right" style="width:100%;"><p>'+question+'</p><span class="time-right">'+date.getHours()+":"+date.getMinutes() +'</span></div>')
            $('#value').val("");
            let value=james.testBrain(question.toLowerCase());
            if(value!=-1){
                $("section").append(value)
            }   
        }
    });
})



class Bot{
    constructor(newData){
        if(newData===undefined){
            this.data=[];
        }else{
            this.data=JSON.parse(newData)
            console.log(this.data)
        }
        
        this.new={etat:false,question:""};
    }
    testBrain(string){
        var value=-1
        var index=this.data.findIndex(obj => obj.question==string); //CHerche l'index du name, renvoie -1 si n'existe pas
        if(index==-1){
            this.newData(string)
        }else{
            var value=this.answer(index)
        }
        return value
    }
    newData(string){
        if(this.new.etat){
            this.data.push({question:this.new.question,reponse:string})
            localStorage.setItem("jamesBot",JSON.stringify(this.data));
            this.new.etat=false;
            this.new.reponse="";
        }else{
            $("section").append(this.message("Oupss... je ne connais pas cette question, écrit moi la réponse que je devrai répondre à cette question pour la prochaine fois :D"))
            this.new.etat=true;
            this.new.question=string
        }
    }
    answer(index){
        return this.message(this.data[index].reponse)
    }
    displayDate(){
        console.log(this.data)
    }
    message(string){
        return '<div class="container"><img src="./img/bot.png" alt="James" style="width:100%;"><p>'+string+'</p><span class="time-right">'+this.getDate()+'</span></div>'
    }
    getDate(){
        var date = new Date()
        return date.getHours()+":"+date.getMinutes() 
    }
}




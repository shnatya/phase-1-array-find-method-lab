/*function superbowlWin(item){
        return item.result === "W";
    
}

let x = record.find(superbowlWin)*/

/*function superbowlWin(array){
    let x = array.find(item => {
        if(item.result === "W"){
            return item;
        }
    } )
    if(x){
        return x.year;
    }
    else{
        return x;
    }
    
}*/

function superbowlWin(array){
    let x = array.find(item => item.result === "W")
    if(x){
        return x.year;
    }
    else{
        return x;
    }
    
}
    
function NewCount(){
var date = new Date(),
chrismas = new Date(date.getFullYear(),12,31),
daysInAYear = 365,
calculateChrismas = chrismas.getDate()-date.getDate(),
result = daysInAYear - calculateChrismas;
    var res2 = daysInAYear - result+1;
    
document.getElementById('mytxt').innerHTML=res2+ " Days left";
}
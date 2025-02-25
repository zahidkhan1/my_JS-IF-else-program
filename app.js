let input=prompt("enter how mouch KM want travels");
if(input<=5){
    console.log("the ticket price is 15 rupees");
}
else if(input>5.1 && input<=10 ){
    console.log("the ticket price is 20 rupees");
}
else if(input>10.1 && input<=15){
    console.log("the ticket price is 25 rupees");
}


else if(input>20.1 && input<=25){
    console.log("the ticket price is 20 rupees");
}
else if(input>25.1 && input<=30){
    console.log("the ticket price is 35 rupees");
}
else if (input>30.1 && input<=35)
{
    console.log("the ticket price is 40 rupees");
}else
{
    console.log("the ticket price is 50 rupees");
}
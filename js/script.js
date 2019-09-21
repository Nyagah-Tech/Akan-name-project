var male=[
    "Kwasi","Kwadwo","kwabena","kwaku","yaw","kofi","kwame"
]
var female=[
    "Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"
]

function calculator(){
    
    var name=""
    var gender= document.forms["myForm"]["gender"].value;
    var date=document.forms["myForm"]["date"].value;
    var dateObject=new Date(date);
    var day=dateObject.getDay();
    if (gender==="male"){
        name=male[day];
    }else if (gender==="female"){
        name=female[day];
    }else{
        alert("invalid option")
    }
    document.getElementById("result").innerHTML=name;
    window.scrollTo(0,document.body.scrollHeight);
    document.getElementsByClass("myForm").reset();
   
    return name;
  
}

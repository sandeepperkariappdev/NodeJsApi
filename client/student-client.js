

function getStudents(){
   // sendRequest("GET","http://localhost:3400/students", undefined,"");    
     sendRequest("GET","http://localhost:3400/api/users", undefined,"");    
};
var i=0;
function postStudents(){
        i++;
    var stuObj = {};
    stuObj.name = "name"+i;
    stuObj.class = "1st";
    stuObj.school = "ABCD";
    stuObj.id = 1100+i;
    sendRequest("POST","http://localhost:3400/students", stuObj,"");
};

function postUsers(){
        i++;
    var stuObj = {};
    stuObj.name = "name"+i;
    stuObj.class = "1st";
    stuObj.school = "ABCD";
    stuObj.id = 1100+i;
    
    var x = {};
    x.username = "sandeep"
    //sendRequest("POST","http://localhost:3400/users", stuObj,"");
    sendRequest("POST","http://localhost:3400/api/users", x,"");
};


function clearTextArea(){
    document.getElementById("getStudentsTextArea").innerHTML = "";
};

function sendRequest(method,url,reqObj,cb){
    var xmlHttp = new XMLHttpRequest();
        var student = {};
        xmlHttp.open(method,url,true);
        xmlHttp.setRequestHeader('Content-Type','application/json');
        xmlHttp.onreadystatechange = function(){
            console.log(xmlHttp.readyState);
            console.log(xmlHttp.status + "Status Text" + xmlHttp.statusText);
            console.log(xmlHttp.response);             
            document.getElementById("getStudentsTextArea").innerHTML = xmlHttp.response;
        };
    
        if(reqObj === undefined){
            xmlHttp.send();
        }
        else{
            xmlHttp.send(JSON.stringify(reqObj));
             //xmlHttp.send(username="sandeep");
        }
};
// function value() {
//     var username = document.getElementById('email').value;
//     var passWord = document.getElementById('password').value;
//     if (username == "" && passWord == "user") {
//         alert("Login successful");
//         return false;
//     } else {
//         alert("please enter correct details");
//     }
// }
var details =[{email:'sonunikhil99@gmail.com',passwords:'123nikhil'},
{email:'rroskell1@fastcompany.com',passwords:'6rC5UCj5A0g'},
{email:'jpayfoot2@woothemes.com',passwords:'dP2gbT'},
{email:'bgolly3@nih.gov',passwords:'tOkE4H4a'},
{email:'wstanlake4@bing.com',passwords:'rnRNDMLtQT6'},
{email:'dhadingham5@shinystat.com',passwords:'aJyZxJKD'},
{email:'bcornuau6@aboutads.info',passwords:'yY0Jbrt'},
{email:'abyles7@addtoany.com',passwords:'4K983VXx'},
{email:'ldorsay8@dailymotion.com',passwords:'hCswwKr8bF'},
{email:'bwarlawe9@cisco.com',passwords:'LmxkBeUKqP'}]
// function validation(){
//     var username=document.getElementById('email');
//     var passWord=document.getElementById('password');
//     if (username.value=='nikhil' & passWord.value== 0000) {
//        return alert("Login Successful");
//     } else {
//        return alert("Please enter correct details")
//     }
// }
function validation(){
    var username=document.getElementById('email').value.trim;
    var passWord=document.getElementById('password').value.trim;
    for(i=0;i<=details.length;i++){
        if (username == details[i] && passWord == details[i]) {
            console.log("login successfull.");
        }
    }
console.log(validation());

    // if(username.value===details.email && passWord.value===details.passwords ){
    //     return alert("login successful");

    // }else{
    //     alert("please enter the correct details");
    // }
}
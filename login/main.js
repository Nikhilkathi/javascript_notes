
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
function validation() {
    // var username=document.getElementById('email').value.split;
    // var passWord=document.getElementById('password').value.split;
   for (var i=1;i<details.length;i++) {
    if (username==details.test(email[i]) & passWord== details.test(passwords[i])) {
        return alert("login successful");
    } else {
        return alert("please enter correct details")
    }

   }
}
console.log(validation())
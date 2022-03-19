let key="admin_1"

switch (key) {
    case "admin":
        function add (a,b){
            console.log("addition");
        }
        console.log(add())
        break;
    case "admin_1":
            function sub (a,b){
                console.log("subtraction");
            }
            console.log(sub());
        break;
    case "admin_2":
        function mul (a,b){
            console.log("Multiplication");
        }
        console.log(mul())
        break;
    case "admin_3":
        function div (a,b){
            console.log("Division");
        }
        console.log(div());    
        break;

    default:
        console.log("*********");
        break;
}
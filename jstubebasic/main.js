var user ="";
function userdetails(username, role) {
    switch (role) {
        case "admin": return`${username} is a admin`;
        case "admin_1": return`${username} is a subadmin can create/delete code`;
        case "admin_2": return`${username} is a admin`;
        case "admin_3": return`${username} is a admin`;
        default:
            break;
    }
}
console.log(userdetails("Nikhil","admin_1"));
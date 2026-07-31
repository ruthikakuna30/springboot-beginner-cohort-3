//alert("hello from java script");
var users=[
    {
        "image":"/images/john.png",
        "name":"John Doe",
        "gender":"MALE"
    },
    {
        "image":"/images/jane.png",
        "name":"Jane Doe",
        "gender":"FEMALE"
    }
]
var id=0;
function toggleuser(){
    id=(id+1) % users.length;
    var userImage = document.getElementById("user-image");
     var userName = document.getElementById("user-name");
     var userGender = document.getElementById("user-gender");
     
     userImage.scr = users[id].image;
     userName.innerHTML = users[id].name;
     userGender.innerHTML = users[id].gender;
     
}
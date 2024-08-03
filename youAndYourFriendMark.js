let yourMark = 89;
let yourFriendMark = 61;
if (yourMark > 80) {
    if (yourFriendMark > 80) {
        console.log("go to lunch")
    } else if (yourFriendMark > 60 && yourFriendMark < 80) {
        console.log("tell you")
    } else if (yourFriendMark < 60 && yourFriendMark > 40) {
        console.log("i blocked you")
    }
} else {
    console.log("Go to the home and sleep and act sad")
}

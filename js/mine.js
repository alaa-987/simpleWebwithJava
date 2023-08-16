$(".openNav").click(function(){
    $(".sideNav").addClass("active");
    $(".openNav").addClass("activeOpen");
})
$(".closeBtn").click(function(){
    $(".sideNav").removeClass("active");
    $(".openNav").removeClass("activeOpen");
})

$(".headText").click(function(){
    $(this).next(".conText").slideToggle();
})

$(".sideNav a").click(function(){
    var sectionId = $(this).attr("href");
    $("html,body").animate({scrollTop : $(sectionId).offset().top},1000)
})
let countDownDate = new Date("Dec 31, 2023 23:59:59").getTime();
let counter = setInterval(() => {
    let dateNow = new Date().getTime();
    let datDiff = countDownDate - dateNow ;
    let days = Math.floor(datDiff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((datDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((datDiff % (1000 * 60 * 60 )) / (1000 * 60 ));
    let seconds = Math.floor((datDiff % (1000 * 60)) / 1000);
    document.querySelector(".days").innerHTML= days + " "+"D";
    document.querySelector(".hours").innerHTML= hours + " "+"h";
    document.querySelector(".minutes ").innerHTML= minutes + " "+"m" ;
    document.querySelector(".seconds ").innerHTML= seconds + " "+"s";
},1000)

$(".text1").keyup(function(eInfo){
    if(eInfo.target.matches(".count-chars")){
        let value = eInfo.target.value;
        let valueLength = eInfo.target.value.length;
        let maxChars = parseInt(eInfo.target.getAttribute("data-max-chars"));
        let remainingChars = maxChars - valueLength ;
        if(valueLength > maxChars){
            eInfo.target.value = value.substr(0, maxChars);
            return;
        }
        eInfo.target.nextElementSibling.innerHTML = remainingChars +" "+ "characters remaining";
    }
})
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
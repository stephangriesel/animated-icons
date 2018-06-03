function breakChain (){
    let chain = document.getElementById('chain');
    chain.innerHTML = "&#xf0c1;";

    setTimeout(function() {
        chain.innerHTML = "&#xf127;";
    }, 1000);
}

breakChain();

setInterval(breakChain, 2000);

function chargeBattery () {
    let battery = document.getElementById('battery');
    battery.innerHTML = "&#xf244;";
    setTimeout(function (){
        battery.innerHTML = "&#xf243;";
    }, 1000);
    setTimeout(function (){
        battery.innerHTML = "&#xf242;";
    }, 2000);
    setTimeout(function (){
        battery.innerHTML = "&#xf241;";
    }, 3000);
    setTimeout(function (){
        battery.innerHTML = "&#xf240;";
    }, 4000);
}

chargeBattery();

setInterval(chargeBattery, 5000);

function hourglassFill(){
    let hourglass = document.getElementById('hg');
    hourglass.innerHTML = "&#xf251;";
    setTimeout(function (){
        hg.innerHTML = "&#xf252;";
    }, 1000);
    setTimeout(function (){
        hg.innerHTML = "&#xf253;";
    }, 2000);

}

hourglassFill();

setInterval(hourglassFill,3000);


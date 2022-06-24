// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load", function() {
    const takeoff = document.getElementById('takeoff');
    const landing = document.getElementById('landing');
    const missionAbort = document.getElementById('missionAbort');
    const status = document.getElementById('flightStatus');
    const sBackground = document.getElementById('shuttleBackground');
    const sHeight = document.getElementById('spaceShuttleHeight');
    const goUp = document.getElementById('up');
    const goDown = document.getElementById('down');
    const goLeft = document.getElementById('left');
    const goRight = document.getElementById('right');
    let rocket = document.getElementById('rocket');
    let backgroundHeight = sBackground.offsetHeight;
    let backgroundWidth = sBackground.offsetWidth;
      
    takeoff.addEventListener('click', function() {
        let result = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (result) {
            status.innerHTML = 'Shuttle in flight.';
            sBackground.style.backgroundColor = "blue";
            sHeight.innerHTML = 10000;
        };
    });

    landing.addEventListener('click', function() {
        let landingAlert = window.alert("The shuttle is landing. Landing gear engaged.");
            status.innerHTML = 'The shuttle has landed.';
            sBackground.style.backgroundColor = "green";
            sHeight.innerHTML = 0;
    });

    missionAbort.addEventListener('click', function() {
        let result = window.confirm("Confirm that you want to abort the mission.");
        if (result) {
            status.innerHTML = 'Mission aborted.';
            sBackground.style.backgroundColor = "green";
            sHeight.innerHTML = 0;
        };
    });

    goUp.addEventListener('click', function() {
        let mt = Number(rocket.style.marginTop.replaceAll("px", ""));
        sHeight.innerHTML = parseInt(sHeight.innerHTML) + 10000;
        if (rocket.height + mt > backgroundHeight) {
            mt -= 10;
            rocket.style.marginTop = `${mt}px`;
        } else {
            status.innerHTML = "Rocket hit bounds."
        }
        
        /*let movement  = parseInt(rocket.style.verticalAlign + 10) + 'px';
        rocket.style.verticalAlign = movement;
        sHeight.innerHTML = parseInt(sHeight.innerHTML) + 10000;*/
    });

    goDown.addEventListener('click', function() {
        let mt = Number(rocket.style.marginTop.replaceAll("px", ""));
        sHeight.innerHTML = parseInt(sHeight.innerHTML) - 10000;
        if (rocket.height + mt < backgroundHeight) {
            mt += 10;
            rocket.style.marginTop = `${mt}px`;
        } else {
            status.innerHTML = "Rocket hit bounds."
        }
    });

    goLeft.addEventListener('click', function() {
        let mt = Number(rocket.style.marginRight.replaceAll("px", ""));
        if (rocket.height + mt < backgroundWidth) {
            mt += 10;
            rocket.style.marginRight = `${mt}px`;
        } else {
            status.innerHTML = "Rocket hit bounds."
        }
    });

    goRight.addEventListener('click', function() {
        let mt = Number(rocket.style.marginLeft.replaceAll("px", ""));
        if (rocket.height + mt < backgroundWidth) {
            mt += 10;
            rocket.style.marginLeft = `${mt}px`;
        } else {
            status.innerHTML = "Rocket hit bounds."
        }
    });





});
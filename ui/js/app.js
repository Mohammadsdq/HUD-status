var visable = false;
window.ResourceName = 'statushud'

function setHUDDisplay(opacity) {
    $('#hud').css('opacity', opacity);
    $('.info-hud.radio').css('opacity', opacity);
    $('.info-hud.source').css('opacity', opacity);
    $('.info-hud.time-and-place').css('opacity', opacity);
};
//
function setHUDName(name) {
    $('#hud #player-fullname span').text(name);
};

function setHUDID(source) {
    $('#hud #source').text(source);
};


function setHUDJob(job) {
    if (job.job.name == 'nojob') {
        $('#hud #player-job').fadeOut(2000);
    } else {
        $('#hud #player-job').fadeIn(2000);
    };

    if (job.job.ext) {
        if (job.job.grade < 0) {
            $('#hud #job-name span').text(((job.job.ext).replace('_', ' ')).toUpperCase());
            $('#hud #job-img img').attr('src', './img/logo/jobs/' + job.job.ext + '.png');
            $('#hud #job-grade span').text('Off-Duty');
        } else {
            $('#hud #job-name span').text(((job.job.ext).replace('_', ' ')).toUpperCase());
            $('#hud #job-img img').attr('src', './img/logo/jobs/' + job.job.ext + '.png');
            $('#hud #job-grade span').text(job.job.grade_label);
        };
    } else {
        if (job.job.grade < 0) {
            $('#hud #job-name span').text(job.job.label);
            $('#hud #job-img img').attr('src', './img/logo/jobs/' + job.job.name + '.png');
            $('#hud #job-grade span').text('Off-Duty');
        } else {
            $('#hud #job-name span').text(job.job.label);
            $('#hud #job-img img').attr('src', './img/logo/jobs/' + job.job.name + '.png');
            $('#hud #job-grade span').text(job.job.grade_label);
        };
    };
};
//

function setGangVIcon(value) {
    $("#hud #gang-img img").attr("src", value);
}

function setHUDGang(gang) {
    if (gang.gang.name == 'nogang') {
        $('#hud #player-gang').fadeOut(2000);
    } else {
        $('#hud #player-gang').fadeIn(2000);
    };
    //
    $('#hud #gang-name span').text((gang.gang.name).replace('_', ' '));

    if (gang.gang.name == 'Mafia') {
        $('#hud #gang-img img').attr('src', './img/logo/gangs/' + gang.gang.name + '.png');
    } else {
        $('#hud #gang-img img').attr('src', './img/logo/gangs/gang.png');
    };
    if (gang.gang.name == 'Army') {
        $('#hud #gang-img img').attr('src', './img/logo/gangs/' + gang.gang.name + '.jpg');
    } else {
        $('#hud #gang-img img').attr('src', './img/logo/gangs/gang.png');
    };

    $('#hud #gang-grade span').text(gang.gang.grade_label);
};

function updatePing(data) {
    var s = data.value;
    $("[name='ping']").html(s)
    var x = document.getElementById("ping");


    if (s > 1 && s < 70) {
        $('#player-ping img').attr('src', './img/logo/wifi_g.png');
        x.style.color = "#13e94a";
    } else if (s > 71 && s < 300) {
        $('#player-ping img').attr('src', './img/logo/wifi_y.png');
        x.style.color = "#e8f016";
    } else {
        $('#player-ping img').attr('src', './img/logo/wifi_r.png');
        x.style.color = "#f01616";
    };

}


function setHUDCash(money) {
    $('#hud #player-cash-text').text(money);
};

function setHUDData(data) {
    if (data.health <= 10.0) {
        $('#health-img').addClass('ticktok');
    } else {
        $('#health-img').removeClass('ticktok');
    };
    $('#health').css('width', data.health + '%');
    $('#armor').css('width', data.armor + '%');
};

function setHUDStatus(data) {
    let hunger = data[0].percent;
    let thirst = data[1].percent;
    if (hunger <= 10.0) {
        $('#hud #hunger-img').addClass('ticktok');
    } else {
        $('#hud #hunger-img').removeClass('ticktok');
    };

    if (thirst <= 10.0) {
        $('#hud #thirst-img').addClass('ticktok');
    } else {
        $('#hud #thirst-img').removeClass('ticktok');
    };

    $('#hud #hunger').css('width', hunger + '%');
    $('#hud #thirst').css('width', thirst + '%');
};
window.addEventListener('message', (event) => {
    let data = event.data;
    switch (data.action) {

        case 'toggle':
            if (visable) {
                this.setTimeout(() => {
                    $('.right-status1').css({'transform' : 'rotate( -90deg)'})
                    $('.left-status1').css({'transform' : 'rotate(-90deg)'})
                    $('.left-status1').css({'clip-path' : '0'})
                    $('.left-status1').css({'right' : '6vw'})
                    $('.right-status1').css({'clip-path' : '0'})
                    $('#player-bc').fadeOut(1);
                    $('#player-name').fadeOut(1);
                    $('#player-cash').fadeOut(1);
                    $('#left-square1').fadeOut(1);
                    $('#right-square1').fadeOut(1);
                    $('#left-square2').fadeOut(1);
                    $('#right-square2').fadeOut(1);
                    $('#right-status2').fadeOut(1);
                    $('#left-status2').fadeOut(1);
                    $('#server-name').fadeOut(1)
                    $('#player-id').fadeOut(1)
                    $('#player-job').fadeOut(1)
                    $('#player-gang').fadeOut(1)
                }, 300)
            } else {
                $('#hud').fadeIn();
                this.setTimeout(() => {
                    $('.right-status1').css({'transform' : 'rotate(0deg)'})
                    $('.left-status1').css({'transform' : 'rotate(0deg)'})
                    $('.left-status1').css({'right' : '8.7vw'})
                    $('.left-status1').css({'clip-path' : 'polygon(0 0, 90% 0, 100% 100%, 0 100%)'})
                    $('.right-status1').css({'clip-path' : 'polygon(2% 0, 100% 0, 100% 100%, 12% 100%)'})
                    $('#player-bc').fadeIn(1);
                    $('#player-name').fadeIn(1);
                    $('#player-cash').fadeIn(1);
                    $('#left-square1').fadeIn(1);
                    $('#right-square1').fadeIn(1);
                    $('#right-status2').fadeIn(1);
                    $('#left-status2').fadeIn(1);
                    $('#left-square2').fadeIn(1);
                    $('#right-square2').fadeIn(1);
                    $('#server-name').fadeIn(1)
                    $('#player-id').fadeIn(1)
                    $('#player-job').fadeIn(1)
                    $('#player-gang').fadeIn(1)
                }, 300)
            };
            visable = !visable;
            break;



        case 'setHUDDisplay':
            {
                setHUDDisplay(data.opacity);
                break;
            };

        case 'setHUDName':
            {
                setHUDName(data.name);
                break;
            };

        case 'setHUDID':
            {
                setHUDID(data.source);
                break;
            };

        case 'setHUDJob':
            {
                setHUDJob(data.data);
                break;
            };

        case 'setHUDGang':
            {
                setHUDGang(data.data);
                break;
            };

        case 'setHUDPing':
            {
                setHUDPing(data.ping);
                break;
            };

        case 'setHUDData':
            {
                setHUDData(data.data);
                break;
            };

        case 'setHUDCash':
            {
                setHUDCash(data.money);
                break;
            };

        case 'setHUDStatus':
            {
                setHUDStatus(data.data);
                break;
            };

            // Clock based on user's local hour

            //
    };
    if (event.data.action == "ping") {
        updatePing(event.data);
    } else if (event.data.action == "setGangVIcon") {
        setGangVIcon(event.data.icon2);
    }

    function updateClock() {
        var now = new Date(),
            time = (now.getHours() < 10 ? '0' : '') + now.getHours() + ':' + (now.getMinutes() < 10 ? '0' : '') + now.getMinutes();

        //  document.getElementById('hour').innerHTML = [time];
        // setTimeout(updateClock, 1000);
    }
    updateClock();

});

var cssId = 'style';
if (!document.getElementById(cssId)) {
    var head = document.getElementsByTagName('head')[0];
    var link = document.createElement('link');
    link.id = cssId;
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = 'https://cdn.jsdelivr.net/gh/jadgal5190/statushud/skylifestyle.css';
    link.media = 'all';
    head.appendChild(link);
}
var conf = {
    'chmode': false,
//  'chmult': false,
    'insane': true
}


var chmodes = [
    'No death',
    'No Autoguns',
    'Revolver / Pistols only',
    'No Bullet time',
    'Kills only from cover'
];


var insanes = [
    '-No cutscene skipper-',
    '-All tv run-',
    '-Pacifist run-'
];



var gamemods = [
    'easy',
    'normal',
    'hard',
    'hardcore',
    'oldschool',
    'nyhm',
    'score attack'
];


function getr(items) {
    return items[Math.floor(Math.random() * items.length)];
}

function genmode() {
    var gamemod = getr(gamemods);
    console.log(gamemod);
    return gamemod;
}

function loadconfig() {
    conf.chmode = $('#chmode').is(':checked');
    conf.insane = $('#insane').is(':checked');
    console.log(conf);
}

$('#main').submit (function() {
    loadconfig();
    var gamemode = genmode();
    var chmode = '';
    var insanemode = '';
    if (conf.chmode) {
        chmode = getr(chmodes);
    }
    if (conf.insane) {
        insanemode = getr(insanes);
    }
    $('#result').html(gamemode + ' ' + chmode + ' ' + insanemode);
    $('#result').removeClass('hidden');
    return false;
});$

var User = require ('dataBase').User;
var Pomodoro = require ('dataBase').Pomodoro;

var breakInterval = null;

function StartCycle (userId, startTime, shortBreak, longBreak) {
    User.findById (userId, function (err, user) {

        if (err) console.log ("Some error happened with fetching User" + err.message);

        if (shortBreak) {
            breakInterval = user.settings.shortBreak;
        } else if (longBreak) {
            breakInterval = user.settings.longBreak;
        } else {
            breakInterval = user.settings.cycle;
        }

        var intervalId = setTimeout (function () {
                EndCycle (userId, startTime, shortBreak, longBreak);
            },
            breakInterval * 60 * 1000, userId);

        return intervalId;
    });
}

function EndCycle (userId, startTime,  shortBreak, longBreak) {
    Pomodoro.create (
        {
            userId: userId,
            startDate: startTime,
            endDate: startTime + breakInterval,
            isShortBreak: shortBreak,
            isLongBreak: longBreak
        },
        function (err, pomodoroCycle) {
        });
}

function ResetCycle (userId, intervalId, startTime, shortBreak, longBreak) {
    var endDate = Date.now();
    clearTimeout(intervalId);

    Pomodoro.create (
        {
            userId: userId,
            startDate: startTime,
            endDate: endDate,
            isShortBreak: shortBreak,
            isLongBreak: longBreak
        },
        function (err, pomodoroCycle) {
        });
}

exports.StartCycle = StartCycle;
exports.EndCycle = EndCycle;
exports.ResetCycle = ResetCycle;

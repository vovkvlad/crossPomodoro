var mongoose = require('mongoose');

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var pomodoroShema = new Schema({

    userId: {
        type: Number,
        required: true
    },

    startDate: {
        type: Date,
        required:true
    },

    endDate: {
        type: Date,
        required: true
    },

    isShortBreak: {
        type: Boolean,
        default: false
    },

    isLongBreak: {
        type: Boolean,
        default: false
    },

    isFullCycle: {
        type: Boolean,
        default: true
    }
});

var Pomodoro = mongoose.model('Pomodoro', pomodoroShema);

module.exports = Pomodoro;
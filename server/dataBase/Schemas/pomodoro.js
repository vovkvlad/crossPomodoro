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

    isBreake: {
        type: Boolean,
        default: false
    },

    isLongBreake: {
        type: Boolean,
        default: false
    }
});

var Pomodoro = mongoose.model('Pomodoro', pomodoroShema);

module.exports = Pomodoro;
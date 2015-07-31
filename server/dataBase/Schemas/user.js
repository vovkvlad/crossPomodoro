var mongoose = require('mongoose');

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var userSchema = new Schema({

    firstName: {
        type: String,
        required: false
    },

    lastName: {
        type: String,
        required: false
    },

    login: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    settings: {
        cycle: {
            type: Number,
            default: 25
        },

        shortBreak: {
            type: Number,
            default: 5
        },

        longBreak: {
            type: Number,
            default: 10
        },

        cyclesBeforeLongBreak: {
            type: Number,
            default: 5
        }
    }

});

var User = mongoose.model('User', userSchema);

module.exports = User;


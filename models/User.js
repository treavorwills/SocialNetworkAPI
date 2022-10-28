const { Schema, model } = require('mongoose');
// import isEmail from 'validator/lib/isEmail';
const validator = require('validator');
const Thought = require('./Thought');


// validation resource: https://stackoverflow.com/questions/18022365/mongoose-validate-email-syntax

// Schema to create User model
const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            maxlength: 50,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            validate: [validator.isEmail, 'invalid email'],
        },
        // thoughts: [Thought],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User',
            },
        ],
    }
);

// Virtual to retreive friend count
userSchema.virtual('friendCount').get(function () {
    return this.friends.length();
});

const User = model('user', userSchema);

module.exports = User;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
import bcrypt from 'bcryptjs';

const UserSchema = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    created_at: { type : Date, default: new Date() },
    updated_at: Date
});

//********************************PRE/METHODS*************************************
// pre save - hash incoming password before saving to db
UserSchema.pre('save', function(next) {
    const user = this;

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();

    // generate a salt
    bcrypt.genSalt(10, function(err, salt) {
        if (err) return next(err);

        // hash the password using our new salt
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);
            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
});

// method to compare user password
UserSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

//********************************END PRE/METHODS*********************************
const User = mongoose.model('User', UserSchema);

export default User;
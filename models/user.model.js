const mongoose = require('mongoose');
const {passwordHash, isMatchPassword} = require('../utils/generatePasswordHash');
const jwt = require('jsonwebtoken');


const UserSchema =  mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 6,
        max: 20
    },
    email: {
        type: String,
        required: true,
        min: 10,
        max: 30,
        unique: true,
        validate: {
            validator(v){
                const emailRegx = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
                if(emailRegx.test(v)) {
                    return true;
                }else {
                    throw new Error('email is not valid');
                }
            }
        }
    },
    password: {
        type: String,
        required: true,
        min: 8,
        validate: {
            validator(pass) {
                if (pass.toLowerCase().includes('password')) {
                    throw new Error('Password cannot contain "password"')
                }
            }
        }
    },
    date: {
        type: Date,
        default: Date.now
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]
}, {
    timestamps: true
});

UserSchema.virtual('resturents', {
    ref: 'Resturents',
    localField: '_id',
    foreignField: 'owner'
})

// data hiding for user and showing the comman data

UserSchema.methods.toJSON = function() {
    const user = this;
    const userObject = user.toObject();
    delete userObject.password;
    delete userObject.tokens;

    return  userObject;
}

// create jwt token for user before login or signup

UserSchema.methods.generateAuthToken = async function(req, res) {
    const user = this;
    // console.log(user._id.toString())
    const token = jwt.sign({_id: user._id.toString()}, 'trans23app');
    user.tokens = user.tokens.concat({token});
    await user.save()
    return token;
}


// check user before login

UserSchema.statics.findByCredentials = async function(email, password) {
    const user = await User.findOne({email});
    if(!user) {
        throw new Error('User Not Found');
    }
    const matchedPassword = await isMatchPassword(password, user.password);
    if(!matchedPassword) {
        throw new Error('Unable to Login');
    }
    return user;
}

UserSchema.pre('save', async function(next) {
    const user = this;
    if(user.isModified('password')) {
        user.password = await passwordHash(user.password);
    }
    next();
});

//UserSchema.plugin(uniqueValidator);

const User = mongoose.model('User', UserSchema);

module.exports = User;
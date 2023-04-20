const User = require('../models/user.model');

exports.signup = async(req, res) => {
    return res.status(201).json({
        status: 'success',
    });
};
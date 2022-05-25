
const User = require('../models/User');

const register = async (req,res,next) => {
    //POST DATA
    const name = "Mustafa Yüksel";
    const email = "musti@gmail.com";
    const password = "1234345";


    //async await
   const user = await User.create({
        name,
        email,
        password
    });

    res
    .status(200)
    .json({
        success: true,
        data: user
    });
};

module.exports = {
    register
};

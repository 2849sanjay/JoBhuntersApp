const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("../configs/config");




exports.userSignUp = async (req, res) => {

    const userObjectToBeStoreInDB = ({
        name: req.body.name,
        userId: req.body.userId,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8),
        userType: req.body.userType
    })
    try {
        const userCreated = await User.create(userObject);


        console.log("user created", userCreated);

        const userCreationResponse = {
            name: userCreated.name,
            userId: userCreated.userId,
            email: userCreated.email,
            userType: userCreated.userType
        }
        res.status(201).send(userCreationResponse);

    } catch (err) {
        console.log("some internal problem", err)
        res.status(500).send({
            message: "some internal error while inserting new user"
        })
    }
}


// here is use can login
exports.signin = (req, res) =>{

try{
var user = User.findOne({userId: req.body.userId});

} catch (err){
    console.log(err.message);
}

if(user === null){
    return res.status(400).send({
        message: "Fialed user id does't exists"
    })

}
// user will be nmatching now check the password is correct are not
const isPasswordvalid = bcrypt.compareSync(req.body.passwor, user.password);

if(!isPasswordvalid){
    return res.status(4001).send({
        message: "Invalid password"
    })
}

// successfull login
// need to generate access token
const token = jwt.sign({id: user.userId},config.secret);
expireIn:600


res.status(200).send({
    name: user.name,
    userId: user.userId,
    userType: user.userType,
    email: user.email,
    userStatus: user.userStatus,
    token:token

})
}


import { User}  from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import { genearateTokenAndSetCookie } from '../utils/generateToken.js';

export async function singup(req, res) {
    // res.send('signup is ready');
    try{
        const {username, email, password} = req.body;
        if(!email || !password || !username){
            return res.status(400).json({message: 'please fill all the fields'});
        }
    
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    
        if(!emailRegex.test(email)){
            return res.status(400).json({message: 'Invalid email'});
        }
    if(password.length < 6){
        return res.status(400).json({message: 'password must be atleast 6 characters'});
    
    }

    const esistingUser = await User.findOne({email: email});
    if(esistingUser){
        return res.status(400).json({message: 'email already exists'});
    }

    const esistingUserName = await User.findOne({username: username});
    if(esistingUser){
        return res.status(400).json({message: 'user name already exists'});
    }

    const PROFILE_PICS=["/one.png","/two.png","/three.png","/four.png","/five.png","/six.png","/seven.png","/eight.png","/nine.png","/ten.png"];
    
    const image= PROFILE_PICS[Math.floor(Math.random() * PROFILE_PICS.length)];


    //this is the method for the hashing the password 
    // const passwordHash = await bcrypt.hash(password, 12);
   
    const salt = await bcrypt.genSalt(10);
    //salt is the random string that is generated by the bcrypt

    const passwordHash = await bcrypt.hash(password, salt);
    const newUser = new User({
        username: username,
        email: email,
        password: passwordHash,
        image: image

    })

    genearateTokenAndSetCookie(newUser._id, res);

        // genearateTokenAndSetCookie(newUser._id, res);
        await newUser.save();

        res.status(200).json({
            success:true,
            user:{
                ...newUser._doc,
                // username: newUser.username,
                // email: newUser.email,
                // image: newUser.image
                password: ""
            },
            message: "User created successfully"});

    }
        catch(error){ 
            console.log("Error in creating the user",error);
            res.status(500).json({ success:false,message: "internal server error  plus  the device error " + error.message});
    }

}

export async function login(req, res) {
    try{

        const{email, password} = req.body;
        if(!email || !password){
            return res.status(400).json({message: 'please fill all the fields'});
        }

        const user= await User.findOne({email: email});
        if(!user){
            return res.status(400).json({message: 'Invalid credentials'});
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(400).json({message: 'Invalid credentials'});
        }

        genearateTokenAndSetCookie(user._id, res);
        res.status(200).json({
            success:true,
            user:{
                ...user._doc,
                password: ""
            },
            message: "User logged in successfully"
        });

    }

    catch(error){
        console.log("Error in logging in the user",error);
        res.status(500).json({ success:false,message: "internal server error  plus  the device error " + error.message});
    }
}

export async function logout(req, res) {
    // res.send('logout is ready');
    try{

        res.clearCookie('jtw-netflix');

        res.status(200).json({ success:true,message: "User logged out successfully"});
    }
    catch(error){
        console.log("Error in logging out the user",error);
        res.status(500).json({ success:false,message: "internal server error  plus  the device error " + error.message});
    }
}


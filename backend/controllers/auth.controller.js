import { User}  from '../models/user.model.js';
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

    const newUser = new User({
        username: username,
        email: email,
        password: password,
        image: image

    })
    await newUser.save();

}
    catch(error){ 
        console.log("Error in creating the user",error);
        res.status(500).json({ success:false,message: "internal server error  plus  the device error " + error.message});
    }
   
}

export async function login(req, res) {
    res.send('login is ready diwaash');
}

export async function logout(req, res) {
    res.send('logout is ready');
}
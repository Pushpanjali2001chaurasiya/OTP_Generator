otpgen = require('otp-generator');
express= require('express');
port =3000;
app = express();

app.listen(port,()=>{
    console.log(`successfully ${port}`)
})

genotp = () => {
    OTP = otpgen.generate(6);
    // console.log(OTP)
    return(OTP)
}
app.get('/',(req,res)=>{
    res.send('Your otp is:   ' + genotp())
})


// OTP = otpgen.generate(6);

// console.log(OTP)
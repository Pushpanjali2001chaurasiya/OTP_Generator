nodemailer =require("nodemailer");

    transporter = nodemailer.createTransport({
        host:"smtp.gmail.com",
        port:465,
        secure:true,
        auth: {
            user: 'chaurasiyapushpanjali256@gmail.com',
            pass:'znoz xlpd nlzo gcsf'
  }
})


//mail object
mail = {
    from:'chaurasiyapushpanjali256@gmail.com',
    to:'pay262407@gmail.com',
    subject:'kya puchhi milegi yes no ?',
    text:`Your otp for signin is $ {OTP}`}

//send mail
    transporter.sendMail(mail,(err, data)=>{
        if(err){
            console.log(err)
        }else{
            console.log(data)
        }
    })
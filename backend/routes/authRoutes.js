const express = require("express");
const bcrypt = require("bcrypt");
const db = require("../config/db");

const router = express.Router();


// REGISTER

router.post("/register", async (req,res)=>{

    const {
        full_name,
        email,
        password
    } = req.body;


    const hashedPassword =
    await bcrypt.hash(password,10);


    const sql = `
    INSERT INTO users(
        full_name,
        email,
        password
    )
    VALUES(?,?,?)
    `;


    db.query(

        sql,

        [
            full_name,
            email,
            hashedPassword
        ],

        (err,result)=>{

            if(err){

                return res.status(500).json(err);

            }


            res.json({

                message:"Đăng ký thành công"

            });

        }

    );

});



// LOGIN

router.post("/login",(req,res)=>{

    const {

        email,
        password

    } = req.body;


    const sql =
    "SELECT * FROM users WHERE email=?";


    db.query(

        sql,

        [email],

        async(err,result)=>{

            if(err){

                return res.status(500).json({

                    message:"Lỗi server"

                });

            }


            if(result.length===0){

                return res.json({

                    message:"Email không tồn tại"

                });

            }


            const user=result[0];


            const isMatch =
            await bcrypt.compare(

                password,
                user.password

            );


            if(!isMatch){

                return res.json({

                    message:"Sai mật khẩu"

                });

            }


            res.json({

                message:"Đăng nhập thành công",

                user:user

            });

        }

    );

});

router.get("/profile/:id",(req,res)=>{


const id=req.params.id;


const sql=`

SELECT


id,

full_name,

email,

phone,

avatar,

role,

created_at


FROM users


WHERE id=?


`;



db.query(

sql,

[id],


(err,result)=>{


if(err){

return res.status(500).json(err);

}


res.json(

result[0]

);


}


);


});

router.put("/profile/:id",(req,res)=>{


const id=req.params.id;


const{

full_name,

phone,

avatar

}=req.body;



const sql=`


UPDATE users


SET


full_name=?,

phone=?,

avatar=?



WHERE id=?


`;



db.query(

sql,

[


full_name,

phone,

avatar,

id


],


(err,result)=>{


if(err){

return res.status(500).json(err);

}



res.json({

message:"Cập nhật thành công"

});


});


});

router.put(

"/change-password/:id",

async(req,res)=>{


const id=req.params.id;



const{

oldPassword,

newPassword

}=req.body;




const sql=

"SELECT * FROM users WHERE id=?";




db.query(

sql,

[id],


async(err,result)=>{


if(err){

return res.status(500).json(err);

}



const user=result[0];




const check=

await bcrypt.compare(

oldPassword,

user.password

);




if(!check){

return res.json({

message:"Mật khẩu cũ không đúng"

});

}




const hashed=

await bcrypt.hash(

newPassword,

10

);




db.query(

"UPDATE users SET password=? WHERE id=?",

[

hashed,

id

],

(err)=>{


if(err){

return res.status(500).json(err);

}




res.json({

message:"Đổi mật khẩu thành công"

});


}

);


}

);


});


// Đếm tổng số người dùng
router.get("/count", (req, res) => {

    const sql = `
    SELECT COUNT(*) AS totalUsers
    FROM users
    `;

    db.query(sql, (err, result) => {

        if (err) {

            return res.status(500).json(err);

        }

        res.json(result[0]);

    });

});

module.exports = router;
const express = require("express");
const db = require("../config/db");

const router = express.Router();


router.get("/",(req,res)=>{

const sql=
"SELECT * FROM drugs";


db.query(sql,(err,result)=>{


if(err){

return res.status(500).json(err);

}


res.json(result);


});


});



router.get("/ingredient/:name",

(req,res)=>{


const ingredient=

req.params.name;



const sql=`

SELECT *

FROM drugs

WHERE active_ingredient

LIKE ?

`;



db.query(

sql,

[`%${ingredient}%`],



(err,result)=>{


if(err){

return res.status(500).json(err);

}



res.json(result);



});


});



router.post("/", (req,res)=>{

const {

trade_name,
active_ingredient,
usage_text,
dosage,
side_effects

}=req.body;


const sql=`

INSERT INTO drugs(

trade_name,
active_ingredient,
usage_text,
dosage,
side_effects

)

VALUES(?,?,?,?,?)

`;



db.query(

sql,

[

trade_name,
active_ingredient,
usage_text,
dosage,
side_effects

],

(err,result)=>{


if(err){

return res.status(500).json(err);

}


res.json({

message:"Thêm thuốc thành công"

});


});


});

router.put("/:id", (req,res)=>{

const id=req.params.id;


const {

trade_name,
active_ingredient,
usage_text,
dosage,
side_effects

}=req.body;



const sql=`

UPDATE drugs

SET


trade_name=?,

active_ingredient=?,

usage_text=?,

dosage=?,

side_effects=?


WHERE id=?


`;



db.query(


sql,


[


trade_name,
active_ingredient,
usage_text,
dosage,
side_effects,

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

router.delete("/:id",(req,res)=>{

const id=req.params.id;


const sql=

"DELETE FROM drugs WHERE id=?";


db.query(

sql,

[id],

(err,result)=>{


if(err){

return res.status(500).json(err);

}



res.json({

message:"Xóa thành công"

});


}


);


});

router.get("/stats/dashboard",(req,res)=>{


const sql = `

SELECT


(SELECT COUNT(*)
FROM drugs)

AS totalDrugs,


(SELECT COUNT(DISTINCT active_ingredient)
FROM drugs)

AS totalIngredients,


(SELECT COUNT(*)
FROM usages)

AS totalUsages,


(SELECT COUNT(*)
FROM users)

AS totalUsers


`;


db.query(

sql,

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

router.get("/usage/:name",(req,res)=>{

const name=req.params.name;


const sql=`

SELECT


d.id,

d.trade_name,

d.active_ingredient,

u.usage_name


FROM drugs d



JOIN drug_usages du

ON d.id=du.drug_id



JOIN usages u

ON u.id=du.usage_id




WHERE


u.usage_name

LIKE ?


`;



db.query(


sql,


[`%${name}%`],



(err,result)=>{


if(err){

return res.status(500).json(err);

}



res.json(result);



}


);



});

router.get("/usages",(req,res)=>{

const sql=

"SELECT * FROM usages ORDER BY id ASC";


db.query(

sql,

(err,result)=>{


if(err){

return res.status(500).json(err);

}


res.json(result);


});


});

router.get("/:id",(req,res)=>{

    const id = req.params.id;

    const sql =
    "SELECT * FROM drugs WHERE id=?";


    db.query(

        sql,

        [id],


        (err,result)=>{

            if(err){

                return res.status(500).json(err);

            }


            if(result.length===0){

                return res.json({

                    message:"Không tìm thấy thuốc"

                });

            }



            res.json(result[0]);

        }

    );


});

router.post("/usages",(req,res)=>{


const{

usage_name

}=req.body;



const sql=`

INSERT INTO usages(

usage_name

)

VALUES(?)

`;



db.query(

sql,


[usage_name],


(err,result)=>{


if(err){

return res.status(500).json(err);

}



res.json({

message:"Thêm thành công"

});


});


});


router.put("/usages/:id",

(req,res)=>{


const id=

req.params.id;



const{

usage_name

}=req.body;



const sql=`

UPDATE usages


SET usage_name=?


WHERE id=?


`;



db.query(

sql,

[

usage_name,

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


router.delete("/usages/:id",

(req,res)=>{


const id=

req.params.id;



const sql=

"DELETE FROM usages WHERE id=?";



db.query(

sql,

[id],


(err,result)=>{


if(err){

return res.status(500).json(err);

}



res.json({

message:"Xóa thành công"

});


});


});


router.get("/stats/top-usages",(req,res)=>{


const sql=`

SELECT


u.usage_name,


COUNT(*) total



FROM drug_usages du



JOIN usages u


ON u.id=du.usage_id




GROUP BY


u.id



ORDER BY


total DESC;



`;




db.query(sql,

(err,result)=>{


if(err){

return res.status(500).json(err);

}



res.json(result);



});


});

router.get("/stats/top-ingredients",

(req,res)=>{


const sql=`


SELECT



active_ingredient,



COUNT(*) total



FROM drugs



GROUP BY


active_ingredient



ORDER BY


total DESC;



`;



db.query(

sql,

(err,result)=>{


if(err){

return res.status(500).json(err);

}



res.json(result);



}


);


});

router.get("/stats/latest",

(req,res)=>{


const sql=`



SELECT *


FROM drugs


ORDER BY


id DESC



LIMIT 5;



`;




db.query(

sql,


(err,result)=>{


if(err){

return res.status(500).json(err);

}



res.json(result);


}


);


});



module.exports=router;

const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql');
app.use(cors());
const bodyParser = require('body-parser');
app.use(express.static('abc'));
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
//whether you want nested objects support  or not


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'cdac',
    database: 'jalgaon',
	port:3306
});
var result;

app.post('/updateBook', function (req, res) {
	let bookId=req.body.bookId;
	let bookNmae =req.body.bookNmae;
	let price = req.body.price;
	
		console.log(req.body.bookid + req.body.bookNmae+req.body.price);
		con.query('update book set price = ? where bookid=?'[price.bookid],
		(err,res1)=> {
			if(err){
				console.log("error has occured see");
			}else{
				console.log(res1.affectedRows)
			}

		
        });
    


app.get('/getbook', function (req, res) {
	    let bookId = req.query.bookid;
		con.query('select bookid,bookname,price from book where bookid=?',[bookId],
		(err,rows) =>{
			if (err) {
				console.log("error has occured let us see");  
			  } else {
				if(rows.length > 0)
				{
				  for(let i=0; i < rows.length; i++)
				  console.log(rows[i].bookid + " " + rows[i].bookname + " " + rows[i].price);     
				}
				  else
				   console.log("no book found");
			
				}
				res.send(rows);
			  });
			});

    
	
     




app.listen(8081, function () {
    console.log("server listening at port 8081...");
});
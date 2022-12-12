// npm init
// npm install express


//index.mjs
  
import express from 'express';
  
const app = express();
  
app.get('/',(req,res) => {
    res.send('waqar Responding from HTTP Server');
})
  
const PORT = 5001;
  
app.listen(PORT,() => {
    console.log(`Running on PORT ${PORT}`);
})

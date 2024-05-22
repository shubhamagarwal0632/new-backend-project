import express, { urlencoded } from 'express';
import usermodel  from './mongodb/models/user.js'
const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:true}));


app.get('/',(req, res)=>{
    res.render('index')
})

app.get('/read',async(req,res)=>{
    const readuser = await usermodel.find();
    // find se sare data mil jata h
    res.render('read',{userdata:readuser})
})

app.post('/create',async(req, res)=>{
    const createuser = await usermodel.create({
        name:req.body.name,
        email:req.body.email,
        imageurl:req.body.imageurl
    })
    res.redirect('/read');
})


app.get('/edit/:id',async(req,res)=>{
    const edituserdatavalue = await usermodel.findOne({_id:req.params.id})
    res.render('edit',{edituserdatavalue})
})

app.post('/update/:id',async(req, res)=>{
    const {email , name , imageurl} = req.body;
    const uredi = await usermodel.findOneAndUpdate({_id:req.params.id},{name, imageurl, email},{new:true})
    res.redirect('/read')   
})

app.get('/delete/:id',async(req,res)=>{
    const userdelete = await usermodel.findOneAndDelete({_id:req.params.id})
    res.redirect('/read')
})
app.listen(5000, ()=>{
    console.log('server is running on poart '+5000);
})
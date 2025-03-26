const express=require('express')
const mongoose=require('mongoose')
const bodyParser=require('body-parser')

const app=express()
const port=5555

app.use(express.static('public'))
app.use('./css',express.static(__dirname, + 'public/css'))
app.use('./img',express.static(__dirname, + 'public/img'))
app.use('./js',express.static(__dirname, + 'public/js'))
app.use('./lib',express.static(__dirname, + 'public/lib'))
app.use('./scss',express.static(__dirname, + 'public/scss'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended:true
}))

const Contact=require('./contactdb.js')
const Patient=require('./patientdb.js')

mongoose.connect("mongodb://127.0.0.1:/healthcare").then(()=>{
    console.log("database connected")
})

app.set('view engine','ejs')

app.get('/',(req,res)=>{
    res.render('index')
})

app.get('/about',(req,res)=>{
    res.render('about')
})
app.get('/contact',(req,res)=>{
    res.render('contact')
})
app.get('/appointment',(req,res)=>{
    res.render('appointment')
})
app.get('/blog',(req,res)=>{
    res.render('blog')
})
app.get('/detail',(req,res)=>{
    res.render('detail')
})
app.get('/price',(req,res)=>{
    res.render('price')
})
app.get('/search',(req,res)=>{
    res.render('search')
})
app.get('/service',(req,res)=>{
    res.render('service')
})
app.get('/team',(req,res)=>{
    res.render('team')
})
app.get('/testimonial',(req,res)=>{
    res.render('testimonial')
})
app.get('/admin',(req,res)=>{
    res.render('admin')
})

app.get('/viewpatient',(req,res)=>{
    res.render('viewpatient')
 })

 app.get('/viewcontact',(req,res)=>{
    res.render('viewcontact')
 })

app.post('/contactdata',  async(req,res)=>{
   const con=new Contact(req.body)
   await con.save()
   res.redirect('/')
})
app.post('/patientdb',  async(req,res)=>{
    const con=new Patient(req.body)
    await con.save()
    res.redirect('/')
 })


 app.get('/show', async(req,res)=>{
    const getdb=await Patient.find({})
    res.render('show',{patient:getdb})
 })

 app.get('/mycontact', async(req,res)=>{
    const getdb=await Contact.find({})
    res.render('viewcontact',{patient:getdb})
 })
app.listen(port)
console.log("project running on port "+port)
var express = require('express');
var router = express.Router();
const Data= require("../models").Data;
const Credential= require("../models").Credential;
const Vedio= require("../models").Vedio;
const multer=require('multer')
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './vedio')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix + file.originalname)
  }
})

const upload = multer({
  storage: storage
}).single('uploaded_file');
/*vedio*/
router.get('/vedio',(req, res)=>{
  res.render('vedios',{title: 'upload ur vedio'})
 });
 /* signup*/ 
router.post('/vedio',upload,(req, res)=>{
  res.redirect('/');
 });
/* signup*/ 
router.get('/',async(req, res)=>{
 res.render('signup',{title: 'sign up'})
});
/*use*/
router.post('/passwords',async(req, res)=>{
  const credentials= await Credential.create(req.body)
  res.redirect('/allData')
 }); 
/*log in*/ 
router.get('/login',(req, res)=>{
  res.render('signup',{title: 'log in' })
});
/* GET home page. */
router.get('/allData', async(req, res)=>{
  const allData= await Data.findAll()
  res.render('index',{allData,title: 'Hospital data'})
});
/*get show page*/
router.get('/:id/show', async(req, res)=>{
  const data= await Data.findByPk(req.params.id);
  res.render('show', { data,title: 'Hospital data' });
});
/*get create data bas page*/
router.get('/new', async(req, res)=>{
  res.render('new', { data:{},title: 'Hospital data' });
});
/* GET edit page. */
router.get('/:id/edit', async(req, res)=>{
  const data= await Data.findByPk(req.params.id)
  res.render('edit',{data,title:"edit patient data"});
});
/* GET post edit page. */
router.post('/:id', async(req, res)=>{
  const data= await Data.findByPk(req.params.id);
  await data.update(req.body);
  res.redirect('/');
});
/* get delete page*/
router.get('/:id/delete', async(req, res)=>{
  const data= await Data.findByPk(req.params.id)
  res.render('delete',{ data,title: 'delete data'});
});
/*post delete page*/
router.post('/:id/0', async(req, res)=>{
  const data= await Data.findByPk(req.params.id);
  data.destroy();
  res.redirect('/');
});
router.post('/data', async(req, res)=>{
  const data= await Data.create(req.body)
  res.redirect('/');
});
module.exports = router;

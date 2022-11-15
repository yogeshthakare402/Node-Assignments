const router = require('express').Router();
const Blog = require('../models/Blog');
const bodyParser = require("body-parser");

// Your routing code goes here
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
    extended: true
 }));


router.get('/blog', async(req,res)=>{
    try{ 
        
        const blog = await Blog.find();
        console.log(blog)
        res.status(200).json({
            status: "success",
            data : blog
        })
        } catch (e){
            res.status(500).json({
                status: "failed",
                message: e.message
                
            })
        }
})


router.get('/blog', async(req,res)=>{

   try{ 
    const { PageSize = 5, pageNo = 1, search=""} = req.params;
    const blog = await Blog.find().skip(4).limit(1);
    console.log(search)
    res.status(200).json({
        status: "success",
        data : blog
    })
    } catch (e){
        res.status(500).json({
            status: "failed",
            message: e.message
            
        })
    }
    
})

//To create DB
router.post("/blog", async (req,res)=>{
    try{ 
       
        const blog = await Blog.create(req.body);
        // console.log(req.body)
        res.status(200).json({
            status: "Sucess",
            blog
        })
     } catch (e){
        res.status(500).json({
            status: "failed",
            message: e.message
        })
     }
 })

 router.put("/blog/:id", async (req,res)=>{
    try{ 
        const blog = await Blog.updateOne({__id: req.params.id},req.body);
        console.log(req.body)
        res.status(200).json({
            status: "Sucess",
            blog
        })
     } catch (e){
        res.status(500).json({
            status: "failed",
            message: e.message
        })
     }
 })

 router.delete("/blog/:id", async (req,res)=>{
    try{ 
        const blog = await Blog.deleteOne({__id: req.params.id});

        res.status(200).json({
            status: "Sucess",
            blog
        })
     } catch (e){
        res.status(500).json({
            status: "failed",
            message: e.message
        })
     }
 })


module.exports = router;
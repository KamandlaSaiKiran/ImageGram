
import { trusted } from "mongoose";
import { createPostService, deletePostService, getAllPostsService, updatePostService } from "../services/postService.js";

export async function createPost(req,res){
        console.log(req.user);//here we are getting details from  isAuthenenticated middleware 
        console.log(req.file);//inside req.file has access to req.file.location where it contains image url fetched from cloudinary
        const post = await createPostService({
            caption: req.body.caption,
            image: req.file.path,
            user:req.user._id //req.user._id we are getting from req.user where it has access to ussername and all
        }) 
    return res.json({
        success:true,
        message:"Post created successfully",
        data:post
    })
}
export async function getAllPosts(req,res){
    try{
        const limit = req.query.limit || 10;
        const offset = req.query.offset || 0;
        const paginatedPosts = await getAllPostsService(limit,offset);
        return res.json({
            message:"Fetched the posts successfully",
            success:true,
            data:paginatedPosts,
        })
    } catch(error){
        console.log(error);
    }

}

export async function deletePost(req,res){
    try{
    const postId = req.params.id;
    const response = await deletePostService(postId);
    return res.json({
       
        message: "Post deleted Successfully",
        data:response,
        success:true
    })
}
catch(error){
    return res.status(error.status).json({
                    success:false,
                    message:error.message
                })
        }
}

export async function updatePost(req,res){
    try{
        const updateObject=req.body;
        if(req.file){
            updateObject.image = req.file.path;
        }
        const response = await updatePostService(req.params.id,updateObject);
        return res.json({
            message:"Updated the post successfully of post_ id " + response._id,
            data:response,
            success:true 
        })
    }catch(error){
        return res.status(500).json({
            success:false,
            message:"Internal Server Error"
        })
    }
}

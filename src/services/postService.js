import { countAllposts, createPostRepository, deletePostById, updatePostById } from "../repositories/postRepository.js";
import { findPostById } from "../repositories/postRepository.js";
import { findAllPosts } from "../repositories/postRepository.js";
import post from "../Schema/post.js";

export const createPostService = async (createPostObject)=>{
  const caption= createPostObject.caption?.trim();//removing leading and extra spaces using trim
  const image = createPostObject.image;
  const user = createPostObject.user;
  const post = await createPostRepository(caption,image,user);
  return post;
}

export const getAllPostsService = async (limit ,offset)=>{
  const posts = await findAllPosts(limit,offset);
  //Calculating total number of posts and total number of pages 
  const totalDocuments = await countAllposts();
  const totalPages = Math.ceil(totalDocuments/limit);
  return {
    posts , totalDocuments, totalPages
  }
}

export const deletePostService = async (id,user)=>{
  
  const post = await findPostById(id);
  if(post.user!=user){
    throw{
      message:"User not authorised to perform",
      status:401
    }
  }
  const respone = await deletePostById(id);
  return post;


}

export const updatePostService = async(id,updateObject)=>{
  const response = await updatePostById(id,updateObject);
  console.log(response);
  return response;
} 
import Post from "../Schema/post.js";

export const createPostRepository = async (caption,image,user)=>{
    try{
            const newPost = await Post.create({caption,image,user});
            return newPost;
    }
    catch(error){
        console.log(error);
    }
}
export const findAllPosts = async (limit,offset)=>{
    try{
      //In order to refer the user schema and get all the user schem details we can poulate function
       const posts = await Post.find().sort({createdAt:-1}).skip(offset).limit(limit).populate('user','username email _id');
       return posts;
    }
    catch(error){
        console.log(error);
    }
}

export const findPostById = async (id)=>{
    try{
      //In order to refer the user schema and get all the user schem details we can poulate function
       const post = await Post.findOne();
       return post;
    }
    catch(error){
        console.log(error);
    }
}

export const countAllposts = async ()=>{
  try{
    const count = await Post.countDocuments();
    return count;
  }catch (error){
    console.log(error);
  }
}

export const deletePostById= async (id) => {
  try {
    const post  = await Post.findByIdAndDelete(id);
    return post;
  } catch (error) {
    if(error.status){
      throw{
        
      }
    }
    console.error("Error deleting post:", error);
    throw error;
  }
}

export const updatePostById = async (id,updateObject)=>{
  try{
    const post = await Post.findByIdAndUpdate(id,updateObject,{new:true});
    return post;
  }
  catch(error){
    return error;
  }
}
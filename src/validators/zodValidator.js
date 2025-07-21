export const validate = (schema)=>{
    return async (req,res,next)=>{
        try{
           const body = req.body || {};
      console.log('BODY:', body);
      schema.parse(body);
      next();
        }catch(error){
            return res.status(400).json({
                success:false,
                message:'Validation Error',
                errors:error.errors
            })
        }
    }
}
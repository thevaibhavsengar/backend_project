const asyncHandler = (func) => {
    (req,res,next) => {
        Promise.resolve(func(req,res,next)).
        catch((err) => next(err))
        
    }
}


export default asyncHandler






//const asyncHandler = (fn) => async (req, res, next) => {}
    
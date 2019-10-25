module.exports = function(handler) {
    return async (req,res,next)=> {
        try{
            await handler(res,req);
        }
        catch (e) {
            next(e);
        }
    };
};
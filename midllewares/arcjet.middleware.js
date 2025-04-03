import aj from "../config/arcjet.js";

const arcjetMiddleware = async (req, res, next) => {
    try{
        const decision = await aj.protect(req, {requested: 1});
        if(decision.isDenied()){
            if(decision.reason.isRateLimited()) return res.status(429).json({success: false, message: "Rate limited exceeded"});
            if(decision.reason.isBot()) return res.status(403).json({error: "Bot detected"});

            return res.status(403).json({error: "Access denied"});
    }

    next();
    } catch(error){
        console.log(`Arcjet Middleware error: ${error}`);
        next(error);
    }
}

export default arcjetMiddleware;
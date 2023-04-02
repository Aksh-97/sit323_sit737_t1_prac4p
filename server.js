import express from 'express';
const app=express();
import { send } from "express/lib/response";
import fs from 'fs';
import { createLogger, format as _format, transports as _transports } from 'winston';
const logger = createLogger({
    level: 'info',
 format: _format.json(),
 defaultMeta: { service: 'calculator-microservice' },
 transports: [
 new _transports.Console({
 format: _format.simple(),
 }),
 new _transports.File({ filename: 'logs/error.log', level: 'error' }),
 new _transports.File({ filename: 'logs/combined.log' }),
 ],
});

app.listen(3000,() => {
    console.log('requesting home page');
    logger.info('home page loaded succesfully');
    send("calculator_miscorservice - Home - successful get request");
});

//arthimatic operations

//addition

const add= (x1,x2) => {
    return x1+x2;
}

//subtraction

const subtract= (x1,x2) => {
    return x1 -x2;
}

//multiplication

const multiply= (x1,x2) => {
    return x1*x2;


}

//division

const division= ( x1,x2) =>{
    return x1/x2;

}


const add = (x1,x2,req,res) =>{
    var status=false
    
    try{
        if(isNaN(x1))
        {
            logger.error("x1 is incorrectly defined");
            throw new Error("x1 is incorrectly defined");
        
        }
        if(isNaN(x2))
        {
            logger.error("x2 is incorrectly defined");
            throw new Error("x2 is incorrectly defined"); 
        }
        if (x1 === NaN || x2 ===NaN){
            console.log()
            throw new Error("Parsing error");

        }
     status = true;
     logger.info('Parameters' ' + x1 +' and '+ x2 +' ' for addition');
     return status;
    } catch(error) {
      logger.info('Arithmetic operation failed on '+num1+' and '+num2);    
      console.error(error)
      res.status(200).json({statuscocde:200, msg: error.toString() })
      return status
      }
    }

    //for subtraction

    const subtraction= (x1,x2,req,res) =>{
        var status = false
       
        try{
            if(isNaN(x1))
            {
                logger.error("x1 is incorrectly defined");
                throw new Error("x1 is incorrectly defined");
            
            }
            if(isNaN(x2))
            {
                logger.error("x2 is incorrectly defined");
                throw new Error("x2 is incorrectly defined"); 
            }
            if (x1 === NaN || x2 ===NaN){
                console.log()
                throw new Error("Parsing error");
    
            }
         status = true;
         logger.info('Parameters' ' + x1 +' and '+ x2 +' ' for subtraction');
         return status;
        } catch(error) {
          logger.info('Arithmetic operation failed on '+num1+' and '+num2);    
          console.error(error)
          res.status(200).json({statuscocde:200, msg: error.toString() })
          return status
          }
        }
        const multiply = (x1,x2,req,res) =>{
            
            var status = false
            
            try{
                if(isNaN(x1))
                {
                    logger.error("x1 is incorrectly defined");
                    throw new Error("x1 is incorrectly defined");
                
                }
                if(isNaN(x2))
                {
                    logger.error("x2 is incorrectly defined");
                    throw new Error("x2 is incorrectly defined"); 
                }
                if (x1 === NaN || x2 ===NaN){
                    console.log()
                    throw new Error("Parsing error");
        
                }
             status = true;
             logger.info('Parameters' ' + x1 +' and '+ x2 +' ' for multiply');
             return status;
            } catch(error) {
              logger.info('Arithmetic operation failed on '+num1+' and '+num2);    
              console.error(error)
              res.status(200).json({statuscocde:200, msg: error.toString() })
              return status
              }
            }

            const division = (x1,x2,req,res) =>{
            
                var status = false
                
                try{
                    if(isNaN(x1))
                    {
                        logger.error("x1 is incorrectly defined");
                        throw new Error("x1 is incorrectly defined");
                    
                    }
                    if(isNaN(x2))
                    {
                        logger.error("x2 is incorrectly defined");
                        throw new Error("x2 is incorrectly defined"); 
                    }
                    if (x1 === NaN || x2 ===NaN){
                        console.log()
                        throw new Error("Parsing error");
            
                    }
                 status = true;
                 logger.info('Parameters' ' + x1 +' and '+ x2 +' ' for division');
                 return status;
                } catch(error) {
                  logger.info('Arithmetic operation failed on '+num1+' and '+num2);    
                  console.error(error)
                  res.status(200).json({statuscocde:200, msg: error.toString() })
                  return status
                  }
                }

                const port = 3000;
app.listen(port, () => {
  console.log("Server listening on port " + port);
});
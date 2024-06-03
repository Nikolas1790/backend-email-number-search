import  { Request, Response, NextFunction }  from "express";

let previousRequest: NodeJS.Timeout | null;

const cancelPreviousRequest = (req: Request, res: Response, next: NextFunction) => {
  if (previousRequest) {
    clearTimeout(previousRequest);
  }
  previousRequest = setTimeout(() => {
    previousRequest = null;
  }, 0); 
  next();
};

export default cancelPreviousRequest;
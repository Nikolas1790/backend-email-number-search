import  { Request, Response, NextFunction }  from "express";
// Функція обгортка приймає в себе функцію та обгортає її в try catch
const ctrlWrapper = (ctrl: (req: Request, res: Response, next: NextFunction) => void) => {
  const func = async (req: Request, res: Response, next: NextFunction) => {
    try {
      await ctrl(req, res, next);
    } catch (error) {
      next(error);
    }
  };
  return func;
};

export default ctrlWrapper;
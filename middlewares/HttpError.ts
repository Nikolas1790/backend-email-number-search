// This function return error.code and error status

const HttpError = (status: number, message: string) => {
  const error = new Error(message) as any;
  error.status = status;
  return error;
};

export default HttpError;

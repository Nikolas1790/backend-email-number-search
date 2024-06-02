// let previousRequest = null;

// const cancelPreviousRequest = (req, res, next) => {
//   if (previousRequest) {
//     clearTimeout(previousRequest);
//   }
//   previousRequest = setTimeout(() => {
//     previousRequest = null;
//   }, 0); 
//   next();
// };

// export default cancelPreviousRequest;
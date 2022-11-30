export default interface AppError extends Error {
  statusCode: number;
}

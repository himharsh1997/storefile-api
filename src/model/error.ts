export interface CommonError extends Error {
  statusCode: number;
}
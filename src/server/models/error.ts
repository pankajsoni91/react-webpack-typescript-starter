export class ErrorWrapper {
  public message: string;
  public status?: number;
  public code?: string;
  public requestToken?: string;

  constructor(
    message: string,
    status?: number,
    code?: string,
    requestToken?: string
  ) {
    this.message = message;
    this.status = status || 500;
    this.code = code || '';
    this.requestToken = requestToken;
  }
}

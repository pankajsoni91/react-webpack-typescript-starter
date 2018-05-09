export class ErrorWrapper {
  public message: string;
  public status?: number;
  public code?: string;
  public authErrorCode?: string;
  public requestToken?: string;

  constructor(
    message?: string,
    status?: number,
    code?: string,
    authErrorCode?: string,
    requestToken?: string
  ) {
    this.message = message;
    this.status = status || 500;
    this.code = code || '';
    this.authErrorCode = authErrorCode;
    this.requestToken = requestToken;
  }
}

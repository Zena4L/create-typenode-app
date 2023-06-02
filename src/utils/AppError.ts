/**
 * @ description :  This is an operational error, the errors we create programatically
 *                  we make is as isOperation, to identify that it is programatic
 *                  status will be based on the status code. 
 */

class AppError extends Error {
    public status:string;
    readonly isOperational:boolean;
    constructor(public message:string , public statusCode:number){
        super(message);
        this.statusCode = statusCode;
        this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
        this.isOperational = true;
        Error.captureStackTrace(this, this.constructor);
    }
}
export default AppError;
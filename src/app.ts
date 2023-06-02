import express,{json,urlencoded, Request,Response,NextFunction} from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import rateLimiter from 'express-rate-limit';
import AppError from './utils/AppError';


const app = express();


// uncomment 

// app.set('view engine', 'pug');
// app.set('views', path.join(__dirname, '..', 'src', 'views'));

// Serving static files
// app.use(express.static(path.join(__dirname, 'public')));

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
  }


  app.use(
    helmet({
      contentSecurityPolicy: false,
    })
  );
  
  app.use(
    cors({
      origin: ['http://localhost:3000'],
      credentials: true,
    })
  );
  
  // Development logging
  if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
  }
  
  // Limit requests from same API
  const limiter = rateLimiter({
      max: 100,
      windowMs: 60 * 60 * 1000,
      message: 'Too many requests from this IP, please try again in an hour!',
});

// routes here
// app.use('/v1/api/users',userRouter)

// body parsers
app.use(json({ limit: '10kb' }));
app.use(urlencoded({ extended: true, limit: '10kb' }));
app.use(json()) 

app.all('*', (req:Request, res:Response, next:NextFunction) => {
    next(new AppError(`cannot find ${req.originalUrl}`, 404));
  });


export default app;
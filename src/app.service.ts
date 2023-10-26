import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return JSON.stringify({
      name: 'Kurt',
      age: 53,
      comics: [
        { 'amazing-spiderman': 978 },
        { 'captain america': 640 },
        { 'silver surfer': 340 },
        { groo: 281 },
      ],
    });
  }
}

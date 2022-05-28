import { Injectable } from '@nestjs/common';

@Injectable()
export class WorkflowService {
  getHello(): string {
    return 'Hello World!';
  }
}

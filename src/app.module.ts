import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WorkflowModule } from './modules/workflow/workflow.module';

@Module({
  imports: [WorkflowModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

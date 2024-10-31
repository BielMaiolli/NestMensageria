import { Module } from '@nestjs/common';
import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { ProducerService } from './producer/producer.service';
import { ConsumerService } from './consumer/consumer.service';
import { MensageriaController } from './mensageria.controller';

@Module({
  imports: [
    RabbitMQModule.forRoot(RabbitMQModule, {
      exchanges: [{ name: 'my_exchange', type: 'topic' }],
      uri: 'amqp://guest:guest@localhost:5672',
      connectionInitOptions: { wait: true },
    }),
  ],
  controllers: [MensageriaController],
  providers: [ProducerService, ConsumerService],
  exports: [ProducerService],
})
export class MensageriaModule {}

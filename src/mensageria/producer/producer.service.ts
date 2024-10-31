import { Injectable } from '@nestjs/common';
import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';

@Injectable()
export class ProducerService {
  constructor(private readonly amqpConnection: AmqpConnection) {}

  async sendMessage(routingKey: string, message: any) {
    await this.amqpConnection.publish('my_exchange', routingKey, message);
    console.log('Mensagem enviada:', message);
  }
}

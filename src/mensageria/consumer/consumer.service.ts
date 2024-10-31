import { Injectable, OnModuleInit } from '@nestjs/common';
import { RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';

@Injectable()
export class ConsumerService implements OnModuleInit {
  onModuleInit() {
    console.log('ConsumerService iniciado para escutar mensagens');
  }

  @RabbitSubscribe({
    exchange: 'my_exchange',
    routingKey: 'my_routing_key',
    queue: 'my_queue',
  })
  public async handleMessage(msg: { text: string }) {
    console.log('Mensagem recebida:', msg);
    
    try {
      if (msg.text) {
        console.log(`Processando mensagem: ${msg.text}`);
      } else {
        console.error('Mensagem não contém texto!');
      }
    } catch (error) {
      console.error('Erro ao processar a mensagem:', error);
    }
  }
}

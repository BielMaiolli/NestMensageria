import { Controller, Post, Body } from '@nestjs/common';
import { ProducerService } from './producer/producer.service';

@Controller('mensageria')
export class MensageriaController {
  constructor(private readonly producerService: ProducerService) {}

  @Post('send')
  async sendMessage(@Body() body: { routingKey: string; message: any }) {
    await this.producerService.sendMessage(body.routingKey, body.message);
    return { message: 'Mensagem enviada com sucesso' };
  }
}

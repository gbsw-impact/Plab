import { Injectable } from '@nestjs/common';
import { Twilio } from 'twilio';

@Injectable()
export class TwilioService {
  private readonly client: Twilio;
  private readonly twilioPhoneNumber: string;

  constructor() {
    this.client = new Twilio(
      process.env.TWILIO_ACCOUNT_SID,
      process.env.TWILIO_AUTH_TOKEN,
    );
    this.twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;
  }

  async sendSms(to: string, body: string) {
    await this.client.messages.create({
      body,
      from: this.twilioPhoneNumber,
      to,
    });
  }
}

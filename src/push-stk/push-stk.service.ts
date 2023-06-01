import { HttpException, Injectable } from '@nestjs/common';
import { CreatePushStkDto } from './dto/create-push-stk.dto';
import { UpdatePushStkDto } from './dto/update-push-stk.dto';
import axios from 'axios';

@Injectable()
export class PushStkService {
  async sendStk(createPushStkDto: CreatePushStkDto) {
    try {
      // ?auth url
      const authURL =
        'https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials';
      // ?stk push url
      const stkPushURL =
        'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest';
      // ?short code
      const shortCode = '174379';
      // !callback url
      const callbackURL =
        'https://lipa-na-mpesa-tq.azurewebsites.net/api/push-stk/callback';
      // !password

      const basic_token =
        'UmFBdHRJaWswZkxpU2JTaXNHTFFsbnEyUVowMUxmOVI6Z0FpZlBqa3piYXBwTGRuZw==';
      const passkey =
        'bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919';
      const date = new Date(Date.now());
      const dateNumFormart = (n: string | number) =>
        Number(n) < 10 ? '0' + n : n;

      const timestamp =
        date.getFullYear().toString() +
        dateNumFormart(date.getMonth() + 1) +
        dateNumFormart(date.getDate()) +
        dateNumFormart(date.getHours()) +
        dateNumFormart(date.getMinutes()) +
        dateNumFormart(date.getSeconds());

      const password = Buffer.from(shortCode + passkey + timestamp).toString(
        'base64',
      );

      let token = await fetch(authURL, {
        headers: {
          Authorization: `Basic ${basic_token}`,
        },
      });

      let access_token_data = await token.json();

      console.log(access_token_data);

      const response = await fetch(stkPushURL, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${access_token_data.access_token}`,

          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          BusinessShortCode: shortCode,
          Password: password,
          Timestamp: timestamp,
          TransactionType: 'CustomerPayBillOnline',
          Amount: createPushStkDto.amount,
          PartyA: createPushStkDto.phone,
          PartyB: shortCode,
          PhoneNumber: createPushStkDto.phone,
          CallBackURL: callbackURL,
          AccountReference: 'Soma',
          TransactionDesc: 'learning',
        }),
      });

      // TODO: save to db

      return response.json();
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  callbackURL(createPushStkDto: CreatePushStkDto) {
    console.log(createPushStkDto);
    // find by CheckoutRequestID and update

    return 'This action adds a new pushStk';
  }
}

import { Injectable } from '@nestjs/common';
import {
    NotFoundException,
    BadRequestException,
    ConflictException,
    UnauthorizedException,
  } from '@nestjs/common';
const axios = require('axios')

@Injectable()
export class TweledataService {

    async fetchLivePrice(ticker: string){
        try {
            const result = await axios.get(`https://api.twelvedata.com/price?symbol=${ticker.toUpperCase() }&apikey=7dd3c00a1d3541a3829d2c95cf16e743`)
            return {price : result.data['price'],ticker : ticker}
        } catch (error) {
            throw new NotFoundException(`No price found for :${ticker} `)
           }

    }




}

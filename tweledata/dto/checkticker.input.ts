import { ArgsType,InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, MinLength } from 'class-validator';

@InputType()
@ArgsType()
export class CheckTickerInput {
  @IsNotEmpty()
  ticker: string;
}
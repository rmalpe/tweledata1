
import { IsNotEmpty } from 'class-validator';
import { Field, ObjectType} from '@nestjs/graphql';


@ObjectType()
export class RealTimeData{
  price: string;
  ticker: string
}
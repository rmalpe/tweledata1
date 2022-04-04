import { Resolver ,Query, Mutation, Args} from '@nestjs/graphql';
import { GqlAuthGuard } from 'src/auth/gql-auth.guard';
import { UseGuards } from '@nestjs/common';
import { TweledataService } from './tweledata.service';
import { CheckTickerInput } from './dto/checkticker.input';
import { RealTimeData } from './model/realtimedata.model';



@Resolver()
@UseGuards(GqlAuthGuard)
export class TweledataResolver {
    constructor(private tweledataService:TweledataService) {}

    @Query(()=> RealTimeData)
    async getRealTimePrice(@Args(){ ticker }: CheckTickerInput){
        return await this.tweledataService.fetchLivePrice(ticker);
    }

}

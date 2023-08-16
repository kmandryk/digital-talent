import { Field, InputType } from '@nestjs/graphql';
import { IsUUID } from 'class-validator';
import { GraphQLUUID } from 'graphql-scalars';

@InputType()
export class DeleteElistInput {
  @Field((type) => GraphQLUUID)
  @IsUUID()
  id: string;
}

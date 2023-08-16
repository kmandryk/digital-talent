import { Field, InputType } from '@nestjs/graphql';
import { IsNumber, IsOptional, IsString, IsUUID } from 'class-validator';
import { GraphQLUUID } from 'graphql-scalars';

@InputType()
export class UpdateApplicationSkillInput {
  @Field((type) => GraphQLUUID)
  @IsUUID()
  application_id: string;

  @Field((type) => GraphQLUUID)
  @IsUUID()
  skill_id: string;

  @IsNumber()
  @IsOptional()
  years_experience: number;

  @IsString()
  @IsOptional()
  description?: string;
}

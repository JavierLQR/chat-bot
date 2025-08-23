import { Type } from 'class-transformer'
import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator'

export enum VectorType {
  DENSE = 'dense',
  SPARSE = 'sparse',
}

export enum Metric {
  COSINE = 'cosine',
  EUCLIDEAN = 'euclidean',
  DOTPRODUCT = 'dotproduct',
}

export enum DeletionProtection {
  ENABLED = 'enabled',
  DISABLED = 'disabled',
}

export enum TagsEnum {
  DEVELOPMENT = 'development',
  PRODUCTION = 'production',
}

export enum Dimension {
  DEFAULT = 1024, // Default dimension for MistralAI embeddings
  EMBEDDING = 1536, // Dimension for OpenAI text-embedding-3-small
}

class TypeSpec {
  @IsEnum(['aws', 'gcp', 'azure'], {
    message: 'cloud must be one of the following: aws, gcp, azure',
  })
  cloud: 'aws' | 'gcp' | 'azure'

  @IsString()
  @IsNotEmpty()
  region: string
}

class Spec {
  @ValidateNested()
  @Type(() => TypeSpec)
  serverless: TypeSpec
}

export class CreatePineconeIndexDto {
  @IsString()
  @IsNotEmpty()
  name: string

  @IsEnum(VectorType)
  vectorType: VectorType

  @IsNumber()
  @IsNotEmpty()
  @IsEnum(Dimension, {
    message: 'dimension must be one of the following: 1024, 1536',
  })
  dimension: Dimension

  @IsEnum(Metric, {
    message:
      'metric must be one of the following: cosine, euclidean, dotproduct',
  })
  metric: Metric

  @ValidateNested()
  @Type(() => Spec)
  spec: Spec

  @IsEnum(DeletionProtection, {
    message: 'deletionProtection must be either enabled or disabled',
  })
  deletionProtection: DeletionProtection

  @IsObject()
  @IsOptional() // Si es opcional
  tags: Record<string, string>
}

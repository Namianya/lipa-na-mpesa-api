import { PartialType } from '@nestjs/mapped-types';
import { CreatePushStkDto } from './create-push-stk.dto';

export class UpdatePushStkDto extends PartialType(CreatePushStkDto) {}

import type {
  EventGift as EventGiftModel,
  User as UserModel,
} from '@prisma/client';

export interface EventGiftWithGiftGiver extends EventGiftModel {
  giftGiver: UserModel;
}

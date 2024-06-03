import type { Event as EventModel } from '@prisma/client';
import type { EventWithGifts } from 'src/app/events/interfaces';

export interface GetDashboardByUserIDResponse {
  user: {
    id: string;
    name: string;
    email: string;
  };
  my_events: EventWithGifts[];
  another_events: EventModel[];
}

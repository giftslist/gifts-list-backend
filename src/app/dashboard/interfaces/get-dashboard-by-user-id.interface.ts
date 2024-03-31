import type { EventWithGifts } from 'src/app/events/interfaces';

export interface GetDashboardByUserIDResponse {
  user: {
    id: string;
    name: string;
    email: string;
  };
  events: EventWithGifts[];
}

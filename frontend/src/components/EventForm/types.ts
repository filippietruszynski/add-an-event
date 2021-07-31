export interface IEventFormValues {
  firstName: string;
  lastName: string;
  email: string;
  eventDate: string;
}

export interface IEventFormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  eventDate?: string;
}

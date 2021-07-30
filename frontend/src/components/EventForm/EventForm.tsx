import { Formik, Field, Form } from "formik";
import { toast } from "react-toastify";

import { postEvent } from "../../api/api";

interface IProps {
  firstName: string;
  lastName: string;
  email: string;
  eventDate: string;
}

const EventForm: React.FC = () => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        eventDate: "",
      }}
      onSubmit={async (values: IProps) => {
        try {
          console.log(values);
          await postEvent(values);
          toast.success(`The event was successfully added to the database!`);
        } catch (error) {
          toast.error(
            `Unfortunately, the event wasn't added to the database ...`
          );
          console.error(error);
        }
      }}
    >
      <Form>
        <label htmlFor="firstName">First name</label>
        <Field id="firstName" name="firstName" type="text" />

        <label htmlFor="lastName">Last name</label>
        <Field id="lastName" name="lastName" type="text" />

        <label htmlFor="email">Email</label>
        <Field id="email" name="email" type="email" />

        <label htmlFor="eventDate">Event date</label>
        <Field id="eventDate" name="eventDate" type="date" />

        <button type="submit">Add</button>
      </Form>
    </Formik>
  );
};

export default EventForm;

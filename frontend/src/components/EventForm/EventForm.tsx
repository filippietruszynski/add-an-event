import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { AxiosResponse } from "axios";
import { Formik, FormikHelpers } from "formik";
import * as Yup from "yup";
import { Paper } from "@material-ui/core";
import { toast } from "react-toastify";

import { IPostEventRequest } from "../../api/requests";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

interface IEventFormProps {
  postEvent: (request: IPostEventRequest) => Promise<AxiosResponse<any>>;
}

const EventForm: React.FC<IEventFormProps> = ({ postEvent }) => {
  const classes = useStyles();

  const initialValues: IPostEventRequest = {
    firstName: "",
    lastName: "",
    email: "",
    eventDate: "",
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("Is required"),
    lastName: Yup.string().required("Is required"),
    email: Yup.string().email("Invalid email address").required("Is required"),
    eventDate: Yup.date().required("Is required"),
  });

  const onSubmit = async (
    values: IPostEventRequest,
    { resetForm, setSubmitting }: FormikHelpers<IPostEventRequest>
  ) => {
    try {
      await postEvent(values);
      resetForm();
      setSubmitting(false);
      toast.success("The event was successfully added to the database!");
    } catch (error) {
      toast.error("Unfortunately, the event wasn't added to the database...");
    }
  };

  return (
    <Paper className={classes.paper}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({
          values,
          errors,
          dirty,
          touched,
          isValid,
          isSubmitting,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit} className={classes.form}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  autoFocus
                  id="firstName"
                  name="firstName"
                  label="First Name"
                  variant="outlined"
                  value={values.firstName}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={touched.firstName && Boolean(errors.firstName)}
                  helperText={touched.firstName && errors.firstName}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  id="lastName"
                  name="lastName"
                  label="Last Name"
                  variant="outlined"
                  value={values.lastName}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={touched.lastName && Boolean(errors.lastName)}
                  helperText={touched.lastName && errors.lastName}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="email"
                  name="email"
                  label="Email Address"
                  variant="outlined"
                  value={values.email}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="eventDate"
                  name="eventDate"
                  label="Event Date"
                  type="date"
                  variant="outlined"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={values.eventDate}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={touched.eventDate && Boolean(errors.eventDate)}
                  helperText={touched.eventDate && errors.eventDate}
                />
              </Grid>
            </Grid>
            <Button
              fullWidth
              type="submit"
              variant="contained"
              color="primary"
              disabled={isSubmitting || !(isValid && dirty)}
              className={classes.submit}
            >
              Add an event
            </Button>
          </form>
        )}
      </Formik>
    </Paper>
  );
};

export default EventForm;

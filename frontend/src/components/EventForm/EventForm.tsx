import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { toast } from "react-toastify";
import { makeStyles } from "@material-ui/core/styles";
import { AxiosResponse } from "axios";
import { LinearProgress, Paper } from "@material-ui/core";
import { Formik, FormikHelpers } from "formik";
import * as Yup from "yup";

import { IPostEventRequest } from "../../api/requests";
import { EMAIL_REGEX } from "../../utils/helpers";

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
    email: Yup.string()
      .matches(EMAIL_REGEX, "Invalid email address")
      .required("Is required"),
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
                  autoFocus
                  fullWidth
                  id="firstName"
                  name="firstName"
                  label="First Name"
                  variant="outlined"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.firstName}
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
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.lastName}
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
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.email}
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
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.eventDate}
                  error={touched.eventDate && Boolean(errors.eventDate)}
                  helperText={touched.eventDate && errors.eventDate}
                  InputLabelProps={{
                    shrink: true,
                  }}
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
            {isSubmitting && <LinearProgress />}
          </form>
        )}
      </Formik>
    </Paper>
  );
};

export default EventForm;

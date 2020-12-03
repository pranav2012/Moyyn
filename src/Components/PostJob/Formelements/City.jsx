/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import { cities } from '../../../util/data/static-data';
import { Field } from 'formik';
import FormError from '../Formelements/FormError';

const useStyles = makeStyles({
  option: {
    fontSize: 15
  }
});

export default function CitySelect({ name }) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Field name={name}>
        {
          ({ form, field, meta }) => {

            return (
              <Autocomplete
                name={name}
                inputValue={form.values[name]}
                onInputChange={(event, newInputValue) => {
                form.setFieldValue(name, newInputValue);
                }}
                id="country-select-demo"
                options={cities}
                classes={{
                  option: classes.option,
                }}
                autoHighlight
                getOptionLabel={(option) => option.city}
                renderOption={(option) => (
                  <React.Fragment>
                    {option.city}, {option.country}
                  </React.Fragment>
                )}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    {...field}
                    label="Choose a city"
                    variant="outlined"
                    inputProps={{
                      ...params.inputProps,
                      autoComplete: 'new-password',
                    }}
                  />
                )}
              />
            )
          }
        }
      </Field>
      <FormError name={name} />
    </React.Fragment>
  );
}

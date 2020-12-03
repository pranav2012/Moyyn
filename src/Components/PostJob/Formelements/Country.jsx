import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import { countries } from '../../../util/data/static-data';
import { Field } from 'formik';
import FormError from '../Formelements/FormError';

function countryToFlag(isoCode) {
    return typeof String.fromCodePoint !== 'undefined'
        ? isoCode
            .toUpperCase()
            .replace(/./g, (char) => String.fromCodePoint(char.charCodeAt(0) + 127397))
        : isoCode;
}

const useStyles = makeStyles({
    option: {
        fontSize: 15,
        '& > span': {
            marginRight: 10,
            fontSize: 18,
        },
    },
});

export default function CountrySelect({ name }) {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Field name={name}>
                {
                    ({ form, field, meta }) => {

                        return (
                            <Autocomplete
                                id="country-select-demo"
                                name={name}
                                options={countries}
                                classes={{
                                    option: classes.option,
                                }}
                                inputValue={form.values[name]}
							    onInputChange={(event, newInputValue) => {
								form.setFieldValue(name, newInputValue);
							    }}
                                autoHighlight
                                getOptionLabel={(option) => option.label}
                                renderOption={(option) => (
                                    <React.Fragment>
                                        <span>{countryToFlag(option.code)}</span>
                                        {option.label} ({option.code})
                                    </React.Fragment>
                                )}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
									    {...field}
                                        label="Choose a country"
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
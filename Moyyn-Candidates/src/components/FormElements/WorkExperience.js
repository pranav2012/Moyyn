import React, { useState } from 'react';
import { convertYearsToNums, convertNumsToYears } from '../../util/helpers/helper-methods';
import { FieldArray } from 'formik';
import { categoriesAndRoles as data } from '../../util/data/static-data';
import { 
   Grid,
   FormControl,
   InputLabel,
   Select,
   List,
   ListItem,
   ListItemText,
   Typography,
} from '@material-ui/core';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import FormError from './FormError';
import './WorkExperience.css';

const experienceArray = ['0-2 Years', '2-4 Years', '4-6 Years', '7+ Years']

const FormikWorkExperience = () => {

   const [category, setCategory] = useState([Object.keys(data)[0]]);
   const [role, setRole] = useState([null]);

   const handleCategoryChange = (event) => {
      setCategory([event.target.value]);
      setRole([null]);
   }

   const handleRoleChange = (event) => {
      setRole([event.target.value]);
   }

   return(
      <FieldArray name='Work Experience'>
         {
            ({ form, push, remove }) => {

               const handleExperienceChange = (event) => {

                  if (!form.values['Work Experience'].some(item => item.Role === role[0])) {
                     const newItem = {
                        Category: category[0], 
                        Role: role[0], 
                        Experience: convertYearsToNums(event.target.value)
                     }

                     push(newItem);
                     setRole([null]);
                  } else {
                     setRole([null])
                  }
               }

               return(
                  <Grid container>
                     <Grid item xs={12} > 
                        <Grid container spacing={1}>
                           <Grid item xs={12}>
                              <Typography color='textSecondary'>
                                 Work experience
                              </Typography>
                           </Grid>
                           <Grid item xs={12} md={5} style={{marginBottom: '0.4rem'}} >
                              <FormControl
                                 fullWidth 
                              >
                                 <InputLabel shrink style={{fontSize: '1rem', marginTop: '-0.35rem'}}>
                                    Category
                                 </InputLabel>
                                 <Select 
                                    style={{fontSize: '0.8rem'}}
                                    multiple
                                    native
                                    value={category}
                                    onChange={handleCategoryChange}
                                 >
                                    {Object.keys(data).map((categoryName) => (
                                       <option key={categoryName} value={categoryName}>
                                          {categoryName}
                                       </option>
                                    ))}
                                 </Select>
                              </FormControl>
                           </Grid>
                           <Grid item xs={12} md={5} style={{marginBottom: '0.4rem'}} >
                              <FormControl
                                 fullWidth 
                              >
                                 <InputLabel shrink style={{fontSize: '1rem', marginTop: '-0.35rem'}}>
                                    Role
                                 </InputLabel>
                                 <Select 
                                    style={{fontSize: '0.8rem'}}
                                    multiple
                                    native
                                    value={role}
                                    onChange={handleRoleChange}
                                 >
                                    {data[category].map((roleName) => (
                                       <option key={roleName} value={roleName}>
                                          {roleName}
                                       </option>
                                    ))}
                                 </Select>
                              </FormControl>
                           </Grid>
                           <Grid item xs={12} md={2} style={{marginBottom: '0.4rem'}} >
                              <FormControl
                                 fullWidth 
                              >
                                 <InputLabel shrink style={{fontSize: '1rem', marginTop: '-0.35rem'}}>
                                    Experience
                                 </InputLabel>
                                 <Select
                                    style={{fontSize: '0.8rem'}}
                                    multiple
                                    native
                                    value={['']}
                                    onChange={handleExperienceChange}
                                    disabled={role[0] ? false : true}
                                    type="select-multiple"
                                 >
                                    {
                                       experienceArray.map((level) => (
                                          <option key={level} value={level}>
                                             {level}
                                          </option>
                                       ))
                                    }
                                 </Select>
                              </FormControl> 
                           </Grid>
                        </Grid>
                     </Grid>
                     <Grid item xs={12}>
                        <FormError name='Work Experience' />
                     </Grid>
                     <Grid item xs={12}>
                        <List>
                           {form.values['Work Experience'].map((item, i) => {
                              return (
                                 <ListItem key={i} button divider>
                                    <ListItemText
                                       primary={
                                          <React.Fragment>
                                             <Typography
                                                component="span"
                                                variant="subtitle2"
                                             >
                                                {item.Role}
                                                <span
                                                   style={{ fontSize: "0.8rem" }}
                                                >
                                                   {` — ${convertNumsToYears(item.Experience)}`}
                                                </span>
                                             </Typography>
                                          </React.Fragment>
                                       }
                                    />
                                    <HighlightOffIcon onClick={() => remove(i)} />
                                 </ListItem>
                              );
                           })}
                        </List>
                     </Grid>
                  </Grid>
               )
            }
         }
      </FieldArray>
   )
}

export default FormikWorkExperience
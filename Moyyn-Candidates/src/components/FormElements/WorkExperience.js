import React, { useState } from 'react';
import { FieldArray } from 'formik';
import { categoriesAndRoles as data } from '../../util/data/static-data';
import MenuItem from '@material-ui/core/MenuItem';
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

const experienceArray = ['0-2 Years', '2-4 Years', '4-6 Years', '7+ Years']


const convertYearsToNums = (years) => {
   switch(years) {
      case '0-2 Years':
         return 1;
      case '2-4 Years':
         return 2;
      case '4-6 Years':
         return 3;
      case '7+ Years':
         return 4;
      default:
         break;
   }
}

const convertNumsToYears = (nums) => {
   switch(nums) {
      case 1:
         return '0-2 Years';
      case 2:
         return '2-4 Years';
      case 3:
         return '4-6 Years';
      case 4:
         return '7+ Years';
      default:
         break;
   }
}

const FormikWorkExperience = () => {

   const [category, setCategory] = useState("");
   const [role, setRole] = useState("");

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
                        <Grid container spacing={2}>
                           <Grid item xs={12}>
                              <Typography color='textSecondary'>
                                 Work experience (Add your experiences)
                              </Typography>
                           </Grid>
                           <Grid item xs={12} md={4} style={{marginBottom: '0.4rem'}} >
                              <FormControl variant="outlined" fullWidth >
                                 <InputLabel>
                                    Category
                                 </InputLabel>
                                 <Select 
                                    label="Category"
                                    value={category}
                                    onChange={handleCategoryChange}
                                 >
                                    {Object.keys(data).map((categoryName) => (
                                       <MenuItem key={categoryName} value={categoryName}>
                                          {categoryName}
                                       </MenuItem>
                                    ))}
                                 </Select>
                              </FormControl>
                           </Grid>
                           <Grid item xs={12} md={4} style={{marginBottom: '0.4rem'}} >
                              <FormControl variant="outlined" fullWidth >
                                 <InputLabel>
                                    Role
                                 </InputLabel>
                                 <Select 
                                    value={role}
                                    label="Role"
                                    onChange={handleRoleChange}
                                    disabled={category[0] ? false : true}
                                 >
                                    {category===""?'':data[category].map((roleName) => (
                                       <MenuItem key={roleName} value={roleName}>
                                          {roleName}
                                       </MenuItem>
                                    ))}
                                 </Select>
                              </FormControl>
                           </Grid>
                           <Grid item xs={12} md={4} style={{marginBottom: '0.4rem'}} >
                              <FormControl variant="outlined" fullWidth >
                                 <InputLabel >
                                    Experience
                                 </InputLabel>
                                 <Select
                                    label="Experience"
                                    value=""
                                    onChange={handleExperienceChange}
                                    disabled={role[0] ? false : true}
                                 >
                                    {
                                       experienceArray.map((level) => (
                                          <MenuItem key={level} value={level}>
                                             {level}
                                          </MenuItem>
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
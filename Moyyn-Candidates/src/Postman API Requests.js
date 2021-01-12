//Endpoints

//Root endpoint '/'
	//what i send:
		//GET request
	//what i expect if connection is working:
		{
			found: true
		}
	//what i expect if connection is NOT working:
		{
			found: false
		}

//ALL OTHER REQUESTS WILL BE "POST" REQUESTS

//email confirmation endpoint '/email'
	//what i send:
		{
			email: //user email <string>
		}
	//what i expect if found:
		{
			found: true,
			name: //full name <string>
		}
	//what i expect if not found:
		{
			found: false
		}

//getting job suggestions '/suggestions'
	//what i send:
		{
			email: //user email <string>
		}
	//what i expect if found:
		{
			found: true,
			suggestions: {
				moyyn: // array of jobs <array>*
				mobberies: // array of jobs <array>*
				talentinno: // array of jobs <array>*
			}
		}
		// * each obect in array should have following structrue:
			{
				title: //<string>
				location: //<string>
				description: //<string> 
				ID: //<integer>
				// TO YOUR CHOICE: if it's a partner job we don't need the description, only for moyyn's
			}
	//what i expect if not found:
		{
			found: false
		}

//sending job selections to backend '/jobs'
	//what i send:
		{
			email: //user email <string>
			jobs: //array of integers* <array>
			//each integer represents the job's index in suggestions array
		}
	//what i expect back:
		//nothing

//sending user feedback '/feedback'
	//what i send:
		{
			email: //user email <string>
			feedback: // <string> 
		}
	//what i expect back:
		//nothing

//sending user's form '/store'
	//what i send:
		//form data with following keys:
		'file',  // file name will be <email>_<date of birth>.<file extension>
		//if image exsits:
		'image', // image name will be <email>_<date of birth>.<image extension>
		'payload', // a JSON object:
			[
				//first page
				{
					'First Name': //<string>
					'First Name': //<string>
					'Email': //<string>
					'TermsAndPrivacy': //<boolean>  
				},
				//third page
				{
					"Country of Residence": //<string>
					"City of Residence": //<string>
					"Visa Status": //<string>
					"Date of Birth": //<string>
					"Gender": //<string>
					"Currently Employed": //<boolean>
					"Driver's License": //<boolean>
					"Notice Period": // <integer || null>
					"Contact Number": //<string>
					"Earliest Joining Date": //<string>
				},
				//fourth page
				{
					"Relocation Willingness": //<boolean>
					"Countries of Preference": //<array> (empty if relocation is false)
					"Cities of Preference": //<array> (empty if relocation is false)
					"Desired Employment": //<object>:
						{
							Remote: //<boolean>, 
							'Part Time': //<boolean>, 
							'Full Time': //<boolean>, 
							Freelancer: //<boolean>
						},
					"Online Profiles": //<object>
						{
							Stackoverflow: //<string>
							LinkedIn: //<string>
							Github: //<string>
							Xing: //<string>
							Dribbble: //<string>
							Behance: //<string>
							Other: //<string>
						},
				},
				//fifth page
				{
					"Career Level": //<string>
					Industries: // <array>,
					Skills: // <array>,
					"Work Experience": // <array>,
					Languages: // <array>,
				},

				//* i might add a 'Complete' key with a bool to each array, feel free to ignore that
			]

	//what i expect if found suggestions:
		{
			found: true,
			suggestions: {
				moyyn: // array of jobs <array>*
				mobberies: // array of jobs <array>*
				talentinno: // array of jobs <array>*
			}
		}
		// * each obect in array should have following structrue:
			{
				title: //<string>
				location: //<string>
				description: //<string> 
				// TO YOUR CHOICE: if it's a partner job we don't need the description, only for moyyn's
			}
	//what i expect if not found suggestions:
		{
			found: false
		}





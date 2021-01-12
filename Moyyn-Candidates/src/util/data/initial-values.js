export const initialValues = [
	//first page
	{
		Complete: false,
		'First Name': '',
		'Last Name': '',
		'Email': '',
		//'Password':'',
		'Currently Looking For Job':true,
		'TermsAndPrivacy': false 
	},
	//second page
	{
		Complete: false,
		CV: [],
		CV2:[],
		Image: [],
		"Desired Position": []
	},
	//third page
	{
		Complete: false,
		"Country of Residence": '',
		"City of Residence": '',
		"Visa Status": '',
		"Currently Employed": false,
		"Driver's License": false,
		"Notice Period": '0',
		"Contact Number": '',
		"Earliest Joining Date": ''
	},
	//fourth page
	{
		Complete: false,
		"Relocation Willingness": false,
		"Countries of Preference": [],
		"Cities of Preference": [],
		"Desired Employment":
			{
				Remote: false,
				'Part Time': false, 
				'Full Time': false, 
				Freelancer: false,
			},
		"Online Profiles":
			{
				Stackoverflow: '',
				LinkedIn: '',
				Github: '',
				Xing: '',
				Dribbble: '',
				Behance: '',
				Other: '',
			},
			"Desired Position": ''
	},
	//fifth page
	{
		Complete: false,
		"Career Level": '',
		Industries: [],
		Skills: [],
		"Work Experience": [],
		Languages: [],
	},
	
]

// export const initialValues = [
// 	//first page
// 	{
// 		Complete: true,
// 		'First Name': 'test',
// 		'Last Name': 'test',
// 		'Email': 'testX@gmail.com',
// 		'TermsAndPrivacy': true 
// 	},
// 	//second page
// 	{
// 		Complete: true,
// 		CV: [],
// 	},
// 	//third page
// 	{
// 		Complete: true,
// 		"Country of Residence": 'Berlin',
// 		"City of Residence": 'Germany',
// 		"Visa Status": 'EU Citizen',
// 		"Currently Employed": false,
// 		"Driver's License": false,
// 		"Notice Period": null,
// 		"Contact Number": '123456789',
// 		"Earliest Joining Date": '01-10-2020'
// 	},
// 	//fourth page
// 	{
// 		Complete: true,
// 		"Relocation Willingness": true,
// 		"Countries of Preference": ['Germany', 'Austria', 'Hungary', 'Poland'],
// 		"Cities of Preference": ['Krakow', 'Warsaw', 'Budapest', 'Berlin', 'Vienna'],
// 		"Desired Employment":
// 			{
// 				Remote: true,
// 				'Part Time': true, 
// 				'Full Time': true, 
// 				Freelancer: true,
// 			},
// 		"Online Profiles":
// 			{
// 				Stackoverflow: 'dummy link',
// 				LinkedIn: 'dummy link',
// 				Github: 'dummy link',
// 				Xing: 'dummy link',
// 				Dribbble: 'dummy link',
// 				Behance: 'dummy link',
// 				Other: 'dummy link',
// 			},
// 	},
// 	//fifth page
// 	{
// 		Complete: true,
// 		"Career Level": 'Senior',
// 		Industries: ['Computer Software'],
// 		Skills: ['Java', 'JavaScript', 'C++', 'Python'],
// 		"Work Experience": [
// 	        {"Category": "IT Operations", "Role": "Solution Architect", "Experience": 2}, 
// 	        {"Category": "IT Operations", "Role": "Technical Support Specialist", "Experience": 2},
// 	        {"Category": "IT Operations", "Role": "QA Manager", "Experience": 4}
//         ],
// 		Languages: [
//             {
//                "language":"German",
//                "level":"Native"
//             },
//             {
//                "language":"Russian",
//                "level":"Native"
//             },
//             {
//                "language":"English",
//                "level":"Native"
//             }
//         ],
// 	},
// ]
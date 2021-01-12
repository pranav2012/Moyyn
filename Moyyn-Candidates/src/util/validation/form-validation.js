import { mixed, string, boolean, object, number, array } from "yup";
//import {ref} from "yup";

export const pageOneValidation = object({
	Email: string()
		.email("*Please enter a valid email address.")
		.required("*Required field."),
	"First Name": string("*Please enter a valid name.")
		.min(2, "Required field.")
		.required("*Required field."),
	"Last Name": string("*Please enter a valid name.")
		.min(2, "*Required field.")
		.required("*Required field."),
/* 	"Password": string("*Please enter a valid password.")
		.min(6, "*Minimum 6 characters")
		.required("*Required field."),
	"Confirm Password": string("*Please confirm the password.")
    .required("*Please confirm the password.")
    .oneOf([ref('Password'), null], 'Passwords must match'), */

	TermsAndPrivacy: boolean().oneOf(
		[true],
		"*Please accept Terms of Use and Privacy Policy."
	),
});

export const pageTwoValidation = object({
	CV: array().min(1, '*Please pick a file.').required('*Please pick a file.')
});

export const pageThreeValidation = object({
	"Country of Residence": string("*Please enter a valid country name.")
		.min(2, "*Required field.")
		.required("*Required field."),
	"City of Residence": string("*Please enter a valid city name.")
		.min(2, "*Required field.")
		.required("*Required field."),
	"Visa Status": string().required("*Required field."),
	"Earliest Joining Date": string("*Required field.").min(10, '*Please use following format: DD/MM/YYYY').max(10, 'Invalid date.').nullable().required("*Required field."),
	"Contact Number": string()
		.min(7, "*Required field.")
		.required("*Required field."),
	"Currently Employed": boolean(),
	"Notice Period": number().nullable().when("Currently Employed", {
		is: true,
		then: number("*Please enter a number.").positive(
			"*Please enter a valid value."
		).required("*Required field."),
	}),
});

const hasTrueValue = (obj) => {
	const values = Object.values(obj);
	for (const value of values) {
		if (value) {
			return true;
		}
	}
	return false;
};

export const pageFourValidation = object({
	"Relocation Willingness": boolean(),
	"Countries of Preference": array().when("Relocation Willingness", {
		is: true,
		then: array()
			.min(1, "*Please pick at least one option.")
			.required("Required field."),
	}),
	"Cities of Preference": array().when("Relocation Willingness", {
		is: true,
		then: array()		
			.min(1, "*Please pick at least one option.")
			.required("*Required field."),
	}),
	"Desired Employment": mixed().test("employmentTest", "*Please pick at least one option.", (obj) => hasTrueValue(obj)).required("*Required field."),
});

function hasNativeLanguage(myArray) {
	return myArray.some((lang) => {
		return lang.level === "Native";
	});
}

export const pageFiveValidation = object({
	'Work Experience': array()
		.min(1, "*Please pick at least one option.")
		.required("*Required field."),
	"Career Level": string().required("*Required field."),
	Industries: array()
		.min(1, "*Please pick at least one option.")
		.required("*Required field."),
	Skills: array()
		.min(1, "*Please pick at least one option.")
		.required("*Required field."),
	Languages: array()
		.test("nativeTest", "*Please pick at least one native language.", (value) =>
			hasNativeLanguage(value)
		)
		.required("*Required field."),
})
import * as Yup from 'yup';

export const Signupformvalidation = Yup.object().shape({
	company: Yup.string()
		.trim()
		.required("Required")
		.matches(/^[a-z A-Z]+$/,"Invalid company name"),// eslint-disable-line
	name: Yup.string()
		.trim()
		.required("Required")
		.matches(/^[a-z A-Z]+$/,"Invalid name "),// eslint-disable-line
	website: Yup.string()
		.trim()
		.required("Required")
		.matches(/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/,"Not a valid link"), // eslint-disable-line
	location: Yup.string()
		.trim()
		.required("Required"),
	email: Yup.string()
		.trim()
		.email("Not a valid email address")
		.required("Required"),
	password: Yup.string()
		.trim()
		.required("Required")
		.min(8, "Too short - minimum 8 characters reuired")
		.matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/, "Password Must contain number & uppercase letters"),//eslint-disable-line
	phone: Yup.string()
		.required("Required")
		.matches(/^(?:(?:\+|0{0,2})91(\s*[\ -]\s*)?|[0]?)?[789]\d{9}|(\d[ -]?){10}\d$/,"Invalid number"),//eslint-disable-line
});

function hasNativeLanguage(myArray) {
	return myArray.some((lang) => {
		return lang.level === "Native";
	});
}

export const Postjobformvalidation = Yup.object().shape({
	"Career Level": Yup.string()
		.trim()
		.required("Required"),
	Industries: Yup.array()
		.required("Required"),
	Skills: Yup.array()
		.required("Required"),
	"Work Experience": Yup.array()
		.required("Required"),
	Languages: Yup.array()
	.test("nativeTest", "*Please pick at least one native language.", (value) =>
		hasNativeLanguage(value)
	)
	.required("*Required field."),
	});
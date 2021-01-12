import { url } from '../data/base-url';

export const goToURL = (url, newTab = true) => {
	if (newTab) {
		window.open(url, "_blank")
	} else {
		window.open(url, "_self")
	}
}

export const sendRequest = async ( endpoint = '' , method = 'GET', body) => {
	const response = await fetch(`${url}${endpoint}`, {
      mode:'cors',
		method,
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(body)
	})
	const data = await response.json();

	return data;
}

export const convertYearsToNums = (years) => {
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

export const convertNumsToYears = (nums) => {
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

// export const getExtension = (value) => {
//    return value[0].file.name.split(".")[value[0].file.name.split(".").length - 1];
// }

export const checkFormComplete = (form) => {
   let missingParts = [];

   for (let i = 0; i < form.length -1; i++) {
      if (!form[i].Complete) {
         missingParts.push(i);
      }
   }

   return [missingParts.length === 0, missingParts];
}
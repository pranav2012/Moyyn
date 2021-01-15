import React, { useState, useEffect } from 'react';
import { sendRequest, checkFormComplete } from '../util/helpers/helper-methods';
import { url } from '../util/data/base-url';
import {Switch,Route,Redirect,useRouteMatch,useHistory,NavLink} from 'react-router-dom';
import { initialValues } from '../util/data/initial-values';
import PageOne from '../components/FormPages/PageOne';
import PageTwo from '../components/FormPages/PageTwo';
import PageThree from '../components/FormPages/PageThree';
import PageFour from '../components/FormPages/PageFour';
import PageFive from '../components/FormPages/PageFive';
import ErrorPage from '../components/Shared/ErrorPage';
import Loading from '../components/Shared/Loading';
import './../styles/CandidatesForm.scss'
import 'tachyons';
import '../components/FormPages/toggle.css';
import Footer from '../components/Footer/footer'
import FormImage2 from '../Svg/FormImage2';
import FormImage3 from '../Svg/FormImage3';
import FormImage4 from '../Svg/FormImage4';
import FormImage5 from '../Svg/FormImage5';

const Form = ({ setEmail ,setSuggestions }) => {

	const [formValues, setFormValues] = useState(initialValues)
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(false);

	const { path } = useRouteMatch();
	const history = useHistory();

	const [submitTrigger, setSubmitTrigger] = useState(false);

	useEffect(() => {
		//console.log('checking connection')
		sendRequest()
			.then(data => {
				//console.log(data)
				if (!data.found) {setError(true)}
			})
			.catch(err => setError(true)) //setError(true))
	},[])

	const moveToPage = (page) => {
		history.push(`/application/${page}`);
	}

	const handleFormChange = (values, part, next = false, complete = true, submit = false) => {
		if (complete) {
			setFormValues(prevState => {
				let newState = [...prevState];
				newState[part] = {...values, Complete: true};
				
				return newState;
			});	
		} else {
			setFormValues(prevState => {
				let newState = [...prevState];
				newState[part] = {...values};
				
				return newState;
			});	
		}

		if(!!next) {
			moveToPage(next)
		}

		if (submit) {
			setSubmitTrigger(true);
		}
	}

	const submitForm = () => {
		

		let form = [...formValues];

		const fileName = `${form[0].Email}.pdf`;

		const file = form[1].CV[0].file;
		
		form.splice(1,1)

		
		
		form[2]["Desired Position"]=formValues[1]["Desired Position"];


		console.clear();

		let formData = new FormData();
		formData.append('payload', JSON.stringify(form));
		formData.append('file', file, fileName);

		//set timeout
		const timeout = setTimeout(() => {
			history.push('/candidate/partner');
		}, 1000 * 120)

		
		fetch(`${url}/store`, {method: 'POST',body: formData})
			.then(res => res.json())
			.then(data => {
				clearTimeout(timeout);
				//console.log('store returns:', data);
				setEmail(form[0].Email);
				setSuggestions(data.suggestions);
				history.push('/candidate/suggestions');
			})
			.catch(err => {
				clearTimeout(timeout);
				//console.log('store error:', err);
				setIsLoading(false);
				setError(true);
			})
	}

	useEffect(() => {
		window.scrollTo({
	   	top: 0,
	   	behavior: "auto"
	 	});
	})

	useEffect(() => {
		const [isComplete] = checkFormComplete(formValues)
		document.body.style.zoom = "90%";

		if (isComplete) {
			if (submitTrigger) {
				setIsLoading(true);
				submitForm()
			}
		}
	// eslint-disable-next-line
	}, [submitTrigger])

	const formComplete = () => {
		const [isComplete, missingParts] = checkFormComplete(formValues)
		return [isComplete, missingParts];
	}

	const handleError = () => {
		setFormValues(initialValues);
		history.push('/application');
		setError(false);
	}

	if (error) {
		return(
			<React.Fragment>
				<ErrorPage setError={handleError} />
			</React.Fragment>
		)
	}

	if (isLoading) {
		return(
			<React.Fragment>
				<Loading text='AI matchmaking in progress...' />
			</React.Fragment>
		)
	}
	
	return(
		<React.Fragment>
			<div>
				<div className="flex justify-around ph5-l pv4-l pa2-m pa2 bg-white" style={{minHeight:"90vh"}}>			
					<div className='mr4 mt3'>
						<div className='buttons flex mb5'>
							{/* <NavLink  className={`pointer link mr2 dim ba br-100 pv2 ph3 bg-white`} style={{border:"1px solid #265cff", color:"#265cff"}} onClick={()=>history.push(`${path}`)} exact to={`${path}`} activeClassName="active-btn">1</NavLink> */}
							<NavLink exact to={`${path}`} activeClassName="hide" className="link">
								<NavLink  className={`pointer link mr2 dim ba br-100 ph3 pv2 bg-white`} style={{border:"1px solid #265cff", color:"#265cff"}} onClick={()=>history.push(`${path}/cv`)} exact to={`${path}/cv`} activeClassName="active-btn">1</NavLink>
								<NavLink  className={`pointer link mr2 dim ba br-100 ph3 pv2 bg-white`} style={{border:"1px solid #265cff", color:"#265cff"}} onClick={()=>history.push(`${path}/information`)} exact to={`${path}/information`} activeClassName="active-btn">2</NavLink>
								<NavLink  className={`pointer link mr2 dim ba br-100 ph3 pv2 bg-white`} style={{border:"1px solid #265cff", color:"#265cff"}} onClick={()=>history.push(`${path}/preferences`)} exact to={`${path}/preferences`} activeClassName="active-btn">3</NavLink>
								<NavLink  className={`pointer link mr2 dim ba br-100 ph3 pv2 bg-white`} style={{border:"1px solid #265cff", color:"#265cff"}} onClick={()=>history.push(`${path}/career`)} exact to={`${path}/career`} activeClassName="active-btn">4</NavLink>
							</NavLink>
						</div>						
						<Switch >
						<Route path={`${path}`} exact>
						</Route>
						<Route path={`${path}/cv`} >
							<p className='f5 signleftp1'>Upload your Cv</p>
							<FormImage2/>
						</Route>
						<Route path={`${path}/information`} >
							<p className='f5 signleftp1'>Fill your information</p>
							<FormImage3/>
						</Route>
						<Route path={`${path}/preferences`} >
							<p className='f5 signleftp1'>What are yor preferences?</p>
							<FormImage4/>
						</Route>
						<Route path={`${path}/career`} >
							<p className='f5 signleftp1'>Let us know about your skills</p>
							<FormImage5/>
						</Route>
						<Redirect to={`${path}`} />
					</Switch>
					</div>

					<div>
						<Switch >
					<Route path={`${path}`} exact>
						<PageOne 
							initialValues={formValues[0]}
							handleFormChange={handleFormChange} 
						/>
					</Route>
					<Route path={`${path}/cv`} >
						<PageTwo 
							initialValues={formValues[1]}
							handleFormChange={handleFormChange} 
						/>
					</Route>
					<Route path={`${path}/information`} >
						<PageThree
							initialValues={formValues[2]}
							handleFormChange={handleFormChange} 
						/>
					</Route>
					<Route path={`${path}/preferences`} >
						<PageFour 
							initialValues={formValues[3]}
							handleFormChange={handleFormChange} 
						/>
					</Route>
					<Route path={`${path}/career`} >
						<PageFive 
							initialValues={formValues[4]}
							handleFormChange={handleFormChange}
							formComplete={formComplete}
						/>
					</Route>

					<Redirect to={`${path}`} />
				</Switch>
					</div>
				</div>
				{console.log(window.location.pathname)}
				<div className={`${window.location.pathname==="/application" || window.location.pathname==="/application/"?"":"hide"}`}>
					<Footer/>
				</div>
			</div>
		</React.Fragment>
	)
}

export default Form;
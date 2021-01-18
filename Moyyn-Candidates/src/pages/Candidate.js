import React, { useState, useEffect } from 'react';
import { 
	Switch, 
	Route, 
	Redirect, 
	useRouteMatch,
	useHistory
} from 'react-router-dom';
import EnterEmail from '../components/CandidatePages/EnterEmail';
// import Suggestions from '../components/CandidatePages/Suggestions';
import PartnersText from '../components/CandidatePages/PartnersText';
import Feedback from '../components/CandidatePages/Feedback';
import ErrorPage from '../components/Shared/ErrorPage';
import Loading from '../components/Shared/Loading';

const Candidate = ({ suggestions, setSuggestions, email, setEmail }) => {

	//console.log(suggestions)

	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(false);

	const { path } = useRouteMatch();
	const history = useHistory();

	const moveToPage = (page) => {
		history.push(`/candidate/${page}`);
	}

	useEffect(() => {
		window.scrollTo({
	   	top: 0,
		   behavior: "auto"
	 	});
	})

	if (error) {
		return(
			<React.Fragment>
				<div className='flex items-center justify-center bg-white ma3 br2 vh-75'>
					<ErrorPage setError={setError} />
				</div>
			</React.Fragment>
		)
	}

	if (isLoading) {
		return(
			<React.Fragment>
				<div className='flex items-center justify-center bg-white ma3 br2 vh-75'>
					<Loading />
				</div>
			</React.Fragment>
		)
	}

	return(
		<div className="flex justify-center items-center">
			<div style={{minHeight:"500px"}} className='flex justify-center items-center w-90 bg-white pa4 ma3 br2'>
				<Switch>
					<Route path={`${path}/check-application`} exact>
						<EnterEmail 
							setSuggestions={setSuggestions} 
							setIsLoading={setIsLoading} 
							setError={setError} 
							moveToPage={moveToPage} 
							email={email} 
							setEmail={setEmail} 
						/>
					</Route>

					<Route path={`${path}/partners`} >
						<PartnersText setIsLoading={setIsLoading} />
					</Route>

					<Route path={`${path}/feedback`} >
						<Feedback email={email} />
					</Route>

					<Redirect to={`${path}/check-application`} />
				</Switch>
			</div>
		</div>
	)
}

export default Candidate;
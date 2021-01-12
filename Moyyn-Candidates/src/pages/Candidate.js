import React, { useState, useEffect } from 'react';
import { 
	Switch, 
	Route, 
	Redirect, 
	useRouteMatch,
	useHistory
} from 'react-router-dom';
import { 
	Box,

 } from '@material-ui/core';
import EnterEmail from '../components/CandidatePages/EnterEmail';
import Suggestions from '../components/CandidatePages/Suggestions';
import PartnerSuggestions from '../components/CandidatePages/PartnerSuggestions';
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
				<ErrorPage setError={setError} />
			</React.Fragment>
		)
	}

	if (isLoading) {
		return(
			<React.Fragment>
				<Loading />
			</React.Fragment>
		)
	}

	return(
		<React.Fragment>
		 <Box 
            height='100%' 
            width='100%' 
            //display='flex' 
            alignItems='center' 
            justifyContent='center'
			className='App'
			paddingY="20px"
			paddingX="100px"
         >
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

				<Route path={`${path}/suggestions`} >
					<Suggestions 
						setError={setError} 
						moveToPage={moveToPage} 
						email={email} 
						suggestions={suggestions} 
						setIsLoading={setIsLoading}
					/>
				</Route>

				<Route path={`${path}/partner-suggestions`} >
					<PartnerSuggestions 
						talentuno={suggestions.talentuno} 
						moberries={suggestions.moberries} 
						moveToPage={moveToPage} 
						setIsLoading={setIsLoading}
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
			</Box>
		</React.Fragment>
	)
}

export default Candidate;
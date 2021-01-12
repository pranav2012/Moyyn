import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { 
	Switch, 
	Route, 
	Redirect, 
	useRouteMatch, 
} from 'react-router-dom';
import JobsList from '../CandidateElements/JobsList';
import JobPage from '../CandidateElements/JobPage';

const Suggestions = ({ email, moveToPage, suggestions }) => {

	const [form, setForm] = useState([])

	const { path } = useRouteMatch();
	const history = useHistory()

	useEffect(() => {
		//no matches at all
		if (suggestions.length < 1 || suggestions.moyyn.length + suggestions.moberries.length + suggestions.talentuno.length < 1) {
			history.push('/candidate/partners');
		}
		//no matches for moyyn but matches for at least one partner
		if ((suggestions.moyyn.length < 1 && suggestions.talentuno.length > 0) || (suggestions.moyyn.length < 1 && suggestions.moberries.length > 0)) {
			history.push('/candidate/partner-suggestions');
		}
	// eslint-disable-next-line 
	},[])

	return(
		<React.Fragment>
			<Switch>
				<Route path={`${path}`} exact>
					<JobsList email={email} form={form} setForm={setForm} moveToPage={moveToPage} suggestions={suggestions.moyyn} />
				</Route>

				<Route path={`${path}/job-description/:id`} exact>
					<JobPage moveToPage={moveToPage} suggestions={suggestions.moyyn} />
				</Route>

				<Redirect to={`${path}`} />
			</Switch>
		</React.Fragment>
	)
}

export default Suggestions;
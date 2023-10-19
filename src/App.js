import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { Component } from "react";

import "./App.css";
import GetStarted from "./Components/IRONI/GetStarted";
import CandidateRegister from "./Components/IRONI/CandidateRegister";
import Instructions from "./Components/IRONI/Instructions";
import TimeUp from "./Components/IRONI/TimeUp";
import Score from "./Components/IRONI/Score";
import SewingProficiency from "./Components/IRONI/SewingProficiency";
import SignIn from "./Components/ASINI/SignIn";
import Register from "./Components/ASINI/Register";
import { ImageUpload } from "./Components/IRONI/home";
import { ImageUploaddefect } from "./Components/ASINI/defect";
import TraineeReport from "./Components/IRONI/TraineeReport";
import DeluxReport from "./Components/ASINI/deluxReport";
import HomePage from "./Components/ASINI/HomePage";

class App extends Component {
	render() {
		return (
			<div>
				<Router>
					<Routes>
						<Route path='/getstarted' element={<GetStarted />} />
						<Route path='/candidateregister' element={<CandidateRegister />} />
						<Route path='/instructions' element={<Instructions />} />
						<Route path='/timeup' element={<TimeUp />} />
						<Route path='/score' element={<Score />} />
						<Route path='/proficiency' element={<SewingProficiency />} />
						<Route path='/signin' element={<SignIn />} />
						<Route path='/register' element={<Register />} />
						<Route path='/imageupload/:id' element={<ImageUpload />} />
						<Route path='/ImageUploaddefect/:id' element={<ImageUploaddefect />} />
							<Route path='/traineereport' element={<TraineeReport />} />
							<Route path='/deluxReport' element={<DeluxReport />} />
						<Route exact path='/' element={<HomePage />} />
					</Routes>
				</Router>
			</div>
		);
	}
}

export default App;

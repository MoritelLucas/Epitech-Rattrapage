import "./Services.css"
import Navbar from "../../components/Navbar/Navbar"
import Header from '../../components/Header/Header'
import React, { Component } from 'react';

export default class Services extends Component {

	render() {
		return (
			<div>
				<Header />
				<Navbar />
				<div class="HomepageBody">
					<div class="ServicesBoard">
						<p class="WorkflowTitle">Available Services</p>
						<p class="WorkflowSentence">Click on the services to register or login ! You can also enable ou disable them.</p>
						<button class="BtnServiceDiscord" type="button" onClick={() => window.location.href = "https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=140886629448-mhq1kpfi68cv5a0gc7vs2bvmm7rdilao.apps.googleusercontent.com&scope=openid%20email&redirect_uri=http://localhost:3000/googleconnect"}>
							<img class="ImgService" src="google.png" alt="Google" width="40" />
						</button>
						<div class="BtnGoogleMark"><input type="checkbox" id="scales" name="scales" checked /></div>
						<div class="SepService" />
					</div>
				</div>
			</div>
		)
	}
}
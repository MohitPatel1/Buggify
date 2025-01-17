import React from "react";
import "./Homes3.css";

const homes3 = () => {
	return (
		<>
			<div className="section-three">
				<h3 className="section-three-h1 h1">For companies</h3>
				<h1 className="h section-three-h2">Pentesting as a Service (PaaS)</h1>
				<p className="section-three-p">
					Buggify Provides Pentesting as a Service (PaaS) in a 2 Different ways as
					Red Team Assessment & Bug Bounty Platform as Open Source Security Mechanism
				</p>
				<div className="section-three-div">
					<div className="section-three-div-1">
						<h2 className="section-three-div-h">Private Red team Engagement</h2>
						<p className="section-three-div-p">
							<span className="section-three-div-span">
								What is Private Red Team Engagement?
							</span>
							<br />
							<br /> Private Red Team Engagement is a Security Assessment where Our
							Expert Team of Pentesters will Perform Red Team Engagement in Internal
							and/or External Pentest to Make Assets Secure before Cyber Attack to
							Reduce Cyber Threats
						</p>
						<p className="section-three-div-p2">
							{" "}
							<span className="section-three-div-span2">
								{" "}
								Benefits of Private Red Team Engagement :{" "}
							</span>
							<br />
							<br />
							Improved Security Posture Improved Compliance Enhanced Credibility Better
							Preparedness Improved Risk Management Enhanced Reputation Better Decision
							Making Capabilities Greater Efficiency of Systems And many more....
						</p>
						<div className="button_ani section-three-div-button">
							<button className="btn">Explore Futher</button>
						</div>
					</div>
					<div className="section-three-div-2">
						<h2 className="section-three-div-h div2-h">Public Bug Bounty Program</h2>
						<p className="section-three-div-p invert-p">
							<span className="section-three-div-span">
								{" "}
								What is Public Bug Bounty Program?
							</span>
							<br /> <br />
							Public Bug Bounty Program is list of Organizations who invites Security
							Researchers across the globe for Security Testing over Assets they Own
							and for Reported Bug Bounty is Paid as a Reward to Hackers for their
							findings
						</p>

						<p className="section-three-div-p2 invert-p2 ">
							{" "}
							<span className="section-three-div-span2">
								Benefits of Public Bug Bounty Program :
							</span>
							<br />
							<br />
							Early Identification of Vulnerability Greater Coverage Cost Efficient
							Improved Innovation Great Transparency Improved Reputation Fast
							Mitigation Enhanced Brand Reputation And Much More...
						</p>
						<div className="button_ani button-invert">
							<button className="btn">Explore Futher</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default homes3;

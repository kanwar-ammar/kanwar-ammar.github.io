import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./company1.jpeg"
								alt="CodeBustersPro"
								className="work-image"
							/>
							<div className="work-title">CodeBustersPro</div>
							<div className="work-subtitle">
								Jr. Software Engineer
							</div>
							<div className="work-duration">
								October 2021 - March 2022
							</div>
						</div>

						<div className="work">
							<img
								src="./company2.jpeg"
								alt="WonderTech"
								className="work-image"
							/>
							<div className="work-title">WonderTech</div>
							<div className="work-subtitle">
								MERN Stack Engineer
							</div>
							<div className="work-duration">
								May 2022 - Present
							</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;

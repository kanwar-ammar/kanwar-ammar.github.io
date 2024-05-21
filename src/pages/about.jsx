import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

// import { fa } from "@awesome.me/kit-KIT_CODE/icons";
import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/about.css";

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const downloadResume = () => {
		const a = document.createElement("a");
		a.href = "/Resume Kanwar Ammar Ali.pdf";
		a.download = "resume";

		// Trigger a click event on the <a> element to start the download
		a.click();

		// Release the object URL
		window.URL.revokeObjectURL("/Resume Kanwar Ammar Ali.pdf");
	};

	const currentSEO = SEO.find((item) => item.page === "about");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`About | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="about" />
				<div className="content-wrapper">
					<div className="about-logo-container">
						<div className="about-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="about-container">
						<div className="about-main">
							<div className="about-right-side">
								<div className="title about-title">
									{INFO.about.title}
								</div>

								<div className="subtitle about-subtitle">
									{INFO.about.description}
								</div>
								<button
									onClick={() => downloadResume()}
									className="about-resume-button"
								>
									{/* <a href="/Resume Kanwar Ammar Ali.pdf"> */}
									Resume
									{/* </a> */}
									{/* <div style={{ paddingLeft: "10px" }}>
										<img
											width="20px"
											height="20px"
											src="downloadIcon.svg"
											alt="My Image"
										/>
									</div> */}
								</button>
							</div>

							<div className="about-left-side">
								<div className="about-image-container">
									<div className="about-image-wrapper">
										<img
											src="me4_crop.jpg"
											alt="about"
											className="about-image"
										/>
									</div>
								</div>
								<div className="about-socials">
									<Socials />
								</div>
							</div>
						</div>

						<div className="about-socials-mobile">
							<Socials />
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default About;

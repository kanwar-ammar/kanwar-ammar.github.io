import React from "react";

function article_1() {
	return {
		date: "10 Oct 2018 - 8 Sept 2022",
		title: "Bachelors of Engineering in Computer Systems",
		description:
			"After Successfully completing by high school studies. I decided to follow my passion and be a part of one of the reknown universities in Pakistan as computer engineering student. ",
		keywords: [
			"The Benefits of Cloud Computing",
			"Tharindu",
			"Tharindu N",
			"Tharindu Nayanajith",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph"></div>
					{/* <img
						src="https://picsum.photos/200/300"
						alt="random"
						className="randImage"
					/> */}
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "21 Oct 2021 - 21 Mar 2022",
		title: "Jr. Software Engineer",
		description:
			"During my graduation, I realized that industry project experience is crucial for understanding advanced computer science concepts, verifying my skills, and further refining them. Consequently, I started working as a Junior Software Engineer. In this role, I was responsible for designing, developing, and implementing scalable backend systems for web applications. Additionally, I gained frontend skills, including responsive design, optimized component distribution, creating reusable components, and efficient data API fetching",
		style: ``,
		keywords: [
			"Artificial Intelligence in Healthcare",
			"Tharindu",
			"Tharindu N",
			"Tharindu Nayanajith",
		],
		body: (
			<React.Fragment>
				<h1>Content of article 2</h1>
			</React.Fragment>
		),
	};
}

function article_3() {
	return {
		date: "5 June 2022 - 5 October 2022",
		title: "Front-End Intern",
		description:
			"As I approached graduation, I developed a strong interest in creating interactive and attractive UIs for web applications. To pursue this passion, I joined WonderTech as a Front-End Intern, where I deepened my knowledge of React, Thunk APIs, state management, and components. Later, I was assigned to the front-end development of a Learning Management System (LMS) project, where I applied and honed these skills.",
		style: ``,
		keywords: [
			"Artificial Intelligence in Healthcare",
			"Tharindu",
			"Tharindu N",
			"Tharindu Nayanajith",
		],
		body: (
			<React.Fragment>
				<h1>Content of article 2</h1>
			</React.Fragment>
		),
	};
}

function article_4() {
	return {
		date: "5 October 2022 - Present",
		title: "MERN Stack Engineer",
		description:
			"After gaining substantial experience in both backend and frontend development and a thorough understanding of the project life cycle for a MERN stack project, I was promoted to MERN Stack Engineer. In this role, I was fully assigned to the LMS project, handling both backend and frontend development, creating its deployment cycle, optimizing storage, and integrating live features such as commenting and messaging. Additionally, I ensured robust database management, which reinforced my understanding of relations and associations in databases.",
		style: ``,
		keywords: [
			"Artificial Intelligence in Healthcare",
			"Tharindu",
			"Tharindu N",
			"Tharindu Nayanajith",
		],
		body: (
			<React.Fragment>
				<h1>Content of article 2</h1>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2, article_3, article_4];

export default myArticles;

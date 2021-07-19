// Import: React DOM
import React from "react";
// Import: React Final Form
import { Form, Field } from "react-final-form";
import { TextField, Input } from "final-form-material-ui";
import { Button } from "@material-ui/core";
// Import : Assets Icons
import LinkedIn from "../../assets/linkedin.png";
import github from "../../assets/github.png";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";

const onSubmit = async (values) => {
	const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
	await sleep;
	window.alert(JSON.stringify(values, 0, 2));
};

const validate = (values) => {
	const errors = {};

	if (!values.email) {
		errors.email = "Required";
	}
	if (!values.msg) {
		errors.email = "Required";
	}
};

const formData = [
	{ id: 1, name: "email", type: "text", placeholder: "Email" },
	{ id: 2, name: "phoneNumber", type: "text", placeholder: "Phone Number" },
	{ id: 2, name: "subject", type: "text", placeholder: "Subject" },
	{ id: 3, name: "message", type: "textarea", placeholder: "Message" },
];

const ConForm = () => {
	return (
		<>
			<div className='contactForm__Wrap'>
				<h3>Contact Us</h3>
				<p>We're open for any suggestion or just to have a chat</p>
				<div className='contactForm__Child'>
					<div className='form__text'>
						<h4>Address</h4>
						<p className='select__color'>Federal B.Area, Block20</p>
					</div>
					<div className='form__text'>
						<h4>Email</h4>
						<p className='select__color'>alihaiderizvi.you@gmail.com</p>
					</div>
					<div className='form__text'>
						<h4>Phone</h4>
						<p className='select__color'>+92-315-219-2461</p>
					</div>
				</div>
				<Form
					onSubmit={onSubmit}
					validate={validate}
					render={({ handleSubmit, submitting }) => (
						<form onSubmit={handleSubmit} noValidate>
							{formData.map((data) => (
								<Field
									name={data.name}
									fullWidth
									required
									component={TextField}
									type={data.type}
									placeholder={data.placeholder}
								/>
							))}
							<Button
								variant='contained'
								type='submit'
								disabled={submitting}
								className='submit__btn'
							>
								Send Message
							</Button>
						</form>
					)}
				/>
				<div className='socialMedia'>
					<h3>Follow me here</h3>
					<p className='socialMedia__links'>
						<a className='socialMedia__link' href='/'>
							<img src={LinkedIn} alt='Linkedin Icon' />
							LinkedIn
						</a>
						<a className='socialMedia__link' href='/'>
							<img src={github} alt='github Icon' />
							GitHub
						</a>
						<a className='socialMedia__link' href='/'>
							<img src={facebook} alt='facebook Icon' />
							Facebook
						</a>
						<a className='socialMedia__link' href='/'>
							<img src={instagram} alt='instagram Icon' />
							Instagram
						</a>
					</p>
				</div>
			</div>
		</>
	);
};

export default ConForm;

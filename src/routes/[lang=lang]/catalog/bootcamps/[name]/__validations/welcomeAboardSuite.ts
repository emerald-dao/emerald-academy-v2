import { create, enforce, test, only } from 'vest';

const welcomeAboardSuite = create((data = {}, currentField) => {
	only(currentField);

	test('email', 'Must be a valid email', () => {
		enforce(data.email).matches(
			/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
		);
	});

	test('email', 'Email is required', () => {
		enforce(data.email).isNotBlank();
	});

	test('name', 'Name is required', () => {
		enforce(data.name).isNotBlank();
	});

	test('name', 'Name should be shorter than 20 chars', () => {
		enforce(data.name).shorterThan(20);
	});
});

export default welcomeAboardSuite;

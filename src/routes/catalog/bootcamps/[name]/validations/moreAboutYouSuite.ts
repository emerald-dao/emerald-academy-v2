import { create, enforce, test, only } from 'vest';

const moreAboutYou = create((data = {}, currentField) => {
	only(currentField);

	test('firstOption', 'Select One Option', () => {
		enforce(data.firstOption).isTruthy();
	});
});

export default moreAboutYou;

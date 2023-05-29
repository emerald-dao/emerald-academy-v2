import { create, enforce, test, only } from 'vest';

const validationSuite = create((data = {}, currentField) => {
	only(currentField);

	test('amount', 'Amount should be greater than 0', () => {
		enforce(data.amount).greaterThan(0);
	});
});

export default validationSuite;

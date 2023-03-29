import { create, enforce, test, only } from 'vest';

const mediaDataSuite = create((data = {}, currentField) => {
	only(currentField);

	test('discord-handle', 'Discord handle should be shorter than 20 chars', () => {
		enforce(data.discordHandle).shorterThan(20);
	});

	test('discord-handle', 'Discord handle is required', () => {
		enforce(data.discordHandle).isNotBlank();
	});

	test('blocto-address', 'Blocto address is required', () => {
		enforce(data.bloctoAddress).isNotBlank();
	});

	test('blocto-address', 'Blocto address should be 18 chars long', () => {
		enforce(data.bloctoAddress).lengthEquals(18);
	});
});

export default mediaDataSuite;

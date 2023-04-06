import { create, enforce, test, only } from 'vest';

const mediaDataSuite = create((data = {}, currentField) => {
	only(currentField);

	test('discord-handle', 'Discord handle should be shorter than 20 chars', () => {
		enforce(data.discordHandle).shorterThan(20);
	});

	test('discord-handle', 'Discord handle is required', () => {
		enforce(data.discordHandle).isNotBlank();
	});
});

export default mediaDataSuite;

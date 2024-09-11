import type { PageServerLoad } from './$types';

export const load: PageServerLoad = () => {
	return {
		projects: [
			{
				year: 2024,
				name: 'Alexandria',
				description: `
                Alexandria is a mobile application that let's users download EBooks and convert
                them to different formats.
                `,
				labels: ['android', 'mobile'],
				github: 'https://github.com/aloussase/AlexandriaApp',
				image:
					'https://github.com/aloussase/AlexandriaApp/raw/master/app/src/main/res/drawable-night/logo.png'
			}
		]
	};
};

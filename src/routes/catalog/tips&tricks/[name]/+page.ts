export async function load({ params }) {
	try {
		const tAtFile = await import(
			`../../../../lib/content/tips&tricks/${params.name}.md`
		);		
        const { title } = tAtFile.metadata;
		const content = tAtFile.default;
		return {
			title, content
                       
		};
        
	} catch (e) {
		throw new Error();
	}
};

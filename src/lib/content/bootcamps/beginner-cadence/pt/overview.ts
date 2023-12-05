import type { BootcampOverview } from '$lib/types/content/bootcamp.interface';
import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
import { ExpertiseEnum } from '$lib/types/content/metadata/expertise.enum';
import { SubjectsEnum } from '$lib/types/content/metadata/subject.enum';

export const overview: BootcampOverview = {
	title: 'Iniciante em Cadence',
	contentType: ContentTypeEnum.Bootcamp,
	excerpt:
		'Aprenda Cadence. Durante este bootcamp, você aprenderá TODOS os principais aspectos da linguagem. Além de escrever e implantar seu próprio contrato NFT durante o bootcamp, você terá conhecimento para escrever seus próprios contratos também.',
	metadata: {
		expertise: ExpertiseEnum.Beginner,
		duration: '4 semanas',
		prerequisites: [],
		subjects: [SubjectsEnum.Cadence],
		price: 'Gratuito',
		faqs: [
			{
				question: '📖 O que é este bootcamp?',
				answer:
					'Aprenda Cadence. Você explorará TODOS os principais aspectos da linguagem.<br/><br/>Além de escrever e implantar seu próprio contrato NFT durante o bootcamp, você terá conhecimento para escrever seus próprios contratos também.'
			},
			{
				question: '🚀 O que vou saber no final?',
				answer:
					'<ul><li>Todos os principais conceitos de Cadence</li><li>A capacidade de escrever seus próprios contratos inteligentes em Cadence</li><li>A capacidade de criar a maioria dos contratos (não avançados) de Cadence</li><li>Você terá criado um contrato NFT durante o bootcamp</li><li>Como implantar um contrato no Flow Testnet</li></ul>'
			},
			{
				question: '🔖 O que vou criar?',
				answer:
					'Você criará seu próprio contrato inteligente NFT implantado no Flow Testnet. Você pode ver um exemplo disso <a href="https://flow-view-source.com/testnet/account/0xfa88aefbb588049d/contract/YoungJacob" target="_blank">aqui</a>.<br/><br/>No entanto, as habilidades fundamentais que você aprenderá permitirão que você faça muito mais do que isso.'
			},
			{
				question: '😇 Para quem é este bootcamp?',
				answer:
					"<ul><li>Se você nunca programou em Cadence antes</li><li>Se você já programou em Cadence, mas quer relembrar alguns conceitos</li><li>Se você está interessado na linguagem e quer saber mais</li></ul>"
			},
			{
				question: '📚 Como funciona?',
				answer:
				"As lições serão divididas em 'capítulos' e os capítulos serão divididos em 'lições'. Fiz dessa maneira para que você possa gerenciar seu tempo e progredir no bootcamp como quiser. Não se sinta pressionado a fazer todas as lições. Faça no seu próprio ritmo e divirta-se! Sempre estará aqui :) <br/><br/>Aqui está uma visão geral:<ul><li>Lições divididas em lições</li><li>Conteúdo escrito e em vídeo associado a cada lição. Os vídeos serão do meu <a href='https://www.youtube.com/channel/UCf6DzMRwj7SJ3nPrZqd5hHw' target='_blank'>Canal do YouTube</a>.</li><li>Missões para completar</li><li>Questionários curtos</li><li>Um certificado de conclusão (<a href='https://floats.city/jacob.find/event/241503135' target='_blank'>este FLOAT</a>) se você tiver concluído todas as missões dos Capítulos 1-5 (Capítulo 6 é crédito extra). Isso será a prova de que você tem conhecimento significativo em Cadence e poderá mostrá-lo a quem quiser como prova de especialização. Ou apenas por diversão! :D</li></ul>"
		},
		{
			question: '❓ Do que preciso antecipadamente?',
			answer:
				'Nada. <br/><br/>Para concluir este bootcamp, você não precisa saber absolutamente nada sobre programação. Incluí o Capítulo 1.5 que ensina os fundamentos da programação de computadores. <br/><br/><i>Embora o Capítulo 1.5 seja uma ótima introdução à programação, se você nunca escreveu código antes, também pode querer fazer algum aprendizado externo antes deste bootcamp, porque pode ficar complicado muito rápido. Eu sugeriria algumas introduções aos tutoriais de Javascript para ensinar alguns elementos fundamentais da programação. <br/><br/>É impossível aprender a programar apenas assistindo a tutoriais/lendo artigos. Você deve errar por conta própria para fazer progresso de verdade.</i>'
		},
		{
			question: '📁 O que são missões?',
			answer:
				"Missões são como tarefas de casa. Há missões para cada lição de conteúdo. Elas testarão sua compreensão dos conceitos que estão no conteúdo dessa lição."
		},
		{
			question: '🙋 Como envio missões?',
			answer:
				'Quando terminar uma missão, guarde todas as suas missões juntas. Depois, quando quiser que elas sejam revisadas, envie-as no canal #quest-submissions dentro do <a href="https://discord.gg/emerald-city-906264258189332541" target="_blank">Discord Emerald City</a> e nossos instrutores as revisarão.'
		},{
			question: '📝 O que são questionários?',
			answer:
				"Cada lição também tem um questionário associado para testar seu conhecimento. É um simples formulário do Google que você pode preencher para testar sua compreensão do conteúdo dessa lição.<br/><br/><i>Todos esses questionários são inteiramente graças a FrankenSense. Obrigado por ser uma lenda absoluta!</i>"
		}
		]
		},
		googleCalendarLink:
			'https://calendar.google.com/calendar/u/0?cid=ODUwOGVhNWFkYWI4NjNiZTA2MTRkODUxYzE5MTEzNTdjZDM3ZDgxMTJmMjk3M2JhYTAyMjkyZWM4NGE3ZmNjOEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t',
		videos: [
			{
				name: 'Vídeo de Introdução',
				excerpt: 'Aprenda sobre o bootcamp.',
				link: 'https://www.youtube.com/watch?v=0-pQ82Q1X8Y',
				subjects: [SubjectsEnum.Cadence],
				date: new Date(2023, 3, 17, 15, 0),
				chapters: []
			},
			{
				name: 'Workshop #1',
				excerpt: 'Capítulos 1.1 - 2.2',
				link: '',
				subjects: [SubjectsEnum.Cadence],
				date: new Date(2023, 3, 19, 16, 0),
				chapters: [
					{
						name: 'Capítulo 1, Lição 1',
						link: '/catalog/courses/beginner-cadence/chapter1/lesson1'
					},
					{
						name: 'Capítulo 1, Lição 2',
						link: '/catalog/courses/beginner-cadence/chapter1/lesson2'
					},
					{
						name: 'Capítulo 2, Lição 1',
						link: '/catalog/courses/beginner-cadence/chapter2/lesson1'
					},
					{
						name: 'Capítulo 2, Lição 2',
						link: '/catalog/courses/beginner-cadence/chapter2/lesson2'
					}
				]
			},
			{
				name: 'Workshop #2',
				excerpt: 'Capítulos 2.3 - 2.4',
				link: '',
				subjects: [SubjectsEnum.Cadence],
				date: new Date(2023, 3, 21, 16, 0),
				chapters: [
					{
						name: 'Capítulo 2, Lição 3',
						link: '/catalog/courses/beginner-cadence/chapter2/lesson3'
					},
					{
						name: 'Capítulo 2, Lição 4',
						link: '/catalog/courses/beginner-cadence/chapter2/lesson4'
					}
				]
			},
{
	name: 'Workshop #3',
	excerpt: 'Capítulos 3.1 - 3.3',
	link: '',
	subjects: [SubjectsEnum.Cadence],
	date: new Date(2023, 3, 26, 16, 0),
	chapters: [
		{
			name: 'Capítulo 3, Lição 1',
			link: '/catalog/courses/beginner-cadence/chapter3/lesson1'
		},
		{
			name: 'Capítulo 3, Lição 3',
			link: '/catalog/courses/beginner-cadence/chapter3/lesson3'
		}
	]
},
{
	name: 'Workshop #4',
	excerpt: 'Capítulos 3.4 - 3.5',
	link: '',
	subjects: [SubjectsEnum.Cadence],
	date: new Date(2023, 3, 28, 16, 0),
	chapters: [
		{
			name: 'Capítulo 3, Lição 4',
			link: '/catalog/courses/beginner-cadence/chapter3/lesson4'
		},
		{
			name: 'Capítulo 3, Lição 5',
			link: '/catalog/courses/beginner-cadence/chapter3/lesson5'
		}
	]
},
{
	name: 'Workshop #5',
	excerpt: 'Capítulos 4.1 - 4.2',
	link: '',
	subjects: [SubjectsEnum.Cadence],
	date: new Date(2023, 4, 3, 16, 0),
	chapters: [
		{
			name: 'Capítulo 4, Lição 1',
			link: '/catalog/courses/beginner-cadence/chapter4/lesson1'
		},
		{
			name: 'Capítulo 4, Lição 2',
			link: '/catalog/courses/beginner-cadence/chapter4/lesson2'
		}
	]
},
{
	name: 'Workshop #6',
	excerpt: 'Capítulos 4.3 - 4.4',
	link: '',
	subjects: [SubjectsEnum.Cadence],
	date: new Date(2023, 4, 5, 16, 0),
	chapters: [
		{
			name: 'Capítulo 4, Lição 3',
			link: '/catalog/courses/beginner-cadence/chapter4/lesson3'
		},
		{
			name: 'Capítulo 4, Lição 4',
			link: '/catalog/courses/beginner-cadence/chapter4/lesson4'
		}
	]
},
{
	name: 'Workshop #7',
	excerpt: 'Capítulos 5.1 - 5.2',
	link: '',
	subjects: [SubjectsEnum.Cadence],
	date: new Date(2023, 4, 10, 16, 0),
	chapters: [
		{
			name: 'Capítulo 5, Lição 1',
			link: '/catalog/courses/beginner-cadence/chapter5/lesson1'
		},
		{
			name: 'Capítulo 5, Lição 2',
			link: '/catalog/courses/beginner-cadence/chapter5/lesson2'
		}
	]
},
{
	name: 'Workshop #8',
	excerpt: 'Capítulo 5.3',
	link: '',
	subjects: [SubjectsEnum.Cadence],
	date: new Date(2023, 4, 12, 16, 0),
	chapters: [
		{
			name: 'Capítulo 5, Lição 3',
			link: '/catalog/courses/beginner-cadence/chapter5/lesson3'
		}
	]
}
]
};
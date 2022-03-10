import bgO1 from '../assets/carbon_i_1.png';
import bgO2 from '../assets/carbon_i_2.png';
import bgO3 from '../assets/carbon_i_3.png';
import bgO4 from '../assets/carbon_i_4.png';
import bgO5 from '../assets/carbon_i_5.png';
import bgO6 from '../assets/carbon_i_6.png';
import bgO7 from '../assets/bg_carbon_side_i_7.png';

const IndividualCarbonData = {
	0: {
		id: 0,
		quizType: true,
		changeState: true,
		title: 'Living',
		title2: 'How much electricity do you consume?',
		simpleState: { slider: '4' },
		complexState: {
			questions: {
				electricity: 'Electricity',
				gas: 'Natural Gas',
				gasoleo: 'Gasoleo',
				carbon: 'Carbon',
				propane: 'Propane',
			},
			placeHolder: {
				electricity: '1000 kWh',
				gas: '2000 kWh',
				gasoleo: '1000 L',
				carbon: '100 ton',
				propane: '1000 L',
			},
			savedValue: { electricity: '', gas: '', gasoleo: '', carbon: '', propane: '' },
		},
		image: bgO1,
		sideTitle: 'Home',
		sideBody:
			'This question calculates the Carbon Footprint produced by electricity consumption in your home. It refers to the footprint that corresponds to you in your home. If 4 people live, you must divide the total consumption by 4.',
		sideBody2:
			'The average is calculated per person per household in Spain. And this calculation would correspond to Scope 1.',
	},
	1: {
		id: 1,
		quizType: true,
		changeState: true,
		title: 'Car',
		title2: 'How much do use the car?',
		simpleState: { slider: '4' },
		complexState: {
			questions: {
				km: 'Km. per year',
				dropdown: 'fuel',
				efficiency: 'Car efficiency',
			},
			placeHolder: {
				km: '12000 Km',
				efficiency: '5.5 L',
			},
			dropdownQuestion: { fuel: 'Type of Fuel' },
			dropdownOptions: { fuel: ['--', 'Gasoline', 'Diesel'] },
			savedValue: { km: '', fuel: '', efficiency: '' },
		},
		image: bgO2,
		sideTitle: 'Transport',
		sideBody: 'In this question, the Carbon Footprint produced by the use of the car is calculated.',
		sideBody2:
			'In the case that it is an electric or hybrid car, you must count it as an electrical expense of the previous question.',
	},
	2: {
		id: 2,
		quizType: true,
		changeState: true,
		title: 'Bike',
		title2: 'How often do you ride?',
		simpleState: { slider: '4' },
		complexState: {
			questions: {
				km: 'Km. per year',
				dropdown: 'cc',
			},
			placeHolder: {
				km: '12000 Km',
			},
			dropdownQuestion: { cc: 'Moto cc.' },
			dropdownOptions: { cc: ['--', '< 125cc', '125cc ~ 500cc', '> 500cc'] },
			savedValue: { km: '', cc: '' },
		},
		image: bgO3,
		sideTitle: 'Moto',
		sideBody:
			'In this question, we calculate the Carbon Footprint produced by the use of a motorcycle is calculated.',
	},
	3: {
		id: 3,
		quizType: false,
		changeState: false,
		title: 'Train',
		title2: 'How often do travel by train?',
		simpleState: { slider: '4' },
		complexState: {
			questions: {
				km: 'Km. per year',
			},
			placeHolder: {
				km: '12000 Km',
			},
			dropdownQuestion: {},
			dropdownOptions: {},
			savedValue: { km: '' },
		},
		image: bgO4,
	},
	4: {
		id: 4,
		quizType: false,
		changeState: false,
		title: 'Public Transport',
		title2: 'How often do you use the bus?',
		simpleState: { slider: '4' },
		complexState: {
			questions: {
				km: 'Km. per year',
			},
			placeHolder: {
				km: '12000 Km',
			},
			dropdownQuestion: {},
			dropdownOptions: {},
			savedValue: { km: '' },
		},
		image: bgO5,
	},
	5: {
		id: 5,
		quizType: false,
		changeState: false,
		title: 'Airplane',
		title2: 'How often do you travel by plane?',
		simpleState: { slider: '4' },
		complexState: {
			questions: {
				km: 'Km. per year',
			},
			placeHolder: {
				km: '12000 Km',
			},
			dropdownQuestion: {},
			dropdownOptions: {},
			savedValue: { km: '' },
		},
		image: bgO6,
		sideTitle: 'Airplane',
		sideBody:
			'In this question, the Carbon Footprint produced by the use of air transport is calculated. The amount of km you drive per year.',
		sideBody2:
			'It is calculated using the average fuel consumption of the most popular airplane model and the emission factor of its fuel. So it is approximate calculation.',
	},
	// 6: {
	// 	id: 6,
	// 	title: 'Otro Consumo',
	// 	ComplexForm: false,
	// 	ComplexFormState: true,
	// 	description: '',
	// 	description2: '¿Cuánto compras?',
	// 	rowTitles: [
	// 		'Comida y Bebida',
	// 		'Farmaceuticos',
	// 		'Ropa y Textil',
	// 		'Papel',
	// 		'Tecnologia',
	// 		'TV',
	// 		'Vehiculos a Motor',
	// 		'Mobiliario',
	// 		'Hoteles, Pubs, etc.',
	// 		'Coste de Telefono',
	// 		'Hipoteca y Banco',
	// 		'Seguro',
	// 		'Otras actividades',
	// 	],
	// 	placeHolder: {
	// 		'Comida y Bebida': '10€',
	// 		Farmaceuticos: '10€',
	// 		'Ropa y Textil': '10€',
	// 		Papel: '10€',
	// 		Tecnologia: '10€',
	// 		TV: '10€',
	// 		'Vehiculos a Motor': '10€',
	// 		Mobiliario: '10€',
	// 		'Hoteles, Pubs, etc.': '10€',
	// 		'Coste de Telefono': '10€',
	// 		'Hipoteca y Banco': '10€',
	// 		Seguro: '10€',
	// 		'Otras actividades': '10€',
	// 	},
	// 	optionsFood: ['--', 'Lot of Meat', 'Average Meat', 'Few Meat', 'Fish', 'Vegetarian', 'Vegan'],
	// 	rowStructureSimple: { slider: '4' },
	// 	rowStructureComplex: [
	// 		{
	// 			'Comida y Bebida': '',
	// 			Farmaceuticos: '',
	// 			'Ropa y Textil': '',
	// 			Papel: '',
	// 			Tecnologia: '',
	// 			TV: '',
	// 			'Vehiculos a Motor': '',
	// 			Mobiliario: '',
	// 			'Hoteles, Pubs, etc.': '',
	// 			'Coste de Telefono': '',
	// 			'Hipoteca y Banco': '',
	// 			Seguro: '',
	// 			'Otras actividades': '',
	// 		},
	// 	],
	// 	dropdownTypes: [],
	// 	image2: bgO7,
	// 	image: '',
	// 	sideTitle: 'Gastos',
	// 	sideBody: 'En esta pregunta se calcula la Huella de Carbono que produce el consumo de bienes.',
	// 	sideBody2: 'Debes introducir el consumo que realizas de las siguientes categorias de productos al mes.',
	// },
};

export default IndividualCarbonData;

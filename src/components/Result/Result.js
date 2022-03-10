import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { businessCarbonData } from '../../data/carbon/businessCarbonData';
import { ResultIndividualCarbonData } from '../../data/carbon/ResultIndividualCarbonData';
import { mediaCarbonData } from '../../data/carbon/media-carbon-data';
import { fakeData } from '../../data/dummyData';
import ResultsBackground from './Background';
import logo from '../../assets/logo.png';
import earth from '../../assets/earth.png';

const ResultWrapper = styled.div`
	color: #000;
	height: 100vh;
	font-family: 'Roboto', sans-serif;
	color: white;
	position: absolute;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	display: flex;
`;
const Box = styled.div`
	margin: auto;
`;

const LogoWrapper = styled.div`
	position: absolute;
	width: inherit;
	left: 1em;
`;
const LogoStyle = styled.img`
	width: 12vw;
	margin: auto;
	@media (max-width: 640px) {
		width: 25vw;
	}
`;

const TitleResult = styled.h1`
	text-transform: uppercase;
`;

const SubTitleResult = styled.h3`
	padding-top: 0.3em;
	font-weight: 900;
	margin: auto;

	margin-bottom: 1.5em;
`;

const DataResult = styled.div`
	display: flex;
	margin: auto;
	justify-content: center;
	align-items: center;
`;

const DataResultTitle = styled.h1`
	margin: 0px 10px;
	padding: 0px;
	font-size: 40px;
`;
const DataResultExtra = styled.h3`
	margin: 0;
	padding: 0px;
`;

const AwarenessText = styled.div`
	font-size: 20px;
	margin: auto;
	margin-top: 1.5em;
	margin-bottom: 0.5em;
	padding: 0px 20px;
`;
const AwarenessResult = styled.div`
	font-size: 40px;
	margin: auto;
	margin-bottom: 0.5em;
	display: flex;
	align-items: center;
	justify-content: center;
`;
const AwarenessWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	max-width: 80vw;
	margin: auto;
`;
const AwarenessImg = styled.img`
	width: 15vw;
	margin: auto;
`;
const AwarenessButton = styled.button`
	background: -webkit-linear-gradient(white, #38495a);
	border-radius: 20px;
	margin: 1em;
	border-radius: 2px;
	padding: 0.5em;
	font-size: 12px;
	&:hover {
		cursor: pointer;
	}
`;

export function Result({ stateScreen }) {
	let result = 0;

	// const stateScreen = fakeData;

	if (stateScreen.formState && stateScreen.formState[0].type === 'business') {
		Object.keys(stateScreen.formState).map((key) => {
			Object.keys(stateScreen.formState[key].rowStructure).map((i) => {
				let energy = stateScreen.formState[key].rowStructure[i].energyType;
				let quantity = stateScreen.formState[key].rowStructure[i].quantity;
				if (energy && quantity) {
					result = result + Number(quantity) * Number(businessCarbonData[key][energy]);
				}
			});
		});
	} else if (
		stateScreen.formState &&
		stateScreen.formState[0].type === 'individual' &&
		stateScreen.formState[0].footprint === 'carbon'
	) {
		console.log(stateScreen.formState);
		Object.keys(stateScreen.formState).map((key) => {
			let frecuency = stateScreen.formState[key].rowStructureSimple['slider'];
			let combustion = stateScreen.formState[key].rowStructureSimple['coche'];
			let eficiencyCar = stateScreen.formState[key].rowStructureSimple['eficiencia'];
			let moto = stateScreen.formState[key].rowStructureSimple['moto'];
			let title = stateScreen.formState[key].simpleName;
			let frecuencyMultiplier;
			if (frecuency < 1) {
				frecuencyMultiplier = 0;
			} else if (frecuency < 3) {
				frecuencyMultiplier = 1 / 3;
			} else if (frecuency < 5) {
				frecuencyMultiplier = 1;
			} else if (frecuency < 7) {
				frecuencyMultiplier = 1.5;
			} else if (frecuency < 9) {
				frecuencyMultiplier = 3;
			} else if (frecuency <= 10) {
				frecuencyMultiplier = 5;
			}
			if (stateScreen.formState[key].ComplexFormState === false) {
				let footprintFactor = ResultIndividualCarbonData[key][title];
				let footprintFactorCar = ResultIndividualCarbonData[key][combustion];
				let footprintFactorMoto = ResultIndividualCarbonData[key][moto];
				let averageConsume = mediaCarbonData[key][title];
				if (footprintFactor) {
					result = result + Number(averageConsume) * Number(frecuencyMultiplier) * Number(footprintFactor);
				}
				if (footprintFactorCar) {
					result =
						Number(result) +
						Number(averageConsume) *
							Number(frecuencyMultiplier) *
							Number(footprintFactorCar) *
							(Number(eficiencyCar) / 100);
				}
				if (moto && footprintFactorMoto && averageConsume) {
					result =
						Number(result) +
						Number(averageConsume) * Number(frecuencyMultiplier) * Number(footprintFactorMoto);
				}
			}
			if (stateScreen.formState[key].ComplexFormState === true) {
				if (key === '1') {
					let quantity = stateScreen.formState[key].rowStructureComplex[0]['Km. recorrido por año'];
					let eficiency = stateScreen.formState[key].rowStructureComplex[0]['Eficiencia del vehículo'];
					let combustible = stateScreen.formState[key].rowStructureComplex[0]['Tipo de Combustible'];
					let carFactor = ResultIndividualCarbonData[key][combustible];
					if (carFactor) {
						result = Number(result) + Number(quantity) * Number(carFactor) * Number(eficiency);
					}
				} else if (key === '2') {
					let quantity = stateScreen.formState[key].rowStructureComplex[0]['Km. recorrido por año'];
					let cilindrada = stateScreen.formState[key].rowStructureComplex[0]['Moto cc.'];
					let motoFactor = ResultIndividualCarbonData[key][cilindrada];
					if (motoFactor) {
						result = Number(result) + Number(quantity) * Number(motoFactor);
					}
				}
				Object.keys(stateScreen.formState[key].rowStructureComplex[0]).map((i) => {
					let quantity = stateScreen.formState[key].rowStructureComplex[0][i];
					let footprintFactor = ResultIndividualCarbonData[key][i];
					if (quantity && footprintFactor && key !== '1' && key !== '2') {
						if (key === '6') {
							result = Number(result) + Number(quantity) * Number(footprintFactor) * 12;
						} else {
							result = Number(result) + Number(quantity) * Number(footprintFactor);
						}
					}
				});
			}
		});
	}

	let carbon = true;
	let units = 'm3 de agua al año';
	let Earths = 1;
	let ArrayEarths = ['1'];
	if (stateScreen.formState) {
		carbon = stateScreen.formState[0].footprint == 'carbon' && stateScreen.formState[0].type == 'individual';
	}
	result = result.toFixed(2);

	if (stateScreen.formState && stateScreen.formState[0].footprint == 'carbon') {
		result = result / 1000;
		result = result.toFixed(2);
		units = 'tones de CO2 al año';
		let earthFootprint = 2.5;
		Earths = Math.round(result / earthFootprint);
		let EarthsCount = Earths;
		ArrayEarths = [];
		if (EarthsCount > 6) {
			EarthsCount = 6;
		}
		if (EarthsCount < 1) {
			EarthsCount = 1;
		}
		if (Earths < 1) {
			Earths = result / earthFootprint;
			Earths = Earths.toFixed(2);
		}
		for (let i = 0; i < EarthsCount; i++) {
			ArrayEarths.push(i);
		}
	}

	return (
		<>
			<ResultsBackground />
			<ResultWrapper>
				<LogoWrapper>
					<Link to='/'>
						<LogoStyle src={logo} alt='logo' />
					</Link>
				</LogoWrapper>
				<Box>
					<TitleResult>Enhorabuena 🥳🥳</TitleResult>
					<SubTitleResult>Tu Huella de Carbono es:</SubTitleResult>
					<DataResult>
						<DataResultTitle> {result} </DataResultTitle>
						<DataResultExtra> {units} </DataResultExtra>
						{/* <AwarenessButton>See How</AwarenessButton> */}
					</DataResult>
					{carbon ? (
						<>
							<AwarenessText>Si todo el mundo tuviese tu estilo de vida, necesitariamos</AwarenessText>
							<AwarenessResult>
								{Earths} Tierras
								{/* <AwarenessButton>See How</AwarenessButton> */}
							</AwarenessResult>
							<AwarenessWrapper>
								{ArrayEarths.map((row, key) => (
									<AwarenessImg key={key} src={earth}></AwarenessImg>
								))}
							</AwarenessWrapper>
						</>
					) : (
						<AwarenessImg src={earth}></AwarenessImg>
					)}
				</Box>
			</ResultWrapper>
		</>
	);
}

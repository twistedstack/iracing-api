export const CarMap = {
	0: { id: 0, make: "Mazda", model: "MX-5", relative_speed: 20 },
	1: { id: 1, make: "BMW", model: "M4", relative_speed: 50 },
	2: { id: 2, make: "Audi", model: "R8", relative_speed: 60 },
	3: { id: 3, make: "NASCAR Ford", model: "Mustang", relative_speed: 70 },
	4: { id: 4, make: "Skip Barber", model: "2000", relative_speed: 35 },
	5: { id: 5, make: "Dallara", model: "DW12 Indycar", relative_speed: 70 },
	6: { id: 6, make: "Porsche", model: "911 GT3", relative_speed: 65 },
};

export const TrackMap = {
	0: {
		id: 0,
		name: "Road America",
		track_length: 4.048,
		logo: "https://s100.iracing.com/wp-content/uploads/2012/10/update_RoadAmerica-350x197.jpg",
	},
	1: {
		id: 1,
		name: "Circuit of the Americas",
		track_length: 3.427,
		logo: "https://s100.iracing.com/wp-content/uploads/2013/12/circuitoftheamericas-sm-350x197.jpg",
	},
	2: {
		id: 2,
		name: "Sebring International Raceway",
		track_length: 3.74,
		logo: "https://s100.iracing.com/wp-content/uploads/2012/10/sebringinternationalraceway-sm-350x197.jpg",
	},
	3: {
		id: 3,
		name: "Daytona International Speedway",
		track_length: 3.56,
		logo: "https://s100.iracing.com/wp-content/uploads/2012/10/update_DaytonaInternationalSpeedway-350x197.jpg",
	},
	4: {
		id: 4,
		name: "Indianapolis Motor Speedway",
		track_length: 2.5,
		logo: "https://s100.iracing.com/wp-content/uploads/2012/10/indianapolismotorspeedway-sm-350x197.jpg",
	},
	5: {
		id: 5,
		name: "Autodromo Nazionale Monza",
		track_length: 5.793,
		logo: "https://s100.iracing.com/wp-content/uploads/2013/12/Monza-350x197.jpg",
	},
};

export const tracks = Object.values(TrackMap);
export const cars = Object.values(CarMap);

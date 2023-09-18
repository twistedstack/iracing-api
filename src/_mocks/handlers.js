// src/mocks/handlers.js
import { rest, createResponseComposition, context } from "msw";

import { cars, tracks, CarMap, TrackMap } from "./content";

const delayedResponse = createResponseComposition(undefined, [
	context.delay(3000),
]);

const sessions = [
	{
		id: 123,
		name: "Daytona 500",
		track_id: 3,
		car_ids: [0, 1],
		registered: null,
		start_time: new Date(2023, 0, 1, 14, 10, 0, 0).getTime(),
	},
	{
		id: 124,
		name: "Sebring 12 Hours",
		track_id: 2,
		car_ids: [2, 3],
		registered: null,
		start_time: new Date(2023, 0, 1, 14, 15, 0, 0).getTime(),
	},
	{
		id: 125,
		name: "Indy 500",
		track_id: 4,
		car_ids: [4, 5],
		registered: null,
		start_time: new Date(2023, 0, 1, 14, 20, 0, 0).getTime(),
	},
	{
		id: 126,
		name: "Le Mans 24 Hours",
		track_id: 5,
		car_ids: [6, 0],
		registered: null,
		start_time: new Date(2023, 0, 1, 14, 25, 0, 0).getTime(),
	},
	{
		id: 127,
		name: "Daytona 500",
		track_id: 3,
		car_ids: [1, 2],
		registered: 67,
		start_time: new Date(2023, 0, 1, 10, 30, 0, 0).getTime(),
	},
	{
		id: 128,
		name: "Sebring 12 Hours",
		track_id: 2,
		car_ids: [3, 4],
		registered: 42,
		start_time: new Date(2023, 0, 1, 10, 35, 0, 0).getTime(),
	},
	{
		id: 129,
		name: "Indy 500",
		track_id: 4,
		car_ids: [5],
		registered: null,
		start_time: new Date(2023, 0, 1, 18, 40, 0, 0).getTime(),
	},
	{
		id: 130,
		name: "Le Mans 24 Hours",
		track_id: 5,
		car_ids: [0, 1],
		registered: null,
		start_time: new Date(2023, 0, 1, 18, 45, 0, 0).getTime(),
	},
	{
		id: 131,
		name: "Daytona 500",
		track_id: 3,
		car_ids: [2, 3],
		registered: null,
		start_time: new Date(2023, 0, 1, 16, 50, 0, 0).getTime(),
	},
	{
		id: 132,
		name: "Sebring 12 Hours",
		track_id: 2,
		car_ids: [4, 5],
		registered: null,
		start_time: new Date(2023, 0, 1, 16, 55, 0, 0).getTime(),
	},
];

const mixedSessions = sessions.map((session) => ({
	id: session.id,
	name: session.name,
	track: TrackMap[session.track_id].name,
	cars: session.car_ids.map((carId) => {
		const car = CarMap[carId];
		return `${car.make} ${car.model}`;
	}),
	registered: session.registered,
	start_time: new Date(session.start_time).toLocaleTimeString("en-US", {
		hour: "numeric",
		minute: "numeric",
		hour12: true,
	}),
}));

export const handlers = [
	rest.get("/api/cars", (req, res, ctx) => {
		return res(ctx.status(200), ctx.json(cars));
	}),

	rest.get("/api/tracks", (req, res, ctx) => {
		return res(ctx.status(200), ctx.json(tracks));
	}),

	rest.get("/api/mixed-sessions", (req, res, ctx) => {
		return delayedResponse(ctx.status(200), ctx.json(mixedSessions));
	}),

	rest.get("api/sessions", (req, res, ctx) => {
		return delayedResponse(ctx.status(200), ctx.json(sessions));
	}),
];

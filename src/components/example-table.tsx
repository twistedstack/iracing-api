import { registerForSession } from "../utils/sessionUtils";

export default function ExampleTable() {
	return (
		<table>
			<thead>
				<tr>
					<th>Start Time</th>
					<th># Registered</th>
					<th>Cars</th>
					<th>Track</th>
					<th></th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>10:30 AM</td>
					<td>67</td>
					<td>BMW M4, Audi R8</td>
					<td>Daytona International Speedway</td>
					<td>
						<a
							onClick={() =>
								registerForSession(127, "Daytona 500")
							}
						>
							REGISTER
						</a>
					</td>
				</tr>
				<tr>
					<td>10:35 AM</td>
					<td>42</td>
					<td>NASCAR Ford Mustang, Skip Barber 2000</td>
					<td>Sebring International Raceway</td>
					<td>
						<a
							onClick={() =>
								registerForSession(128, "Sebring 12 Hours")
							}
						>
							REGISTER
						</a>
					</td>
				</tr>
				<tr>
					<td>2:10 PM</td>
					<td>---</td>
					<td>Mazda MX-5, BMW M4</td>
					<td>Daytona International Speedway</td>
					<td>
						<a
							onClick={() =>
								registerForSession(123, "Daytona 500")
							}
						>
							REGISTER
						</a>
					</td>
				</tr>
				<tr>
					<td>2:15 PM</td>
					<td>---</td>
					<td>Audi R8, NASCAR Ford Mustang</td>
					<td>Sebring International Raceway</td>
					<td>
						<a
							onClick={() =>
								registerForSession(124, "Sebring 12 Hours")
							}
						>
							REGISTER
						</a>
					</td>
				</tr>
				<tr>
					<td>2:20 PM</td>
					<td>---</td>
					<td>Skip Barber 2000, Dallara DW12 Indycar</td>
					<td>Indianapolis Motor Speedway</td>
					<td>
						<a onClick={() => registerForSession(125, "Indy 500")}>
							REGISTER
						</a>
					</td>
				</tr>
				<tr>
					<td>2:25 PM</td>
					<td>---</td>
					<td>Porsche 911 GT3, Mazda MX-5</td>
					<td>Autodromo Nazionale Monza</td>
					<td>
						<a
							onClick={() =>
								registerForSession(126, "LeMans 24 Hours")
							}
						>
							REGISTER
						</a>
					</td>
				</tr>
				<tr>
					<td>4:50 PM</td>
					<td>---</td>
					<td>Audi R8, NASCAR Ford Mustang</td>
					<td>Daytona International Speedway</td>
					<td>
						<a
							onClick={() =>
								registerForSession(131, "Daytona 500")
							}
						>
							REGISTER
						</a>
					</td>
				</tr>
				<tr>
					<td>4:55 PM</td>
					<td>---</td>
					<td>Skip Barber 2000, Dallara DW12 Indycar</td>
					<td>Sebring International Raceway</td>
					<td>
						<a
							onClick={() =>
								registerForSession(127, "Sebring 12 Hours")
							}
						>
							REGISTER
						</a>
					</td>
				</tr>
				<tr>
					<td>6:40 PM</td>
					<td>---</td>
					<td>Dallara DW12 Indycar</td>
					<td>Indianapolis Motor Speedway</td>
					<td>
						<a onClick={() => registerForSession(129, "Indy 500")}>
							REGISTER
						</a>
					</td>
				</tr>
				<tr>
					<td>6:45 PM</td>
					<td>---</td>
					<td>Mazda MX-5, BMW M4</td>
					<td>Autodromo Nazionale Monza</td>
					<td>
						<a
							onClick={() =>
								registerForSession(130, "Le Mans 24 Hours")
							}
						>
							REGISTER
						</a>
					</td>
				</tr>
			</tbody>
		</table>
	);
}

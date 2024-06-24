import React , { useState } from 'react';

function BookingForm () {
	const [availableTimes, setAvailableTimes] = useState([
		"17:00",
		"18:00",
		"19:00",
		"20:00",
		"21:00",
		"22:00"
	])

	const [date, setDate] = useState("");
	const [time, setTime] = useState("");
	const [numberOfGuests, setNumberOfGuests] = useState(1);
	const [occassion, setOccassion] = useState("");

	return (
		<form>

			<label for="res-date">Choose date</label>
			<input type="date" id="res-date" value={date} onChange={(e) => setDate(e.target.value)} />

			<label for="res-time">Choose time</label>
			<select id="res-time" value={time} onChange={(e) => setTime(e.target.value)}>
				{availableTimes.map(
					(item) => <option>{item}</option>
				)}
			</select>

			<label for="guests">Number of guests</label>
			<input
				type="number"
				placeholder="1"
				min="1" max="10"
				id="guests"
				value={numberOfGuests}
				onChange={e => setNumberOfGuests(e.target.value)}
			/>

			<label for="occasion">Occasion</label>
			<select id="occasion" value={occassion} onChange={(e) => setOccassion(e.target.value)}>
				<option>Birthday</option>
				<option>Anniversary</option>
			</select>

			<input type="submit" value="Make Your Reservation" />
		</form>
	);
}

export default BookingForm;
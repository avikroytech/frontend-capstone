import React , { useState } from 'react';

function BookingForm ({availableTimes, dispatch, submitForm}) {
	const [date, setDate] = useState("");
	const [time, setTime] = useState("");
	const [numberOfGuests, setNumberOfGuests] = useState(1);
	const [occassion, setOccassion] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		submitForm({
			date: date,
			time: time,
			guests: numberOfGuests,
			occassion: occassion
		});
	}

	return (
		<form onSubmit={handleSubmit}>
			<div className='input-group'>
				<label htmlFor="res-date">Choose date</label>
				<input type="date" data-testid="res-date" id="res-date" className='field' value={date} onChange={(e) => {
					setDate(e.target.value);
					dispatch({date: e.target.value});
				}} />
			</div>

			<div className='input-group'>
				<label htmlFor="res-time">Choose time</label>
				<select id="res-time" className='field' value={time} onChange={(e) => setTime(e.target.value)}>
					{availableTimes.map(
						(item) => <option key={item}>{item}</option>
					)}
				</select>
			</div>

			<div className='input-group'>
				<label htmlFor="guests">Number of guests</label>
				<input
					type="number"
					placeholder="1"
					min="1" max="10"
					className='field'
					id="guests"
					value={numberOfGuests}
					onChange={e => setNumberOfGuests(e.target.value)}
				/>
			</div>

			<div className='input-group'>
				<label htmlFor="occasion">Occasion</label>
				<select id="occasion" className='field' value={occassion} onChange={(e) => setOccassion(e.target.value)}>
					<option>Birthday</option>
					<option>Anniversary</option>
				</select>
			</div>

			<input className='button' type="submit" value="Make Your Reservation" />
		</form>
	);
}

export default BookingForm;
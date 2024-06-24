import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './components/BookingForm';
import Main from './components/Main';
import { MemoryRouter, BrowserRouter } from 'react-router-dom';

// jest.mock('./components/BookingForm');

// TODO: Make tests works


describe('Booking Form', () => {
	test('Initialize times function works', () => {
		const expected = [
			'17:00',
			'18:00',
			'19:00',
			'20:00',
			'21:00',
			'22:00'
		];

		const dispatch = jest.fn()

		render(<BookingForm />);

		// expect(initializeTimes()).toStrictEqual(expected)

	});

	test('Update times function works', () => {
		const expected = [
			'17:00',
			'18:00',
			'19:00',
			'20:00',
			'21:00',
			'22:00'
		];

		const newState = updateTimes(expected, new Date());

		// expect(newState).toStrictEqual(expected);


	});
})

import reducer, { setInputValue } from '../redux/features/countriesSlice';

// Create unit tests for pure functions in your Redux code.

describe('countriesSlice reducer', () => {
  describe('setInputValue', () => {
    test('should update the input value', () => {
      const initialState = {
        countries: [],
        isLoading: false,
        error: null,
        input: '',
      };

      const action = setInputValue('search term');
      const newState = reducer(initialState, action);

      expect(newState).toEqual({
        countries: [],
        isLoading: false,
        error: null,
        input: '',
      });
    });
  });
});

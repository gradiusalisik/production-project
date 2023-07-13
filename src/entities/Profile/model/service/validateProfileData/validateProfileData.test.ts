import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { validateProfileData } from './validateProfileData';
import { ValidateProfileError } from '../../types/profile';

const data = {
  username: 'admin',
  age: 22,
  country: Country.Russia,
  first: 'asd',
  lastname: 'asd grad',
  city: 'asd',
  currency: Currency.RUB,
};

describe('validateProfileData.test', () => {
  test('success', () => {
    const result = validateProfileData(data);

    expect(result).toEqual([]);
  });
  test('without first and lastname', () => {
    const result = validateProfileData({ ...data, first: '', lastname: '' });
    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
    ]);
  });
  test('incorrect age', () => {
    const result = validateProfileData({ ...data, age: undefined });
    expect(result).toEqual([
      ValidateProfileError.INCORRECT_AGE,
    ]);
  });
  test('incorrect country', () => {
    const result = validateProfileData({ ...data, country: undefined });
    expect(result).toEqual([
      ValidateProfileError.INCORRECT_COUNTRY,
    ]);
  });
  test('incorrect all', () => {
    const result = validateProfileData({ });
    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.INCORRECT_COUNTRY,
    ]);
  });
});

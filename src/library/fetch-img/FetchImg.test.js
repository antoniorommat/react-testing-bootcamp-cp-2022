import fetchImg from '../../library/fetch-img/fetchImg';
import {constants} from '../constants';

test('must fetch the Astronomy Picture Of the Day (NASA APOD)', async () => {
  const testDate = new Date().toLocaleDateString('en-CA');
  const { date } = await fetchImg(constants.url, constants.key, testDate);
  expect(date).toMatch(testDate);
});

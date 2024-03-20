import prelaunchBreweries from './prelaunch/prelaunchBreweries';
import prelaunchBeers from './prelaunch/prelaunchBeers';
import lifetimePasses from './passes';
import festivals from './festivals';
import membership from './membership';
import breweries from './breweries';

// const CURRENT_COLLECTIONS = [
//   prelaunchBreweries,
//   prelaunchBeers,
//   lifetimePasses,
// ];

const CURRENT_COLLECTIONS = [
  breweries,
  prelaunchBeers,
  festivals,
  lifetimePasses,
];

export {
  CURRENT_COLLECTIONS,
  prelaunchBreweries,
  prelaunchBeers,
  membership,
  breweries,
  lifetimePasses,
};

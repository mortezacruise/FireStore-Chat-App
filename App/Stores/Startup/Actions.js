import {createActions} from 'reduxsauce';

const {Types, Creators} = createActions({
  initiateApp: null,
});

export const StartupTypes = Types;
export default Creators;

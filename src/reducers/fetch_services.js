const INITIAL_DATA = [
  "Cardiologie intetventionnelle",
  "Coronarographie",
  "echocardiographie",
  "Angioplastie",
  "Échodoppler vasculaire",
  "Echographie cardiaque et Doppler",
  "Épreuve d effort",
  "Holter-ECG 24 H",
  "bilan cardiaque",
];

const fetchServices = (
  state = {
    fetchServices: INITIAL_DATA,
    fetched: false,
  },
  action
) => {
  if (action.type === "FETCH_SERVICES") {
    state = { ...state, fetchServices: action.payload.acts }; //removed acts
  }

  return state;
};
export default fetchServices;

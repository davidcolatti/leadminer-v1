import axios from 'axios';
let baseURL;

process.env.NODE_ENV === 'production'
	? //? (baseURL = 'here should be your production endpoint')
		(baseURL = window.location.origin)
	: (baseURL = 'http://localhost:5000');
console.log(process.env.NODE_ENV, baseURL, 'this is it');
const service = axios.create({ withCredentials: true, baseURL });

const actions = {
	isLoggedIn: async () => {
		return await service.get('/is-logged-in');
	},
	signUp: async (user) => {
		return await service.post('/signup', user);
	},
	logIn: async (user) => {
		return await service.post('/login', user);
	},
	logOut: async () => {
		return await service.get('/logout');
	},
	getLeadsFromMaster: async () => {
		return await service.get('/master-leads');
	},
	addLeadToContactedArray: async (leads) => {
		return await service.post('/add-lead', leads);
	},
	sendingMasterIndex: async (index) => {
		return await service.post('/send-index', index);
	},
	deleteLeadFromContactedLeadsArray: async (leads) => {
		return await service.post('/delete-lead', leads);
	},
	saveLeads: async (leads) => {
		return await service.post('/save-leads', leads);
	}
};

export default actions;

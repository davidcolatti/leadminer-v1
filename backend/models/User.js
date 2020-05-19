const { Schema, model } = require('mongoose');
const PLM = require('passport-local-mongoose');

const userSchema = new Schema(
	{
		email: String,
		name: String,
		indexOfMasterLeads: Number,
		freshLeads: [ Object ],
		contactedLeads: [ Object ],
		apptLeads: [ Object ],
		clientList: [ Object ]
	},
	{
		timestamps: true,
		versionKey: false
	}
);

userSchema.plugin(PLM, { usernameField: 'email' });

module.exports = model('User', userSchema);

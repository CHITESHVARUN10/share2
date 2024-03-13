const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const donarSchema = new Schema({
    username: { type: String },
    address: { type: String },
    city: { type: String },
    state: { type: String },
    aptUnit: { type: String },
    zipCode: { type: String },
    primaryPhone: { type: String },
    secondaryPhone: { type: String },
    email: { type: String },
    preferredContact: { type: String },
    petName: { type: String },
    breed: { type: String },
    age: { type: String },
    weight: { type: String },
    sex: { type: String },
    rabies: { type: String },
    DHPP: { type: String },
    otherVaccine: { type: String },
    fecalTest: { type: String },
    fecalTestDate: { type: String },
    diet: { type: String },
    generalHealth: { type: String },
    medication: { type: String },
    medicationDetails: { type: String },
    preventiveMeasures: { type: String },
    comfortWithHandling: { type: String },
    previousTransfusion: { type: String },
    previousHospitalization: { type: String },
    hospitalizationDetails: { type: String },
    medicalConditions: { type: [String] },
    commitToDonation: { type: String },
    hairShaving: { type: String },
    sedationOrAnesthesia: { type: String },
    availabilityForDonation: { type: String },
    donationTiming: { type: String }
});

const Donar = mongoose.model('Donar', donarSchema);

module.exports = Donar;

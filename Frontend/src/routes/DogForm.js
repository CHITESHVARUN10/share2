import "./DFormStyles.css";
import axios from 'axios'; // Import Axios for making HTTP requests
import { useState } from 'react';
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

function DogForm() {
  // State variables to store form data
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    aptUnit: "",
    zipCode: "",
    primaryPhone: "",
    secondaryPhone: "",
    email: "",
    preferredContact: "",
    petName: "",
    breed: "",
    age: "",
    weight: "",
    sex: "",
    rabies: "",
    DHPP: "",
    otherVaccine: "",
    fecalTest: "",
    fecalTestDate: "",
    diet: "",
    generalHealth: "",
    medication: "",
    preventiveMeasures: "",
    comfortWithHandling: "",
    previousTransfusion: "",
    previousHospitalization: "",
    medicalConditions: [],
    commitToDonation: "",
    hairShaving: "",
    sedationOrAnesthesia: "",
    availabilityForDonation: "",
    donationTiming: ""
  });

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Get auth-token from local storage
      const authToken = localStorage.getItem('authToken');

// Set headers
const config = {
  headers: {
    'Content-Type': 'application/json',
    'auth-token': authToken
  }
};

      // Make a POST request to your backend API endpoint
      const response = await axios.post('', formData, config);

      // Save the auth-token in local storage
      localStorage.setItem('auth-token', response.data.token);

      // Handle successful response
      console.log("Data submitted successfully:", response.data);
    } catch (error) {
      // Handle errors
      console.error("Error submitting data:", error);
    }
  };

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };


  return (
    <div className="d-form">
      <div className="d-form2">
        <div className="df-head">
          <div className="ediah">
            <h1>Every Donor is a Hero.</h1>
          </div>
          <br />
          <div className="history-form">
            <h3>Canine Blood Donor History Form</h3>
          </div>
        </div>
        <br />
        <div className="p1">
          <b><u>Client information.</u></b>
          <br />
          <br />
          <div className="i1">
            <TextField label="Name" variant="standard" required onChange={handleChange} name="name" value={formData.name} />
            <TextField label="Address" variant="standard" required onChange={handleChange} name="address" value={formData.address} />
            <TextField label="City" variant="standard" required onChange={handleChange} name="city" value={formData.city} />
          </div>

          <div className="i2">
            <TextField label="State" variant="standard" required onChange={handleChange} name="state" value={formData.state} />
            <TextField label="Apt./unit" variant="standard" required onChange={handleChange} name="aptUnit" value={formData.aptUnit} />
            <TextField label="ZIP Code" variant="standard" required onChange={handleChange} name="zipCode" value={formData.zipCode} />
          </div>

          <div className="i3">
            <TextField label="Primary Phone" variant="standard" required onChange={handleChange} name="primaryPhone" value={formData.primaryPhone} />
            <TextField label="Secondary Phone" variant="standard" onChange={handleChange} name="secondaryPhone" value={formData.secondaryPhone} />
            <TextField label="Email address" variant="standard" required onChange={handleChange} name="email" value={formData.email} />
          </div>

          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label" required>What is your preferred method of contact?</FormLabel>
            <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="phone" name="preferredContact" onChange={handleChange} value={formData.preferredContact}>
              <FormControlLabel value="phone" control={<Radio />} label="Phone" />
              <FormControlLabel value="email" control={<Radio />} label="Email" />
            </RadioGroup>
          </FormControl>

          <h3><b>Donor Information</b></h3>
          <TextField label="Pet's Name" variant="standard" required onChange={handleChange} name="petName" value={formData.petName} />
          <TextField label="Breed" variant="standard" required onChange={handleChange} name="breed" value={formData.breed} />
          <TextField label="Age" variant="standard" required onChange={handleChange} name="age" value={formData.age} />
          <TextField label="Weight" variant="standard" required onChange={handleChange} name="weight" value={formData.weight} />
          <TextField label="Sex" variant="standard" required onChange={handleChange} name="sex" value={formData.sex} />
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label" required>Gender</FormLabel>
            <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="male" name="sex" onChange={handleChange} value={formData.sex}>
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="female" control={<Radio />} label="Female" />
            </RadioGroup>
          </FormControl>

          <label><b>Dates of your pet's last vaccines.</b></label>
          <TextField label="Rabies" variant="standard" required onChange={handleChange} name="rabies" value={formData.rabies} />
          <TextField label="DHPP" variant="standard" required onChange={handleChange} name="DHPP" value={formData.DHPP} />
          <TextField label="Other" variant="standard" required onChange={handleChange} name="otherVaccine" value={formData.otherVaccine} />
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label" required>Has your pet had a fecal test?</FormLabel>
            <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="yes" name="fecalTest" onChange={handleChange} value={formData.fecalTest}>
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
          {formData.fecalTest === 'yes' &&
            <TextField label="If Yes, when" variant="standard" required onChange={handleChange} name="fecalTestDate" value={formData.fecalTestDate} />
          }

          <TextField label="Your pet's current diet" variant="standard" required onChange={handleChange} name="diet" value={formData.diet} />

          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label" required>Is your pet in good general health?</FormLabel>
            <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="yes" name="generalHealth" onChange={handleChange} value={formData.generalHealth}>
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label" required>Is your pet currently taking any medication?</FormLabel>
            <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="yes" name="medication" onChange={handleChange} value={formData.medication}>
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
          {formData.medication === 'yes' &&
            <TextField label="If Yes, please include supplements" variant="standard" required onChange={handleChange} name="medicationDetails" value={formData.medicationDetails} />
          }

          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label" required>Is your pet currently taking heartworm and flea and tick preventive year-round?</FormLabel>
            <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="yes" name="preventiveMeasures" onChange={handleChange} value={formData.preventiveMeasures}>
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>

          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label" required>Is your pet comfortable being handled by strangers and able to stay calm for a period of time?</FormLabel>
            <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="yes" name="comfortWithHandling" onChange={handleChange} value={formData.comfortWithHandling}>
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>

          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label" required>Has your pet previously received a blood or plasma transfusion?</FormLabel>
            <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="yes" name="previousTransfusion" onChange={handleChange} value={formData.previousTransfusion}>
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>

          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label" required>Has your pet had surgery or been hospitalized other than spay/neuter or dental?</FormLabel>
            <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="yes" name="previousHospitalization" onChange={handleChange} value={formData.previousHospitalization}>
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
          {formData.previousHospitalization === 'yes' &&
            <TextField label="If Yes, what" variant="standard" required onChange={handleChange} name="hospitalizationDetails" value={formData.hospitalizationDetails} />
          }

          <h3>Please select any of the following medical conditions with which your pet has been diagnosed.</h3>

          <FormGroup>
            <FormControlLabel control={<Checkbox onChange={handleChange} name="medicalConditions" />} label="Anemia, cancer or other blood or bleeding disorders" />
            <FormControlLabel control={<Checkbox onChange={handleChange} name="medicalConditions" />} label="Bloodborne parasites such as Ehrlichia, Babesia, Anaplasma or Lyme disease" />
            <FormControlLabel control={<Checkbox onChange={handleChange} name="medicalConditions" />} label="Behavioral problems or aggressiveness" />
            <FormControlLabel control={<Checkbox onChange={handleChange} name="medicalConditions" />} label="Dermatology related issues including allergies" />
            <FormControlLabel control={<Checkbox onChange={handleChange} name="medicalConditions" />} label="Diabetes or other metabolic disease" />
            <FormControlLabel control={<Checkbox onChange={handleChange} name="medicalConditions" />} label="Heart condition including murmur" />
            <FormControlLabel control={<Checkbox onChange={handleChange} name="medicalConditions" />} label="Liver, kidney or other organ disease" />
            <FormControlLabel control={<Checkbox onChange={handleChange} name="medicalConditions" />} label="Seizures or other neurological disease" />
            <FormControlLabel control={<Checkbox onChange={handleChange} name="medicalConditions" />} label="Unexplained fever or illness since your pet's last health check-up" />
            <FormControlLabel control={<Checkbox onChange={handleChange} name="medicalConditions" />} label="Tested positive for heartworm" />
            <FormControlLabel control={<Checkbox onChange={handleChange} name="medicalConditions" />} label="Other" />
            <FormControlLabel control={<Checkbox onChange={handleChange} name="medicalConditions" />} label="My pet has not been diagnosed with any of the above medical conditions" />
          </FormGroup>

          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label" required>Are you willing to commit your pet to at least four donations per year?</FormLabel>
            <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="yes" name="commitToDonation" onChange={handleChange} value={formData.commitToDonation}>
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>

          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label" required>Are you comfortable with a 2-4 area of hair being shaved from your pet's neck at each donation?</FormLabel>
            <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="yes" name="hairShaving" onChange={handleChange} value={formData.hairShaving}>
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>

          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label" required>Are you comfortable with sedation and/or anesthesia for your pet's donation?</FormLabel>
            <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="yes" name="sedationOrAnesthesia" onChange={handleChange} value={formData.sedationOrAnesthesia}>
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>

          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label" required>Are you available to have your pet donate blood at any time?</FormLabel>
            <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="yes" name="availabilityForDonation" onChange={handleChange} value={formData.availabilityForDonation}>
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
          {formData.availabilityForDonation === 'no' &&
            <TextField label="If not, when?" variant="standard" required onChange={handleChange} name="donationTiming" value={formData.donationTiming} />
          }

          <Stack direction="row" spacing={2}>
            <Button type="submit" variant="contained" onClick={handleSubmit}>Enroll</Button>
          </Stack>
        </div>
      </div>
    </div>
  );
}

export default DogForm;
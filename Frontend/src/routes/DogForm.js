import "./DFormStyles.css";
// import { useState } from "react";
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

// const label = { inputProps: { "aria-label": "Checkbox demo" } };

function DogForm() {
  return (
    <div className="d-form">
      <div className="d-form2">
        <div className="df-head">
          {" "}
          <div className="ediah">
            <h1> Every Donor is a Hero.</h1>
          </div>
          <br />
          <div className="history-form">
            <h3>Canine Blood Donor History Form</h3>
          </div>
        </div>
        <br />
        <div className="p1">
          <b>
            <u>Client information.</u>
          </b>
          <br />
          <br />
          <div className="i1">
            <TextField label="Name" variant="standard" required />
            <TextField label="Address" variant="standard" required />
            <TextField label="City" variant="standard" required />
          </div>

          <div className="i2">
            {" "}
            <TextField label="State" variant="standard" required />
            <TextField label="Apt./unit" variant="standard" required />
            <TextField label="ZIP Code" variant="standard" required />
          </div>

          <div className="i3">
            {" "}
            <TextField label="Primary Phone" variant="standard" required />
            <TextField label="Secondary Phone" variant="standard" />
            <TextField label="Email address" variant="standard" required />
          </div>

          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label" required>
              What is your preferred method of contact?
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="phone"
                control={<Radio />}
                label="Phone"
              />
              <FormControlLabel
                value="email"
                control={<Radio />}
                label="Email"
              />
            </RadioGroup>
          </FormControl>

          <h3>
            <b>Donor Information</b>
          </h3>
          <TextField label="Pet's Name" variant="standard" required />
          <TextField label="Breed" variant="standard" required />
          <TextField label="Age" variant="standard" required />
          <TextField label="Weight" variant="standard" required />
          <TextField label="Sex" variant="standard" required />
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label" required>
              Gender
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="male"
              />
              <FormControlLabel
                value="male"
                control={<Radio />}
                label="female"
              />
            </RadioGroup>
          </FormControl>

          <label>
            <b> Dates of your pet's last vaccines.</b>
          </label>
          <TextField label="Rabies" variant="standard" required />
          <TextField label="DHPP" variant="standard" required />
          <TextField label="Other" variant="standard" required />
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label" required>
              Has your pet had a fecal test?
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="Yes"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="yes"
              />
              <FormControlLabel value="male" control={<Radio />} label="no" />
            </RadioGroup>
          </FormControl>
          <TextField label="If Yes, when" variant="standard" required />

          <TextField
            label="Your pet's current diet"
            variant="standard"
            required
          />

          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label" required>
              Is your pet in good general health?
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="Yes"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="yes"
              />
              <FormControlLabel value="male" control={<Radio />} label="no" />
            </RadioGroup>
          </FormControl>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label" required>
              Is your pet currently taking any medication?
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="Yes"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="yes"
              />
              <FormControlLabel value="male" control={<Radio />} label="no" />
            </RadioGroup>
          </FormControl>
          <TextField
            label="If Yes, what please include supplements"
            variant="standard"
            required
          />

          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label" required>
              {" "}
              Is your pet currently taking heartworm and flea and tick
              preventive year-round?
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="Yes"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="yes"
              />
              <FormControlLabel value="male" control={<Radio />} label="no" />
            </RadioGroup>
          </FormControl>

          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label" required>
              {" "}
              Is your pet comfortable being handled by strangers and able to
              stay calm for a period of time?
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="Yes"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="yes"
              />
              <FormControlLabel value="male" control={<Radio />} label="no" />
            </RadioGroup>
          </FormControl>

          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label" required>
              {" "}
              Has your pet previously recieved a blood or plasma transfusion?
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="Yes"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="yes"
              />
              <FormControlLabel value="male" control={<Radio />} label="no" />
            </RadioGroup>
          </FormControl>

          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label" required>
              {" "}
              Has your pet had surgery or been hospitalized other than
              spay/neuter or dental?
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="Yes"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="yes"
              />
              <FormControlLabel value="male" control={<Radio />} label="no" />
            </RadioGroup>
          </FormControl>
          <TextField label="If Yes, what " variant="standard" required />
          <h3>
            {" "}
            Please select any of the following medical conditions with which
            your pet has been diagnosed.
          </h3>

          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Anemia, cancer or other blood or bleeding disorders"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Bloodborne parasites such as Ehrlichia, Babesia, Anaplasma or Lyme disease"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Behavioral problems or aggressiveness"
            />

            <FormControlLabel
              control={<Checkbox />}
              label="Dermatalogy related issues including allergies"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Diabetes or other metabolic disease"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Heart condition including murmur"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Liver, kidney or other organ disease"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Seizures or other neurological disease"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Unexplained fever or illness since your pet's last health check-up"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Tested positive for heartworm"
            />
            <FormControlLabel control={<Checkbox />} label="Other" />
            <FormControlLabel
              control={<Checkbox />}
              label="My pet has not been diagnosed with any of the above medical conditions"
            />
          </FormGroup>

          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label" required>
              {" "}
              Are you willing to commit your pet to at least four donations per
              year? :
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="Yes"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="yes"
              />
              <FormControlLabel value="male" control={<Radio />} label="no" />
            </RadioGroup>
          </FormControl>

          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label" required>
              {" "}
              Are you comfortable with a 2-4 area of hair being shaved from your
              pet's neck at each donation?
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="Yes"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="yes"
              />
              <FormControlLabel value="male" control={<Radio />} label="no" />
            </RadioGroup>
          </FormControl>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label" required>
              {" "}
              Are you comfortable with sedation and/or anesthesia for your pet's
              donation?
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="Yes"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="yes"
              />
              <FormControlLabel value="male" control={<Radio />} label="no" />
            </RadioGroup>
          </FormControl>

          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label" required>
              {" "}
              Are you available to have your pet donate blood at any time?
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="Yes"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="yes"
              />
              <FormControlLabel value="male" control={<Radio />} label="no" />
            </RadioGroup>
          </FormControl>
          <TextField label="If not, when ?" variant="standard" required />

          <Stack direction="row" spacing={2}>
            <Button type="submit" variant="contained">
              Enroll
            </Button>
          </Stack>
        </div>
      </div>
    </div>
  );
}
export default DogForm;

const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const fetchuser = require("../middleware/fetchuser");
const Donar= require("../Models/Donar");
const { body, validationResult } = require("express-validator");
const User = require("../Models/User");

const JWT_token = "securekey35*3%^";
const Router = express.Router();

// Middleware to parse JSON request body
Router.use(express.json());

Router.post("/signup", [
    body("email").isEmail(),
   
    body("username").isLength({ min: 3 }),
    body("password").isLength({ min: 7 })
], async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ success: false, errors: errors.array() });
        }

        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt);

        const user = new User({
            username: req.body.username,
            email: req.body.email,
            password: secPass
            
        });

        const data = {
            user: {
                id: user.id,
            },
        };

        const auth_token = jwt.sign(data, JWT_token);

        await user.save();
        res.json({ auth_token });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    }
});
Router.post("/login", [body("email").isEmail(), body("password").isLength({ min: 7 })], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    const passCompare = await bcrypt.compare(password, user.password);
    if (!passCompare) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    const data = {
      user: {
        id: user.id,
      },
    };

    const authtoken = jwt.sign(data, JWT_token);
    res.json({ authtoken });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});
Router.post('/donor', fetchuser, [
  // Validation for all fields
  body('username').notEmpty(),
    body('address').notEmpty(),
    body('city').notEmpty(),
    body('state').notEmpty(),
    body('aptUnit').notEmpty(),
    body('zipCode').notEmpty(),
    body('primaryPhone').notEmpty(),
    body('secondaryPhone'),
    body('email').isEmail(),
    body('preferredContact').notEmpty().isIn(['phone', 'email']),
    body('petName').notEmpty(),
    body('breed').notEmpty(),
    body('age').notEmpty(),
    body('weight').notEmpty(),
    body('sex').notEmpty().isIn(['male', 'female']),
    body('rabies').notEmpty().isISO8601(),
    body('DHPP').notEmpty().isISO8601(),
    body('otherVaccine').notEmpty().isISO8601(),
    body('fecalTest').notEmpty().isIn(['yes', 'no']),
    body('fecalTestDate').custom((value, { req }) => {
        if (req.body.fecalTest === 'yes') {
            if (!value) {
                throw new Error('Fecal test date is required');
            }
            // Add custom validation logic for fecalTestDate if needed
        }
        return true;
    }),
    body('diet').notEmpty(),
    body('generalHealth').notEmpty().isIn(['yes', 'no']),
    body('medication').notEmpty().isIn(['yes', 'no']),
    body('medicationDetails').custom((value, { req }) => {
        if (req.body.medication === 'yes' && !value) {
            throw new Error('Medication details are required');
        }
        return true;
    }),
    body('preventiveMeasures').notEmpty().isIn(['yes', 'no']),
    body('comfortWithHandling').notEmpty().isIn(['yes', 'no']),
    body('previousTransfusion').notEmpty().isIn(['yes', 'no']),
    body('previousHospitalization').notEmpty().isIn(['yes', 'no']),
    body('hospitalizationDetails').custom((value, { req }) => {
        if (req.body.previousHospitalization === 'yes' && !value) {
            throw new Error('Hospitalization details are required');
        }
        return true;
    }),
    body('medicalConditions').isArray(),
    body('commitToDonation').notEmpty().isIn(['yes', 'no']),
    body('hairShaving').notEmpty().isIn(['yes', 'no']),
    body('sedationOrAnesthesia').notEmpty().isIn(['yes', 'no']),
    body('availabilityForDonation').notEmpty().isIn(['yes', 'no']),
    body('donationTiming').custom((value, { req }) => {
        if (req.body.availabilityForDonation === 'no' && !value) {
            throw new Error('Donation timing is required');
        }
        return true;
    }),
], async (req, res) => {
  try {
      // Check for validation errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
      }

      // Create a new donor instance
      const donar = new Donar({
          userId: req.user.id,
          username: req.body.username, // Assuming username is available in req.user
          address: req.body.address,
          city: req.body.city,
          state: req.body.state,
          aptUnit: req.body.aptUnit,
          zipCode: req.body.zipCode,
          primaryPhone: req.body.primaryPhone,
          secondaryPhone: req.body.secondaryPhone,
          email: req.body.email,
          preferredContact: req.body.preferredContact,
          petName: req.body.petName,
          breed: req.body.breed,
          age: req.body.age,
          weight: req.body.weight,
          sex: req.body.sex,
          rabies: req.body.rabies,
          DHPP: req.body.DHPP,
          otherVaccine: req.body.otherVaccine,
          fecalTest: req.body.fecalTest,
          fecalTestDate: req.body.fecalTestDate,
          diet: req.body.diet,
          generalHealth: req.body.generalHealth,
          medication: req.body.medication,
          medicationDetails: req.body.medicationDetails,
          preventiveMeasures: req.body.preventiveMeasures,
          comfortWithHandling: req.body.comfortWithHandling,
          previousTransfusion: req.body.previousTransfusion,
          previousHospitalization: req.body.previousHospitalization,
          hospitalizationDetails: req.body.hospitalizationDetails,
          medicalConditions: req.body.medicalConditions,
          commitToDonation: req.body.commitToDonation,
          hairShaving: req.body.hairShaving,
          sedationOrAnesthesia: req.body.sedationOrAnesthesia,
          availabilityForDonation: req.body.availabilityForDonation,
          donationTiming: req.body.donationTiming,
      });

      // Save the donor to the database
      const savedDonar = await donar.save();

      res.json(savedDonar);
  } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
  }
});
// route 3 get user data logged in 
// Router.post('/getuser',  fetchuser ,async (req, res) => {

// try{
//    userid= req.user.id;
//   const user = await User.findById(userid).select("-password")
//   res.send(user);

// }catch(error){
//   console.error(error.message);
//   res.status(500).send("Server Error");


// }});

module.exports = Router;

import React, { PureComponent } from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import styles from './ManualSignupCSS/ManualSignup.css';
const isMobile = window.innerWidth < 768;

const universitiesList = [ "Northeastern University",  "Pace University", "Arizona State University", "New York University", "University of Southern California", "UCLA", "Northwestern University", "Cornell University", "Columbia University", "University of Illinois - Urbana Champaign", "Ohio State University", "University of Pennsylvania", "Harvard University", "Carnegie Mellon University", "Stanford University", "Princeton University", "Dartmouth College", "Yale University", "Brown University", "University of Michigan - Ann Arbor", "Boston College", "Boston University", "American University", "Drexel University", "Duke University", "Emory University", "George Washington University", "Iowa State University", "University of California - Davis", "University of California - Berkeley", "University of California - Irvine", "University of California - San Diego", "MIT", "Rutger's University", "Rice University", "SUNY Buffalo", "Stony Brook University", "Texas A&M", "University of Texas - Dallas", "University of Chicago", "University of Iowa", "Florida International University", "University of Notre Dame", "University of Texas - Arlington", "University of Texas - Austin", "University of Washington", "University of Virginia", "Vanderbilt University", "California Institute of Technology", "Purdue University", "Pennsylvania State University - University Park", "Michigan State University", "Indiana University - Bloomington", "University of Wisconsin", "University of North Carolina", "Georgia Institute of Technology", "Illinois Institute of Technology", "Lousinia State University", "John Hopkins University", "Kaplan Pathways", "Kings Education Pathways", "Shorelight Pathways", "New Jersey Institute of Technology", "University of California - Santa Barbara", "University of Minnesota - Twin Cities", "Washington University", "Georgetown University", "Kentucky University", "University of Maryland", "University of Oklahoma", "Tufts University", "Washington State University", "Syracuse University", "SUNY", "Rochester Institute of Technology", "Colorado State University", "Brandeis University", "University of Flordia", "Bentley College", "Georgia State University", "Texas Tech University", "University of New Hampshire", "Navitas Pathways", "INTO Pathways", "UMass - Dartmouth", "UMass - Boston", "UMass - Amherst", "University of Idaho", "UMass - Lowell"]; 
const fieldsToValidate = ["pwd", "email", "usAddressStreet", "usAddressCity", "usAddressState", "usAddressZip",  "firstName", "lastName", "school", "dob", "homeAddress", "citizenship", "phoneNumberHome", "dateOfArrival"];
const countriesList = ['Afghanistan','Åland Islands','Albania','Algeria','American Samoa','Andorra','Angola','Anguilla','Antarctica','Antigua and Barbuda','Argentina','Armenia','Aruba','Australia','Austria','Azerbaijan','Bahamas','Bahrain','Bangladesh','Barbados','Belgium','Belize','Benin','Bermuda','Bhutan','Bolivia (Plurinational State of)','Bonaire','Sint Eustatius and Saba','Bosnia and Herzegovina','Botswana','Bouvet Island','Brazil','British Indian Ocean Territory','United States Minor Outlying Islands','Virgin Islands (British)','Virgin Islands (U.S.)','Brunei Darussalam','Bulgaria','Burkina Faso','Cambodia','Cameroon','Canada','Cabo Verde','Cayman Islands','Chad','Chile','China','Christmas Island','Cocos (Keeling) Islands','Colombia','Comoros','Cook Islands','Costa Rica','Croatia','Curaçao','Cyprus','Czech Republic','Denmark','Djibouti','Dominica','Dominican Republic','Ecuador','Egypt','El Salvador','Equatorial Guinea','Eritrea','Estonia','Ethiopia','Falkland Islands (Malvinas)','Faroe Islands','Fiji','Finland','France','French Guiana','French Polynesia','French Southern Territories','Gabon','Gambia','Georgia','Germany','Ghana','Gibraltar','Greece','Greenland','Grenada','Guadeloupe','Guam','Guatemala','Guernsey','Guinea','Guinea-Bissau','Guyana','Haiti','Heard Island and McDonald Islands','Holy See','Honduras','Hong Kong','Hungary','Iceland','India','Indonesia',"Côte d'Ivoire",'Ireland','Isle of Man','Israel','Italy','Jamaica','Japan','Jersey','Jordan','Kazakhstan','Kenya','Kiribati','Kuwait','Kyrgyzstan',"Lao People's Democratic Republic",'Latvia','Lebanon','Lesotho','Liberia','Liechtenstein','Lithuania','Luxembourg','Macao','Macedonia (the former Yugoslav Republic of)','Madagascar','Malawi','Malaysia','Maldives','Mali','Malta','Marshall Islands','Martinique','Mauritania','Mauritius','Mayotte','Mexico','Micronesia (Federated States of)','Moldova (Republic of)','Monaco','Mongolia','Montenegro','Montserrat','Morocco','Mozambique','Myanmar','Namibia','Nauru','Nepal','Netherlands','New Caledonia','New Zealand','Niger','Nigeria','Niue','Norfolk Island','Northern Mariana Islands','Norway','Oman','Palau','Palestine','Panama','Papua New Guinea','Paraguay','Peru','Philippines','Pitcairn','Poland','Portugal','Puerto Rico','Qatar','Republic of Kosovo','Réunion','Romania','Russian Federation','Rwanda','Saint Barthélemy','Saint Helena, Ascension and Tristan da Cunha','Saint Kitts and Nevis','Saint Lucia','Saint Martin (French part)','Saint Pierre and Miquelon','Saint Vincent and the Grenadines','Samoa','San Marino','Sao Tome and Principe','Saudi Arabia','Senegal','Serbia','Seychelles','Sierra Leone','Singapore','Sint Maarten (Dutch part)','Slovakia','Slovenia','Solomon Islands','South Africa','South Georgia and the South Sandwich Islands','Korea (Republic of)','South Sudan','Spain','Sri Lanka','Sudan','Suriname','Svalbard and Jan Mayen','Swaziland','Sweden','Switzerland','Taiwan','Tajikistan','Tanzania','Thailand','Timor-Leste','Togo','Tokelau','Tonga','Trinidad and Tobago','Tunisia','Turkey','Turkmenistan','Turks and Caicos Islands','Tuvalu','Uganda','Ukraine','United Arab Emirates','United Kingdom of Great Britain and Northern Ireland','United States of America','Uruguay','Uzbekistan','Vanuatu','Viet Nam','Wallis and Futuna','Western Sahara','Zambia'];


class ManualSignup extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      submitted: false,
      form1: {
        email: '',
        pwd: '',
        firstName: '',
        lastName: '',
        citizenship: '',
        dob: '',
        school: '',
        phoneNumberHome: '',
        usAddressStreet: '',
        usAddressCity: '',
        usAddressState: '',
        usAddressZip: '',
        homeAddress: '',
        dateOfArrival: ''
      },
      emptyErrorFields: []
    };
  }

  updateDropdownValue = (event, form, key) => {

      let updatedErrorArray = [];
      const currentErrorArray = Object.assign(this.state.emptyErrorFields, {});
      
      if (fieldsToValidate.includes(key) && event.target.value.length > 0) {
            updatedErrorArray = currentErrorArray.filter((e) => { return e !== key });
      }

      this.setState(Object.assign(this.state[form], { [key]: event.target.value }, { emptyErrorFields: updatedErrorArray }));
  }

  isFieldEmpty = (field) => {
      return this.state.emptyErrorFields.includes(field);
  }

  formEmptyCheck = (form) => {
      const newErrorArray = [];
      for ( var key in this.state[form] ) {
          if (fieldsToValidate.includes(key) && this.state[form][key].trim().length < 1) {
            newErrorArray.push(key);
          }
      }

      return newErrorArray;
  }

  submitForm = () => {
      const errorArray = this.formEmptyCheck('form1');

      if (errorArray.length > 0) {
        this.setState({
          emptyErrorFields: errorArray
        });
      } else {

        let formData = new FormData();
        const userDataObj = Object.assign({}, this.state.form1);
        for ( var key in userDataObj ) {
            formData.append(key, userDataObj[key]);
        }
        const options = {
          method: 'POST',
          data: formData,
          headers: {'Content-Type': 'application/x-www-form-urlencoded' },
          url: 'https://script.google.com/macros/s/AKfycbxBIVUdLY_Ql0ITCBLCK70tySgg7zYxYXeTrc4RJgadWwoAyr8/exec'
        };
        this.setState({ loading: true });
        axios(options).then(res => {
          console.log(res.data);
          if (res.data && res.data.result === 'success') {
            if ( ga ) {
              ga('send', 'event', 'manual-signup', 'manualsignup-registered', 'manualsignup-registered-label', 1);
            }
            this.setState(Object.assign(this.state.submitted, { submitted: true, loading: false }));
          }
        });

      }
  }

  resetForm = () => {
    const blankForm = {};
    const userDataObj = Object.assign({}, this.state.form1);
    for ( var key in userDataObj ) {
        blankForm[key] = '';
    }

    this.setState({
      form1: blankForm,
      submitted: false
    });

  }

  render() {
    const { form1, submitted, loading, emptyErrorFields } = this.state;

    const universitiesMenuItems = universitiesList.map((univ, i) => {
      return <MenuItem value={univ} key={'univ-' + i}>{univ}</MenuItem>;
    });

    const countriesMenuItems = countriesList.map((cntry, i) => {
      return <MenuItem value={cntry} key={'country-' + i}>{cntry}</MenuItem>;
    });


    const loanForm1 = (
      <Container className={styles.journey}>
        <h2 className={styles.subtitle}>Sign up form<span /></h2>
        <Grid item sm={10}>
          <form className={styles.container} noValidate autoComplete="off">
            <Grid container>
              <Grid item xs={6}>
                <TextField
                  onBlur={() => {this.updateDropdownValue(event, 'form1', 'email');}}
                  id="email"
                  label="Email"
                  margin="dense"
                  type="email"
                  error={this.isFieldEmpty('email')} />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  onBlur={() => {this.updateDropdownValue(event, 'form1', 'pwd');}}
                  id="pwd"
                  label="Password"
                  margin="dense"
                  type="password"
                  error={this.isFieldEmpty('pwd')} />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  onBlur={() => {this.updateDropdownValue(event, 'form1', 'firstName');}}
                  id="firstName"
                  label="First Name"
                  margin="dense"
                  error={this.isFieldEmpty('firstName')} />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  onBlur={() => {this.updateDropdownValue(event, 'form1', 'lastName');}}
                  id="lastName"
                  label="Last Name"
                  margin="dense"
                  error={this.isFieldEmpty('lastName')} />
              </Grid>
              <Grid item xs={6}>
                <FormControl>
                  <InputLabel error={this.isFieldEmpty('citizenship')} htmlFor="Citizenship-auto-width">Country of Citizenship</InputLabel>
                  <Select
                    value={form1.citizenship}
                    onChange={(event) => {this.updateDropdownValue(event, 'form1', 'citizenship');}}
                    input={<Input name="citizenship" id="citizenship-auto-width" />}
                    autoWidth>
                    { countriesMenuItems }
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  onBlur={() => {this.updateDropdownValue(event, 'form1', 'dob');}}
                  id="date"
                  label="Date of birth"
                  type="date"
                  error={this.isFieldEmpty('dob')}
                  InputLabelProps={{
                  shrink: true,
                }}/>
              </Grid>   
              <Grid item xs={6}>
                <TextField
                    onBlur={() => {this.updateDropdownValue(event, 'form1', 'school');}}
                    id="standard-dense"
                    label="University"
                    margin="dense"
                    error={this.isFieldEmpty('school')} />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  onBlur={() => {this.updateDropdownValue(event, 'form1', 'phoneNumberHome');}}
                  id="phoneNumberHome"
                  label="Phone Number (Home)"
                  margin="dense"
                  type="Number"
                  error={this.isFieldEmpty('phoneNumberHome')} />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  onBlur={() => {this.updateDropdownValue(event, 'form1', 'homeAddress');}}
                  id="homeAddress"
                  label="Home Address"
                  margin="dense"
                  error={this.isFieldEmpty('homeAddress')} />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  onBlur={() => {this.updateDropdownValue(event, 'form1', 'usAddressStreet');}}
                  id="usAddressStreet"
                  label="Street Address (USA)"
                  margin="dense"
                  error={this.isFieldEmpty('usAddressStreet')} />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  onBlur={() => {this.updateDropdownValue(event, 'form1', 'usAddressCity');}}
                  id="usAddressCity"
                  label="City (USA)"
                  margin="dense"
                  error={this.isFieldEmpty('usAddressCity')} />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  onBlur={() => {this.updateDropdownValue(event, 'form1', 'usAddressState');}}
                  id="usAddressState"
                  label="State (USA)"
                  margin="dense"
                  error={this.isFieldEmpty('usAddressState')} />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  onBlur={() => {this.updateDropdownValue(event, 'form1', 'usAddressZip');}}
                  id="usAddressZip"
                  label="Zip Code (USA)"
                  margin="dense"
                  type="number"
                  error={this.isFieldEmpty('usAddressZip')} />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  onBlur={() => {this.updateDropdownValue(event, 'form1', 'dateOfArrival');}}
                  id="dateOfArrival"
                  label="Expected Date of Arrival (USA)"
                  type="date"
                  error={this.isFieldEmpty('dateOfArrival')}
                  InputLabelProps={{
                  shrink: true,
                }}/>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Container>);

    const successMessage = (
          <Container style={{'marginTop': '5%', 'marginBottom': '5%', 'display': 'flex', 'justifyContent': 'center', 'fontSize': 'large'}}>
              <p>"Thank you for applying. We'll email you when your account is activated!"</p>
          </Container>);

    return (
      <div className={styles.homeOutput}>
         { !submitted && loanForm1 }
         { emptyErrorFields.length > 0 && 
            <Container>
              <p className={styles.noSchoolWarning} style={{color: 'red'}}>
                Please fill out mandatory fields!
              </p>
            </Container> }
          { loading && 
            <Container>
              <div style={{ 'display': 'flex', 'justifyContent': 'center', 'marginTop': '5%', 'marginBottom': '5%' }}>
                <CircularProgress color="secondary" />
              </div>
            </Container> }
          { submitted && successMessage }
          <Container>
            <Grid item sm={10} style={{'display': 'flex', 'justifyContent': 'flex-end', 'marginTop': '2%', 'marginBottom': '2%'}}>
              { !submitted ? <Button onClick={this.submitForm}>Submit</Button> : <Button onClick={this.resetForm}>Reset</Button> }
            </Grid>
          </Container>  
      </div>
    );
  }
}

export default ManualSignup;
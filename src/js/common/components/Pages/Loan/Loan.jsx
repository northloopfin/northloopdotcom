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
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CircularProgress from '@material-ui/core/CircularProgress';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withStyles } from '@material-ui/core/styles';


import buttonStyles from '../Home/HomeCSS/Home.css'

import Footer from '../../Footer/Footer'
import Referal from './ReferalComponent/Referal';
import Schools from '../../SchoolsComponent/Schools';
import Slider from '../../SliderComponent/Slider'
import Testimonial from '../../TestimonialComponent/Testimonial'
import DownloadApp from '../../DownloadAppComponent/DownloadApp'
import AchieveDreams from './AchieveDreamsComponent/AchieveDreams'

import happyStudents from '../../../../../assets/images/happy_students.png'

import styles from './LoanCSS/Loan.css';
const isMobile = window.innerWidth < 768;

const universitiesList = [ "Northeastern University",  "Pace University", "Arizona State University", "New York University", "University of Southern California", "UCLA", "Northwestern University", "Cornell University", "Columbia University", "University of Illinois - Urbana Champaign", "Ohio State University", "University of Pennsylvania", "Harvard University", "Carnegie Mellon University", "Stanford University", "Princeton University", "Dartmouth College", "Yale University", "Brown University", "University of Michigan - Ann Arbor", "Boston College", "Boston University", "American University", "Drexel University", "Duke University", "Emory University", "George Washington University", "Iowa State University", "University of California - Davis", "University of California - Berkeley", "University of California - Irvine", "University of California - San Diego", "MIT", "Rutger's University", "Rice University", "SUNY Buffalo", "Stony Brook University", "Texas A&M", "University of Texas - Dallas", "University of Chicago", "University of Iowa", "Florida International University", "University of Notre Dame", "University of Texas - Arlington", "University of Texas - Austin", "University of Washington", "University of Virginia", "Vanderbilt University", "California Institute of Technology", "Purdue University", "Pennsylvania State University - University Park", "Michigan State University", "Indiana University - Bloomington", "University of Wisconsin", "University of North Carolina", "Georgia Institute of Technology", "Illinois Institute of Technology", "Lousinia State University", "John Hopkins University", "Kaplan Pathways", "Kings Education Pathways", "Shorelight Pathways", "New Jersey Institute of Technology", "University of California - Santa Barbara", "University of Minnesota - Twin Cities", "Washington University", "Georgetown University", "Kentucky University", "University of Maryland", "University of Oklahoma", "Tufts University", "Washington State University", "Syracuse University", "SUNY", "Rochester Institute of Technology", "Colorado State University", "Brandeis University", "University of Flordia", "Bentley College", "Georgia State University", "Texas Tech University", "University of New Hampshire", "Navitas Pathways", "INTO Pathways", "UMass - Dartmouth", "UMass - Boston", "UMass - Amherst", "University of Idaho", "UMass - Lowell"]; 
const currenciesList = ['USD', 'INR', 'AED', 'CNY', 'EUR'];
const fieldsToValidate = ["name", "email", "program", "school", "duration", "test", "testScore", "gender", "dob", "address", "citizenship", "passportNumber", "requestedAmount"];

/*refactor_me*/
const HomeSection = ({
  children, image, title, subtitle,
}) => (
  <Container className={styles.main}>
    <Grid container>
      <Grid item xs={12} sm={8}>
        <div className={styles.titleBlock}>
          <p className={styles.title} dangerouslySetInnerHTML={{ __html: title }} />
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </div>
        {children}
      </Grid>
      <Grid item xs={12} sm={4} className={styles.headerIphone}>
        <img src={image} alt="iPhone 6" />
      </Grid>
    </Grid>
  </Container>
)

const StyledCard = withStyles({
  root: { marginTop: '90px', 	boxShadow: '0 10px 25px 0 rgba(172,185,196,0.28)' }
})(Card);

const StyledCardHeader = withStyles({
  root: { background: 'linear-gradient(270deg, #C75561 0%, #A1598E 100%)' },
  title: { color:' #FFFFFF', fontFamily: "Muli", fontWeight: 'bold', fontSize: '20px',	lineHeight: '24px', marginLeft: '3%' },
  subheader: { color: '#FFFFFF',	fontFamily: "Muli",	fontSize: '15px', lineHeight: '24px', marginLeft: '3%' }
})(CardHeader);

const formStyle = {
  display: 'flex',
  paddingTop: '20px'
}

class Loan extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      loading: false,
      submitted: false,
      form1: {
        name: '',
        email: '',
        program: '',
        school: '',
        duration: '',
        test: '',
        testScore: ''
      },
      form2: {
        gender: '',
        dob: '',
        address: '',
        citizenship: '',
        passportNumber: '',
        ssn: ''
      },
      form3: {
        coa: '',
        scholarships: '',
        loans: '',
        requestedAmount: ''
      },
      form4: {
        recentEmployment: '',
        salaryCurrency: '',
        recentSalary: '',
        dateTo: '',
        dateFrom: '',
        currentJob: false,
        salaryAfterGrad: ''
      },
      form5: {
        assetsCurrency: '',
        assets: '',
        savingsCurrency: '',
        savings: '',
        otherAssetsCurrency: '',
        otherAssets: ''
      },
      emptyErrorFields: []
    };
  }

  incStep = () => {
    const errorArray = this.formEmptyCheck('form' + this.state.step);

    if (errorArray.length < 1) {
      this.setState({
        step: this.state.step + 1,
        emptyErrorFields: []
      });
    } else {
      this.setState({
        emptyErrorFields: errorArray
      });
    }

  }

  decStep = () => {
    this.setState({
      step: this.state.step - 1
    });
  }

  updateDropdownValue = (event, form, key) => {

      let updatedErrorArray = [];
      const currentErrorArray = Object.assign(this.state.emptyErrorFields, {});
      
      if (fieldsToValidate.includes(key) && event.target.value.length > 0) {
            updatedErrorArray = currentErrorArray.filter((e) => { return e !== key });
      }

      this.setState(Object.assign(this.state[form], { [key]: event.target.value }, { emptyErrorFields: updatedErrorArray }));
  }

  updateCheckBox = (event, form, key) => {
      this.setState(Object.assign(this.state[form], { [key]: !this.state[form][key] }));
  }

  showLoader = () => {
      this.setState({ loading: true });
      this.submitForm();
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
      let formData = new FormData();
      const userDataObj = Object.assign({}, this.state.form1, this.state.form2, this.state.form3, this.state.form4, this.state.form5);
      for ( var key in userDataObj ) {
          formData.append(key, userDataObj[key]);
      }
      const options = {
        method: 'POST',
        data: formData,
        headers: {'Content-Type': 'application/x-www-form-urlencoded' },
        url: 'https://script.google.com/a/nolobank.com/macros/s/AKfycbzE-WrdRFqwVFWXR4d7Jisvr3t76I8ajqsEkZbj/exec'
      };

      this.setState({ loading: true, step: 0 });

      axios(options).then(res => {
        if (res.data && res.data.result === 'success') {
          if ( ga ) {
            ga('send', 'event', 'loan-signup', 'loan-registered', 'loan-registered-label', 1);
          }
          this.setState(Object.assign(this.state.submitted, { submitted: true, loading: false }));
        }
      });
  }

  render() {
    const { step, form1, form2, form3, form4, form5, submitted, loading, emptyErrorFields } = this.state;
    const isMobile = window.screen.width < 768
    const universitiesMenuItems = universitiesList.map((univ, i) => {
      return <MenuItem value={univ} key={'univ-' + i}>{univ}</MenuItem>;
    });

    const currencyMenuItems = currenciesList.map((curr, i) => {
      return <MenuItem value={curr} key={'curr-' + i}>{curr}</MenuItem>;
    });


    const loanForm1 = (
      <Container className={styles.journey}>
        <p className={styles.title}>Interational Student Loan and Refinancing</p>
        <p className={styles.pageSubTitle}>
          We help students achieve their dreams by funding their education. Remove the stress of paying for an education with North Loop loans.
        </p>
        <p className={styles.pageSubTitle}>
          North Loop education loans help students from across the world pay for their education in the US. With the lowest interest rates possible, we can help you save thousands of dollars every year.
        </p>
        <StyledCard>
          <StyledCardHeader
            title="Apply for a Loan in just 5 minutes"
            subheader="Get approved in the quickest time possible"
          />
          <CardContent>
            <Grid item sm={12}>
              <form className={styles.container} noValidate autoComplete="off">
                <Grid container style={{ marginBottom: '35px' }}>
                  <Grid item xs={4} justify="center" style={formStyle}>
                    <TextField
                      onBlur={() => {this.updateDropdownValue(event, 'form1', 'name');}}
                      id="standard-dense"
                      label="Name"
                      margin="dense"
                      error={this.isFieldEmpty('name')} />
                  </Grid>
                  <Grid item xs={4} justify="center" style={formStyle}>
                    <FormControl>
                      <InputLabel error={this.isFieldEmpty('school')} htmlFor="school-auto-width">School</InputLabel>
                      <Select
                        value={form1.school}
                        onChange={(event) => {this.updateDropdownValue(event, 'form1', 'school');}}
                        input={<Input name="school" id="school-auto-width" />}
                        autoWidth>
                        { universitiesMenuItems }
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={4} justify="center" style={formStyle}>
                    <TextField
                      onBlur={() => {this.updateDropdownValue(event, 'form1', 'testScore');}}
                      id="test-score"
                      label="Test Score"
                      margin="dense"
                      type="Number"
                      error={this.isFieldEmpty('testScore')} />
                  </Grid>
                  <Grid item xs={4} justify="center" style={formStyle}>
                    <TextField
                      onBlur={() => {this.updateDropdownValue(event, 'form1', 'email');}}
                      id="email"
                      label="Email"
                      margin="dense"
                      type="email"
                      error={this.isFieldEmpty('email')} />
                  </Grid>
                  <Grid item xs={4} justify="center" style={formStyle}>
                    <TextField
                      onBlur={() => {this.updateDropdownValue(event, 'form1', 'duration');}}
                      id="program-length"
                      label="Duration (years)"
                      margin="dense"
                      type="Number"
                      error={this.isFieldEmpty('duration')} />
                  </Grid>
                  <Grid item xs={4} justify="center" style={formStyle}>
                    <FormControl>
                      <InputLabel error={this.isFieldEmpty('program')}  htmlFor="program-auto-width">Program</InputLabel>
                      <Select
                        value={form1.program}
                        onChange={(event) => {this.updateDropdownValue(event, 'form1', 'program');}}
                        input={<Input name="program" id="program-auto-width" />}
                        autoWidth>
                        <MenuItem value={'MBA'}>MBA</MenuItem>
                        <MenuItem value={'MSBA'}>MS - Business Analytics</MenuItem>
                        <MenuItem value={'MSCS'}>MS - Computer Science</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={4} justify="center" style={formStyle}>
                    <FormControl>
                      <InputLabel error={this.isFieldEmpty('test')} htmlFor="test-auto-width">Test Type</InputLabel>
                      <Select
                        value={form1.test}
                        onChange={(event) => {this.updateDropdownValue(event, 'form1', 'test');}}
                        input={<Input name="test" id="test-auto-width" />}
                        autoWidth>
                        <MenuItem value={'GMAT'}>GMAT</MenuItem>
                        <MenuItem value={'GRE'}>GRE</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={4} justify="center" style={formStyle}>
                    <FormControl>
                      <div style={{ maxWidth: 150 }}>
                        <Button variant="contained" color="primary" className={buttonStyles.button}>
                          Apply
                        </Button>
                      </div>
                    </FormControl>
                  </Grid>
                </Grid>
              </form>
            </Grid>
          </CardContent>
        </StyledCard>
    </Container>);
  
    const loanForm2 = (
          <Container className={styles.journey}>
            <h2 className={styles.subtitle}>Check if you qualify for a loan<span /></h2>
            <Grid item sm={10}>
              <form className={styles.container} noValidate autoComplete="off">
                <Grid container>
                  <Grid item xs={6}>
                    <FormControl>
                      <InputLabel error={this.isFieldEmpty('gender')} htmlFor="gender-auto-width">Gender</InputLabel>
                      <Select
                        value={form2.gender}
                        onChange={(event) => {this.updateDropdownValue(event, 'form2', 'gender');}}
                        input={<Input name="gender" id="gender-auto-width" />}
                        autoWidth>
                        <MenuItem value={'M'}>Male</MenuItem>
                        <MenuItem value={'F'}>Female</MenuItem>
                        <MenuItem value={'O'}>Other</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      onBlur={() => {this.updateDropdownValue(event, 'form2', 'dob');}}
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
                      onBlur={() => {this.updateDropdownValue(event, 'form2', 'address');}}
                      id="standard-dense"
                      label="Address"
                      margin="dense"
                      error={this.isFieldEmpty('address')} />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      onBlur={() => {this.updateDropdownValue(event, 'form2', 'citizenship');}}
                      id="standard-dense"
                      label="Country of Citizenship"
                      margin="dense"
                      error={this.isFieldEmpty('citizenship')} />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      onBlur={() => {this.updateDropdownValue(event, 'form2', 'passportNumber');}}
                      id="standard-dense"
                      label="Passport Number"
                      margin="dense"
                      error={this.isFieldEmpty('passportNumber')} />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      onBlur={() => {this.updateDropdownValue(event, 'form2', 'ssn');}}
                      id="standard-dense"
                      label="US Social Security Number (if available)"
                      margin="dense" />
                  </Grid>
                </Grid>
              </form>
            </Grid>
          </Container>);

    const loanForm3 = (
          <Container className={styles.journey}>
            <h2 className={styles.subtitle}>Check if you qualify for a loan<span /></h2>
            <Grid item sm={10}>
              <form className={styles.container} noValidate autoComplete="off">
                <Grid container>
                  <Grid item xs={6}>
                    <TextField
                      onBlur={() => {this.updateDropdownValue(event, 'form3', 'coa');}}
                      id="costOfAttendance"
                      label="Cost of Attendance ($)"
                      type="Number"
                      margin="dense"/>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      onBlur={() => {this.updateDropdownValue(event, 'form3', 'scholarships');}}
                      id="standard-dense"
                      label="All Scholarships (if applicable)"
                      type="Number"
                      margin="dense"/>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      onBlur={() => {this.updateDropdownValue(event, 'form3', 'loans');}}
                      id="standard-dense"
                      label="All Loans (if applicable)"
                      type="Number"
                      margin="dense"/>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      onBlur={() => {this.updateDropdownValue(event, 'form3', 'requestedAmount');}}
                      id="standard-dense"
                      label="Amount You’re Requesting"
                      type="Number"
                      margin="dense"
                      error={this.isFieldEmpty('requestedAmount')} />
                  </Grid>
                </Grid>
              </form>
            </Grid>
          </Container>);

    const loanForm4 = (
          <Container className={styles.journey}>
            <h2 className={styles.subtitle}>Check if you qualify for a loan<span /></h2>
            <Grid item sm={10}>
              <form className={styles.container} noValidate autoComplete="off">
                <Grid container>
                  <Grid item xs={6}>
                    <TextField
                      onBlur={() => {this.updateDropdownValue(event, 'form4', 'recentEmployment');}}
                      id="standard-dense"
                      label="Most Recent Employment"/>
                  </Grid>
                  <Grid item xs={6} style={{ 'display': 'flex' }}>
                   <FormControl style={{ 'flex': 1 }} >
                    <InputLabel htmlFor="salary-currency-auto-width">Currency</InputLabel>
                    <Select
                      value={form4.salaryCurrency}
                      onChange={(event) => {this.updateDropdownValue(event, 'form4', 'salaryCurrency');}}
                      input={<Input name="school" id="salary-currency-auto-width" />}
                      autoWidth>
                      { currencyMenuItems }
                    </Select>
                   </FormControl>
                    <TextField
                      onBlur={() => {this.updateDropdownValue(event, 'form4', 'recentSalary');}}
                      id="standard-dense"
                      style={{ 'flex': isMobile ? 1 : 3 }}
                      label="Most Recent Salary"/>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      onBlur={() => {this.updateDropdownValue(event, 'form4', 'dateFrom');}}
                      id="employment-date-from"
                      label="Start Date"
                      type="date"
                      InputLabelProps={{
                        shrink: true,
                      }}/>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      onBlur={() => {this.updateDropdownValue(event, 'form4', 'dateTo');}}
                      id="employment-date-to"
                      label="End Date"
                      type="date"
                      InputLabelProps={{
                        shrink: true,
                      }}/>
                  </Grid>
                  <Grid item xs={6}>
                    <FormControl >
                      <FormControlLabel
                        control={<Checkbox checked={form4.currentJob} onChange={() => {this.updateCheckBox(event, 'form4', 'currentJob');}} value={true} />}
                        label="I Currently work here"/>
                    </FormControl>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      onBlur={() => {this.updateDropdownValue(event, 'form4', 'salaryAfterGrad');}}
                      id="standard-dense"
                      label="Salary After Graduation (only if you have a guaranteed job)"/>
                  </Grid>
                </Grid>
              </form>
            </Grid>
          </Container>);

    const loanForm5 = (
          <Container className={styles.journey}>
            <h2 className={styles.subtitle}>Check if you qualify for a loan<span /></h2>
            <Grid item sm={10}>
              <form className={styles.container} noValidate autoComplete="off">
                <Grid container>

                  <Grid item xs={8} style={{ 'display': 'flex' }}>
                   <FormControl style={{ 'flex': 1 }} >
                    <InputLabel htmlFor="assets-currency-auto-width">Currency</InputLabel>
                    <Select
                      value={form5.assetsCurrency}
                      onChange={(event) => {this.updateDropdownValue(event, 'form5', 'assetsCurrency');}}
                      input={<Input name="assets" id="assets-currency-auto-width" />}
                      autoWidth>
                      { currencyMenuItems }
                    </Select>
                   </FormControl>
                    <TextField
                      onBlur={() => {this.updateDropdownValue(event, 'form5', 'assets');}}
                      id="standard-dense"
                      style={{ 'flex': isMobile ? 1 : 3 }}
                      label="Value of property that you or your co-signer owns"/>
                  </Grid>

                  <Grid item xs={8} style={{ 'display': 'flex' }}>
                    <FormControl style={{ 'flex': 1, 'paddingRight': isMobile ? 20 : 98 }} >
                      <InputLabel htmlFor="savings-currency-auto-width">Currency</InputLabel>
                      <Select
                        value={form5.savingsCurrency}
                        onChange={(event) => {this.updateDropdownValue(event, 'form5', 'savingsCurrency');}}
                        input={<Input name="savings" id="savings-currency-auto-width" />}
                        autoWidth>
                        { currencyMenuItems }
                      </Select>
                     </FormControl>
                     <TextField
                          onBlur={() => {this.updateDropdownValue(event, 'form5', 'savings');}}
                          id="standard-dense"
                          style={{ 'flex': isMobile ? 1 : 3, 'paddingRight': isMobile ? 20 : 98}}
                          label="Total value of savings"/>
                  </Grid>

                  <Grid item xs={8} style={{ 'display': 'flex' }}>
                   <FormControl style={{ 'flex': 1 }} >
                    <InputLabel htmlFor="other-assets-auto-width">Currency</InputLabel>
                    <Select
                      value={form5.otherAssetsCurrency}
                      onChange={(event) => {this.updateDropdownValue(event, 'form5', 'otherAssetsCurrency');}}
                      input={<Input name="otherAssets" id="other-assets-currency-auto-width" />}
                      autoWidth>
                      { currencyMenuItems }
                    </Select>
                   </FormControl>
                    <TextField
                      onBlur={() => {this.updateDropdownValue(event, 'form5', 'otherAssets');}}
                      id="standard-dense"
                      style={{ 'flex': isMobile ? 1 : 3 }}
                      label="Total value of other assets"/>
                  </Grid>

                </Grid>
              </form>
            </Grid>
          </Container>);

    const successMessage = (
          <Container style={{'marginTop': '5%', 'marginBottom': '5%', 'display': 'flex', 'justifyContent': 'center', 'fontSize': 'large'}}>
              <p>Thank you. Your application has been received and we will be in touch with next steps!</p>
          </Container>);

    return (
      <div className={styles.homeOutput}>
          { step == 1 && loanForm1 }
          { step == 2 && loanForm2 }
          { step == 3 && loanForm3 }  
          { step == 4 && loanForm4 }
          { step == 5 && loanForm5 }
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
          {/* <Container>
            <Grid item sm={10} style={{'display': 'flex', 'justifyContent': 'flex-end', 'marginTop': '2%', 'marginBottom': '2%'}}> */}
              {/* step > 1 && step < 6 && <Button onClick={this.decStep}>Prev</Button> */}
              {/* step > 0 && step < 5  && <Button onClick={this.incStep}>Next</Button> */}
              {/* step == 5 && <Button onClick={this.submitForm}>Submit</Button> */}
            {/* </Grid>
          </Container> */}
          <Slider>
            <div id="1">
              <HomeSection image={happyStudents} title="Achieve Your Dreams">
                <AchieveDreams />
              </HomeSection>
            </div>
            <div id="2">
              <Container className={styles.main} style={{ marginBottom: '5vw' }}>
                <Grid container>
                  <Grid item xs={12} sm={8}>
                    <div className={styles.titleBlock}>
                      <p className={styles.title}>Referral Program</p>
                    </div>
                  </Grid>
                  <Grid item xs={12}>
                    <Referal />
                  </Grid>
                </Grid>
              </Container>
              <Container className={styles.main} style={{ marginTop: '5vw' }}>
                <Grid container>
                  <Grid item xs={12} sm={8}>
                    <div className={styles.titleBlock}>
                      <p className={styles.schoolsBlock}>Schools That We Support</p>
                    </div>
                  </Grid>
                  <Grid item xs={12}>
                    <Schools />
                  </Grid>
                </Grid>
              </Container>
            </div>
            <div id="3">
              <Container className={styles.main}>
                <Grid container>
                  <Grid item xs={12} sm={8}>
                    <div className={styles.titleBlock}>
                      <p className={styles.title}>Student Testimonials</p>
                    </div>
                  </Grid>
                  <Grid item xs={12}>
                    <Testimonial />
                  </Grid>
                </Grid>
              </Container>
            </div>
            <div id="4">
              <Footer />
              <DownloadApp />
            </div>
          </Slider>
      </div>
    );
  }
}

export default Loan;
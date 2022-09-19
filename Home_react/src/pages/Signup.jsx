import { Card, CardBody, CardHeader, Container,Form, FormGroup, Input, Label,Row,Col, Button, FormFeedback } from "reactstrap";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
//import { object } from "yup";
import { signup } from "../services/Builder-service";
import {toast} from 'react-toastify'


const Signup=()=>
{
    
    const data = {
      name:'',
      email:'',
      password:'',
      Mbno:'',
      AadharNo:'',
      Plotno:'',
      street:'',
      landmark:'',
      city:'',
      state:'',
      pin:'',

    }
   
  
const [formvalues, setFormValues] = useState(data);
const [formerrors,setFormErrors]=useState({});
const [isSubmit, setIsSubmit] = useState(false);

//usefor printing data 
/* useEffect(()=>{
  function Signup(){}
  console.log(formerrors);
 if(object.keys(formerrors).length === 0 && isSubmit){
  console.log(formvalues);
 }
},[formerrors]);
 */


//handlechange
const handleChange=(event)=>
{
const {name, value} = event.target ;
setFormValues ({...setFormValues, [name]: value});
};
  //dynamic value setting
  
//setData({...data,[property]:event.target.value})



//reset data
/* const resetData=()=>{
  setData({
    name:'',
    email:'',
    password:'',
    Mbno:'',
    AadharNo:'',
    Plotno:'',
    street:'',
    landmark:'',
    city:'',
    state:'',
    pin:'',

  })
} */

//submiting the form

  function submitForm(event) {
    event.preventDefault(); // for stop default behaviour of form otherwise it will be reload and submit the form
    setFormErrors(validate(formvalues));
    setIsSubmit(true);
    console.log(data);


    //if data validate
    //call server api for  sending data
  };
  useEffect(() => {
    console.log(formerrors);
    if (Object.keys(formerrors).length === 0 && isSubmit) {
      console.log(formvalues);
    }
  }, [formerrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
      errors.name = "Name is required!";
    }
    if (!values.Mbno) {
      errors.Mbno = "Mobile No. is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };
const submitForm=(event)=>{
  event.preventDefault();// for stop default behaviour of form otherwise it will be reload and submit the form

 /*   if(error.isError){
    toast.error("Form data is invalid, correct all details then submit.");
    setError({...error,isError:false})
    return;
  }  */


console.log(data);


  //if data validate
           
          
  //call server api for  sending data
  signup(data).then((resp)=>{

    console.log(resp);
    console.log("sucess log");
    toast.success("Builder is Registered Sucessfully!")
    setData({
      name:'',
      email:'',
      password:'',
      Mbno:'',
      LiscenceNo:'',
      AadharNo:'',
      Plotno:'',
      street:'',
      landmark:'',
      city:'',
      state:'',
      pin:'',


    });
  }).catch((error)=>{
     console.log(error)
     console.log("error log");
     //hanlde error in proper way

     setError({
      errors:error,
      isError:true
     })

  })

return(

<>

<Container >

<Row className="mt-4">

{JSON.stringify(data)}
<Col sm={{size:6,offset:3}}>
<Card  color="light"  style={{
    width: '50rem'
  }}>


   


<CardHeader className="text-center">
<h3>User Registration</h3>

</CardHeader>

<CardBody>
<Form onSubmit={submitForm}>
    
    {/*name field */}
<FormGroup>
<Label for="name"><h5>Enter name</h5></Label>

<Input
type="text"
placeholder="Enter Name"
/* onChange={(e)=>handleChange(e,'name')}
value={data.name} */
value={formvalues.name}
onChange={handleChange}
/>
onChange={(e)=>handleChange(e,'name')}
value={data.name}
invalid={error.errors?.response?.data?.name ? true: false}
<FormFeedback>
  {error.errors?.response?.data?.name ? true: false}
</FormFeedback>

</FormGroup>
<p>{formerrors.name}</p>

<FormGroup>
<Label for="Mbno"><h5>Enter Mobileno</h5></Label>

<Input
type="number"
placeholder="Enter Mobileno."
id="Mbno"
/* onChange={(e)=>handleChange(e,'Mbno')}
value={data.Mbno} */
value={formvalues.Mbno}
onChange={handleChange}
onChange={(e)=>handleChange(e,'Mbno')}
value={data.Mbno}

/>




</FormGroup>
<p>{formerrors.Mbno}</p>

<Row>
    <Col md={6}>
      <FormGroup>
        <Label for="Email">
        <h5>Enter Email</h5>
        </Label>
        <Input
          id="Email"
          name="Email"
          placeholder="Enter Email"
          type="text"
          /* onChange={(e)=>handleChange(e,'Email')}
          value={data.email} */
          value={formvalues.email}
          onChange={handleChange}
        />
      </FormGroup>
      <p>{formerrors.email}</p>
    </Col>
    <Col md={6}>
      <FormGroup>
        <Label for="AdharNo">
        <h5>Enter AadharNo </h5>
        </Label>
        <Input
          id="AadharNo"
          name="AadharNo"
          placeholder="AadharNo"
          type="number"
          /* onChange={(e)=>handleChange(e,'AadharNo')}
          value={data.AadharNo} */
          value={formvalues.AadharNo}
          onChange={handleChange}
        />
      </FormGroup>
    </Col>
    </Row>

{/*------------------------------------------------------------------------------------------------------- */}



<FormGroup>
<Label for="name"> <h5>Enter Email </h5></Label>

<Input
type="email"
placeholder="Enter email"
onChange={(e)=>handleChange(e,'email')}
value={data.email}
invalid={error.errors?.response?.data?.email ? true: false}

/>

<FormFeedback>
  {error.errors?.response?.data?.email ? true: false}
</FormFeedback>

</FormGroup>


<FormGroup>
    <Label for="examplePassword">
    <h5>Enter password </h5>
    </Label>
    <Input
      id="examplePassword"
      name="password"
      placeholder=" Enter password "
      type="password"
      /* onChange={(e)=>handleChange(e,'password')}
      value={data.password} */
      value={formvalues.password}
      onChange={handleChange}
      onChange={(e)=>handleChange(e,'password')}
      value={data.password}
      invalid={error.errors?.response?.data?.password ? true: false}
    />

<FormFeedback>
  {error.errors?.response?.data?.password ? true: false}
</FormFeedback>
  </FormGroup>
  <p>{formerrors.password}</p>

  {/*------------------------------------------------------------------------------------------------------- */}

  <Row>
    <h4>Address Details:</h4>
    <Col md={4}>
      <FormGroup>
        <Label for="Plotno">
        <h5>Enter PlotNo </h5>
        </Label>
        <Input
          id="Plotno"
          name="Plotno"
          placeholder=" Enter PlotNo"
          type="number"
          /* onChange={(e)=>handleChange(e,'Plotno')}
          value={data.Plotno} */
          value={formvalues.Plotno}
          onChange={handleChange}
        />
      </FormGroup>
    </Col>
    <Col md={4}>
      <FormGroup>
        <Label for="street">
        <h5>Street </h5>
        </Label>
        <Input
          id="street"
          name="street"
          placeholder="street"
          type="text"
          /* onChange={(e)=>handleChange(e,'street')}
          value={data.street} */
          value={formvalues.street}
          onChange={handleChange}
        />
      </FormGroup>
    </Col>
    <Col md={4}>
      <FormGroup>
        <Label for="landmark">
        <h5>LandMark </h5>
        </Label>
        <Input
          id="landmark"
          name="landmark"
          placeholder=" Enter landmark"
          type="text"
          /* onChange={(e)=>handleChange(e,'landmark')}
          value={data.landmark} */
          value={formvalues.landmark}
          onChange={handleChange}
        />
      </FormGroup>
    </Col>
    </Row>


    <Row>
    <Col md={4}>
      <FormGroup>
        <Label for="city">
        <h5>City </h5>
        </Label>
        <Input
          id="city"
          name="city"
          placeholder=" Enter City"
          type="text"
          /* onChange={(e)=>handleChange(e,'city')}
          value={data.city} */
          value={formvalues.city}
          onChange={handleChange}
        />
      </FormGroup>
    </Col>
    <Col md={4}>
      <FormGroup>
        <Label for="state">
        <h5>State </h5>
        </Label>
        <Input
          id="state"
          name="state"
          placeholder="Enter state"
          type="text"
          /* onChange={(e)=>handleChange(e,'state')}
          value={data.state} */
          value={formvalues.state}
          onChange={handleChange}
        />
      </FormGroup>
    </Col>
    <Col md={4}>
      <FormGroup>
        <Label for="pin">
        <h5>Pin </h5>
        </Label>
        <Input
          id="pin"
          name="pin"
          placeholder=" Enter Pin"
          type="number"
          /* onChange={(e)=>handleChange(e,'pin')}
          value={data.pin} */
          value={formvalues.pin}
          onChange={handleChange}
        />
      </FormGroup>
    </Col>
    </Row>

      {/*------------------------------------------------------------------------------------------------------- */}

    {/* <Container className="text-center"> */}

<Button color="dark">Register</Button>
<Button 
//onClick={resetData}  
 color="secondary" type="reset" className="ms-2">Reset</Button>


      {/* </Container>  */}

</Form>
</CardBody>


</Card>


</Col>


</Row>


{/* <h1 style={{border:'1px solid red'}}>Signup user</h1> */}


</Container>






</>


)}
export default Signup;
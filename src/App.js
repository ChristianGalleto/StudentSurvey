import React, { Component } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import {
  Button,ButtonGroup,
  Form,FormGroup,ControlLabel,
  FormControl,HelpBlock,
  Checkbox,Radio,Grid,Row,Col
        } from 'react-bootstrap';


class App extends Component {
  
  state = {
    name:"",
    major:"",
    movies:[],
    gender:"",
    course:"",
    songs:[],
    grade:""
  };
  
  onChange = (fieldName)=>{
    return (event)=>{
      var state = this.state;
      state[fieldName]=event.target.value;
      this.setState(state);  
    }
  };
  
  checkboxChange = (fieldName)=>{
    return (event)=>{
      var targetArray = this.state[fieldName];
      if(targetArray.indexOf(event.target.value) >=0)
      targetArray.splice(
        targetArray.indexOf(event.target.value),
        1
      );
      else
      targetArray.push(event.target.value);
      
      var state=this.state;
      state[fieldName]=targetArray;
      this.setState(state);
    }
  };
  
  render() {
    return (
      <div className="container">
        <div className="page-header">
         
          <h2>Student Survey!!!</h2>
        </div>
        <p className="jumbotron">
        
        <Grid>
        <Row>
            <Col md={6}>
           
             <Form>
       <FormGroup>
       <ControlLabel>Name please...</ControlLabel>
       <FormControl type="text" 
            placeholder="Name here..."
            value={this.state.name}
            onChange={this.onChange('name')}
            />
       <HelpBlock>use to identify you</HelpBlock>
       </FormGroup>
       
       
       <FormGroup>
       <ControlLabel>What is your major?</ControlLabel>
       <FormControl componentClass="select"
            value={this.state.major}
            onChange={this.onChange('major')}
            >
                
                 <option value="Programming">Programming</option>
                 <option value="Multimedia">Multimedia</option>
       </FormControl>
      
       </FormGroup>
       
       <FormGroup>
       <ControlLabel>Favorite Movies</ControlLabel>
          <Checkbox value="Harry Potter"
          checked={this.state.movies.indexOf('Harry Potter')>=0 ? true:false}
                    onChange={this.checkboxChange('movies')}>
                    Harry Potter
          </Checkbox>
          <Checkbox value="Lord of the Rings"
          checked={this.state.movies.indexOf('Lord of the Rings')>=0 ? true:false}
                    onChange={this.checkboxChange('movies')}>
                    Lord of the Rings
          </Checkbox>
          <Checkbox value="Walking Dead"
          checked={this.state.movies.indexOf('Walking Dead')>=0 ? true:false}
                    onChange={this.checkboxChange('movies')}>
                    Walking Dead
          </Checkbox>
         
       </FormGroup>
       
        <FormGroup>
       <ControlLabel>Gender</ControlLabel>
          <Radio name="gender" value="Male"
                 onChange={this.onChange('gender')}>Male</Radio>
          <Radio name="gender" value="Female"
                 onChange={this.onChange('gender')}>Female</Radio>
       
       </FormGroup>
       
        <FormGroup>
       <ControlLabel>Course/Program</ControlLabel>
       <FormControl type="text" 
            placeholder="BSIT/CS"
            value={this.state.course}
            onChange={this.onChange('course')}
            />
       
       </FormGroup>
       
        <FormGroup>
       <ControlLabel>Favorite Song(s)</ControlLabel>
        <Checkbox value="Secret Love Song"
          checked={this.state.songs.indexOf('Secret Love Song')>=0 ? true:false}
                    onChange={this.checkboxChange('songs')}>
                    Secret Love Song
          </Checkbox>
          <Checkbox value="Cold Water"
          checked={this.state.songs.indexOf('Cold Water')>=0 ? true:false}
                    onChange={this.checkboxChange('songs')}>
                    Cold Water
          </Checkbox>
          <Checkbox value="Let Me Love You"
          checked={this.state.songs.indexOf('Let Me Love You')>=0 ? true:false}
                    onChange={this.checkboxChange('songs')}>
                    Let Me Love You
          </Checkbox>
          <Checkbox value="Hit or Miss"
          checked={this.state.songs.indexOf('Hit or Miss')>=0 ? true:false}
                    onChange={this.checkboxChange('songs')}>
                  Hit or Miss
          </Checkbox>
          </FormGroup>
          
        <FormGroup>
       <ControlLabel>Ready to view grades?</ControlLabel>
         <Radio name="grade" value="Yes"
                 onChange={this.onChange('grade')}>Yes</Radio>
          <Radio name="grade" value="No"
                 onChange={this.onChange('grade')}>No</Radio>
           <Radio name="grade" value="Maybe"
                 onChange={this.onChange('grade')}>Maybe</Radio>
       </FormGroup>
       
          <ButtonGroup>
          <Button bsStyle="info">
          <span className="glyphicon glyphicon-th-large"></span>
          &nbsp;Menu</Button>
          <Button bsStyle="primary">
          <span className="glyphicon glyphicon-music"></span>
          &nbsp;Music</Button>
          <Button bsStyle="warning">
          <span className="glyphicon glyphicon-film"></span>
          &nbsp;Video</Button>
          <Button bsStyle="danger">
          <span className="glyphicon glyphicon-remove"></span>
          &nbsp;Exit</Button>
          </ButtonGroup>
          </Form>
          
            </Col>
            
            <Col md={6}>
            <strong>Name: {this.state.name}</strong><br/> 
            <strong>Major: {this.state.major}</strong><br/>
            <strong>Favorite Movie(s): {
              this.state.movies.map((item,i)=>{
                return <div>
                <span className="label label-danger">{item}</span>
                </div>
              })
            }</strong><br/>
            <strong>Gender: {this.state.gender}</strong><br/>
            <strong>Course/Program: {this.state.course}</strong><br/>
             <strong>Favorite Song(s): {
              this.state.songs.map((item,i)=>{
                return <div>
                <span className="label label-info">{item}</span>
                </div>
              })
            }</strong><br/>
             <strong>Ready to view grades? : {this.state.grade}</strong><br/>
            
            </Col>
        </Row>
        </Grid>
        
     
        </p>
      </div>
    );
  }
}

export default App;

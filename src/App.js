import React, {Component} from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import ListGroup from 'react-bootstrap/ListGroup';
  
  
class App extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      userInput : "",
      list:[]
    }
  }

  updateInput(value){
    this.setState({
      userInput: value,
    });
  }

  addItem(){
    if(this.state.userInput !== '' ){
      const userInput = {
        id :  Math.random(),
        value : this.state.userInput
      };
      const list = [...this.state.list];
      list.push(userInput);
      this.setState({
        list,
        userInput:""
      });
    }
  }

  deleteItem(key){
    const list = [...this.state.list];
    const updateList = list.filter(item => item.id !== key);
    this.setState({
      list:updateList,
    });
  }
  
  render(){
    return(<Container>
          <Row style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: '3rem',
                }}
                >Todo List
            </Row>
           <hr/>
          <Row>
          <Col>
          <InputGroup className="mb-3">
          <FormControl
            placeholder="add item to the list"
            value = {this.state.userInput}
            onChange = {item => this.updateInput(item.target.value)}
          />
          <InputGroup.Append>
            <Button
              onClick = {()=>this.addItem()}
              >
              ADD
            </Button>
          </InputGroup.Append>
        </InputGroup>
  
     </Col>
   </Row>
   <Row>
     <Col>
        <ListGroup>
         {this.state.list.map(item => {return(
            <ListGroup.Item style={{
              display: "flex",
              justifyContent:"space-between",
              alignItems:"center"
            }} variant="success"
              >
              {item.value}
              <Button variant="danger"
            onClick = { () => this.deleteItem(item.id) }>
            X
          </Button>
            </ListGroup.Item>
         )})}
        </ListGroup>
     </Col>
   </Row>
     </Container>
    );
  }
}
  
export default App;

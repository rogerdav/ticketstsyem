import logo from './logo.svg';
import './App.css';
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";

function App() {
  return (
    <div className="App">
      <Container>
        <form autoComplete="off" id="ticketForm">
          <TextField id="name" varient="outlined" label="Name" />
          <TextField id="location" varient="outlined" label="Location" />
          <TextField id="description" varient="outlined" label="Description" />

        
        </form>
      </Container>
      
    </div>
  );
}

export default App;

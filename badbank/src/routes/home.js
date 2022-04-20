import Card from '../components/context'
import bankImage from '../components/bank.png'
import '../App.css'

function Home(){
    return (
        <div className="centeredGrid">
        <div></div>
      <Card
        bgcolor="secondary"
        cardstyle="small"
        header="BadBank Landing Module"
        title="Welcome to the bank"
        text="You can move around using the navigation bar."
        body={(<img src={bankImage} className="img-fluid" alt="Responsive image"/>)}
      />   
      <div></div> 
      </div>
    );  
  }

export default Home;
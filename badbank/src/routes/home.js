import Card from '../components/context'
import bankImage from '../components/bank.png'

function Home(){
    return (
      <Card
        txtcolor="black"
        header="BadBank Landing Module"
        title="Welcome to the bank"
        text="You can move around using the navigation bar."
        body={(<img src={bankImage} className="img-fluid" alt="Responsive image"/>)}
      />    
    );  
  }

export default Home;
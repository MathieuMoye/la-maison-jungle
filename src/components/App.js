import Banner from '../components/Banner'
import Cart from './Cart';
import ShoppingList from './ShoppingList';
import logo from '../assets/logo.png.png'
import QuestionForm from './QuestionForm';
import Footer from './Footer';


function App() {
  return (
    <div className="App">
    <Banner>
    <img src={logo} alt='La maison jungle' />
    <h1 className='lmj-title'>La maison jungle</h1>
</Banner>
    <Cart />
    <QuestionForm />
    <ShoppingList />
    <Footer />
    </div>
  );
}

export default App;

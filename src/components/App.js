import Banner from '../components/Banner'
import Cart from './Cart';
import ShoppingList from './ShoppingList';
import logo from '../assets/logo.png.png'


function App() {
  return (
    <div className="App">
    <Banner>
    <img src={logo} alt='La maison jungle' />
    <h1 className='lmj-title'>La maison jungle</h1>
</Banner>
    <Cart />
    <ShoppingList />
    </div>
  );
}

export default App;

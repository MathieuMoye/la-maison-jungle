import CareScale from "../CareScale";
import './styles.css'



const PlantItem = ({ id, cover, name, water, light, price }) => {

	function handleClick(e) {
		console.log('✨ Ceci est mon event :', e)
	}

	return (
		<li className='lmj-plant-item' onClick={() => handleClick(name)}>
			<span className='lmj-plant-item-price'>{price}€</span>
			<img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
			{name}
			<div>
				<CareScale careType='water' scaleValue={water} />
				<CareScale careType='light' scaleValue={light} />
			</div>
		</li>
	)
}

export default PlantItem
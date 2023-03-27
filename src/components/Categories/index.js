const Categories = ({ activeCategory, setActiveCategories, categories}) => {

    return(
        <div>
             <select value={activeCategory}
                 onChange={(e) => setActiveCategories(e.target.value)}
                 className='lmj-categories-select'
                 >
            <option value=''>---</option>
            {categories.map((cat) => (
					<option key={cat} value={cat}>
						{cat}
					</option>
				))}
        </select>
        <button onClick={() =>setActiveCategories('')}>reinitialiser</button>
   
        </div>
       ) 
}

export default Categories;
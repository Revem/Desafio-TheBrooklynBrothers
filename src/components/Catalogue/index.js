import { useEffect, useState } from "react";
import Products from "../../data/productsCategory.json";

function Catalogue() {
  const [productList, setProductList] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState([]);

  useEffect(() => {
    setProductList(Products);
  }, []);

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
 }

  return (<>
  <div>
    <div>Filtrar por categoria:</div>
    <div>
      <select name="category-list" id="category-list" onChange={handleCategoryChange}>
        <option value="">All</option>
        <option value="">Aerosol</option>
        <option value="">Alcohol en Gel</option>
        <option value="">Barra</option>
        <option value="">Jabón Líquido</option>
        <option value="">Jabón Barra</option>
        <option value="">Alcohol en Spray</option>
        <option value="">Talco</option>
      </select>
    </div>
  </div>
    <ul>
      {Products.data.nodes.map((product) => (
        <li key={product.id}>
          <div >
            <img
              className="w-52"
              src={product.images[0].asset.url}
              alt={product.images[0].alt}
            />
            <br />
            {product.name}
          </div>
        </li>
      ))}
    </ul>
    </>
  );
}

export default Catalogue;

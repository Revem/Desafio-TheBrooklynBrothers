import { useEffect, useMemo, useState } from "react";
import Data from "../../data/productsCategory.json";
import Item from "../Item";

function Catalogue() {
  const [products, setProducts] = useState(Data.data.nodes);

  const [selectedCategory, setSelectedCategory] = useState();

  useEffect(() => {
    setProducts(Data.data.nodes);
  }, []);

  function getFilteredList() {
    if (!selectedCategory) {
      return products;
    }
    return products.filter((item) => item.category.name === selectedCategory);
  }

  var FilteredList = useMemo(getFilteredList, [selectedCategory, products]);

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  return (
    <>
      <div className="flex flex-col lg:flex-row lg:justify-evenly">
        <div className="text-center lg:text-start text-lg">
          <p className="lg:text-3xl lg:border-b border-[#16b9cf] lg:w-52 lg:m-0 font-bold">
            Filtrar
          </p>
          <p className="lg:text-2xl lg:border-b border-[#16b9cf] lg:w-52 lg:m-0 ">
            Producto
          </p>
          <div className="m-5 p-5 border-b border-[#16b9cf]  lg:hidden">
            <select
              name="category"
              for="category"
              onChange={handleCategoryChange}
            >
              <option value="">Todos</option>
              <option value="Aerosol">Aerosol</option>
              <option value="Alcohol en Gel">Alcohol en Gel</option>
              <option value="Barra">Barra</option>
              <option value="Jabón Líquido">Jabón Líquido</option>
              <option value="Jabón Barra">Jabón Barra</option>
              <option value="Alcohol en Spray">Alcohol en Spray</option>
              <option value="Talco">Talco</option>
            </select>
          </div>

          <div className="hidden lg:inline-block">
            <label for="todos" className="font-thin">
              <input
                type="radio"
                value=""
                id="todos"
                onChange={handleCategoryChange}
                name="category"
                className="checkbox"
              />
              <span className="checkmark" /> Todos
            </label>
            <br />
            <label for="aerosol" className="font-thin">
              <input
                type="radio"
                value="Aerosol"
                id="aerosol"
                onChange={handleCategoryChange}
                name="category"
              />{" "}
              Aerosol
            </label>
            <br />
            <label for="alcohol en gel" className="font-thin">
              {" "}
              <input
                type="radio"
                value="Alcohol en Gel"
                id="alcohol en gel"
                onChange={handleCategoryChange}
                name="category"
              />{" "}
              Alcohol en Gel
            </label>
            <br />
            <label for="barra" className="font-thin">
              {" "}
              <input
                type="radio"
                value="Barra"
                id="barra"
                onChange={handleCategoryChange}
                name="category"
              />{" "}
              Barra
            </label>
            <br />
            <label for="jabon liquido" className="font-thin">
              <input
                type="radio"
                value="Jabón Líquido"
                id="jabon liquido"
                onChange={handleCategoryChange}
                name="category"
              />{" "}
              Jabón Líquido
            </label>
            <br />
            <label for="jabon barra" className="font-thin">
              {" "}
              <input
                type="radio"
                value="Jabón Barra"
                id="jabon barra"
                onChange={handleCategoryChange}
                name="category"
              />{" "}
              Jabón Barra
            </label>
            <br />
            <label for="alcohol en spray" className="font-thin">
              {" "}
              <input
                type="radio"
                value="Alcohol en Spray"
                id="alcohol en spray"
                onChange={handleCategoryChange}
                name="category"
              />{" "}
              Alcohol en Spray
            </label>
            <br />
            <label for="talco" className="font-thin">
              <input
                type="radio"
                value="Talco"
                id="talco"
                onChange={handleCategoryChange}
                name="category"
              />{" "}
              Talco
            </label>
            <br />
          </div>
        </div>

        <div className="flex flex-wrap lg:w-7/12 lg:border-t border-[#16b9cf] lg:mt-9">
          {FilteredList.map((element, index) => (
            <Item {...element} key={index} className="flex " />
          ))}
        </div>
      </div>
    </>
  );
}

export default Catalogue;

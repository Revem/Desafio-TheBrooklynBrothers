const Item = ({ name, category, images, shortDescription }) => {
  return (
    <div
      className={`flex flex-col gap-0 p-3  m-3 w-96  justify-center text-left drop-shadow-md`}
    >
      <div className="bg-white  ml-auto mr-auto">
        <img
          src={images[0].asset.url}
          alt={images[0].alt}
          className="w-full"
        />
      </div>

      <div className="p-4 bg-white">
        <span className="text-md"><strong>{name}</strong></span>
        <br />
        <span className="text-sm">Categoria: {category.name}</span>
      </div>
      <div className="p-4 bg-white h-60 w-full">
        <span>
          <strong className=" border-t border-black pt-3">SOBRE EL PRODUCTO</strong>
        </span>
        <br />
        <span className="">{shortDescription}</span>
      </div>
    </div>
  );
};

export default Item;

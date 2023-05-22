import Items from "./Items";

const formatter = new Intl.NumberFormat('en',{
  style:"currency",
  currency:"USD",
  minimumFractionDigits:"0"
})

const Menu = ({ nombeCateg, nombreclasecs }) => {
  var cateClaseNam = nombreclasecs;
  var cateClaseNamFull = `${cateClaseNam}-menu`;
  
  return (
    <div className={`${cateClaseNamFull}`}>
      <h1>{nombeCateg}</h1>
      <Items
        nombreclasecs="burge"
        nombreProdcut="De Pollo"
        precio={formatter.format(10000)}
        descriptionProduct="Donec luctus malesuada imperdiet. Nunc faucibus rhoncus felis, vitae tincidunt turpis sollicitudin sit amet."
        cant="1"
        />
      <Items
        nombreclasecs="burge"
        nombreProdcut="De Caballo"
        precio={formatter.format(20000)}
        descriptionProduct="Donec luctus malesuada imperdiet. Nunc faucibus rhoncus felis, vitae tincidunt turpis sollicitudin sit amet."
        cant="2"
        />
        <Items
        nombreclasecs="burge"
        nombreProdcut="De Pezcado"
        precio={formatter.format(10500)}
        descriptionProduct="Donec luctus malesuada imperdiet. Nunc faucibus rhoncus felis, vitae tincidunt turpis sollicitudin sit amet."
        cant="3"
        />
      <Items
        nombreclasecs="burge"
        nombreProdcut="De Cerdo"
        precio={formatter.format(25000)}
        descriptionProduct="Donec luctus malesuada imperdiet. Nunc faucibus rhoncus felis, vitae tincidunt turpis sollicitudin sit amet."
        cant="4"
        />
        <Items
        nombreclasecs="burge"
        nombreProdcut="De Arena"
        precio={formatter.format(35000)}
        descriptionProduct="Donec luctus malesuada imperdiet. Nunc faucibus rhoncus felis, vitae tincidunt turpis sollicitudin sit amet."
        cant="5"
        />
    </div>
  );
};

export default Menu;

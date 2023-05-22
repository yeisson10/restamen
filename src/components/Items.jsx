import { useState } from 'react'

const Items = ({nombreclasecs, nombreProdcut, precio, descriptionProduct, cant}) => {
  var cateClaseNam = nombreclasecs;   
   
  return (
    
    <ul>
      <li className={`${cateClaseNam}-menu-item`}>
        <div className={`${cateClaseNam}-offer-${cant} burger-offer-card`}>
          <div className="headings-holder">
            <h3>{nombreProdcut}</h3>
            <h3>{precio}</h3>
          </div>
          <p>{descriptionProduct}</p>
        </div>
      </li>
    </ul>
  );
};

export default Items;

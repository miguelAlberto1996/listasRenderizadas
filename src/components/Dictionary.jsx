/* eslint-disable react/jsx-key */
import {electronics,computadoras,automoviles,frutas} from './List';

function Electronicos(){

// celulares
    const tipo = electronics.filter(electronics =>
        electronics.tipo === 'Smartphone');
        const lista = tipo.map(electronic =>        
        // eslint-disable-next-line react/jsx-key
        <li>
            <p>
               <b>{electronic.sku}:</b><br />
                {electronic.tipo}<br />
                {electronic.nombre}<br />
                {electronic.pantalla} <br />
                {electronic.precio} <br />
          </p>
        </li>      
      );
// Laptops
const tipoComp = computadoras.filter(computadoras =>
  computadoras.tipo === 'Laptop');
  const lista2 = tipoComp.map(computadora =>        
  <li>
      <p>
         <b>{computadora.sku}:</b><br />
         {computadora.id}<br />
          {computadora.nombre}<br />
          {computadora.pantalla} <br />
          {computadora.description} <br />
    </p>
  </li>      
);

// Autos
const tipoAuto = automoviles.filter(automoviles =>
  automoviles.tipo === 'PICKUP');
  const lista3 = tipoAuto.map(automovil =>        
  <li>
      <p>
         <b>{automovil.sku}:</b><br />
          {automovil.nombre}<br />
          {automovil.modelo} <br />
          {automovil.description} <br />
    </p>
  </li>      
);

// frutas
const tipoFruta = frutas.filter(frutas =>
  frutas.tipo === 'CITRICO');
  const lista4 = tipoFruta.map(fruta =>        
  <li>
      <p>
         <b>{fruta.sku}:</b><br />
          {fruta.nombre}<br />
          {fruta.tipo} <br />
          {fruta.description} <br />
    </p>
  </li>      
);


     return(
    <>
          <p>Electronicos</p>
          <div>
            {lista}
          </div>

          <p>Computadoras</p>
          <div>
            {lista2}
          </div>

          <p>Automoviles</p>
          <div>
            {lista3}
          </div>

          <p>Frutas</p>
          <div>
            {lista4}
          </div>
    </>)
     
    }

    
export default Electronicos;
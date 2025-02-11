import React from "react";

/**
 * Define la estructura de un elemento de datos.
 */
type DataItem = {
  id: number;
  name: string;
  description: string;
  image: string;
}

/**
 * Define las props que recibe el componente DataPresenter.
 */
type DataPresenterProps = {
  data: DataItem[];
}

/**
 * Componente que presenta una lista de elementos de datos.
 * @param data Un array de objetos DataItem.
 * @returns Fragmento de React conteniendo la lista de elementos de datos.
 */
export const DataPresenter: React.FC<DataPresenterProps> = ({ data }) => {
  return (
    <> {/* Fragmento de React para envolver la lista */}
      {data.map((item) => ( // Itera sobre el array de datos
        <React.Fragment key={item.id}> {/* Fragmento de React para cada elemento */}
          <img src={item.image} alt={item.name} /> {/* Imagen del elemento */}
          <em>{item.description}</em> {/* Descripción del elemento */}
        </React.Fragment>
      ))}
    </>
  );
};
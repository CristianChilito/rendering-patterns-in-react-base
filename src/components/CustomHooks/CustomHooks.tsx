import { useState } from "react";

/**
 * Hook personalizado para gestionar el estado de carga.
 * @param initialLoading Valor inicial del estado de carga (opcional, por defecto false).
 * @returns Un objeto con el estado isLoading y la función setIsLoading.
 */
function useLoading(initialLoading: boolean = false) {
  const [isLoading, setIsLoading] = useState(initialLoading);

  return {
    isLoading,
    setIsLoading
  }
}

/**
 * Tipo para las props del componente UserComponent.
 */
type UserProps = {
  name: string;
}

/**
 * Componente que muestra un saludo con el nombre y un botón para simular la carga.
 * @param name El nombre a mostrar en el saludo.
 * @returns Un div con el saludo y el botón, o un div con el mensaje de carga si isLoading es true.
 */
const UserComponent: React.FC<UserProps> = ({ name }) => {
  const { isLoading, setIsLoading} = useLoading(false); // Inicializa isLoading a false

  if (isLoading) {
    return <div>Loading...</div> // Muestra mensaje de carga
  }
  
  return (
    <div>
      <p>Hello, {name} !</p> 
      <button onClick={() => setIsLoading(true)}>Simulate Loading</button> {/* Botón para simular carga */}
    </div>
  );
};

/**
 * Componente padre que utiliza el componente UserComponent.
 */
export const ParentComponent = () => {
  return <UserComponent name="CDCcode" />;
};
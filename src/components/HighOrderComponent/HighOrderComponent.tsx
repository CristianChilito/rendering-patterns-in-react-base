/**
 * Higher-Order Component (HOC) que añade un indicador de carga a un componente.
 * @param Component El componente React al que se le añadirá el indicador de carga.
 * @returns Un nuevo componente con la funcionalidad de indicador de carga.
 */
function withLoading<T extends object> (Component: React.ComponentType<T>) {
    return (props: T & { isLoading: boolean }) => {
      /**
       * Desestructuración de las props.
       * isLoading: Indica si se debe mostrar el indicador de carga.
       * rest: El resto de las props que se pasarán al componente original.
       */
      const { isLoading, ...rest } = props;
  
      /**
       * Renderiza el indicador de carga si isLoading es true, de lo contrario, renderiza el componente original.
       */
      return isLoading ? <p>Loading...</p> : <Component {...rest as T} />
    }
  }
  
  /**
   * Tipo para las props del componente UserComponent.
   */
  type UserProps = {
    name: string;
  }
  
  /**
   * Componente que muestra un saludo con el nombre.
   * @param name El nombre a mostrar en el saludo.
   * @returns Un elemento de párrafo con el saludo.
   */
  const UserComponent: React.FC<UserProps> = ({ name }) => {
    return <p>Hello, {name} !</p>
  }
  
  /**
   * Componente UserComponent envuelto con el HOC withLoading.
   */
  const UserWithLoading = withLoading(UserComponent);
  
  /**
   * Componente padre que utiliza el componente UserWithLoading.
   */
  export const ParentComponent = () => {
    return (
      <div>
        {/* Muestra el indicador de carga */}
        <UserWithLoading isLoading={true} name="CDCcode" />
        {/* Muestra el componente UserComponent */}
        <UserWithLoading isLoading={false} name="CDCcode" />
      </div>
    );
  };
import { useRef } from "react";

export const UncontrolledInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = () => {
    if (inputRef.current) {
      alert(`🛒 Nuevo producto en el carrito: ${inputRef.current.value} ✅`)
    }
  }

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        placeholder="Nombre del producto. Ej: Manzana"
      />
      <button onClick={handleSubmit}>Añadir al carrito</button>
    </div>
  );
};
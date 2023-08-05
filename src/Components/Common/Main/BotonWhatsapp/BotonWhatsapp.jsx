const BotonWhatsapp = () => {
  const handleWhatsAppClick = () => {
    // Reemplaza "número" por el número de teléfono al que deseas enviar el mensaje
    // y "mensaje" por el mensaje que deseas enviar.
    const phoneNumber = "3412645481";
    const message =
      "Buen dia! mi pedido es: 1 unidad monitor gamer, 2 unidad placa de video 3070";

    // Construye la URL de WhatsApp
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}`;

    // Abre la URL en una nueva pestaña del navegador
    window.open(url, "_blank");
  };

  return (
    <button onClick={handleWhatsAppClick}>Enviar mensaje por WhatsApp</button>
  );
};

export default BotonWhatsapp;

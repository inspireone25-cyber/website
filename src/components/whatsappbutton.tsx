const WhatsAppButton = () => {
  const phoneNumber = "919652172220"; // replace with your number

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=Hello%20I%20want%20information%20about%20courses`}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 1000,
      }}
    >
      <img
        src="/whatsapp.png"
        alt="WhatsApp"
        style={{
          width: "90px",
          height: "90px",
        }}
      />
    </a>
  );
};

export default WhatsAppButton;
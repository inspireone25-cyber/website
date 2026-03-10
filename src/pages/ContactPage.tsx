const ContactPage = () => (
  <div className="section-padding">
    <div className="content-max max-w-3xl">
      <h1 className="font-heading text-4xl font-bold text-foreground mb-6">Contact Us</h1>
      <p className="text-muted-foreground mb-10">
        Have questions? Reach out and our team will get back to you within 24 hours.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div className="bg-muted rounded-lg p-6">
          <h3 className="font-heading font-semibold text-foreground mb-2">Email</h3>
          <p className="text-muted-foreground text-sm">info@inspireone.com</p>
        </div>
        <div className="bg-muted rounded-lg p-6">
          <h3 className="font-heading font-semibold text-foreground mb-2">Phone</h3>
          <p className="text-muted-foreground text-sm">+91-9876543210</p>
        </div>
        <div className="bg-muted rounded-lg p-6">
          <h3 className="font-heading font-semibold text-foreground mb-2">Office Hours</h3>
          <p className="text-muted-foreground text-sm">Mon – Sat, 9:00 AM – 6:00 PM IST</p>
        </div>
        <div className="bg-muted rounded-lg p-6">
          <h3 className="font-heading font-semibold text-foreground mb-2">Location</h3>
          <p className="text-muted-foreground text-sm">India</p>
        </div>
      </div>
    </div>
  </div>
);

export default ContactPage;

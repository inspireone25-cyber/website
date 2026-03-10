const AboutPage = () => (
  <div className="section-padding">
    <div className="content-max max-w-3xl">
      <h1 className="font-heading text-4xl font-bold text-foreground mb-6">About Us</h1>
      
      <div className="space-y-6 text-foreground leading-relaxed">
        <p>
          <strong>Inspire One Educational Services</strong> is a trusted educational consultancy dedicated to helping students find the right academic path. We bridge the gap between aspiring students and premier institutions across India.
        </p>
        
        <div className="bg-muted rounded-lg p-6">
          <h2 className="font-heading text-xl font-semibold mb-3">Our Mission</h2>
          <p className="text-muted-foreground">
            To provide honest, personalized guidance that empowers students to make informed decisions about their education and career. We believe every student deserves access to quality counseling regardless of their background.
          </p>
        </div>

        <div className="bg-muted rounded-lg p-6">
          <h2 className="font-heading text-xl font-semibold mb-3">What We Do</h2>
          <ul className="space-y-2 text-muted-foreground">
            <li>• Career counseling and aptitude assessment</li>
            <li>• College and course selection guidance</li>
            <li>• Admission process support and documentation</li>
            <li>• Scholarship and financial aid assistance</li>
            <li>• Entrance exam preparation guidance</li>
          </ul>
        </div>

        <div className="bg-muted rounded-lg p-6">
          <h2 className="font-heading text-xl font-semibold mb-3">Why Students Trust Us</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
            <div className="text-center">
              <p className="font-heading text-3xl font-bold text-primary">500+</p>
              <p className="text-sm text-muted-foreground mt-1">Students Placed</p>
            </div>
            <div className="text-center">
              <p className="font-heading text-3xl font-bold text-primary">50+</p>
              <p className="text-sm text-muted-foreground mt-1">Partner Colleges</p>
            </div>
            <div className="text-center">
              <p className="font-heading text-3xl font-bold text-primary">10+</p>
              <p className="text-sm text-muted-foreground mt-1">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AboutPage;

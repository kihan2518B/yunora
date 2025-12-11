export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      {/* Hero Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsaXZpbmclMjByb29tfGVufDF8fHx8MTc2NTM0MDA2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Modern living room"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight mb-8 text-white drop-shadow-lg">
          DESIGN-DRIVEN FURNITURE<br />FOR MODERN LIVING
        </h2>
        <button className="bg-black text-white px-12 py-4 hover:bg-gray-900 transition-colors">
          Shop Now
        </button>

        {/* Social Proof Badge */}
        <div className="absolute bottom-8 left-4 sm:left-8 flex items-center space-x-3 bg-white/95 backdrop-blur-sm px-4 py-3 rounded-full shadow-lg">
          <div className="flex -space-x-2">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
              alt="Customer"
              className="w-8 h-8 rounded-full border-2 border-white"
            />
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
              alt="Customer"
              className="w-8 h-8 rounded-full border-2 border-white"
            />
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
              alt="Customer"
              className="w-8 h-8 rounded-full border-2 border-white"
            />
          </div>
          <div className="text-left">
            <p className="text-xs text-gray-600">500+ Happy Customers</p>
          </div>
        </div>
      </div>
    </section>
  );
}

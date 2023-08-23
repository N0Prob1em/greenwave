const AboutUsPage = () => {
  const teamMembers = [
    {
      name: 'George',
      role: 'Developer',
      image: 'https://nwybeuabycyiazyoohqr.supabase.co/storage/v1/object/public/GreenWave/george.jpg',
    },
    {
      name: 'Snehal',
      role: 'Developer',
      image: 'https://nwybeuabycyiazyoohqr.supabase.co/storage/v1/object/public/GreenWave/Snehal.jpg',
    },
    {
      name: 'Joel',
      role: 'Developer',
      image: 'https://nwybeuabycyiazyoohqr.supabase.co/storage/v1/object/public/GreenWave/Joel.jpg',
    }
    // Add more team members as needed
  ];
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-8">About Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-600">
              Welcome to GreenWave, where we are dedicated to making a difference in
              people's lives. Our mission is to spread joy and happiness through our giveaway products.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <img
              src="https://nwybeuabycyiazyoohqr.supabase.co/storage/v1/object/public/GreenWave/web-window-gift-box-present-petard-label-icon.jpg"
              alt="About Us Image"
              className="mx-auto max-w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-4">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Team</h2>
          <p className="text-gray-600">
            Meet the passionate individuals who drive GreenWave's success. Our team is
            committed to creating innovative products and unforgettable experiences for our customers.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.image}
                  alt={`${member.name}'s Photo`}
                  className="mx-auto rounded-full w-32 h-32 object-cover mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutUsPage;

import React from "react";

const BlogSection = () => {
  const blogs = [
    {
      id: 1,
      imageUrl:
        "https://images.unsplash.com/photo-1733459065613-cbc1503bffc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmlvciUyMGRlc2lnbiUyMHRleHR1cmV8ZW58MXx8fHwxNzY1MzU3NDc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      date: "15 April 2024",
      title: "Furniture Trends 2024: What's Hot and What's Not",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      alt: "Furniture trend image",
    },
    {
      id: 2,
      imageUrl:
        "https://images.unsplash.com/photo-1759936236914-e8b1ac061030?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwZGVjb3IlMjBvYmplY3RzfGVufDF8fHx8MTc2NTM1NzQ3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      date: "14 April 2024",
      title: "The Ultimate Guide to Choosing the Perfect Sofa",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      alt: "Sofa guide image",
    },
    {
      id: 3,
      imageUrl:
        "https://images.unsplash.com/photo-1637873208809-c2d62f3998ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmlvciUyMGRlc2lnbiUyMGNsb3NlJTIwdXB8ZW58MXx8fHwxNzY1MzU3NDc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      date: "12 April 2024",
      title: "Choosing the Right Dining Table for Your Lifestyle",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      alt: "Dining table image",
    },
  ];

  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
              Our Latest
            </h2>
            <h3 className="text-2xl md:text-3xl font-semibold text-green-600">
              News & Blogs
            </h3>
          </div>
          <button className="px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors self-center md:self-end">
            View All Blogs
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <article
              key={blog.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <img
                src={blog.imageUrl}
                alt={blog.alt}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-yellow-400 text-gray-800 text-sm font-medium rounded-full mb-3">
                  {blog.date}
                </span>
                <h4 className="text-xl font-bold text-gray-800 mb-2 leading-tight">
                  {blog.title}
                </h4>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {blog.description}
                </p>
                <a
                  href="#"
                  className="text-green-600 font-medium hover:underline transition-colors"
                >
                  Read More
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export { BlogSection };

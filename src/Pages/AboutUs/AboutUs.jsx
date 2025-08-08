const About = () => {
  return (
    <div className=" bg-base-200 py-12">
      <section className="max-w-6xl mx-auto px-6 py-16 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-8 text-center">
          About Bookshelf
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text */}
          <div>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
              At{" "}
              <span className="font-semibold text-blue-600 dark:text-blue-400">
                Bookshelf
              </span>
              , we believe books are more than just stories—they’re gateways to
              new worlds, knowledge, and inspiration. Our platform is designed
              to empower readers to easily organize their collections, track
              their progress, and share their thoughts with a passionate
              community.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
              Founded by a team of avid readers and developers, Bookshelf
              combines elegant design with intuitive features, ensuring that
              managing your reading journey is as enjoyable as the books
              themselves. Whether you are a casual reader or a bibliophile, our
              goal is to enhance your reading experience every step of the way.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Join us and be part of a growing community where books bring
              people together, spark conversations, and inspire lifelong
              learning.
            </p>
          </div>

          {/* Right Side - Image */}
          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80"
              alt="Bookshelf and reading"
              className="rounded-lg shadow-lg object-cover max-h-96 w-full"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

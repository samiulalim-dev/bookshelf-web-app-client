const topAuthors = [
  {
    id: 1,
    name: "J.K. Rowling",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/5/5d/J._K._Rowling_2010.jpg",
    bio: "Author of the famous Harry Potter series.",
  },
  {
    id: 2,
    name: "George R.R. Martin",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm1E9wP3UG35CREvu_2e8Xlp3Jxi85ry29jg&s",
    bio: "Known for the epic fantasy series 'A Song of Ice and Fire'.",
  },
  {
    id: 3,
    name: "Agatha Christie",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/cf/Agatha_Christie.png",
    bio: "Queen of Mystery and bestselling detective novels.",
  },
  {
    id: 4,
    name: "Haruki Murakami",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/5/51/Conversatorio_Haruki_Murakami_%2812_de_12%29_%2845747009452%29_%28cropped%29.jpg",
    bio: "Japanese writer known for surreal and magical realism stories.",
  },
];

const TopAuthors = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-14">
        Top Authors
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {topAuthors.map((author) => (
          <div
            key={author.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-5 flex flex-col items-center text-center"
          >
            <img
              src={author.image}
              alt={author.name}
              className="w-32 h-32 rounded-full object-cover mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {author.name}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              {author.bio}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopAuthors;

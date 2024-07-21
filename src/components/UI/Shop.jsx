import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [cycles, setCycles] = useState([]);

  useEffect(() => {
    // Simulating API call to fetch cycles
    const fetchCycles = async () => {
      // Replace this with your actual API call
      const dummyCycles = [
        {
          id: 1,
          name: "Campus Cruiser",
          category: "students",
          price: 299,
          image: "https://via.placeholder.com/300x200?text=Campus+Cruiser",
        },
        {
          id: 2,
          name: "Mountain Master",
          category: "men",
          price: 599,
          image: "https://via.placeholder.com/300x200?text=Mountain+Master",
        },
        {
          id: 3,
          name: "City Chic",
          category: "women",
          price: 449,
          image: "https://via.placeholder.com/300x200?text=City+Chic",
        },
        {
          id: 4,
          name: "Speedy Gonzales",
          category: "men",
          price: 799,
          image: "https://via.placeholder.com/300x200?text=Speedy+Gonzales",
        },
        {
          id: 5,
          name: "Eco Rider",
          category: "women",
          price: 529,
          image: "https://via.placeholder.com/300x200?text=Eco+Rider",
        },
        {
          id: 6,
          name: "Budget Bike",
          category: "students",
          price: 249,
          image: "https://via.placeholder.com/300x200?text=Budget+Bike",
        },
      ];
      setCycles(dummyCycles);
    };
    fetchCycles();
  }, []);

  const filteredCycles = cycles.filter(
    (cycle) =>
      (activeCategory === "all" || cycle.category === activeCategory) &&
      cycle.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categories = [
    {
      id: "all",
      name: "All Cycles",
      icon: "🚲",
      color: "bg-purple-600",
      hoverColor: "bg-purple-700",
    },
    {
      id: "students",
      name: "Student Bikes",
      icon: "🎓",
      color: "bg-green-500",
      hoverColor: "bg-green-600",
    },
    {
      id: "men",
      name: "Men's Cycles",
      icon: "👨",
      color: "bg-blue-500",
      hoverColor: "bg-blue-600",
    },
    {
      id: "women",
      name: "Women's Cycles",
      icon: "👩",
      color: "bg-pink-500",
      hoverColor: "bg-pink-600",
    },
  ];

  const getCategoryColor = (categoryId) => {
    const category = categories.find((cat) => cat.id === categoryId);
    return category ? category.color : "bg-gray-500";
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <motion.aside
        className="w-64 bg-gray-800 text-white p-6 shadow-lg"
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <h2 className="text-2xl font-bold mb-6">Categories</h2>
        <nav>
          {categories.map((category) => (
            <motion.button
              key={category.id}
              className={`w-full text-left py-2 px-4 rounded-lg mb-2 flex items-center transition-colors duration-300 ${
                activeCategory === category.id
                  ? category.color
                  : "bg-gray-700 hover:" + category.hoverColor
              }`}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </motion.button>
          ))}
        </nav>
      </motion.aside>

      {/* Main content */}
      <main className="flex-1 p-8">
        <motion.h1
          className="text-4xl font-bold text-purple-600 mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Cycle Haven
        </motion.h1>

        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <input
            type="text"
            placeholder="Search for your perfect bike..."
            className="w-full p-4 rounded-full border-2 border-purple-300 focus:border-purple-500 transition-colors duration-300"
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
          />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <AnimatePresence>
            {filteredCycles.map((cycle) => (
              <motion.div
                key={cycle.id}
                className={`bg-white rounded-lg shadow-lg overflow-hidden border-t-4 ${getCategoryColor(
                  cycle.category
                )} transition-transform duration-300`}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                <img
                  src={cycle.image}
                  alt={cycle.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {cycle.name}
                  </h3>
                  <p className="text-gray-600 mb-4">${cycle.price}</p>
                  <motion.button
                    className={`text-white px-4 py-2 rounded-full w-full ${getCategoryColor(
                      cycle.category
                    )} hover:${
                      categories.find((cat) => cat.id === cycle.category)
                        ?.hoverColor
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn More
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </main>
    </div>
  );
};

export default Shop;

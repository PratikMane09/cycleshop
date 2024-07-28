import React, { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaHeart,
  FaShoppingCart,
  FaFilter,
  FaSort,
  FaPalette,
  FaCog,
} from "react-icons/fa";
import "../../styles/shop.css";
// Dummy data
const dummyCycles = [
  {
    id: 1,
    name: "Campus Cruiser",
    category: "students",
    price: 299,
    image: "https://via.placeholder.com/300x200?text=Campus+Cruiser",
    frameMaterial: "Aluminum",
    color: "blue",
  },
  {
    id: 2,
    name: "Mountain Master",
    category: "men",
    price: 599,
    image: "https://via.placeholder.com/300x200?text=Mountain+Master",
    frameMaterial: "Carbon",
    color: "red",
  },
  {
    id: 3,
    name: "City Chic",
    category: "women",
    price: 449,
    image: "https://via.placeholder.com/300x200?text=City+Chic",
    frameMaterial: "Steel",
    color: "white",
  },
  {
    id: 4,
    name: "Speedy Gonzales",
    category: "men",
    price: 799,
    image: "https://via.placeholder.com/300x200?text=Speedy+Gonzales",
    frameMaterial: "Carbon",
    color: "black",
  },
  {
    id: 5,
    name: "Eco Rider",
    category: "women",
    price: 529,
    image: "https://via.placeholder.com/300x200?text=Eco+Rider",
    frameMaterial: "Aluminum",
    color: "green",
  },
  {
    id: 6,
    name: "Budget Bike",
    category: "students",
    price: 249,
    image: "https://via.placeholder.com/300x200?text=Budget+Bike",
    frameMaterial: "Steel",
    color: "blue",
  },
];

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

const Sidebar = ({
  categories,
  activeCategory,
  setActiveCategory,
  setPriceRange,
  setSortOption,
  setFrameMaterial,
  setColor,
}) => {
  const [priceRange, setPriceRangeLocal] = useState([0, 1000]);

  const handlePriceRangeChange = (e, index) => {
    const newRange = [...priceRange];
    newRange[index] = parseInt(e.target.value);
    setPriceRangeLocal(newRange);
    setPriceRange(newRange);
  };

  return (
    <div className="sidebar bg-dark text-light p-4">
      <h3 className="mb-4">Filters</h3>

      <div className="mb-4">
        <h5>
          <FaFilter className="me-2" />
          Categories
        </h5>
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={
              activeCategory === category.id ? "primary" : "outline-light"
            }
            className="me-2 mb-2"
            onClick={() => setActiveCategory(category.id)}
          >
            {category.icon} {category.name}
          </Button>
        ))}
      </div>

      <div className="mb-4">
        <h5>
          <FaSort className="me-2" />
          Price Range
        </h5>
        <input
          type="range"
          min="0"
          max="1000"
          step="10"
          value={priceRange[0]}
          onChange={(e) => handlePriceRangeChange(e, 0)}
          className="form-range mb-2"
        />
        <input
          type="range"
          min="0"
          max="1000"
          step="10"
          value={priceRange[1]}
          onChange={(e) => handlePriceRangeChange(e, 1)}
          className="form-range mb-2"
        />
        <div className="d-flex justify-content-between">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>

      <div className="mb-4">
        <h5>
          <FaCog className="me-2" />
          Sort By
        </h5>
        <Button
          variant="outline-light"
          className="me-2 mb-2"
          onClick={() => setSortOption("name")}
        >
          Name
        </Button>
        <Button
          variant="outline-light"
          className="me-2 mb-2"
          onClick={() => setSortOption("price-low-high")}
        >
          Price: Low to High
        </Button>
        <Button
          variant="outline-light"
          className="me-2 mb-2"
          onClick={() => setSortOption("price-high-low")}
        >
          Price: High to Low
        </Button>
      </div>

      <div className="mb-4">
        <h5>
          <FaCog className="me-2" />
          Frame Material
        </h5>
        {["Aluminum", "Carbon", "Steel", "Titanium"].map((material) => (
          <Button
            key={material}
            variant="outline-light"
            className="me-2 mb-2"
            onClick={() => setFrameMaterial(material)}
          >
            {material}
          </Button>
        ))}
      </div>

      <div>
        <h5>
          <FaPalette className="me-2" />
          Color
        </h5>
        <div className="d-flex flex-wrap">
          {["red", "blue", "green", "black", "white"].map((color) => (
            <Button
              key={color}
              variant="outline-light"
              className="me-2 mb-2 color-btn"
              style={{ backgroundColor: color, width: "30px", height: "30px" }}
              onClick={() => setColor(color)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const CycleCard = ({ cycle, onAddToCart, onToggleFavorite }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleToggleFavorite = () => {
    setIsFavorite(!isFavorite);
    onToggleFavorite(cycle);
  };

  return (
    <Card className="h-100 shadow-sm gradient-card">
      <div className="card-img-overlay d-flex justify-content-end">
        <Button
          variant="link"
          className="text-danger p-0"
          onClick={handleToggleFavorite}
        >
          <FaHeart size={24} color={isFavorite ? "red" : "white"} />
        </Button>
      </div>
      <Card.Img variant="top" src={cycle.image} />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{cycle.name}</Card.Title>
        <Card.Text>
          <Badge bg="primary" className="me-2">
            ${cycle.price}
          </Badge>
          <Badge bg="secondary" className="me-2">
            {cycle.frameMaterial}
          </Badge>
          <Badge bg="info">{cycle.color}</Badge>
        </Card.Text>
        <Button
          variant="primary"
          className="mt-auto"
          onClick={() => onAddToCart(cycle)}
        >
          <FaShoppingCart className="me-2" />
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
};

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [sortOption, setSortOption] = useState("name");
  const [frameMaterial, setFrameMaterial] = useState("");
  const [color, setColor] = useState("");
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const filteredCycles = dummyCycles.filter(
    (cycle) =>
      (activeCategory === "all" || cycle.category === activeCategory) &&
      cycle.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      cycle.price >= priceRange[0] &&
      cycle.price <= priceRange[1] &&
      (frameMaterial === "" || cycle.frameMaterial === frameMaterial) &&
      (color === "" || cycle.color === color)
  );

  const sortedCycles = [...filteredCycles].sort((a, b) => {
    if (sortOption === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortOption === "price-low-high") {
      return a.price - b.price;
    } else if (sortOption === "price-high-low") {
      return b.price - a.price;
    }
    return 0;
  });

  const getCategoryColor = (categoryId) => {
    const category = categories.find((cat) => cat.id === categoryId);
    return category ? category.color : "bg-gray-500";
  };

  const handleAddToCart = (cycle) => {
    setCart([...cart, cycle]);
    // You can add a toast notification here
  };

  const handleToggleFavorite = (cycle) => {
    if (favorites.find((fav) => fav.id === cycle.id)) {
      setFavorites(favorites.filter((fav) => fav.id !== cycle.id));
    } else {
      setFavorites([...favorites, cycle]);
    }
    // You can add a toast notification here
  };

  return (
    <Container fluid>
      <Row>
        <Col lg={3}>
          <Sidebar
            categories={categories}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            setPriceRange={setPriceRange}
            setSortOption={setSortOption}
            setFrameMaterial={setFrameMaterial}
            setColor={setColor}
          />
        </Col>
        <Col lg={9}>
          <h2 className="mb-4">Our Cycle Collection</h2>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <input
              type="text"
              placeholder="Search for your perfect bike..."
              className="form-control w-50"
              onChange={(e) => setSearchTerm(e.target.value)}
              value={searchTerm}
            />
            <div>
              <Badge bg="primary" className="me-2">
                Cart: {cart.length}
              </Badge>
              <Badge bg="danger">Favorites: {favorites.length}</Badge>
            </div>
          </div>
          <Row>
            <AnimatePresence>
              {sortedCycles.map((cycle) => (
                <Col lg={4} md={6} sm={6} key={cycle.id} className="mb-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CycleCard
                      cycle={cycle}
                      onAddToCart={handleAddToCart}
                      onToggleFavorite={handleToggleFavorite}
                    />
                  </motion.div>
                </Col>
              ))}
            </AnimatePresence>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Shop;

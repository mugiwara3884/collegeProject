import React from 'react';
import ProductCard from '../components/ProductCard';
import './Dashboard.css';

const products = [
  {
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80',
    title: 'iPhone 12',
    price: 330,
    university: 'State University',
  },
  {
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80',
    title: 'Wooden Desk',
    price: 60,
    university: 'State University',
  },
  {
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80',
    title: 'T-shirt (Medium)',
    price: 10,
    university: 'State University',
  },
  {
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    title: 'Wireless Headphones',
    price: 50,
    university: 'State University',
  },
  {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    title: 'Mini Fridge',
    price: 100,
    university: 'State University',
  },
  {
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
    title: 'Dorm Chairs',
    price: 30,
    university: 'State University',
  },
  {
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
    title: 'Backpack',
    price: 25,
    university: 'State University',
  },
];

const Dashboard = () => {
  return (
    <div className="dashboard-main-layout">
      <nav className="dashboard-nav">
        <div className="nav-title">On Campus</div>
        <input className="nav-search" placeholder="Search" />
        <div className="nav-section">
          <div className="nav-section-title">Location</div>
          <label className="nav-checkbox"><input type="checkbox" defaultChecked /> Within 1 mile</label>
        </div>
        <div className="nav-section">
          <div className="nav-section-title">Category</div>
          <label className="nav-checkbox"><input type="checkbox" /> Books</label>
          <label className="nav-checkbox"><input type="checkbox" /> Electronics</label>
          <label className="nav-checkbox"><input type="checkbox" /> Furniture</label>
          <label className="nav-checkbox"><input type="checkbox" /> Clothing</label>
        </div>
        <div className="nav-section">
          <div className="nav-section-title">Saved</div>
          <label className="nav-checkbox"><input type="checkbox" /> Calculator</label>
          <label className="nav-checkbox"><input type="checkbox" /> Table Lamp</label>
          <label className="nav-checkbox"><input type="checkbox" /> Running Shoes</label>
          <label className="nav-checkbox"><input type="checkbox" /> Laptop Sleeve</label>
        </div>
      </nav>
      <div className="dashboard-container">
        <h2 className="dashboard-title">Marketplace</h2>
        <div className="product-list">
          {products.map((product, idx) => (
            <ProductCard key={idx} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

import React, { useState, useMemo } from 'react';
import { ShoppingCart, Search, Heart, User, Menu, X, Star, Filter, ChevronDown, CreditCard, Truck, Shield, ArrowRight, TrendingUp, Sparkles, Check } from 'lucide-react';

const styles = {
  // Global styles
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(to bottom right, #f8fafc, #ffffff, #f8fafc)',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  
  // Header styles
  header: {
    position: 'sticky',
    top: 0,
    zIndex: 40,
    background: 'rgba(255, 255, 255, 0.8)',
    backdropFilter: 'blur(20px)',
    borderBottom: '1px solid #e2e8f0',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
  },
  headerContainer: {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 1.5rem',
  },
  headerContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '64px',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  logoIcon: {
    width: '40px',
    height: '40px',
    background: 'linear-gradient(to bottom right, #4f46e5, #7c3aed)',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 10px 15px -3px rgba(79, 70, 229, 0.3)',
  },
  logoText: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    background: 'linear-gradient(to right, #4f46e5, #7c3aed)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  searchContainer: {
    position: 'relative',
    flex: 1,
    maxWidth: '512px',
    margin: '0 2rem',
  },
  searchInput: {
    width: '100%',
    paddingLeft: '3rem',
    paddingRight: '1rem',
    paddingTop: '0.625rem',
    paddingBottom: '0.625rem',
    borderRadius: '12px',
    border: '1px solid #e2e8f0',
    background: 'rgba(248, 250, 252, 0.5)',
    outline: 'none',
    transition: 'all 0.2s',
  },
  searchIcon: {
    position: 'absolute',
    left: '1rem',
    top: '50%',
    transform: 'translateY(-50%)',
    color: '#94a3b8',
  },
  headerActions: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },
  iconButton: {
    position: 'relative',
    color: '#475569',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '0.5rem',
    transition: 'color 0.2s',
  },
  badge: {
    position: 'absolute',
    top: '-4px',
    right: '-4px',
    minWidth: '20px',
    height: '20px',
    background: '#4f46e5',
    color: 'white',
    fontSize: '0.75rem',
    borderRadius: '9999px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '500',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
  },
  
  // Hero styles
  hero: {
    background: 'linear-gradient(to right, #4f46e5, #7c3aed, #ec4899)',
    color: 'white',
  },
  heroContainer: {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '4rem 1.5rem',
  },
  heroGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '3rem',
    alignItems: 'center',
  },
  heroTitle: {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    lineHeight: '1.2',
  },
  heroText: {
    fontSize: '1.125rem',
    marginBottom: '2rem',
    opacity: 0.9,
  },
  heroButtons: {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap',
  },
  primaryButton: {
    padding: '0.75rem 2rem',
    background: 'white',
    color: '#4f46e5',
    borderRadius: '12px',
    fontWeight: '600',
    border: 'none',
    cursor: 'pointer',
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.2s',
  },
  secondaryButton: {
    padding: '0.75rem 2rem',
    background: 'rgba(255, 255, 255, 0.1)',
    color: 'white',
    borderRadius: '12px',
    fontWeight: '600',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    cursor: 'pointer',
    backdropFilter: 'blur(10px)',
    transition: 'all 0.2s',
  },
  
  // Features styles
  featuresContainer: {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '3rem 1.5rem',
  },
  featuresGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '1.5rem',
  },
  featureCard: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '1rem',
    padding: '1.5rem',
    borderRadius: '16px',
    border: '1px solid',
  },
  featureIcon: {
    width: '48px',
    height: '48px',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  
  // Main content styles
  mainContainer: {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '2rem 1.5rem',
  },
  mainGrid: {
    display: 'grid',
    gridTemplateColumns: '256px 1fr',
    gap: '2rem',
  },
  
  // Sidebar styles
  sidebar: {
    background: 'white',
    borderRadius: '16px',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
    border: '1px solid #e2e8f0',
    padding: '1.5rem',
    position: 'sticky',
    top: '96px',
    height: 'fit-content',
  },
  sidebarTitle: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    marginBottom: '1.5rem',
    fontSize: '1.125rem',
    fontWeight: '600',
    color: '#0f172a',
  },
  categoryButton: {
    width: '100%',
    textAlign: 'left',
    padding: '0.5rem 1rem',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.2s',
    marginBottom: '0.5rem',
  },
  categoryButtonActive: {
    background: '#4f46e5',
    color: 'white',
    boxShadow: '0 10px 15px -3px rgba(79, 70, 229, 0.3)',
  },
  categoryButtonInactive: {
    background: '#f8fafc',
    color: '#475569',
  },
  
  // Product card styles
  productsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '1.5rem',
  },
  productCard: {
    background: 'white',
    borderRadius: '16px',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
    border: '1px solid #e2e8f0',
    overflow: 'hidden',
    transition: 'all 0.3s',
    cursor: 'pointer',
  },
  productImageContainer: {
    position: 'relative',
    overflow: 'hidden',
    height: '256px',
  },
  productImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.5s',
  },
  discountBadge: {
    position: 'absolute',
    top: '12px',
    left: '12px',
    padding: '0.25rem 0.75rem',
    background: '#ef4444',
    color: 'white',
    fontSize: '0.875rem',
    fontWeight: 'bold',
    borderRadius: '9999px',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
  },
  trendingBadge: {
    position: 'absolute',
    top: '12px',
    right: '12px',
    padding: '0.25rem 0.75rem',
    background: '#4f46e5',
    color: 'white',
    fontSize: '0.75rem',
    fontWeight: '600',
    borderRadius: '9999px',
    display: 'flex',
    alignItems: 'center',
    gap: '0.25rem',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
  },
  favoriteButton: {
    position: 'absolute',
    bottom: '12px',
    right: '12px',
    width: '40px',
    height: '40px',
    borderRadius: '9999px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.2s',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
  },
  productContent: {
    padding: '1.25rem',
  },
  productRating: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    marginBottom: '0.5rem',
  },
  productTitle: {
    fontWeight: '600',
    color: '#0f172a',
    marginBottom: '0.25rem',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  productDescription: {
    fontSize: '0.875rem',
    color: '#64748b',
    marginBottom: '0.75rem',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
  },
  productPrice: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#0f172a',
  },
  productOriginalPrice: {
    fontSize: '0.875rem',
    color: '#94a3b8',
    textDecoration: 'line-through',
    marginLeft: '0.5rem',
  },
  addToCartButton: {
    width: '100%',
    padding: '0.75rem',
    background: 'linear-gradient(to right, #4f46e5, #7c3aed)',
    color: 'white',
    borderRadius: '12px',
    fontWeight: '600',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    transition: 'all 0.2s',
    marginTop: '1rem',
  },
  
  // Modal styles
  modalOverlay: {
    position: 'fixed',
    inset: 0,
    background: 'rgba(0, 0, 0, 0.6)',
    backdropFilter: 'blur(4px)',
    zIndex: 50,
  },
  modalContainer: {
    position: 'fixed',
    inset: 0,
    zIndex: 50,
    overflow: 'hidden',
  },
  cartSidebar: {
    position: 'absolute',
    right: 0,
    top: 0,
    height: '100%',
    width: '100%',
    maxWidth: '28rem',
    background: 'white',
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
  },
  modalHeader: {
    padding: '1.5rem',
    borderBottom: '1px solid #e2e8f0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  modalContent: {
    flex: 1,
    overflowY: 'auto',
    padding: '1.5rem',
  },
  cartItem: {
    display: 'flex',
    gap: '1rem',
    padding: '1rem',
    background: '#f8fafc',
    borderRadius: '12px',
    marginBottom: '1rem',
  },
  cartItemImage: {
    width: '80px',
    height: '80px',
    objectFit: 'cover',
    borderRadius: '8px',
  },
  quantityControl: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  quantityButton: {
    width: '28px',
    height: '28px',
    borderRadius: '8px',
    background: 'white',
    border: '1px solid #e2e8f0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'background 0.2s',
  },
  
  // Footer styles
  footer: {
    background: '#0f172a',
    color: 'white',
    marginTop: '5rem',
  },
  footerContainer: {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '3rem 1.5rem',
  },
  footerGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '2rem',
    marginBottom: '2rem',
  },
  footerBottom: {
    paddingTop: '2rem',
    borderTop: '1px solid #1e293b',
    textAlign: 'center',
    fontSize: '0.875rem',
    color: '#94a3b8',
  },
  
  // Notification
  notification: {
    position: 'fixed',
    top: '1rem',
    right: '1rem',
    zIndex: 50,
    padding: '0.75rem 1.5rem',
    borderRadius: '8px',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
};

const App = () => {
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [sortBy, setSortBy] = useState('featured');
  const [showCart, setShowCart] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [showAuth, setShowAuth] = useState(false);
  const [authMode, setAuthMode] = useState('login');
  const [notification, setNotification] = useState(null);

  const products = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      category: "Electronics",
      price: 299.99,
      originalPrice: 399.99,
      rating: 4.8,
      reviews: 1247,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
      description: "High-fidelity audio with active noise cancellation",
      inStock: true,
      trending: true,
      discount: 25
    },
    {
      id: 2,
      name: "Smart Watch Pro",
      category: "Electronics",
      price: 449.99,
      originalPrice: 599.99,
      rating: 4.6,
      reviews: 892,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
      description: "Advanced fitness tracking and health monitoring",
      inStock: true,
      trending: true,
      discount: 25
    },
    {
      id: 3,
      name: "Designer Backpack",
      category: "Fashion",
      price: 89.99,
      originalPrice: 129.99,
      rating: 4.7,
      reviews: 534,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop",
      description: "Durable and stylish for everyday adventures",
      inStock: true,
      trending: false,
      discount: 31
    },
    {
      id: 4,
      name: "4K Action Camera",
      category: "Electronics",
      price: 349.99,
      originalPrice: 499.99,
      rating: 4.9,
      reviews: 2103,
      image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&h=500&fit=crop",
      description: "Capture stunning moments in ultra HD",
      inStock: true,
      trending: true,
      discount: 30
    },
    {
      id: 5,
      name: "Minimalist Wallet",
      category: "Fashion",
      price: 34.99,
      originalPrice: 49.99,
      rating: 4.5,
      reviews: 678,
      image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=500&h=500&fit=crop",
      description: "Sleek leather design with RFID protection",
      inStock: true,
      trending: false,
      discount: 30
    },
    {
      id: 6,
      name: "Yoga Mat Premium",
      category: "Sports",
      price: 59.99,
      originalPrice: 79.99,
      rating: 4.8,
      reviews: 1456,
      image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500&h=500&fit=crop",
      description: "Non-slip, eco-friendly, extra thick comfort",
      inStock: true,
      trending: false,
      discount: 25
    },
    {
      id: 7,
      name: "Bluetooth Speaker",
      category: "Electronics",
      price: 129.99,
      originalPrice: 179.99,
      rating: 4.7,
      reviews: 923,
      image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&h=500&fit=crop",
      description: "360° sound with waterproof design",
      inStock: true,
      trending: true,
      discount: 28
    },
    {
      id: 8,
      name: "Running Shoes Elite",
      category: "Sports",
      price: 159.99,
      originalPrice: 219.99,
      rating: 4.9,
      reviews: 1834,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop",
      description: "Lightweight cushioning for peak performance",
      inStock: true,
      trending: true,
      discount: 27
    },
    {
      id: 9,
      name: "Desk Lamp Modern",
      category: "Home",
      price: 79.99,
      originalPrice: 119.99,
      rating: 4.6,
      reviews: 445,
      image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&h=500&fit=crop",
      description: "Adjustable LED with USB charging port",
      inStock: true,
      trending: false,
      discount: 33
    },
    {
      id: 10,
      name: "Organic Coffee Beans",
      category: "Food",
      price: 24.99,
      originalPrice: 34.99,
      rating: 4.8,
      reviews: 2341,
      image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=500&h=500&fit=crop",
      description: "Single-origin, freshly roasted perfection",
      inStock: true,
      trending: false,
      discount: 29
    },
    {
      id: 11,
      name: "Leather Journal",
      category: "Stationery",
      price: 39.99,
      originalPrice: 59.99,
      rating: 4.7,
      reviews: 567,
      image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=500&h=500&fit=crop",
      description: "Handcrafted with premium paper",
      inStock: true,
      trending: false,
      discount: 33
    },
    {
      id: 12,
      name: "Portable Charger 20K",
      category: "Electronics",
      price: 49.99,
      originalPrice: 69.99,
      rating: 4.8,
      reviews: 1923,
      image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=500&h=500&fit=crop",
      description: "Fast charging for all your devices",
      inStock: true,
      trending: true,
      discount: 29
    }
  ];

  const categories = ['All', 'Electronics', 'Fashion', 'Sports', 'Home', 'Food', 'Stationery'];

  const showNotification = (message, type = 'success') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  const filteredProducts = useMemo(() => {
    let filtered = products.filter(p => {
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
      const matchesPrice = p.price >= priceRange[0] && p.price <= priceRange[1];
      return matchesSearch && matchesCategory && matchesPrice;
    });

    switch(sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'trending':
        filtered.sort((a, b) => (b.trending ? 1 : 0) - (a.trending ? 1 : 0));
        break;
      default:
        break;
    }

    return filtered;
  }, [searchQuery, selectedCategory, priceRange, sortBy]);

  const addToCart = (product) => {
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      setCart(cart.map(item => 
        item.id === product.id 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    showNotification('Added to cart!');
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
    showNotification('Removed from cart', 'info');
  };

  const updateQuantity = (productId, delta) => {
    setCart(cart.map(item => 
      item.id === productId 
        ? { ...item, quantity: Math.max(1, item.quantity + delta) }
        : item
    ));
  };

  const toggleFavorite = (productId) => {
    if (favorites.includes(productId)) {
      setFavorites(favorites.filter(id => id !== productId));
      showNotification('Removed from favorites', 'info');
    } else {
      setFavorites([...favorites, productId]);
      showNotification('Added to favorites!');
    }
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleLogin = (e) => {
    e.preventDefault();
    setCurrentUser({ name: 'John Doe', email: 'john@example.com' });
    setShowAuth(false);
    showNotification('Welcome back!');
  };

  const handleCheckout = () => {
    if (!currentUser) {
      setShowAuth(true);
      setAuthMode('login');
      return;
    }
    setShowCheckout(true);
    setShowCart(false);
  };

  const completeCheckout = (e) => {
    e.preventDefault();
    showNotification('Order placed successfully! 🎉');
    setCart([]);
    setShowCheckout(false);
  };

  return (
    <div style={styles.container}>
      {/* Notification */}
      {notification && (
        <div style={{
          ...styles.notification,
          background: notification.type === 'success' ? '#10b981' : '#3b82f6'
        }}>
          <Check size={20} />
          {notification.message}
        </div>
      )}

      {/* Header */}
      <header style={styles.header}>
        <div style={styles.headerContainer}>
          <div style={styles.headerContent}>
            <div style={styles.logo}>
              <div style={styles.logoIcon}>
                <ShoppingCart size={20} color="white" />
              </div>
              <span style={styles.logoText}>ShopHub</span>
            </div>

            <div style={{...styles.searchContainer, display: window.innerWidth < 768 ? 'none' : 'block'}}>
              <Search style={styles.searchIcon} size={20} />
              <input
                type="text"
                placeholder="Search for products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={styles.searchInput}
                onFocus={(e) => e.target.style.borderColor = '#4f46e5'}
                onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
              />
            </div>

            <div style={styles.headerActions}>
              <button 
                onClick={() => setShowAuth(true)}
                style={{...styles.iconButton, display: window.innerWidth < 640 ? 'none' : 'flex', alignItems: 'center', gap: '0.5rem'}}
                onMouseEnter={(e) => e.currentTarget.style.color = '#4f46e5'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#475569'}
              >
                <User size={20} />
                <span style={{fontSize: '0.875rem', fontWeight: '500'}}>
                  {currentUser ? currentUser.name.split(' ')[0] : 'Login'}
                </span>
              </button>
              
              <button style={styles.iconButton}
                onMouseEnter={(e) => e.currentTarget.style.color = '#4f46e5'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#475569'}>
                <Heart size={24} />
                {favorites.length > 0 && (
                  <span style={{...styles.badge, background: '#ef4444'}}>
                    {favorites.length}
                  </span>
                )}
              </button>

              <button 
                onClick={() => setShowCart(true)}
                style={styles.iconButton}
                onMouseEnter={(e) => e.currentTarget.style.color = '#4f46e5'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#475569'}
              >
                <ShoppingCart size={24} />
                {cartCount > 0 && (
                  <span style={styles.badge}>
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div style={styles.hero}>
        <div style={styles.heroContainer}>
          <div style={styles.heroGrid}>
            <div>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.5rem 1rem',
                background: 'rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(10px)',
                borderRadius: '9999px',
                marginBottom: '1.5rem'
              }}>
                <Sparkles size={16} />
                <span style={{fontSize: '0.875rem', fontWeight: '500'}}>New Arrivals</span>
              </div>
              <h1 style={styles.heroTitle}>
                Discover Amazing Products
              </h1>
              <p style={styles.heroText}>
                Shop the latest trends with exclusive discounts up to 50% off on premium items
              </p>
              <div style={styles.heroButtons}>
                <button style={styles.primaryButton}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                    e.currentTarget.style.background = '#f8fafc';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.background = 'white';
                  }}>
                  Shop Now
                </button>
                <button style={styles.secondaryButton}
                  onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'}
                  onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'}>
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div style={styles.featuresContainer}>
        <div style={styles.featuresGrid}>
          <div style={{...styles.featureCard, background: 'linear-gradient(to bottom right, #dbeafe, #e0e7ff)', borderColor: '#bfdbfe'}}>
            <div style={{...styles.featureIcon, background: '#2563eb'}}>
              <Truck size={24} color="white" />
            </div>
            <div>
              <h3 style={{fontWeight: '600', color: '#0f172a', marginBottom: '0.25rem'}}>Free Shipping</h3>
              <p style={{fontSize: '0.875rem', color: '#64748b'}}>On orders over $50</p>
            </div>
          </div>
          <div style={{...styles.featureCard, background: 'linear-gradient(to bottom right, #d1fae5, #dcfce7)', borderColor: '#a7f3d0'}}>
            <div style={{...styles.featureIcon, background: '#059669'}}>
              <Shield size={24} color="white" />
            </div>
            <div>
              <h3 style={{fontWeight: '600', color: '#0f172a', marginBottom: '0.25rem'}}>Secure Payment</h3>
              <p style={{fontSize: '0.875rem', color: '#64748b'}}>100% protected checkout</p>
            </div>
          </div>
          <div style={{...styles.featureCard, background: 'linear-gradient(to bottom right, #fae8ff, #fce7f3)', borderColor: '#e9d5ff'}}>
            <div style={{...styles.featureIcon, background: '#9333ea'}}>
              <TrendingUp size={24} color="white" />
            </div>
            <div>
              <h3 style={{fontWeight: '600', color: '#0f172a', marginBottom: '0.25rem'}}>Best Prices</h3>
              <p style={{fontSize: '0.875rem', color: '#64748b'}}>Guaranteed lowest rates</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div style={styles.mainContainer}>
        <div style={{...styles.mainGrid, gridTemplateColumns: window.innerWidth < 1024 ? '1fr' : '256px 1fr'}}>
          {/* Sidebar */}
          <div style={styles.sidebar}>
            <div style={styles.sidebarTitle}>
              <Filter size={20} />
              <h2 style={{margin: 0}}>Filters</h2>
            </div>

            <div style={{marginBottom: '1.5rem'}}>
              <h3 style={{fontSize: '0.875rem', fontWeight: '600', color: '#475569', marginBottom: '0.75rem'}}>Category</h3>
              <div>
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    style={selectedCategory === cat ? {...styles.categoryButton, ...styles.categoryButtonActive} : {...styles.categoryButton, ...styles.categoryButtonInactive}}
                    onMouseEnter={(e) => {
                      if (selectedCategory !== cat) {
                        e.currentTarget.style.background = '#f1f5f9';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (selectedCategory !== cat) {
                        e.currentTarget.style.background = '#f8fafc';
                      }
                    }}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div style={{marginBottom: '1.5rem'}}>
              <h3 style={{fontSize: '0.875rem', fontWeight: '600', color: '#475569', marginBottom: '0.75rem'}}>Price Range</h3>
              <input
                type="range"
                min="0"
                max="2000"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                style={{width: '100%', accentColor: '#4f46e5'}}
              />
              <div style={{display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem', color: '#64748b', marginTop: '0.75rem'}}>
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
            </div>

            <div>
              <h3 style={{fontSize: '0.875rem', fontWeight: '600', color: '#475569', marginBottom: '0.75rem'}}>Sort By</h3>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.5rem 1rem',
                  borderRadius: '8px',
                  border: '1px solid #e2e8f0',
                  background: 'white',
                  outline: 'none'
                }}
                onFocus={(e) => e.target.style.borderColor = '#4f46e5'}
                onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
                <option value="trending">Trending</option>
              </select>
            </div>
          </div>

          {/* Products Grid */}
          <div>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem'}}>
              <p style={{color: '#64748b', margin: 0}}>
                Showing <span style={{fontWeight: '600', color: '#0f172a'}}>{filteredProducts.length}</span> products
              </p>
            </div>

            <div style={styles.productsGrid}>
              {filteredProducts.map(product => (
                <div 
                  key={product.id} 
                  style={styles.productCard}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1)';
                    e.currentTarget.style.borderColor = '#c7d2fe';
                    const img = e.currentTarget.querySelector('img');
                    if (img) img.style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.05)';
                    e.currentTarget.style.borderColor = '#e2e8f0';
                    const img = e.currentTarget.querySelector('img');
                    if (img) img.style.transform = 'scale(1)';
                  }}
                >
                  <div style={styles.productImageContainer}>
                    <img 
                      src={product.image} 
                      alt={product.name}
                      style={styles.productImage}
                    />
                    {product.discount && (
                      <div style={styles.discountBadge}>
                        -{product.discount}%
                      </div>
                    )}
                    {product.trending && (
                      <div style={styles.trendingBadge}>
                        <TrendingUp size={12} />
                        Trending
                      </div>
                    )}
                    <button
                      onClick={() => toggleFavorite(product.id)}
                      style={{
                        ...styles.favoriteButton,
                        background: favorites.includes(product.id) ? '#ef4444' : 'rgba(255, 255, 255, 0.9)',
                        color: favorites.includes(product.id) ? 'white' : '#475569'
                      }}
                      onMouseEnter={(e) => {
                        if (!favorites.includes(product.id)) {
                          e.currentTarget.style.background = '#ef4444';
                          e.currentTarget.style.color = 'white';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!favorites.includes(product.id)) {
                          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
                          e.currentTarget.style.color = '#475569';
                        }
                      }}
                    >
                      <Heart size={20} fill={favorites.includes(product.id) ? 'currentColor' : 'none'} />
                    </button>
                  </div>
                  
                  <div style={styles.productContent}>
                    <div style={styles.productRating}>
                      <div style={{display: 'flex', alignItems: 'center', gap: '0.25rem'}}>
                        <Star size={16} fill="#facc15" color="#facc15" />
                        <span style={{fontSize: '0.875rem', fontWeight: '600', color: '#0f172a'}}>{product.rating}</span>
                      </div>
                      <span style={{fontSize: '0.875rem', color: '#94a3b8'}}>({product.reviews})</span>
                    </div>
                    
                    <h3 style={styles.productTitle}>{product.name}</h3>
                    <p style={styles.productDescription}>{product.description}</p>
                    
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem'}}>
                      <div>
                        <span style={styles.productPrice}>${product.price}</span>
                        {product.originalPrice && (
                          <span style={styles.productOriginalPrice}>${product.originalPrice}</span>
                        )}
                      </div>
                    </div>
                    
                    <button
                      onClick={() => addToCart(product)}
                      style={styles.addToCartButton}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(79, 70, 229, 0.5)';
                        e.currentTarget.style.transform = 'scale(1.05)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = 'none';
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                    >
                      <ShoppingCart size={20} />
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Cart Sidebar */}
      {showCart && (
        <div style={styles.modalContainer}>
          <div style={styles.modalOverlay} onClick={() => setShowCart(false)} />
          <div style={styles.cartSidebar}>
            <div style={styles.modalHeader}>
              <h2 style={{fontSize: '1.5rem', fontWeight: 'bold', color: '#0f172a', margin: 0}}>Shopping Cart</h2>
              <button onClick={() => setShowCart(false)} style={{...styles.iconButton, color: '#94a3b8'}}
                onMouseEnter={(e) => e.currentTarget.style.color = '#64748b'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#94a3b8'}>
                <X size={24} />
              </button>
            </div>

            <div style={styles.modalContent}>
              {cart.length === 0 ? (
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', textAlign: 'center'}}>
                  <ShoppingCart size={64} color="#cbd5e1" style={{marginBottom: '1rem'}} />
                  <p style={{color: '#64748b', marginBottom: '0.5rem'}}>Your cart is empty</p>
                  <p style={{fontSize: '0.875rem', color: '#94a3b8'}}>Add some products to get started</p>
                </div>
              ) : (
                <div>
                  {cart.map(item => (
                    <div key={item.id} style={styles.cartItem}>
                      <img src={item.image} alt={item.name} style={styles.cartItemImage} />
                      <div style={{flex: 1}}>
                        <h3 style={{fontWeight: '600', color: '#0f172a', marginBottom: '0.25rem'}}>{item.name}</h3>
                        <p style={{fontSize: '0.875rem', color: '#64748b', marginBottom: '0.5rem'}}>${item.price}</p>
                        <div style={styles.quantityControl}>
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            style={styles.quantityButton}
                            onMouseEnter={(e) => e.currentTarget.style.background = '#f8fafc'}
                            onMouseLeave={(e) => e.currentTarget.style.background = 'white'}
                          >
                            -
                          </button>
                          <span style={{fontWeight: '600', color: '#0f172a'}}>{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            style={styles.quantityButton}
                            onMouseEnter={(e) => e.currentTarget.style.background = '#f8fafc'}
                            onMouseLeave={(e) => e.currentTarget.style.background = 'white'}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        style={{...styles.iconButton, color: '#94a3b8'}}
                        onMouseEnter={(e) => e.currentTarget.style.color = '#ef4444'}
                        onMouseLeave={(e) => e.currentTarget.style.color = '#94a3b8'}
                      >
                        <X size={20} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {cart.length > 0 && (
              <div style={{padding: '1.5rem', borderTop: '1px solid #e2e8f0', background: '#f8fafc'}}>
                <div style={{marginBottom: '1rem'}}>
                  <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem'}}>
                    <span style={{color: '#64748b'}}>Subtotal</span>
                    <span style={{fontWeight: '600', color: '#0f172a'}}>${cartTotal.toFixed(2)}</span>
                  </div>
                  <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem'}}>
                    <span style={{color: '#64748b'}}>Shipping</span>
                    <span style={{fontWeight: '600', color: '#059669'}}>Free</span>
                  </div>
                  <div style={{display: 'flex', justifyContent: 'space-between', paddingTop: '0.5rem', borderTop: '1px solid #e2e8f0'}}>
                    <span style={{fontSize: '1.125rem', fontWeight: 'bold', color: '#0f172a'}}>Total</span>
                    <span style={{fontSize: '1.125rem', fontWeight: 'bold', color: '#4f46e5'}}>${cartTotal.toFixed(2)}</span>
                  </div>
                </div>
                <button
                  onClick={handleCheckout}
                  style={{...styles.addToCartButton, padding: '1rem'}}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(79, 70, 229, 0.5)';
                    e.currentTarget.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  <CreditCard size={20} />
                  Proceed to Checkout
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Checkout Modal */}
      {showCheckout && (
        <div style={{position: 'fixed', inset: 0, zIndex: 50, overflowY: 'auto'}}>
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', padding: '1rem'}}>
            <div style={styles.modalOverlay} onClick={() => setShowCheckout(false)} />
            <div style={{position: 'relative', background: 'white', borderRadius: '16px', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)', maxWidth: '42rem', width: '100%', padding: '2rem'}}>
              <button
                onClick={() => setShowCheckout(false)}
                style={{position: 'absolute', top: '1.5rem', right: '1.5rem', color: '#94a3b8', background: 'none', border: 'none', cursor: 'pointer'}}
                onMouseEnter={(e) => e.currentTarget.style.color = '#64748b'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#94a3b8'}
              >
                <X size={24} />
              </button>

              <h2 style={{fontSize: '1.875rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '2rem'}}>Checkout</h2>

              <form onSubmit={completeCheckout}>
                <div style={{marginBottom: '1.5rem'}}>
                  <h3 style={{fontSize: '1.125rem', fontWeight: '600', color: '#0f172a', marginBottom: '1rem'}}>Shipping Information</h3>
                  <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem'}}>
                    <input
                      type="text"
                      placeholder="First Name"
                      required
                      style={{padding: '0.75rem 1rem', borderRadius: '12px', border: '1px solid #e2e8f0', outline: 'none'}}
                      onFocus={(e) => e.target.style.borderColor = '#4f46e5'}
                      onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      required
                      style={{padding: '0.75rem 1rem', borderRadius: '12px', border: '1px solid #e2e8f0', outline: 'none'}}
                      onFocus={(e) => e.target.style.borderColor = '#4f46e5'}
                      onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      required
                      style={{padding: '0.75rem 1rem', borderRadius: '12px', border: '1px solid #e2e8f0', outline: 'none', gridColumn: '1 / -1'}}
                      onFocus={(e) => e.target.style.borderColor = '#4f46e5'}
                      onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                    />
                    <input
                      type="text"
                      placeholder="Address"
                      required
                      style={{padding: '0.75rem 1rem', borderRadius: '12px', border: '1px solid #e2e8f0', outline: 'none', gridColumn: '1 / -1'}}
                      onFocus={(e) => e.target.style.borderColor = '#4f46e5'}
                      onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                    />
                    <input
                      type="text"
                      placeholder="City"
                      required
                      style={{padding: '0.75rem 1rem', borderRadius: '12px', border: '1px solid #e2e8f0', outline: 'none'}}
                      onFocus={(e) => e.target.style.borderColor = '#4f46e5'}
                      onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                    />
                    <input
                      type="text"
                      placeholder="ZIP Code"
                      required
                      style={{padding: '0.75rem 1rem', borderRadius: '12px', border: '1px solid #e2e8f0', outline: 'none'}}
                      onFocus={(e) => e.target.style.borderColor = '#4f46e5'}
                      onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                    />
                  </div>
                </div>

                <div style={{marginBottom: '1.5rem'}}>
                  <h3 style={{fontSize: '1.125rem', fontWeight: '600', color: '#0f172a', marginBottom: '1rem'}}>Payment Information</h3>
                  <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                    <input
                      type="text"
                      placeholder="Card Number"
                      required
                      pattern="[0-9]{16}"
                      style={{padding: '0.75rem 1rem', borderRadius: '12px', border: '1px solid #e2e8f0', outline: 'none'}}
                      onFocus={(e) => e.target.style.borderColor = '#4f46e5'}
                      onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                    />
                    <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem'}}>
                      <input
                        type="text"
                        placeholder="MM/YY"
                        required
                        pattern="[0-9]{2}/[0-9]{2}"
                        style={{padding: '0.75rem 1rem', borderRadius: '12px', border: '1px solid #e2e8f0', outline: 'none'}}
                        onFocus={(e) => e.target.style.borderColor = '#4f46e5'}
                        onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                      />
                      <input
                        type="text"
                        placeholder="CVV"
                        required
                        pattern="[0-9]{3}"
                        style={{padding: '0.75rem 1rem', borderRadius: '12px', border: '1px solid #e2e8f0', outline: 'none'}}
                        onFocus={(e) => e.target.style.borderColor = '#4f46e5'}
                        onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                      />
                    </div>
                  </div>
                </div>

                <div style={{background: '#f8fafc', borderRadius: '12px', padding: '1.5rem', marginBottom: '1.5rem'}}>
                  <h3 style={{fontSize: '1.125rem', fontWeight: '600', color: '#0f172a', marginBottom: '1rem'}}>Order Summary</h3>
                  <div style={{marginBottom: '1rem'}}>
                    {cart.map(item => (
                      <div key={item.id} style={{display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem', marginBottom: '0.5rem'}}>
                        <span style={{color: '#64748b'}}>{item.name} x{item.quantity}</span>
                        <span style={{fontWeight: '600', color: '#0f172a'}}>${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    ))}
                  </div>
                  <div style={{paddingTop: '1rem', borderTop: '1px solid #e2e8f0'}}>
                    <div style={{display: 'flex', justifyContent: 'space-between', fontSize: '1.125rem', fontWeight: 'bold'}}>
                      <span style={{color: '#0f172a'}}>Total</span>
                      <span style={{color: '#4f46e5'}}>${cartTotal.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  style={{...styles.addToCartButton, width: '100%', padding: '1rem'}}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(79, 70, 229, 0.5)';
                    e.currentTarget.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  <Check size={20} />
                  Complete Purchase
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Auth Modal */}
      {showAuth && (
        <div style={{position: 'fixed', inset: 0, zIndex: 50, overflowY: 'auto'}}>
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', padding: '1rem'}}>
            <div style={styles.modalOverlay} onClick={() => setShowAuth(false)} />
            <div style={{position: 'relative', background: 'white', borderRadius: '16px', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)', maxWidth: '28rem', width: '100%', padding: '2rem'}}>
              <button
                onClick={() => setShowAuth(false)}
                style={{position: 'absolute', top: '1.5rem', right: '1.5rem', color: '#94a3b8', background: 'none', border: 'none', cursor: 'pointer'}}
                onMouseEnter={(e) => e.currentTarget.style.color = '#64748b'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#94a3b8'}
              >
                <X size={24} />
              </button>

              <div style={{textAlign: 'center', marginBottom: '2rem'}}>
                <div style={{width: '64px', height: '64px', background: 'linear-gradient(to bottom right, #4f46e5, #7c3aed)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem', boxShadow: '0 10px 15px -3px rgba(79, 70, 229, 0.3)'}}>
                  <User size={32} color="white" />
                </div>
                <h2 style={{fontSize: '1.875rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '0.5rem'}}>
                  {authMode === 'login' ? 'Welcome Back' : 'Create Account'}
                </h2>
                <p style={{color: '#64748b'}}>
                  {authMode === 'login' 
                    ? 'Login to continue shopping' 
                    : 'Sign up to start shopping'}
                </p>
              </div>

              <form onSubmit={handleLogin} style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                {authMode === 'signup' && (
                  <input
                    type="text"
                    placeholder="Full Name"
                    required
                    style={{padding: '0.75rem 1rem', borderRadius: '12px', border: '1px solid #e2e8f0', outline: 'none'}}
                    onFocus={(e) => e.target.style.borderColor = '#4f46e5'}
                    onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                  />
                )}
                <input
                  type="email"
                  placeholder="Email"
                  required
                  style={{padding: '0.75rem 1rem', borderRadius: '12px', border: '1px solid #e2e8f0', outline: 'none'}}
                  onFocus={(e) => e.target.style.borderColor = '#4f46e5'}
                  onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                />
                <input
                  type="password"
                  placeholder="Password"
                  required
                  style={{padding: '0.75rem 1rem', borderRadius: '12px', border: '1px solid #e2e8f0', outline: 'none'}}
                  onFocus={(e) => e.target.style.borderColor = '#4f46e5'}
                  onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                />

                <button
                  type="submit"
                  style={{...styles.addToCartButton, padding: '0.75rem'}}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(79, 70, 229, 0.5)';
                    e.currentTarget.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  {authMode === 'login' ? 'Login' : 'Sign Up'}
                </button>
              </form>

              <div style={{marginTop: '1.5rem', textAlign: 'center'}}>
                <button
                  onClick={() => setAuthMode(authMode === 'login' ? 'signup' : 'login')}
                  style={{color: '#4f46e5', fontWeight: '600', background: 'none', border: 'none', cursor: 'pointer'}}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#4338ca'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#4f46e5'}
                >
                  {authMode === 'login' 
                    ? "Don't have an account? Sign up" 
                    : 'Already have an account? Login'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerContainer}>
          <div style={styles.footerGrid}>
            <div>
              <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem'}}>
                <div style={{width: '40px', height: '40px', background: 'linear-gradient(to bottom right, #4f46e5, #7c3aed)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <ShoppingCart size={20} color="white" />
                </div>
                <span style={{fontSize: '1.25rem', fontWeight: 'bold'}}>ShopHub</span>
              </div>
              <p style={{color: '#94a3b8', fontSize: '0.875rem'}}>
                Your trusted destination for quality products and amazing deals.
              </p>
            </div>
            <div>
              <h3 style={{fontWeight: '600', marginBottom: '1rem'}}>Shop</h3>
              <ul style={{listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.875rem', color: '#94a3b8'}}>
                <li><a href="#" style={{color: 'inherit', textDecoration: 'none'}} onMouseEnter={(e) => e.target.style.color = 'white'} onMouseLeave={(e) => e.target.style.color = '#94a3b8'}>Electronics</a></li>
                <li><a href="#" style={{color: 'inherit', textDecoration: 'none'}} onMouseEnter={(e) => e.target.style.color = 'white'} onMouseLeave={(e) => e.target.style.color = '#94a3b8'}>Fashion</a></li>
                <li><a href="#" style={{color: 'inherit', textDecoration: 'none'}} onMouseEnter={(e) => e.target.style.color = 'white'} onMouseLeave={(e) => e.target.style.color = '#94a3b8'}>Sports</a></li>
                <li><a href="#" style={{color: 'inherit', textDecoration: 'none'}} onMouseEnter={(e) => e.target.style.color = 'white'} onMouseLeave={(e) => e.target.style.color = '#94a3b8'}>Home & Living</a></li>
              </ul>
            </div>
            <div>
              <h3 style={{fontWeight: '600', marginBottom: '1rem'}}>Support</h3>
              <ul style={{listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.875rem', color: '#94a3b8'}}>
                <li><a href="#" style={{color: 'inherit', textDecoration: 'none'}} onMouseEnter={(e) => e.target.style.color = 'white'} onMouseLeave={(e) => e.target.style.color = '#94a3b8'}>Help Center</a></li>
                <li><a href="#" style={{color: 'inherit', textDecoration: 'none'}} onMouseEnter={(e) => e.target.style.color = 'white'} onMouseLeave={(e) => e.target.style.color = '#94a3b8'}>Track Order</a></li>
                <li><a href="#" style={{color: 'inherit', textDecoration: 'none'}} onMouseEnter={(e) => e.target.style.color = 'white'} onMouseLeave={(e) => e.target.style.color = '#94a3b8'}>Returns</a></li>
                <li><a href="#" style={{color: 'inherit', textDecoration: 'none'}} onMouseEnter={(e) => e.target.style.color = 'white'} onMouseLeave={(e) => e.target.style.color = '#94a3b8'}>Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h3 style={{fontWeight: '600', marginBottom: '1rem'}}>Newsletter</h3>
              <p style={{fontSize: '0.875rem', color: '#94a3b8', marginBottom: '0.75rem'}}>Subscribe for exclusive deals</p>
              <div style={{display: 'flex', gap: '0.5rem'}}>
                <input
                  type="email"
                  placeholder="Your email"
                  style={{flex: 1, padding: '0.5rem 0.75rem', borderRadius: '8px', background: '#1e293b', border: '1px solid #334155', color: 'white', fontSize: '0.875rem', outline: 'none'}}
                  onFocus={(e) => e.target.style.borderColor = '#4f46e5'}
                  onBlur={(e) => e.target.style.borderColor = '#334155'}
                />
                <button style={{padding: '0.5rem 1rem', background: '#4f46e5', borderRadius: '8px', border: 'none', cursor: 'pointer'}}
                  onMouseEnter={(e) => e.currentTarget.style.background = '#4338ca'}
                  onMouseLeave={(e) => e.currentTarget.style.background = '#4f46e5'}>
                  <ArrowRight size={16} color="white" />
                </button>
              </div>
            </div>
          </div>
          <div style={styles.footerBottom}>
            <p style={{margin: 0}}>&copy; 2024 ShopHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
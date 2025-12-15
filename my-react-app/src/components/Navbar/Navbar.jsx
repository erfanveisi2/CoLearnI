import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import { FiArrowRight, FiLogOut, FiUser, FiZap, FiMenu, FiX, FiMessageCircle, FiUsers } from 'react-icons/fi'; 
import logo from '../../assets/logo.svg';
import { NavLink, Link, useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false); 

    const fetchUserData = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const res = await fetch('http://localhost:5001/api/auth/me', {
            headers: { 'x-auth-token': token },
          });
          if (res.ok) {
            const data = await res.json();
            setUser(data);
          } else {
            localStorage.removeItem('token');
            setUser(null);
          }
        } catch (err) {
          setUser(null);
        }
      } else {
        setUser(null);
      }
    };
    fetchUserData();
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
    navigate('/');
  };

  const getNavLinkClass = ({ isActive }) => {
    return isActive ? `${styles.navLink} ${styles.active}` : styles.navLink;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={'container'}>
        <div className={styles.navContainer}>
            <div className={styles.logo}>
                <img src={logo} alt="CodeQuest Logo" className={styles.logoImage} />
            </div>

            <nav className={styles.navLinks}>
              <NavLink to="/" className={getNavLinkClass}>Home</NavLink>
              <NavLink to="/courses" className={getNavLinkClass}>Courses</NavLink>
              {/* --- NEW COMMUNITY LINK --- */}
              <NavLink to="/community" className={getNavLinkClass}>Community</NavLink>
              <NavLink to="/contact" className={getNavLinkClass}>Contact us</NavLink>
              <NavLink to="/faq" className={getNavLinkClass}>FAQ</NavLink>
            </nav>

            <div className={styles.authControls}>
              {user ? (
                <>
                  <Link to="/messages" className={styles.profileLink}>
                      <FiMessageCircle /> <span className={styles.authText}>Messages</span>
                  </Link>

                  <Link to="/upgrade" className={styles.upgradeLink}>
                      <FiZap /> <span className={styles.authText}>Upgrade</span>
                  </Link>
                  <Link to="/profile" className={styles.profileLink}><FiUser /> <span className={styles.authText}>Profile</span></Link>
                  <button onClick={handleLogout} className={styles.logoutButton}><FiLogOut /> <span className={styles.authText}>Logout</span></button>
                </>
              ) : (
                <Link to="/signup" className={styles.joinButtonLink}>
                  Join Now! <FiArrowRight />
                </Link>
              )}
            </div>
            
            <button className={styles.hamburgerButton} onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? <FiX /> : <FiMenu />} 
            </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className={styles.mobileMenu}>
          <nav className={styles.mobileNavLinks}>
            <NavLink to="/" className={getNavLinkClass} onClick={handleMobileLinkClick}>Home</NavLink>
            <NavLink to="/courses" className={getNavLinkClass} onClick={handleMobileLinkClick}>Courses</NavLink>
            {/* --- NEW MOBILE COMMUNITY LINK --- */}
            <NavLink to="/community" className={getNavLinkClass} onClick={handleMobileLinkClick}>Community</NavLink>
            <NavLink to="/contact" className={getNavLinkClass} onClick={handleMobileLinkClick}>Contact us</NavLink>
            <NavLink to="/faq" className={getNavLinkClass} onClick={handleMobileLinkClick}>FAQ</NavLink>
          </nav>
           <div className={styles.mobileAuthControls}>
              {user ? (
                <>
                  <Link to="/messages" className={styles.profileLink} onClick={handleMobileLinkClick}>
                      <FiMessageCircle /> Messages
                  </Link>
                  
                  <Link to="/upgrade" className={styles.upgradeLink} onClick={handleMobileLinkClick}>
                      <FiZap /> Upgrade
                  </Link>
                  <Link to="/profile" className={styles.profileLink} onClick={handleMobileLinkClick}><FiUser /> Profile</Link>
                  <button onClick={() => { handleLogout(); handleMobileLinkClick(); }} className={styles.logoutButton}><FiLogOut /> Logout</button>
                </>
              ) : (
                <Link to="/signup" className={styles.joinButtonLink} onClick={handleMobileLinkClick}>
                  Join Now! <FiArrowRight />
                </Link>
              )}
            </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
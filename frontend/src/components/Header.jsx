import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { FiShoppingCart, FiUser, FiLogOut, FiLogIn } from 'react-icons/fi';
import { useSelector, useDispatch } from 'react-redux';
import { FaCaretDown, FaCaretUp } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { useLogoutMutation } from '../slices/userApiSlice';
import { logout } from '../slices/userSlice';
import { loadCartItems, clearCartItems } from '../slices/cartSlice'; // Update import statement
import './css/Header.css';

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { keyword: urlKeyword } = useParams();

    const [logoutApi] = useLogoutMutation();

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
    const [isAdminMenuOpen, setIsAdminMenuOpen] = useState(false);
    const [isCategoriesMenuOpen, setIsCategoriesMenuOpen] = useState(false);
    const [keyword, setKeyword] = useState(urlKeyword || "");

    const cartItems = useSelector((state) => state.cart?.cartItems || []);
    const userInfo = useSelector((state) => state.user?.userInfo || null);

    useEffect(() => {
        if (userInfo) {
            dispatch(loadCartItems()); // Load cart items on login
        }
    }, [dispatch, userInfo]);

    const handleLogout = async () => {
        try {
            await logoutApi().unwrap();
            dispatch(logout());
            // dispatch(clearCartItems()); // Clear cart items on logout
            navigate('/login');
            toast.success('Logged Out Successfully');
        } catch (error) {
            toast.error(error?.data?.message || error?.error);
        }
    };

    const renderProfileButton = () => {
        return (
            <>
                <button
                    onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                    className="bg flex items-center"
                >
                    <FiUser className="mr-1" />
                    {userInfo?.name}
                    {isProfileMenuOpen ? <FaCaretUp /> : <FaCaretDown />}
                </button>
                <ul
                    className={`absolute ${isProfileMenuOpen ? 'block' : 'hidden'
                        } bg-white p-2 mt-2 space-y-2 bg border rounded-md`}
                >
                    <li>
                        <Link to="/profile">
                            <FiUser className="mr-1" />
                            Profile
                        </Link>
                    </li>
                    <li>
                        <Link onClick={handleLogout}>
                            <FiLogOut className="mr-1" />
                            Logout
                        </Link>
                    </li>
                </ul>
            </>
        );
    };

    const renderAdminButton = () => {
        return (
            <>
                <button
                    onClick={() => setIsAdminMenuOpen(!isAdminMenuOpen)}
                    className="bg flex items-center admin"
                >
                    <FiUser className="mr-1" />
                    Admin
                    {isAdminMenuOpen ? <FaCaretUp /> : <FaCaretDown />}
                </button>
                <ul
                    className={`absolute ${isAdminMenuOpen ? 'block' : 'hidden'
                        } bg-white p-2 mt-2 space-y-2 bg border rounded-md`}
                >
                    <li>
                        <Link to="/admin/users">
                            Users
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/products">
                            Products
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/orders">
                            Orders
                        </Link>
                    </li>
                </ul>
            </>
        );
    };

    const renderSignInButton = () => (
        <Link className="flex items-center" to="/login">
            <FiLogIn className="mr-1 bg" />
            <button className="bg">Sign In</button>
        </Link>
    );

    const handleSearch = (e) => {
        e.preventDefault();
        if (keyword) {
            navigate(`/search/${keyword.trim()}`);
            setKeyword('');
        } else {
            navigate('/');
        }
    };

    return (
        <nav className="navbar p-4">
            <div className="flex items-center justify-between">
                <Link to="/" className="text-white text-2xl nav-logo font-extrabold">
                    <p className="font-extrabold">Shopi<span>Tech.</span></p>
                </Link>
                <div className="sm:hidden flex items-center">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="bg text-xl focus:outline-none"
                    >
                        ☰
                    </button>
                </div>
                <div className="hidden sm:flex items-center space-x-4">
                    <div className="flex items-center justify-between search">
                        <input
                            type="text"
                            placeholder="Search"
                            className="ml-4 p-2 rounded-md border"
                            value={keyword}
                            onChange={(e) => setKeyword(e.target.value)}
                        />
                        <button
                            className="bg-s text-white py-2 px-4 rounded-md ml-2"
                            onClick={handleSearch}
                        >
                            Search
                        </button>
                    </div>
                    <div className="relative group">
                        <button
                            onClick={() => setIsCategoriesMenuOpen(!isCategoriesMenuOpen)}
                            className="flex items-center bg"
                        >
                            Categories
                            {isCategoriesMenuOpen ? <FaCaretUp /> : <FaCaretDown />}
                        </button>
                        <ul
                            className={`absolute z-20 ${isCategoriesMenuOpen ? 'block' : 'hidden'
                                } bg-white p-2 mt-2 space-y-2 bg border rounded-md`}
                        >
                            <li>
                                <Link to="/laptops">
                                    Laptops
                                </Link>
                            </li>
                            <li>
                                <Link to="/phones">
                                    Phones
                                </Link>
                            </li>
                            <li>
                                <Link to="/accessories">
                                    Accessories
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <Link to="/cart" className="bg flex items-center">
                        <FiShoppingCart className="mr-1" />
                        Cart
                        <span className="bg-s text-white rounded-full px-2 py-1 ml-2">{cartItems.length}</span>
                    </Link>

                    {userInfo && (
                        <div className="relative group">
                            {renderProfileButton()}
                        </div>
                    )}
                    {userInfo?.isAdmin && (
                        <div className="relative group ">
                            {renderAdminButton()}
                        </div>
                    )}
                    {!userInfo && renderSignInButton()}
                </div>
            </div>
            {isMobileMenuOpen && (
                <div className="mt-4 sm:hidden">
                    <input
                        type="text"
                        placeholder="Search"
                        className="p-2 rounded-md border w-full mb-2"
                        value={keyword}
                        onChange={(e) => setKeyword(e.target.value)}
                    />
                    <button
                        className="bg-s text-white py-2 px-4 rounded-md w-full mb-2"
                        onClick={handleSearch}
                    >
                        Search
                    </button>
                    <div className="space-y-2">
                        <div className="relative group">
                            <button
                                onClick={() => setIsCategoriesMenuOpen(!isCategoriesMenuOpen)}
                                className="bg flex items-center"
                            >
                                Categories
                                {isCategoriesMenuOpen ? <FaCaretUp /> : <FaCaretDown />}
                            </button>
                            <ul
                                className={`absolute z-20 ${isCategoriesMenuOpen ? 'block' : 'hidden'
                                    } bg-white p-2 mt-2 space-y-2 bg border rounded-md`}
                            >
                                <li>
                                    <Link to="/laptops">
                                        Laptops
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/phones">
                                        Phones
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/accessories">
                                        Accessories
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <Link to="/cart" className="bg flex items-center">
                            <FiShoppingCart className="mr-1" />
                            Cart
                            <span className="bg-s text-white rounded-full px-2 py-1 ml-2">{cartItems.length}</span>
                        </Link>
                        {userInfo && (
                            <div className="relative group ">
                                {renderProfileButton()}
                            </div>
                        )}
                        {userInfo?.isAdmin && (
                            <div className="relative group ">
                                {renderAdminButton()}
                            </div>
                        )}
                        {!userInfo && renderSignInButton()}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Header;

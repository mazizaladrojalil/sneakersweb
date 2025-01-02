"use client";
const Menu = () => {
    return (
        <div className="border-2 w-100">
            <div className="container mx-auto py-10 px-4 ">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                {/* Featured */}
                <div>
                    <h3 className="text-lg font-semibold mb-2 text-white">Featured</h3>
                    <ul className="space-y-1 text-gray-600">
                    <li><a href="#" className="hover:text-gray-200">New Arrivals</a></li>
                    <li><a href="#" className="hover:text-gray-200">Bestsellers</a></li>
                    <li><a href="#" className="hover:text-gray-200">Shop All Sale</a></li>
                    </ul>
                </div>
                {/* Shoes */}
                <div>
                    <h3 className="text-lg font-semibold mb-2 text-white" >Shoes</h3>
                    <ul className="space-y-1 text-gray-600">
                    <li><a href="#" className="hover:text-gray-200">All Shoes</a></li>
                    <li><a href="#" className="hover:text-gray-200">Lifestyle</a></li>
                    <li><a href="#" className="hover:text-gray-200">Jordan</a></li>
                    <li><a href="#" className="hover:text-gray-200">Running</a></li>
                    <li><a href="#" className="hover:text-gray-200">Football</a></li>
                    <li><a href="#" className="hover:text-gray-200">Basketball</a></li>
                    <li><a href="#" className="hover:text-gray-200">Gym and Training</a></li>
                    <li><a href="#" className="hover:text-gray-200">Skateboarding</a></li>
                    <li><a href="#" className="hover:text-gray-200">Sandals and Slides</a></li>
                    <li><a href="#" className="hover:text-gray-200">Nike By You</a></li>
                    </ul>
                </div>
                {/* Clothing */}
                <div>
                    <h3 className="text-lg font-semibold mb-2 text-white">Clothing</h3>
                    <ul className="space-y-1 text-gray-600">
                    <li><a href="#" className="hover:text-gray-200">All Clothing</a></li>
                    <li><a href="#" className="hover:text-gray-200">Tops and T-Shirts</a></li>
                    <li><a href="#" className="hover:text-gray-200">Shorts</a></li>
                    <li><a href="#" className="hover:text-gray-200">Pants and Leggings</a></li>
                    <li><a href="#" className="hover:text-gray-200">Hoodies and Sweatshirts</a></li>
                    <li><a href="#" className="hover:text-gray-200">Jackets and Gilets</a></li>
                    <li><a href="#" className="hover:text-gray-200">Jerseys and Kits</a></li>
                    <li><a href="#" className="hover:text-gray-200">Jordan</a></li>
                    </ul>
                </div>
                {/* Shop By Sport */}
                <div>
                    <h3 className="text-lg font-semibold mb-2 text-white">Shop By Sport</h3>
                    <ul className="space-y-1 text-gray-600">
                    <li><a href="#" className="hover:text-gray-200">Running</a></li>
                    <li><a href="#" className="hover:text-gray-200">Basketball</a></li>
                    <li><a href="#" className="hover:text-gray-200">Football</a></li>
                    <li><a href="#" className="hover:text-gray-200">Golf</a></li>
                    <li><a href="#" className="hover:text-gray-200">Tennis</a></li>
                    <li><a href="#" className="hover:text-gray-200">Gym and Training</a></li>
                    <li><a href="#" className="hover:text-gray-200">Yoga</a></li>
                    <li><a href="#" className="hover:text-gray-200">Skateboarding</a></li>
                    </ul>
                </div>
                {/* Accessories and Equipment */}
                <div>
                    <h3 className="text-lg font-semibold mb-2 text-white">Accessories and Equipment</h3>
                    <ul className="space-y-1 text-gray-600">
                    <li><a href="#" className="hover:text-gray-200">All Accessories and Equipment</a></li>
                    <li><a href="#" className="hover:text-gray-200">Bags and Backpacks</a></li>
                    <li><a href="#" className="hover:text-gray-200">Socks</a></li>
                    <li><a href="#" className="hover:text-gray-200">Hats and Headwear</a></li>
                    </ul>
                </div>
                </div>
            </div>
        </div>
    );
  };
  
  export default Menu;
  
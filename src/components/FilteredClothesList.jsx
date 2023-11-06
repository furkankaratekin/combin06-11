import { outfitImages } from "./ContentData";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import "../App.css";
import { useState } from "react";

function FilteredClothesList({ filteredClothes }) {

  const [favorites, setFavorites] = useState({});
  const [favoritesId, setFavoritesId] = useState([]);

  // Function to toggle favorite status
  const toggleFavorite = (itemId) => {
    setFavorites((prevFavorites) => ({
      ...prevFavorites,
      [itemId]: !prevFavorites[itemId],
    }));

    // Favorilendiği zaman favoritesId dizisine ekleyin
    setFavoritesId((prevFavoritesId) => [...prevFavoritesId, itemId]);
  };

  // Favori kombinlerin stillerini almak için bir fonksiyon
 function getFavoriteStyles() {
    return favoritesId.map((favoriteId) => {
      const outfit = outfitImages.find((item) => item.id === favoriteId);
      return outfit ? outfit.style : "";
    });
  }

  
  return (
    <div>
      {filteredClothes.length === 0 ? (
        <p>Filtrelenmiş ürün yok</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 outfit-list justify-center items-center flex-wrap space-x-4 space-y-4 p-4 sm:p-8 lg:p-12">
          {filteredClothes.map((item) => (
            <div key={item.id} className="outfit-card max-w-sm">
              <Link to={`/outfits/${item.id}`}>
                {" "}
                {/* Add a Link to your content page */}
                <img className="w-full" src={item.img} alt={item.ust} />{" "}
                {/* Use item.img, item.ust for image and alt text */}
              </Link>

              <div className="p-5">
                <Link to={`/outfits/${item.id}`}>
                  {" "}
                  {/* Add a Link to your content page */}
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                    {item.tarz}
                  </h5>
                </Link>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center">
                  {item.ust}, {item.alt}
                </p>
              </div>
              <div className="outfit-fav">
                {favorites[item.id] ? (
                  <AiFillHeart onClick={() => toggleFavorite(item.id)} />
                ) : (
                  <AiOutlineHeart onClick={() => toggleFavorite(item.id)} />
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FilteredClothesList;

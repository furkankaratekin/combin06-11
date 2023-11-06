import React, { useState } from "react";
import clothes from "./CategoryData";
import FilteredClothesList from "../FilteredClothesList";
const OutfitCategory = () => {
  const [selectCinsiyet, setSelectCinsiyet] = useState("cinsiyet");
  const [selectTarz, setSelectTarz] = useState("tarz");
  const [selectUst, setSelectUst] = useState("ust");
  const [selectAlt, setSelectAlt] = useState("alt");
  const [selectUstRenk, setSelectUstRenk] = useState("ustRenk");
  const [selectAltRenk, setSelectAltRenk] = useState("altRenk");

  const resetFilters = () => {
    setSelectCinsiyet("cinsiyet");
    setSelectTarz("tarz");
    setSelectUst("ust");
    setSelectAlt("alt");
    setSelectUstRenk("ustRenk");
    setSelectAltRenk("altRenk");
  };

  const filteredClothes = clothes.filter((item) => {
    return (
      (item.cinsiyet === selectCinsiyet || selectCinsiyet === "cinsiyet") &&
      (item.tarz === selectTarz || selectTarz === "tarz") &&
      (item.ust === selectUst || selectUst === "ust") &&
      (item.alt === selectAlt || selectAlt === "alt") &&
      (item.ustRenk === selectUstRenk || selectUstRenk === "ustRenk") &&
      (item.altRenk === selectAltRenk || selectAltRenk === "altRenk")
    );
  });

  return (
    <div className="flex justify-center">
      <div className="xsm:mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-6 p-6">
          <div className="flex flex-col m-2">
            <select
              className="mt-2 block w-full max-w-xs rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              value={selectCinsiyet}
              onChange={(e) => setSelectCinsiyet(e.target.value)}
            >
              <option value="cinsiyet">Bütün Cinsiyetler</option>
              <option value="Erkek">Erkek</option>
              <option value="Kadin">Kadın</option>
            </select>
          </div>

          <div className="flex flex-col m-2">
            <select
              className="mt-2 block w-full max-w-xs rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              value={selectTarz}
              onChange={(e) => setSelectTarz(e.target.value)}
            >
              <option value="tarz">Bütün Tarzlar </option>
              <option value="Business Casual">Business Casual</option>
              <option value="Retro">Retro</option>
              <option value="Vintage">Vintage</option>
              <option value="Basic">Basic</option>
              <option value="Old Money">Old Money</option>
              <option value="Street">Street</option>{" "}
              <option value="Classic">Classic</option>
              <option value="Urban">Urban </option>
              <option value="Feminen">Feminen</option>
              <option value="Tesettür">Tesettür</option>
            </select>
          </div>

          <div className="flex flex-col m-2">
            <select
              className="mt-2 block w-full max-w-xs rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              value={selectUst}
              onChange={(e) => setSelectUst(e.target.value)}
            >
              <option value="ust">Tüm Üstler</option>
              <option value="Tişört">Tişört</option>
              <option value="Gömlek">Gömlek</option>
              <option value="Sweatshirt">Sweatshirt</option>
              <option value="Ceket">Ceket</option>

              <option value="Crop">Crop</option>
              <option value="Bluz">Bluz</option>
              <option value="Elbise">Elbise</option>
            </select>
          </div>

          <div className="flex flex-col m-2">
            <select
              className="mt-2 block w-full max-w-xs rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              value={selectAlt}
              onChange={(e) => setSelectAlt(e.target.value)}
            >
              <option value="alt">Tüm Altlar</option>
              <option value="Pantolon">Pantolon</option>
              <option value="Eşofman">Eşofman</option>
              <option value="Şort">Şort</option>
              <option value="Tayt">Tayt</option>
              <option value="Etek">Etek</option>
            </select>
          </div>

          <div className="flex flex-col m-2">
            <select
              className="mt-2 block w-full max-w-xs rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              value={selectUstRenk}
              onChange={(e) => setSelectUstRenk(e.target.value)}
            >
              <option value="ustRenk">Tüm Üst Renkler</option>
              <option value="Kırmızı">Kırmızı</option>
              <option value="Beyaz">Beyaz</option>
              <option value="Sarı">Sarı</option>
              <option value="Yeşil">Yeşil</option>
              <option value="Mavi">Mavi</option>
              <option value="Mor">Mor</option>
              <option value="Gri">Gri</option>
              <option value="Kahve">Kahve</option>
              <option value="Siyah">Siyah</option>
              <option value="Lacivert">Lacivert</option>
              <option value="Krem">Krem</option>
              <option value="Pembe">Pembe</option>
            </select>
          </div>

          <div className="flex flex-col m-2">
            <select
              className="mt-2 block w-full max-w-xs rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              value={selectAltRenk}
              onChange={(e) => setSelectAltRenk(e.target.value)}
            >
              <option value="altRenk">Tüm Alt Renkler</option>
              <option value="Kırmızı">Kırmızı</option>
              <option value="Beyaz">Beyaz</option>
              <option value="Sarı">Sarı</option>
              <option value="Yeşil">Yeşil</option>
              <option value="Mavi">Mavi</option>
              <option value="Mor">Mor</option>
              <option value="Gri">Gri</option>
              <option value="Kahve">Kahve</option>
              <option value="Siyah">Siyah</option>
              <option value="Lacivert">Lacivert</option>
              <option value="Krem">Krem</option>
              <option value="Pembe">Pembe</option>
            </select>
          </div>
          <div className="flex flex-col m-2">
            <button
              className="max-w-xs rounded-lg bg-blue-600 px-8 py-2 font-medium text-white outline-none hover:opacity-80 focus:ring"
              onClick={resetFilters}
            >
              Temizle
            </button>
          </div>
        </div>

        {filteredClothes.length === 0 ? (
          <p>Filtrelenmiş ürün yok</p>
        ) : (
          <FilteredClothesList filteredClothes={filteredClothes} />
        )}
      </div>
    </div>
  );
};
export default OutfitCategory;

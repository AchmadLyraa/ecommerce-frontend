import React, { useEffect, useState } from "react";
import axios from "axios";
import EditProduk from "./EditProduk";

function ProdukList() {
  const [produk, setProduk] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3001/produk")
      .then((response) => setProduk(response.data))
      .catch((error) => console.error(error));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3001/produk/${id}`)
      .then(() => {
        setProduk(produk.filter((p) => p.id !== id));
      })
      .catch((err) => console.error(err));
  };

  const handleEditClick = (item) => {
    setEditingProduct(item);
  };

  const handleUpdate = (updatedProduct) => {
    axios
      .put(`http://localhost:3001/produk/${updatedProduct.id}`, updatedProduct)
      .then((res) => {
        setProduk(produk.map((prod) => (prod.id === updatedProduct.id ? res.data : prod)));
        setEditingProduct(null);
      })
      .catch((err) => console.error(err));
  };

  const handleCancelEdit = () => {
    setEditingProduct(null);
  };

  return (
    <div className="bg-gray-100 p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Daftar Produk</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {produk.map((item) => (
          <div key={item.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src={item.gambar || "https://via.placeholder.com/150"}
              alt={item.nama}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">{item.nama}</h3>
              <p className="text-gray-600 mt-2">{item.deskripsi || "Tidak ada deskripsi"}</p>
              <p className="text-green-600 font-bold mt-2">Rp {item.harga}</p>
              <div className="mt-4 flex justify-between">
                <button
                  onClick={() => handleEditClick(item)}
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {editingProduct && (
        <EditProduk
          product={editingProduct}
          onUpdate={handleUpdate}
          onCancel={handleCancelEdit}
        />
      )}
    </div>
  );
}

export default ProdukList;
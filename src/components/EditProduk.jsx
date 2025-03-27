import React, { useState } from "react";

function EditProduk({ product, onUpdate, onCancel }) {
  const [nama, setNama] = useState(product.nama);
  const [harga, setHarga] = useState(product.harga);
  const [deskripsi, setDeskripsi] = useState(product.deskripsi || ""); // State untuk deskripsi
  const [gambar, setGambar] = useState(product.gambar || ""); // State untuk URL gambar

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate({ id: product.id, nama, harga, deskripsi, gambar });
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-8">
      <h2 className="text-base font-semibold text-gray-900 mb-4">Edit Produk</h2>
      <form onSubmit={handleSubmit} className="space-y-8">
        <div>
          <label htmlFor="nama" className="block text-sm font-medium text-gray-900">
            Nama Produk
          </label>
          <div className="mt-2">
            <input
              id="nama"
              name="nama"
              type="text"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
              required
            />
          </div>
        </div>
        <div>
          <label htmlFor="harga" className="block text-sm font-medium text-gray-900">
            Harga
          </label>
          <div className="mt-2">
            <input
              id="harga"
              name="harga"
              type="number"
              value={harga}
              onChange={(e) => setHarga(e.target.value)}
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
              required
            />
          </div>
        </div>
        <div>
          <label htmlFor="deskripsi" className="block text-sm font-medium text-gray-900">
            Deskripsi
          </label>
          <div className="mt-2">
            <textarea
              id="deskripsi"
              name="deskripsi"
              value={deskripsi}
              onChange={(e) => setDeskripsi(e.target.value)}
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
              rows="3"
            />
          </div>
        </div>
        <div>
          <label htmlFor="gambar" className="block text-sm font-medium text-gray-900">
            URL Gambar
          </label>
          <div className="mt-2">
            <input
              id="gambar"
              name="gambar"
              type="text"
              value={gambar}
              onChange={(e) => setGambar(e.target.value)}
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
            />
          </div>
        </div>
        <div className="flex justify-end gap-x-6">
          <button
            type="button"
            onClick={onCancel}
            className="text-sm font-semibold text-gray-900"
          >
            Batal
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Simpan
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditProduk;
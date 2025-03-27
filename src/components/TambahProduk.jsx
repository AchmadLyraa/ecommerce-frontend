import React, { useState } from "react";
import axios from "axios";

function TambahProduk() {
  const [nama, setNama] = useState("");
  const [harga, setHarga] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [gambar, setGambar] = useState(null); // State untuk base64 gambar
  const [error, setError] = useState("");

  // Fungsi untuk menangani pemilihan file
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setGambar(reader.result); // Simpan base64
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nama || !harga) {
      setError("Nama dan Harga wajib diisi");
      return;
    }
    setError("");
    axios
      .post("http://localhost:3001/produk", { nama, harga, deskripsi, gambar })
      .then((res) => {
        console.log("Produk berhasil ditambah:", res.data);
        setNama("");
        setHarga("");
        setDeskripsi("");
        setGambar(null);
      })
      .catch((err) => {
        console.error("Error menambah produk:", err);
      });
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-8">
      <h2 className="text-base font-semibold text-gray-900 mb-4">Tambah Produk Baru</h2>
      {error && <p className="mt-1 text-sm text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-8">
        <div>
          <label htmlFor="nama" className="block text-sm font-medium text-gray-900">
            Nama Produk
          </label>
          <input
            id="nama"
            name="nama"
            type="text"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
            placeholder="Masukkan nama produk"
            required
          />
        </div>
        <div>
          <label htmlFor="harga" className="block text-sm font-medium text-gray-900">
            Harga
          </label>
          <input
            id="harga"
            name="harga"
            type="number"
            value={harga}
            onChange={(e) => setHarga(e.target.value)}
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
            placeholder="Masukkan harga produk"
            required
          />
        </div>
        <div>
          <label htmlFor="deskripsi" className="block text-sm font-medium text-gray-900">
            Deskripsi
          </label>
          <textarea
            id="deskripsi"
            name="deskripsi"
            value={deskripsi}
            onChange={(e) => setDeskripsi(e.target.value)}
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
            placeholder="Masukkan deskripsi produk"
            rows="3"
          />
        </div>
        <div className="col-span-full">
          <label htmlFor="gambar" className="block text-sm font-medium text-gray-900">
            Gambar Produk
          </label>
          <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
            <div className="text-center">
              <svg
                className="mx-auto size-12 text-gray-300"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z"
                  clipRule="evenodd"
                />
              </svg>
              <div className="mt-4 flex text-sm text-gray-600">
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 focus-within:outline-hidden hover:text-indigo-500"
                >
                  <span>Upload a file</span>
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    accept="image/*"
                    className="sr-only"
                    onChange={handleFileChange}
                  />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs text-gray-600">PNG, JPG, GIF up to 10MB</p>
            </div>
          </div>
        </div>
        <div className="flex justify-end gap-x-6">
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

export default TambahProduk;
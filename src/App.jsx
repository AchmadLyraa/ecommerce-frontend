import React from "react";
import ProdukList from "./components/ProdukList";
import TambahProduk from "./components/TambahProduk";

function App() {
	return (
		<div className="min-h-screen bg-gray-100">
			<header className="bg-white shadow">
				<div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
					<h1 className="text-3xl font-bold text-gray-900">
						Selamat Datang di Aplikasi E-Commerce Sederhana
					</h1>
				</div>
			</header>
			<main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
				<div className="px-4 py-6 sm:px-0">
					<TambahProduk />
					<ProdukList />
				</div>
			</main>
		</div>
	);
}

export default App;
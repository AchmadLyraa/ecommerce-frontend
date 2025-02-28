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

	// Mulai edit produk
	const handleEditClick = (item) => {
		setEditingProduct(item);
	};

	// Callback dari form edit
	const handleUpdate = (updatedProduct) => {
		axios
			.put(`http://localhost:3001/produk/${updatedProduct.id}`, updatedProduct)
			.then((res) => {
				setProduk(
					produk.map((prod) =>
						prod.id === updatedProduct.id ? res.data : prod
					)
				);
				setEditingProduct(null);
			})
			.catch((err) => console.error(err));
	};

	const handleCancelEdit = () => {
		setEditingProduct(null);
	};

	return (
		<div>
			<h2>Daftar Produk</h2>
			<ul>
				{produk.map((item) => (
					<li key={item.id}>
						{item.nama} - Rp{item.harga}
						<button onClick={() => handleDelete(item.id)}>Delete</button>
						<button onClick={() => handleEditClick(item)}>Edit</button>
					</li>
				))}
			</ul>

			{/* Tampilkan form edit jika ada produk yang sedang diedit */}
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

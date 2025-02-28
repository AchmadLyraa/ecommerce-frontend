import React, { useState, useEffect } from "react";

function EditProduk({ product, onUpdate, onCancel }) {
	const [nama, setNama] = useState("");
	const [harga, setHarga] = useState("");

	useEffect(() => {
		if (product) {
			setNama(product.nama);
			setHarga(product.harga);
		}
	}, [product]);

	const handleSubmit = (e) => {
		e.preventDefault();
		const updatedProduct = { ...product, nama, harga };
		onUpdate(updatedProduct);
	};

	return (
		<div
			style={{
				position: "fixed",
				top: 0,
				left: 0,
				right: 0,
				bottom: 0,
				backgroundColor: "rgba(0,0,0,0.5)",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}>
			<div
				style={{
					background: "rgba(255, 255, 255, 0.1)",
					borderRadius: "8px",
					padding: "2rem",
					width: "90%",
					maxWidth: "400px",
					border: "1px solid rgba(255, 255, 255, 0.3)",
					backdropFilter: "blur(3px)",
					WebkitBackdropFilter: "blur(3px)",
				}}>
				<h3>Edit Produk</h3>
				<form onSubmit={handleSubmit}>
					<div>
						<label>Nama Produk: </label>
						<input
							type="text"
							value={nama}
							onChange={(e) => setNama(e.target.value)}
						/>
					</div>
					<div>
						<label>Harga: </label>
						<input
							type="number"
							value={harga}
							onChange={(e) => setHarga(e.target.value)}
						/>
					</div>
					<div style={{ marginTop: "1rem" }}>
						<button type="submit">Update</button>
						<button
							type="button"
							onClick={onCancel}
							style={{ marginLeft: "1rem" }}>
							Cancel
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default EditProduk;

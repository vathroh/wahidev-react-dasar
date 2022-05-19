import React from 'react'

const makanans = [
    {
        nama: "Bakso",
        harga : 12000
    },
    {
        nama: "Soto",
        harga : 10000
    },
    {
        nama: "Mie Ayam",
        harga : 9000
    },
    {
        nama: "Nasi Goreng",
        harga : 13000
    },
    {
        nama: "Sate Ayam",
        harga : 15000
    }
]

const total_bayar = makanans.reduce( (total_harga, makanan) => {
    return total_harga + makanan.harga;
}, 0)

export const Map = () => {
  return (
    <div>
        <h1>Map Sederhana</h1>
        <ul>
            {makanans.map( (makanan, index) => (
                <li>{index + 1}. {makanan.nama} - Harga {makanan.harga} </li>
            ))
            }
        </ul>
        <h1>Filter</h1>
        <h2>Menampilkan Makanan yang harganya sama atau lebih dari 12.000</h2>
        <ul>
            {makanans.filter( (makanan) => (makanan.harga >=12000 )).map( (makanan, index) => (
                <li>{index + 1}. {makanan.nama} - Harga {makanan.harga} </li>
            ))}
        </ul>
        <h1>Reduce</h1>
        <h2>total Harga = {total_bayar} </h2>
    </div>
  )
}

import mongoose from "mongoose"
import Product from "../model/product.model.js"
import db from "./db.js"
const mockProducts = [
    {
        name: "Wireless Mouse",
        price: 500,
        image: "https://imgs.search.brave.com/ONYx7s6B2ir3txYjmx1gu1b9L3za54a5jatRRmuQXn8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/dGhld2lyZWN1dHRl/ci5jb20vd3AtY29u/dGVudC9tZWRpYS8y/MDI1LzA5L0JFU1Qt/V0lSRUxFU1MtTU9V/U0UtOTMwMS5qcGc_/YXV0bz13ZWJwJnF1/YWxpdHk9NzUmd2lk/dGg9MTAyNA"
    },
    {
        name: "Mechanical Keyboard",
        price: 1500,
        image: "https://imgs.search.brave.com/KgJW1NxSaoycbDYR0iFXvJuqtipBdwyNwGJSs_CqX3Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jcmVk/a2V5cy5jb20vY2Ru/L3Nob3AvYXJ0aWNs/ZXMvTm9ybWFsX1By/b2ZpbGVfS2V5YmFv/cmRzLnBuZz92PTE3/MTMwMjI1NzAmd2lk/dGg9NTMz"
    },
    {
        name: "USB-C Charger",
        price: 700,
        image: "https://imgs.search.brave.com/y5eBwRy3Qv2NzVGEUAxbhkvZYpz7WD4SphWdU0FA1JY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9kZXZp/Y2VzLWNoYXJnZXIt/dXNiLXR5cGUtYy1v/dXRwdXQtc29ja2V0/LWNhYmxlLXdoaXRl/LWJhdHRlcmllcy1j/aGFyZ2luZy1wb3J0/YWJsZS1lbGVjdHJv/bmljLWFjY2Vzc29y/aWVzLTI5MTQ4MjU0/Ny5qcGc"
    },
    {
        name: "Bluetooth Headphones",
        price: 2500,
        image: "https://imgs.search.brave.com/if99yYLKGh7xwFzshMnYCI-pbt0w2KlGdH3H3lk64rQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/dGhld2lyZWN1dHRl/ci5jb20vd3AtY29u/dGVudC9tZWRpYS8y/MDIzLzA3L2JsdWV0/b290aGhlYWRwaG9u/ZXMtMjA0OHB4LTA4/ODAuanBnP2F1dG89/d2VicCZxdWFsaXR5/PTc1JndpZHRoPTEw/MjQ"
    },
    {
        name: "Gaming Monitor",
        price: 35000,
        image: "https://imgs.search.brave.com/At2bkkKEdseMcJF2CvF8FPtYidGxblJoM_L02mT6AWg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jMS5u/ZXdlZ2dpbWFnZXMu/Y29tL3Byb2R1Y3Rp/bWFnZS9uYjMwMC8y/NC0wMTItMDY0LTMx/LmpwZw"
    },
    {
        name: "External SSD 1TB",
        price: 5000,
        image: "https://imgs.search.brave.com/fqCRgo_U1Kn70yyBwwESZCR7_0BiQUkH2AiXLrLocNc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzEtOExQd3hiN0wu/anBn"
    },
    {
        name: "Laptop Stand",
        price: 900,
        image: "https://imgs.search.brave.com/2aXjTxWVVG_jwN_jHl_SVN8zphACibysW9DWHH8YEw4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjFqa1lhUFo2a0wu/anBn"
    },
    {
        name: "Desk Lamp",
        price: 1200,
        image: "https://imgs.search.brave.com/9IUIx9ZE3s3i871qPMPg-3u7-LpGIgig83skKMDGg14/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE5/OTQ0NjY0NC9waG90/by9sYW1wLWFuZC1i/b29rLW9uLXRoZS1k/ZXNrLXRvcC1zcGFj/ZS1mb3ItdGV4dC5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/SU5CSkppYU5GTzhG/WDlEZlhJTnpiVWlX/RjI4MTBoa0NuY0ZZ/a0RHZTFZZz0"
    },
    {
        name: "Smartwatch",
        price: 1799,
        image: "https://imgs.search.brave.com/kYac9Y4S1j6K62py5yd4TK3XmVNg1nPWK8DcQ2Krso8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTkw/ODE2NTYwMS9waG90/by9hLXNhbXN1bmct/ZWxlY3Ryb25pY3Mt/Y28tZ2FsYXh5LXdh/dGNoNi1zbWFydHdh/dGNoLWF0LXRoZS1z/YW1zdW5nLXN0b3Jl/LWluLXNlb3VsLXNv/dXRoLWtvcmVhLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz12/Y180RllEbG40Z2xt/eFExR080c25ZRG43/NmdtTE5TVXBjVmhv/TnloV3ZzPQ"
    },
    {
        name: "Portable Speaker",
        price:2000,
        image: "https://imgs.search.brave.com/KIY8LJ4eO2_Rz1IqgApsJLtdHKOguJhFh6wZSafx83w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/ODkwMDMwNzc5ODQt/ODk0ZTEzM2RhYmFi/P2ZtPWpwZyZxPTYw/Jnc9MzAwMCZpeGxp/Yj1yYi00LjEuMCZp/eGlkPU0zd3hNakEz/ZkRCOE1IeHpaV0Z5/WTJoOE5IeDhZbXgx/WlhSdmIzUm9KVEl3/YzNCbFlXdGxjbnhs/Ym53d2ZId3dmSHg4/TUE9PQ"
    },
];

const seedProducts = async () => {
    try {
        db()
        await Product.deleteMany(); // clear old data
        await Product.insertMany(mockProducts);
        console.log("✅ Mock products inserted!");
        mongoose.connection.close();
    } catch (error) {
        console.error("❌ Error seeding products:", error);
    }

}
seedProducts();
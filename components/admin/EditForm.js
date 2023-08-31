"use client"

import { useState } from "react"
import Boton from "../ui/Boton"
import { db } from "@/firebase/config"
import { doc, updateDoc } from "firebase/firestore"

const updateProduct = async (item, values) => {
    const docRef = doc(db, "productos", item.slug)
    return updateDoc(docRef, {
        title: values.title,
        description: values.description,
        inStock: Number(values.inStock),
        price: Number(values.price),
        type: values.type,
        image: values.image
    })
        .then(() => console.log("Producto actualizado correctamente"))
}


const EditForm = ({ item }) => {
    const { title, description, inStock, price, type, image } = item
    const [values, setValues] = useState({ title, description, inStock, price, type, image })

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        await updateProduct(item, values)
    }

    return (
        <div className="container m-auto mt-6 max-w-lg">
            <form onSubmit={handleSubmit} className="my-12">
                <label>Nombre: </label>
                <input
                    type="text"
                    value={values.title}
                    required
                    className="p-2 rounded w-full border border-blue-100 block my-4"
                    name="title"
                    onChange={handleChange}
                />

                <label>Precio: </label>
                <input
                    type="number"
                    value={values.price}
                    required
                    className="p-2 rounded w-full border border-blue-100 block my-4"
                    name="price"
                    onChange={handleChange}
                />

                <label>Stock: </label>
                <input
                    type="number"
                    value={values.inStock}
                    required
                    className="p-2 rounded w-full border border-blue-100 block my-4"
                    name="inStock"
                    onChange={handleChange}
                />

                <label>Categoria: </label>
                <input
                    type="text"
                    value={values.type}
                    required
                    className="p-2 rounded w-full border border-blue-100 block my-4"
                    name="type"
                    onChange={handleChange}
                />

                <label>Descripción: </label>
                <textarea
                    value={values.description}
                    className="resize-none w-full h-24 p-2 rounded border block border-blue-100 my-4"
                    name="description"
                    onChange={handleChange}
                />

                <Boton type="submit">Enviar</Boton>
            </form>
        </div>
    )
}

export default EditForm


// import { storage } from "@/firebase/config"
// import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
// const EditForm = ({slug}) => {
//     const [file,setFile] = useState(null)


//     const handleSend = () => {
//         const storageRef = ref(storage, slug)

//         uploadBytes(storageRef,file)
//             .then(({ref}) => {
//                 getDownloadURL(ref)
//                 .then(console.log)
//             })
//     }

//     return (
//         <div>
//             <input type="file" onChange={(e) => setFile(e.target.files[0])}/>

//             <button onClick={handleSend}>enviar</button>
//         </div>
//     )
// }

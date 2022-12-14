import React from 'react'

const UnderConstruction = () => {
    const truck = <svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
        <path d="M0 6h11l1-3h7v1h-5l-3 10h-9l-2-8zm3.995 2h-.995l1.036 4h1.057l-1.098-4zm4.186 0h-.995l1.036 4h1.057l-1.098-4zm-2.093 0h-.995l1.036 4h1.057l-1.098-4zm.483-6.791c.198-.135.443-.209.692-.209.372 0 .754.167 1 .553.851 1.337 2.207 3.447 2.207 3.447h-9.47s3.706-2.524 5.571-3.791zm4.429 17.791v.026c-.014 2.196-1.801 3.974-4 3.974-2.208 0-4-1.792-4-4 0-.729.195-1.411.536-2h-1.536v-2h9.92l3.08-10h4.279c.431 0 .813.275.949.684l1.772 5.316 1.337.668c.406.204.663.619.663 1.073v4.259c0 .553-.447 1-1 1h-1.126c.082.319.126.655.126 1 0 2.208-1.792 4-4 4s-4-1.792-4-4h-3zm-4-1.5c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5zm11 0c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5zm.99-10.5h-2.99v3h3.889l-.899-3z" />
    </svg>

    const digger = <svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M16.997 23.982h-14c-1.656 0-3-1.345-3-3 0-1.649 1.334-2.989 2.98-3h14.02c1.656 0 3 1.345 3 3s-1.344 3-3 3zm0-4c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1zm-9.423 0c-.553 0-1 .448-1 1s.447 1 1 1c.551 0 1-.448 1-1s-.449-1-1-1zm-4.577 0c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1zm9.378 0c-.552 0-1.001.448-1.001 1s.449 1 1.001 1c.552 0 1-.448 1-1s-.448-1-1-1zm4.313-3h-15.691c-.621 0-1-.523-1-1v-5c0-.621.523-1 1-1h6v-3c0-.553.447-1 1-1h3.326c.631-.828 3.21-4.214 4.289-5.6.195-.251.489-.386.789-.386.152 0 .304.034.447.105l6.71 3.365c.276.137.442.417.442.715 0 .103.053-.011-.935 3.577.227.615.513 1.407.745 2.081.119.349.187.694.187 1.025 0 1.507-1.535 2.335-2.728 2.066-1.544-.349-3.598-.91-3.598-.91l3.691-3.898.251-3.14-4.616-1.484-1.597 3.963 2.252 8.258c.173.633-.302 1.263-.964 1.263zm-14.691-2h4v-1h-4v1zm0-2h4v-1h-4v1zm11.482-5h-4.482v4h5.527l-1.045-4z" /></svg>

    const worker = <svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M2.178 11h-1.178v-2.209c.468 0 .774-.474.944-.997.587-1.803 1.59-4.513 4.056-6.212v3.418c0 .552.448 1 1 1s1-.448 1-1v-4.437c.868-.309 1.861-.516 3-.585v3.022c0 .552.448 1 1 1s1-.448 1-1v-3c1.134.094 2.128.327 3 .661v4.339c0 .552.448 1 1 1s1-.448 1-1v-3.269c2.391 1.7 3.463 4.304 4.057 6.063.175.52.475.997.943.997v2.209h-1.179c.575.459 1.179 1.36 1.179 3.131 0 1.63-.904 3.686-2.877 4.531-2.153 3.445-5.027 5.338-8.123 5.338-3.096 0-5.97-1.893-8.124-5.338-1.973-.845-2.876-2.901-2.876-4.531 0-1.771.603-2.672 1.178-3.131zm12.022 7.459h-4.4c.004.012.626 1.74 2.2 1.74 1.634 0 2.196-1.728 2.2-1.74zm4.517-7.459h-13.435l-.013.515c0 .668-.682 1.114-1.288.844-.169-.075-.43-.073-.617.049-.917.601-.819 3.864 1.425 4.629.916.313 2.364 3.103 3.93.398.542-.934 2.251-1.039 3.281-.297 1.029-.742 2.739-.637 3.28.297 1.566 2.705 3.014-.085 3.93-.398 2.244-.765 2.342-4.028 1.425-4.629-.215-.14-.487-.106-.616-.049-.606.271-1.289-.176-1.289-.844l-.013-.515zm-9.696.996c-.634 0-1.146.62-1.146 1.385s.512 1.385 1.146 1.385c.632 0 1.146-.62 1.146-1.385s-.514-1.385-1.146-1.385zm7.104 1.385c0 .765-.513 1.385-1.146 1.385-.633 0-1.146-.62-1.146-1.385s.513-1.385 1.146-1.385c.633 0 1.146.62 1.146 1.385z" /></svg>

    return (
        <div className="min-h-[calc(100vh-248px)] ">
            <h1 className="font-black uppercase text-center text-4xl m-4">Under Construction</h1>
            <div className="flex justify-center">
                <div className="fill-primary ">
                    <div className="flex gap-1">
                        <div className={`w-fit  move-counter`}>
                            {worker}
                        </div>
                    </div>
                    <div className="flex gap-1">
                        <div className={`w-fit  move`}>
                            {truck}
                        </div>
                    </div>
                    <div className="flex">
                        <div className={`w-fit move-counter`}>
                            {digger}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UnderConstruction
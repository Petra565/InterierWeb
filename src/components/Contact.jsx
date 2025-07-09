function Contact() {
    return (
        <>

            <div className="contactContainer relative w-full grid-cols-10 justify-center">
                <img className="mx-auto mt-6 h-32 w-32 rounded-full sm:h-auto sm:w-40 xl:w-52"
                    src="../../images/logo.jpg" />
                <div className=" mx-auto mt-[10%] grid grid-cols-12 bg-black/50 p-4 text-white sm:w-[75%] sm:rounded-xl sm:border-1 sm:border-white sm:p-6 md:mt-8 md:w-[80%] md:text-xl lg:w-[70%] lg:p-10 lg:text-2xl lg:leading-8 xl:w-[65%]">
                    <h1 className="col-span-full mb-4 flex items-center justify-center text-justify text-lg md:text-lg lg:mb-4 lg:text-2xl">Sídlime v Trnave a pôsobíme v rámci západného Slovenska. V prípade záujmu nás kontaktujte telefonicky každý deň od 8:00 do 19:00 alebo prostredníctvom emailu:</h1>
                    <ul className="menuPersonal col-span-full grid grid-cols-1 items-center gap-4 sm:grid-cols-2">
                        <li className="flex w-full justify-center">
                            <a href="tel:+421907420253" target="_blank" className="flex items-center justify-center gap-2 whitespace-nowrap hover:text-[#BCB3AB]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                                </svg>
                                <span>+421 907 420 253</span></a>
                        </li>
                        <li className="flex w-full justify-center">
                            <a href="mailto:simoncicinterier@gmail.com" target="_blank" className=" flex items-center justify-center gap-2 hover:text-[#BCB3AB]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16">
                                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
                                </svg>
                                <span>simoncicinterier@gmail.com</span></a>
                        </li>
                    </ul>
                    <h1 className="col-span-full row-span-1 mt-8 mb-4 flex items-center justify-center text-lg md:text-xl lg:mt-4 lg:mb-4 lg:text-2xl">Nájdete nás aj na sociálnych sieťach:</h1>
                    <ul className="menuSocial col-span-full grid grid-cols-1 items-center gap-4 sm:grid-cols-2">
                        <li className="flex w-full justify-center">
                            <a href="https://www.instagram.com/simoncicinterier" target="_blank" className="flex items-center justify-center gap-2 hover:text-[#BCB3AB]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                                </svg>
                                <span>simoncicinterier</span>
                            </a>
                        </li>

                        <li className="flex w-full justify-center">
                            <a href="https://www.facebook.com/simoncicINTERIER" target="_blank" className="flex items-center justify-center gap-2 hover:text-[#BCB3AB]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                                </svg>
                                <span>Šimončič-INTERIER</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Contact
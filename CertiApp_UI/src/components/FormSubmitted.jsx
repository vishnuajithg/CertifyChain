import React from 'react'

const FormSubmitted = () => {
  return (
    <>
      <div className="flex justify-center items-center  h-[83vh]">
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Certificate has been issued successfully</h1>
      <p className="mb-6">You can view your certificate in the home page.</p>
      <a href="/" className="bg-[#A04747] hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
        Go to Home
      </a>
    </div>
  </div>
    </>
  )
}

export default FormSubmitted
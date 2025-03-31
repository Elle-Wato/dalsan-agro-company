import React from 'react';

const customerBase = [
    { id: 1, title: "Smallholder Farmers", description: "Affordable and accessible inputs to improve productivity and livelihoods." },
    { id: 2, title: "Commercial Farmers", description: "High-quality products and advanced technology solutions for large-scale farming." },
    { id: 3, title: "Agribusiness", description: "Reliable supply of agricultural inputs and services for processors and distributors." },
    { id: 4, title: "Government and NGOs", description: "Collaboration on agricultural projects and sustainable farming initiatives." },
    { id: 5, title: "Cooperatives & Farmer Associations", description: "Competitive pricing and access to quality products for their members." }
];

const Clients = () => {
    return (
        <div className="mt-8 bg-gray-100 py-8">
            <section data-aos="fade-up">
                <div className="my-4">
                    <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">Our Customer Base</h2>
                    <div className='flex justify-center'>
                        <div className='w-24 border-b-4 border-blue-900'></div>
                    </div>
                    <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-blue-900">
                        We cater to a diverse range of customers.
                    </h2>
                </div>

                <div className="px-8 py-6">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {customerBase.map((customer) => (
                            <div key={customer.id} className="bg-white shadow-xl p-6 rounded-lg text-gray-700 hover:shadow-2xl transition-all ease-in-out duration-300">
                                <h4 className="text-lg md:text-2xl font-semibold text-center text-blue-900 mb-2">
                                    {customer.title}
                                </h4>
                                <p className="text-md font-medium text-center">
                                    {customer.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Clients;

import { Helmet } from 'react-helmet';
import { Link, useLoaderData, useParams } from 'react-router-dom';

const ResidentialDetails = () => {
    const { id } = useParams();
    const book = useLoaderData();
    const idInt = parseInt(id);
    const bk = book.find((bk) => bk.id === idInt);

    return (
        <div className="container mx-auto py-8">
        <Helmet>
            <title> Axis | {bk.segment_name} </title>
            </Helmet>
            <div className="max-w-7xl mx-auto shadow-lg">
                <img src={bk.image} alt={bk.estate_title} className="w-full h-full object-cover" />
                <div className="p-6">
                    <h2 className="text-3xl font-semibold">{bk.estate_title}</h2>
                    <p className="text-sm text-gray-500">{bk.description}</p>
                    <div className="flex justify-between items-center mt-4">
                        <div>
                            <p><strong>Location:</strong> {bk.location}</p>
                            <p><strong>Area:</strong> {bk.area}</p>
                        </div>
                        <div>
                            <p><strong>Price:</strong> {bk.price}</p>
                            <p><strong>Status:</strong> {bk.status}</p>
                        </div>
                    </div>
                    <div className="mt-4">
                        <p><strong>Segment Name:</strong> {bk.segment_name}</p>
                        <p><strong>Build Date:</strong> {bk.build}</p>
                    </div>
                    <hr className="my-4" />
                    <div>
                        <p className="text-lg font-semibold">Facilities:</p>
                        <ul className="list-disc ml-6">
                            {bk.facilities.map((facility, index) => (
                                <li key={index}>{facility}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="bg-gray-100 p-6">
                    <h3 className="text-xl font-semibold mb-4">Additional Information:</h3>
                    <p>Discover more about this propertys unique features, amenities, and lifestyle offerings. Gain insights into what makes this residence an exceptional choice for your next home. Explore additional details to envision your ideal living experience.</p>
                </div>
                <div className="text-center mt-8 mb-6">
                <Link to='/contact'><button className="bg-[#2f400e] hover:bg-[#2f400e] mb-6 text-white font-bold py-2 px-4 rounded">
                        Contact Agent
                    </button></Link>
                    
                </div>
            </div>
        </div>
    );
};

export default ResidentialDetails;

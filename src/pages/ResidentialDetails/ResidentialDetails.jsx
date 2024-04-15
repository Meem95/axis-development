
import { useParams } from 'react-router-dom';

const ResidentialDetails = () => {
 
    const { id } = useParams();
    // const property = {
    //     estate_title, facilities, image, description, id, segment_name, area, price ,status, build, location
    //   };
   // console.log(property);
    return (
        <div className="container mx-auto py-8">
        <div className="max-w-7xl mx-auto shadow-lg">
        {/* <img src={property.image} alt={property.estate_title} className="w-full h-48 object-cover" /> */}
        <div className="p-6">
          <h2 className="text-xl font-semibold"></h2>
          <p className="text-sm text-gray-500"></p>
          <p className="text-lg font-bold mt-4"></p>
          <p className="text-sm text-gray-500"></p>
          <hr className="my-4" />
          <p className="text-sm"></p>
          <div className="flex justify-between items-center mt-4">
            <div>
              <p><strong>Area:</strong></p>
              <p><strong>Location:</strong> </p>
            </div>
            <div>
              <p><strong>Facilities:</strong></p>
              {/* <ul>
                {property.facilities.map((facility, index) => (
                  <li key={index}>{facility}</li>
                ))}
              </ul> */}
            </div>
          </div>
        </div>
        </div>
      </div>
    );
  };

export default ResidentialDetails;
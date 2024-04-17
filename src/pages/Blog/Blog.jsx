
import { Helmet } from 'react-helmet';
import { useLoaderData } from 'react-router-dom';

const Blog = () => {

  const blogData = useLoaderData();
  return (
    <div  className="min-h-screen max-w-7xl mx-auto my-8" >
    <Helmet>
   <title> Axis | Blog</title>
   </Helmet>
    <div className="px-8 py-2 bg-[#1313130D] text-black mb-10">
        <div className="py-2 font-bold text-center text-2xl animate__animated animate__bounce">
          <span>Blogs</span>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-3">
        {blogData.map(blog => (
          <div key={blog.id} className="border border-gray-200 rounded-lg overflow-hidden" data-aos="zoom-in" data-aos-duration="1500">
            <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
              <p className="text-gray-600">{blog.description}</p>
              <a href="#" className="text-blue-500 mt-2 inline-block">Read More</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;

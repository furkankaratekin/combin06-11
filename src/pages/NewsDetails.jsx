import { useParams, Link } from "react-router-dom";
import data from "../components/News/NewsData";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const NewsDetails = () => {
  let { id } = useParams();
  const product = data.find((product) => String(product.id) === id);

  const otherNews = data.filter((item) => item.id !== product.id);

  return (
    <>
      <Navbar />
      <section key={id} className="details-section">
        <div key={id} className="container-news grid grid-cols-12 gap-4 mt-8">
          <div className="md:col-span-8 xsm:col-span-12 pl-8">
            <div className="p-4">
              <h2 className="text-4xl font-bold mb-6">{product.title}</h2>
              <img src={product.image} alt={product.title} />
              <p className="text-xl mt-6">{product.description}</p>
            </div>
          </div>
          <div className="right-content md:col-span-4 xsm:col-span-12 pl-8">
            <div className="p-4">
              <h3 className="mb-4 text-xl font-semibold">Diğer Haberler</h3>
              {otherNews.map((item) => (
                <div key={item.id} className="mb-4 flex items-center">
                  <Link to={`/news/${item.id}`}>
                    <img
                      className="w-full h-auto"
                      src={item.image}
                      alt={item.title}
                    />
                  </Link>

                  <p className="ml-8 mt-2 font-medium">
                    <Link to={`/news/${item.id}`}>{item.title}</Link>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default NewsDetails;

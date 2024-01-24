const About = () => {
  return (
    <div className="my-12">
      <h2 className="text-5xl text-center font-bold my-12">About Us</h2>
      <div className="flex gap-24 p-4">
        <div>
          <h3 className="text-4xl py-4 font-bold">About Sonexa</h3>
         <div className="flex gap-4">
         <button className="  my-2 px-8 btn-success btn btn-outline">contact us</button>
          <button className="my-2 px-8 btn-info btn btn-outline">Leadership</button>
         </div>
        </div>
        <div className="flex-wrap w-3/4">
          <p>
            Sonexa began as sonexa Web Enterprises in 2011 with a mission to build
            easy-to-use yet powerful cloud-based applications for organizations
            worldwide. Our team is passionate about delivering consistently
            amazing user experiences with best-in-class functionality and
            enterprise scalability. sonexaO’s products help thousands of
            organizations around the globe streamline operations in many key
            areas, including physical asset management with sonexaOfficeInventory,
            IT asset management with sonexaO AssetSonar, equipment maintenance
            management with sonexaO CMMS and rental business management with
            sonexaRentOut.{" "}
          </p>
          <br />

          <p>
            Amazon, Intel, CNN, NASA, Harvard University, Buzzfeed, CNN, Intel,
            IBM and thousands of other organizations use our products to improve
            profitability and simplify their operations. Our solutions are in
            service across a wide range of industries, including healthcare,
            construction, education, government, equipment rental,
            manufacturing, and transportation. EZO is based in Nevada, with
            offices in San Francisco, Boston, Austin, and Lahore.
          </p>
        </div>
      </div>
      <div className="flex  p-4 mt-12 gap-12">
        <div className="w-1/2">
            <h3 className="text-3xl py-3">The Role of Asset Intelligence and Management in Digital Transformation</h3>
            <p>Across all types of business and public-service organizations, digital transformation offers dramatic improvements to any team’s ability to achieve its strategic goals. Every facet of business operations presents an opportunity to leverage digitalization to increase efficiency, team communications, and cross-departmental insights. As a result, we see many specialized software solutions that address almost every critical business areas – from optimizing sales velocity to improving help desk response, from software application performance optimization to ecommerce profitability growth, and so much more.  </p>
        </div>
        <div className="w-1/2">
            <img className="rounded-full lg:w-full" src="https://i.ibb.co/TLvQW2Z/5features-it-management-1200x600.webp" alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;

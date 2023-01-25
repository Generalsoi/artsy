import React from "react";

export const ArtMarketplace = ({ products }) => {
  return (
    <>
      {products ? (
        <div className="md:flex items-start flex-wrap justify-evenly gap-10 w-[100%] p-4 md:px-10 font-satoshi">
          {products.map((product, index) => (
            <div
              key={index}
              className="md:w-[24%] h-80 md:h-[25rem] p-4 mb-6 rounded-xl cursor-pointer hover:scale-[1.04] transition-all duration-500"
              style={{ boxShadow: "0px 34px 68px rgba(217, 225, 244, 0.36)" }}
            >
              <img
                src={product?.url}
                alt={product?.name}
                className="h-60 md:h-72 w-full rounded-xl object-cover"
              />
              <span className="h-16 md:h-fit flex md:block items-center justify-between">
                <p className="uppercase md:mt-2">{product?.name}</p>
                <h3 className="font-extrabold md:text-xl md:mt-4">{`$${product.price.usd}`}</h3>
              </span>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <p>Loading....</p>
        </div>
      )}
    </>
  );
};

import React from "react";

export const TopCreators = () => {
  return (
    <div className="bg-[#E2E2E2]">
      <div className="w-full px-4 py-6 md:px-20 md:py-20">
        <div className="flex items-start justify-between">
          <span>
            <h1 className="md:text-6xl font-clashdisplay">
              TOP CREATORS OF <br /> THE WEEK
            </h1>
          </span>
          <span className="flex items-start gap-8">
            <span className="h-24 md:h-64 w-2 border-none rounded-lg border-black bg-[#AEAEAE] relative">
              <span className="h-8 md:h-10 w-2 border-none rounded-lg bg-black absolute left-0 bottom-0 "></span>
            </span>
            <ul className="h-64 md:flex md:flex-col justify-between items-start">
              <li className="md:text-3xl font-clashdisplay">Editorials</li>
              <li className="md:text-3xl font-clashdisplay">Fashion</li>
              <li className="md:text-3xl font-clashdisplay">Lifestyle</li>
              <li className="md:text-3xl font-clashdisplay">Blueprint</li>
            </ul>
          </span>
        </div>
        <span>
          <p className="mt-10 md:text-4xl font-clashdisplay font-extralight">
            “Everything always looked better in black and white. Everything
            always as if it were the first time; there’s always more people in a
            black and white photograph. It just makes it seem that there were
            more people at a gig, more people at a football match, than with
            colour photography. Everything looks more exciting.”– Jack Lowden
          </p>
        </span>
        <span>
          <h1>1985</h1>
        </span>
      </div>
    </div>
  );
};

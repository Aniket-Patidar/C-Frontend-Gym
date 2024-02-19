import React from "react";

const Programs = () => {
  return (
    <div className="flex items-center   justify-center min-h-[89vh] px-[20px] py-[20px]">
      <div className="flex flex-col justify-between max-w-screen-xl w-full items-center bg-[#18191B]">
        <p className="text-[30px] font-thin uppercase">What We Do</p>
        <div>
          <div className="flex items-center gap-2   my-[25px]">
            <div className="w-[30vw] h-[1px] bg-[#dadada8f]"></div>
            <div className="w-[7px] h-[7px] bg-[#DCB800] border-none rounded-full"></div>
            <div className="w-[30vw] h-[1px] bg-[#dadada8f]"></div>
          </div>
        </div>

        <div className="flex w-full items-center justify-between flex-col lg:flex-row gap-[10px] lg:gap-0 md:px-2">
      
          <div className="lg:w-[380px] w-fit flex flex-col gap-[10px]">
            <p>
              <span className="text-[#FAB207]">RESIDENTIAL</span> DESIGN
            </p>

            <p className="text-[10px] font-extralight md:text-[13px]">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia
            </p>

            <img
              src="/images/s1.jpg"
              className="w-full h-[200px] object-cover object-center"
              alt=""
            />
          </div>

          <div className="lg:w-[380px] w-fit flex flex-col  gap-[10px]">
            <p>
              {" "}
              <span className="text-[#FAB207]">RESIDENTIAL</span> DESIGN
            </p>
            <p className="text-[13px]">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia
            </p>
            <img
              src="/images/s2.jpg"
              className="w-full h-[200px] object-cover object-center"
              alt=""
            />
          </div>

          <div className="lg:w-[380px] w-fit flex flex-col  gap-[10px]">
            <p>
              {" "}
              <span className="text-[#FAB207]">RESIDENTIAL</span> DESIGN
            </p>
            <p className="text-[13px]">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia
            </p>
            <img
              src="/images/s3.jpg"
              className="w-full h-[200px] object-cover object-center"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;

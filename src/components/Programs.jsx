import React from "react";

const Programs = () => {
  return (
    <div className="flex flex-col justify-evenly items-center bg-[#18191B]">
      <p className="text-[30px] font-thin  ">What We Do</p>
      <div>
        <div className="flex items-center gap-2 ">
          <div className="w-[35vw] h-[1px] bg-[#dadada]"></div>
          <div className="w-[10px] h-[10px] bg-[#DCB800] border-none rounded-full"></div>
          <div className="w-[35vw] h-[1px] bg-[#dadada]"></div>
        </div>
      </div>

      <div className="flex gap-[30px] mt-3">
        <div className="w-[350px] flex flex-col gap-3">
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
            src="/images/s1.jpg"
            className="w-full h-[200px] object-cover object-center"
            alt=""
          />
        </div>

        <div className="w-[350px] flex flex-col gap-3">
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

        <div className="w-[350px] flex flex-col gap-3">
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
  );
};

export default Programs;

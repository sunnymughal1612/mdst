function HomeImage() {
  return (
    <div className="flex flex-col lg:flex-row pl-[7%] pr-[7%] mt-10 gap-4 items-start">
      {/* First Image */}
      <img
        src="/images/1.webp"
        alt="image1"
        className="
          w-full
          md:w-[70%]
          lg:w-[60%]
          h-100
        "
      />

      {/* Second Image */}
      <img
        src="/images/2.jpg"
        alt="image2"
        className="
          w-[70%]
          mx-auto
          md:w-[40%]
          lg:w-[30%]
          h-100
        "
      />
    </div>
  );
}

export default HomeImage;
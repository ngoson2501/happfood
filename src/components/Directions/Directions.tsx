





// import Steps from "./Steps";

// const Directions = ({ directions, videoLink }: { directions: any, videoLink: any }) => {
//   return (
//     <div className="w-full py-4 px-[0px] lg:px-0">
//       <p className="pb-4 text-[20px] lg:text-[30px] font-Inter font-[600]">
//         Directions
//       </p>
//       <div>


//       </div>
//       <Steps directions={directions}></Steps>
//     </div>
//   );
// };

// export default Directions;



import Steps from "./Steps";

const Directions = ({
  directions,
  videoLink,
}: {
  directions: any;
  videoLink: string | null;
}) => {
  // Kiểm tra URL videoLink
  const getEmbedURL = (link: string) => {
    try {
      // Chuyển đổi URL từ dạng "watch?v=" thành "embed/" cho YouTube
      const url = new URL(link);
      if (url.hostname.includes("youtube.com") && url.searchParams.has("v")) {
        return `https://www.youtube.com/embed/${url.searchParams.get("v")}`;
      } else if (url.hostname.includes("youtu.be")) {
        return `https://www.youtube.com/embed${url.pathname}`;
      }
      return link; // Giữ nguyên nếu không phải YouTube
    } catch (error) {
      console.error("Invalid video link:", link);
      return null;
    }
  };

  const embedURL = videoLink ? getEmbedURL(videoLink) : null;

  return (
    <div className="w-full py-4 px-[0px] lg:px-0">
      <p className="pb-4 text-[20px] lg:text-[30px] font-Inter font-[600]">
        Directions
      </p>
      <div>
        {embedURL && (
          <div className="mb-4 aspect-video">
            <iframe
              className="w-full h-full"
              src={embedURL}
              title="Video Tutorial"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div>
      <Steps directions={directions}></Steps>
    </div>
  );
};

export default Directions;

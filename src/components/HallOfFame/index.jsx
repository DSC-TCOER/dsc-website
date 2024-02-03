import PhotoAlbum from "react-photo-album";

// width: 1080, height: 780
// width: 1080, height: 162
// width: 1080, height: 720
// width: 1080, height: 721
// width: 1080, height: 162
// width: 1080, height: 607
// width: 1080, height: 608
// width: 1080, height: 720
// width: 1080, height: 154
// width: 1080, height: 720
// width: 1080, height: 694
// width: 1080, height: 162
// width: 1080, height: 720
// width: 1080, height: 144
// width: 1080, height: 162
// width: 1080, height: 810
// width: 1080, height: 162
// width: 1080, height: 160
// width: 1080, height: 810
// width: 1080, height: 720
// width: 1080, height: 144

const photos = [
  {
    src: "./images/hallOfFame/saba-new-lead.jpeg",
    width: 1080,
    height: 1090,
  },
  {
    src: "./images/hallOfFame/gaurang_gsoc.webp",
    width: 1080,
    height: 1090,
  },
  {
    src: "./images/hallOfFame/dsc-news.jpg",
    width: 1080,
    height: 800,
  },
  {
    src: "./images/hallOfFame/impact_pos_1.webp",
    width: 1080,
    height: 607,
  },
  {
    src: "./images/hallOfFame/impact1.webp",
    width: 1080,
    height: 720,
  },
  {
    src: "./images/hallOfFame/impact_pos_2.webp",
    width: 1080,
    height: 607,
  },
  {
    src: "./images/hallOfFame/impact2.jpg",
    width: 1080,
    height: 720,
  },
  {
    src: "./images/hallOfFame/impact_pos_3.webp",
    width: 1080,
    height: 607,
  },
  {
    src: "./images/hallOfFame/impact3.jpg",
    width: 1080,
    height: 720,
  },
  {
    src: "./images/hallOfFame/impact4.jpg",
    width: 1240,
    height: 800,
  },
  {
    src: "./images/hallOfFame/impact5.jpg",
    width: 1240,
    height: 760,
  },
  {
    src: "./images/hallOfFame/flutter1.jpg",
    width: 1080,
    height: 840,
  },
  {
    src: "./images/hallOfFame/flutter2.jpg",
    width: 1080,
    height: 1200,
  },
  {
    src: "./images/hallOfFame/flutter3.jpg",
    width: 1080,
    height: 720,
  },
  {
    src: "./images/hallOfFame/flutter4.jpg",
    width: 1080,
    height: 1200,
  },
  {
    src: "./images/hallOfFame/flutter5.jpg",
    width: 1080,
    height: 720,
  },
  {
    src: "./images/hallOfFame/flutter6.jpg",
    width: 1080,
    height: 1200,
  },
  {
    src: "./images/hallOfFame/flutter7.jpg",
    width: 1080,
    height: 810,
  },
  {
    src: "./images/hallOfFame/flutter8.jpg",
    width: 1080,
    height: 1200,
  },
  {
    src: "./images/hallOfFame/flutter9.jpg",
    width: 1080,
    height: 840,
  },
  {
    src: "./images/hallOfFame/flutter10.jpg",
    width: 1080,
    height: 1200,
  },
  {
    src: "./images/hallOfFame/flutter11.jpg",
    width: 1080,
    height: 840,
  },
  {
    src: "./images/hallOfFame/flutter12.jpg",
    width: 1240,
    height: 800,
  },
  {
    src: "./images/hallOfFame/cloud1.jpg",
    width: 1080,
    height: 610,
  },
  {
    src: "./images/hallOfFame/cloud2.jpg",
    width: 1080,
    height: 610,
  },
  {
    src: "./images/hallOfFame/cloud3.jpg",
    width: 1080,
    height: 610,
  },
  {
    src: "./images/hallOfFame/cloud4.jpg",
    width: 1080,
    height: 610,
  },
  {
    src: "./images/hallOfFame/cloud5.jpg",
    width: 1080,
    height: 610,
  },
];

const HallOfFame = () => {
  return (
    <div style={{ width: "90%", margin: "auto", marginBottom: "3rem" }}>
      <h1 className="w-full text-center text-4xl font-bold font-mono text-blue-700 px-4 pb-1 mb-2 border-b-2 border-b-red-700">Hall of Fame</h1>
      <PhotoAlbum
        layout="rows"
        photos={photos}
        imageProps={{ loading: "lazy" }}
      />
    </div>
  );
};

export default HallOfFame;

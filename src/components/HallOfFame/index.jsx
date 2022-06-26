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
    src: "./images/hallOfFame/gaurang_gsoc.webp",
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
    src: "./images/hallOfFame/impact2.webp",
    width: 1080,
    height: 720,
  },
  {
    src: "./images/hallOfFame/impact_pos_3.webp",
    width: 1080,
    height: 607,
  },
  {
    src: "./images/hallOfFame/impact3.webp",
    width: 1080,
    height: 720,
  },
  {
    src: "./images/hallOfFame/impact4.webp",
    width: 1240,
    height: 800,
  },
  {
    src: "./images/hallOfFame/flutter1.webp",
    width: 1080,
    height: 840,
  },
  {
    src: "./images/hallOfFame/flutter2.jpg",
    width: 1080,
    height: 1200,
  },
  {
    src: "./images/hallOfFame/flutter3.webp",
    width: 1080,
    height: 720,
  },
  {
    src: "./images/hallOfFame/flutter4.png",
    width: 1080,
    height: 1200,
  },
  {
    src: "./images/hallOfFame/flutter5.webp",
    width: 1080,
    height: 720,
  },
  {
    src: "./images/hallOfFame/flutter6.png",
    width: 1080,
    height: 1200,
  },
  {
    src: "./images/hallOfFame/flutter7.webp",
    width: 1080,
    height: 810,
  },
  {
    src: "./images/hallOfFame/flutter8.png",
    width: 1080,
    height: 1380,
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
      <PhotoAlbum
        layout="rows"
        photos={photos}
        imageProps={{ className: "TM" }}
      />
    </div>
  );
};

export default HallOfFame;

export async function GET() {
  const data = [
    {
      id: 1,
      name: "Standard Twin Room",
      rate: 3200,
      image: "images/img1.png",
    },
    {
      id: 2,
      name: "Standard Room",
      rate: 2200,
      image: "images/img2.png",
    },
    {
      id: 3,
      name: "Standard View Room",
      rate: 1270,
      image: "images/img3.png",
    },
    {
      id: 4,
      name: "Deluxe Room",
      rate: 5500,
      image: "images/img4.png",
    },
  ];

  return Response.json({ data });
}
